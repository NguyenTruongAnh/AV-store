const router = require('express').Router();
const CartController = require('../controllers/CartController')
const { verifyToken } = require('../utils/verify');

// UPDATE CART
router.put('/', verifyToken, CartController.update)

module.exports = router;
