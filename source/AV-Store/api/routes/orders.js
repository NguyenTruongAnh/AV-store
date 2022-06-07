const router = require('express').Router();
const OrderController = require('../controllers/OrderController')
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('../utils/verify');
const { formatResponse } = require('../utils/response');
const { body, validationResult } = require('express-validator')

// UPDATE
router.put('/:id', verifyTokenAndAdmin, 
                body('status').notEmpty().withMessage('Vui lòng chọn tình trạng đơn hàng.'),
                OrderController.update
)

// CREATE
router.post("/", verifyToken, 
            body('address').notEmpty().withMessage('Vui lòng nhập địa chỉ giao hàng.'),
            body('payment').notEmpty().withMessage('Vui lòng chọn hình thức thanh toán.'),
            (req, res, next) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.json(formatResponse(1, errors.array()[0].msg))
                }
                next()
            },
            OrderController.create
)

// GET USER ORDERS
router.get("/find/:userId", OrderController.getOrdersByUserId)

// GET
router.get("/:id", OrderController.getOrderById)

// GET ALL
router.get("/", OrderController.getAll)

module.exports = router;
