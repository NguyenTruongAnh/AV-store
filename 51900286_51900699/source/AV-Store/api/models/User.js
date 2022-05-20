const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
        avatar: { type: String, default: "http://localhost:5000/images/default.png" },
        birthday: { type: String },
        gender: { type: String },
        isAdmin: { type: Boolean, default: false },
    }, 
    { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema);
