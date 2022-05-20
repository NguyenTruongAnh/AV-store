const router = require('express').Router();
const UserController = require('../controllers/UserController')
const { verifyTokenAndAuth } = require('../utils/verify')
const { body, validationResult } = require('express-validator')
const { formatResponse } = require('../utils/response')
const multer = require('multer');
let date
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        date = Date.now()
        cb(null, date + file.originalname)
    }
});

const upload = multer({ storage: storage })

// UPDATE
router.put('/:id', verifyTokenAndAuth, upload.single("avatar"),
            body('name').notEmpty().withMessage('Vui lòng nhập tên của bạn.'),
            body('phone').notEmpty().withMessage('Vui lòng nhập SĐT của bạn.'),
            body('birthday').notEmpty().withMessage('Vui lòng nhập ngày sinh của bạn.'),
            body('gender').notEmpty().withMessage('Vui lòng chọn giới tính của của bạn.'),
            (req, res, next) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.json(formatResponse(1, errors.array()[0].msg))
                }
                req.date = date
                next()
            },
            UserController.updateInfo)

router.put('/password/:id', verifyTokenAndAuth,
            body('password').notEmpty().withMessage('Vui lòng nhập mật khẩu cũ.'),
            body('newPassword').notEmpty().withMessage('Vui lòng nhập mật khẩu mới.')
            .isLength( { min: 6}).withMessage('Vui lòng nhập mật khẩu ít nhất 6 ký tự'),
            body('confirmPassword').notEmpty().withMessage('Vui lòng nhập xác thực mật khẩu.')
            .custom((value, { req }) => {
                if(value !== req.body.newPassword) 
                    throw new Error('Vui lòng nhập xác thực mật khẩu giống với mật khẩu.')
                return true
            }),
            (req, res, next) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.json(formatResponse(1, errors.array()[0].msg))
                }
                next()
            },
            UserController.changePassword)
router.get('/:id', UserController.getUserById)
module.exports = router;
