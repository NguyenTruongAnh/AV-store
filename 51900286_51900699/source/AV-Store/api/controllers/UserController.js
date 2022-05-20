const bcrypt = require('bcrypt')
const User = require('../models/User');
const Cart = require('../models/Cart');
const { formatResponse } = require('../utils/response');
const jwt = require('jsonwebtoken')

class UserController {
    // PUT UPDATE INFO
    async updateInfo (req, res) {
        req.body.avatar = "http://localhost:5000/images/"+ req.date + req.file.originalname
        User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(() => res.json(formatResponse(0,'Cập nhật tài khoản thành công',req.body.avatar)))
            .catch(() => res.json(formatResponse(4,'Cập nhật tài khoản thất bại')))
    }

    // PUT CHANGE PASSWORD
    async changePassword (req, res) {
        let { password, newPassword } = req.body
        const salt = await bcrypt.genSalt(10);
        newPassword = await bcrypt.hash(newPassword, salt);
        const user = await User.findById({_id: req.params.id})
        const comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) {
            return res.json(formatResponse(1,'Mật khẩu cũ không chính xác.'))
        } else {
            User.findByIdAndUpdate({_id: req.params.id}, { password: newPassword }, {new: true})
                .then(() => res.json(formatResponse(0,'Đổi mật khẩu thành công')))
                .catch(() => res.json(formatResponse(4,'Đổi mật khẩu thất bại')))
        }
    }
    
    // POST REGISTER
    async register (req, res) {
        const { username, email, password } = req.body
    
        let oldUser = await User.findOne({ username });
        if(oldUser) {
            return res.json(formatResponse(1,'Tên tài khoản này đã được sử dụng.'))
        }
    
        oldUser = await User.findOne({ email });
        if(oldUser) {
            return res.json(formatResponse(1,'Email này đã được sử dụng.'))
        }
    
        const salt = bcrypt.genSaltSync(10)
        const password_hash = bcrypt.hashSync(password, salt)
        req.body.password = password_hash
        const user = new User(req.body);
        const cart = new Cart({ userId: user._id })
        cart.save()
            .catch(() => res.json(formatResponse(4,'Đăng ký tài khoản thất bại')))
            
        user.save()
            .then(() => res.status(201).json(formatResponse(0, 'Đăng ký tài khoản thành công')))
            .catch(() => {
                return res.json(formatResponse(4,'Đăng ký tài khoản thất bại'))
            })
        
    }

    // POST LOGIN
    async login (req, res) {
        const { username, password } = req.body
        User.findOne({ username })
            .then(async (user) => {
                if(user) {
                    const comparePassword = bcrypt.compareSync(password, user.password)
                    if(comparePassword) {
                        const accessToken = jwt.sign({id : user._id, isAdmin: user.isAdmin},
                            process.env.JWT_SEC, {
                            expiresIn: '3d'
                        })
                        const { password, ...others } = user._doc
                        const cart = await Cart.findOne({ userId: others._id })
                        return res.json(formatResponse(0,'Đăng nhập thành công.', { others, accessToken, cart}))
                    }
                    return res.json(formatResponse(1,'Tên tài khoản hoặc mật khẩu không chính xác.'))
                } else {
                    return res.json(formatResponse(1,'Tên tài khoản hoặc mật khẩu không chính xác.'))
                }
            })
            .catch(() => res.json(formatResponse(4,'Tên tài khoản hoặc mật khẩu không chính xác.')))
    }

    // GET ONE
    getUserById (req, res) {
        User.findById(req.params.id)
            .then((user) => {
                res.json(user)
            })
            .catch((err) => {
                res.json(formatResponse(4, 'Lấy dữ liệu thất bại!'))
            })
    }
}

module.exports = new UserController()