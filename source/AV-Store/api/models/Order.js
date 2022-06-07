const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: { type: String },
                quantity: { type: Number, default: 1},
                size: { type: String }
            }
        ],
        amount: { type: Number, required: true },
        address: { type: String, required: true },
        note: { type: String },
        payment: { type: String },
        status: { type: String, default: "Chờ xác nhận"}
    }, 
    { timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema);
