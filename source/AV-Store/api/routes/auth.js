const router = require('express').Router();
const { body, validationResult } = require('express-validator')
const UserController = require('../controllers/UserController')
const { formatResponse } = require('../utils/response');
// REGISTER
router.post('/register',
            body('name').notEmpty().withMessage('Vui lòng nhập tên của bạn.'),
            body('username').notEmpty().withMessage('Vui lòng nhập tên tài khoản.')
            .isLength( { min: 6 }).withMessage('Vui lòng nhập tên tài khoản ít nhất 6 ký tự'),
            body('email').notEmpty().withMessage('Vui lòng nhập email của bạn.')
            .isEmail().withMessage('Vui lòng nhập đúng email hợp lệ.'),
            body('phone').notEmpty().withMessage('Vui lòng nhập SĐT của bạn.'),
            body('password').notEmpty().withMessage('Vui lòng nhập mật khẩu.')
            .isLength( { min: 6}).withMessage('Vui lòng nhập mật khẩu ít nhất 6 ký tự'),
            body('confirmPassword').notEmpty().withMessage('Vui lòng nhập xác thực mật khẩu.')
            .custom((value, { req }) => {
                if(value !== req.body.password) 
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
            UserController.register)

// LOGIN
router.post('/login', 
            body('username').notEmpty().withMessage('Vui lòng nhập tên tài khoản.')
            .isLength( { min: 6 }).withMessage('Vui lòng nhập tên tài khoản ít nhất 6 ký tự'),
            body('password').notEmpty().withMessage('Vui lòng nhập mật khẩu.')
            .isLength( { min: 6 }).withMessage('Vui lòng nhập mật khẩu ít nhất 6 ký tự'),
            (req, res, next) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.json(formatResponse(1, errors.array()[0].msg))
                }
                next()
            },
            UserController.login)

module.exports = router;
