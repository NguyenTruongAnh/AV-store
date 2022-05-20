const router = require('express').Router();
const ProductController = require('../controllers/ProductController')
const { body, validationResult } = require('express-validator')
const { verifyTokenAndAdmin } = require('../utils/verify');
const { formatResponse } = require('../utils/response');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage })
// UPDATE
router.put('/:id', verifyTokenAndAdmin, upload.single("image"),
            body('name').notEmpty().withMessage('Vui lòng nhập tên sản phẩm.'),
            body('desc').notEmpty().withMessage('Vui lòng nhập mô tả sản phẩm.'),
            body('price').notEmpty().withMessage('Vui lòng nhập giá bán.'),
            body('category').notEmpty().withMessage('Vui lòng chọn loại sản phẩm.'),
            body('color').notEmpty().withMessage('Vui lòng nhập màu sản phẩm.'),
            body('size').isLength({ min: 1}).withMessage('Vui lòng chọn kích thước sản phẩm.'),
            body('status').notEmpty().withMessage('Vui lòng chọn tình trạng sản phẩm.'),
            (req, res, next) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.json(formatResponse(1, errors.array()[0].msg))
                }
                next()
            },
            
            ProductController.update)

// DELETE
router.delete('/:id', verifyTokenAndAdmin, ProductController.delete)

// CREATE
router.post("/", verifyTokenAndAdmin, upload.single("image"), 
            body('name').notEmpty().withMessage('Vui lòng nhập tên sản phẩm.'),
            body('desc').notEmpty().withMessage('Vui lòng nhập mô tả sản phẩm.'),
            body('price').notEmpty().withMessage('Vui lòng nhập giá bán.'),
            body('category').notEmpty().withMessage('Vui lòng chọn loại sản phẩm.'),
            body('color').notEmpty().withMessage('Vui lòng nhập màu sản phẩm.'),
            body('size').isLength({ min: 1}).withMessage('Vui lòng chọn kích thước sản phẩm.'),
            (req, res, next) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.json(formatResponse(1, errors.array()[0].msg))
                }
                next()
            },
            ProductController.create)

// GET
router.get("/:id", ProductController.getProductById)

// GET ALL
router.get("/",ProductController.getAll)

module.exports = router;
