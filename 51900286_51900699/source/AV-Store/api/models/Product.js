const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        desc: { type: String, required: true },
        img: { type: String, required: true },
        category: { type: String, required: true },
        size: { type: [String] },
        color: { type: String },
        price: { type: Number, required: true },
        status: { type: String, default: 'Còn hàng' },
    }, 
    { timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema);
