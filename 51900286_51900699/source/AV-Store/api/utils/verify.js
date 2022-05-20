const jwt = require('jsonwebtoken')
const { formatResponse } = require('./response')
const verifyToken = (req, res, next) => {
    const authorizationHeader = req.headers['authorization']
    // 'Beaer [token]'
    if(!authorizationHeader) 
       return res.json(formatResponse(2,'Vui lòng đăng nhập tài khoản.'))
       
    const token = authorizationHeader.split(' ')[1]
    if(!token) 
       return res.json(formatResponse(2,'Vui lòng đăng nhập tài khoản.'))
    
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
        if(err) 
            return res.json(formatResponse(2,'Token không chính xác!'))
        req.user = user
        next()    
    })
}

const verifyTokenAndAuth = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.json(formatResponse(3,'Bạn không có quyền truy cập!'))
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin) {
            next()
        } else {
            res.json(formatResponse(3,'Bạn không có quyền truy cập!'))
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin }