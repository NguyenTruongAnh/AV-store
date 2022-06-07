const Order = require('../models/Order');
const { formatResponse } = require('../utils/response');

class OrderController {
    // UPDATE
    update (req, res) {
        Order.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(() => res.json(formatResponse(0,`${req.body.status} thành công`)))
            .catch(() => res.json(formatResponse(4,`${req.body.status} thất bại`)))
    }
    // CREATE
    create (req, res) {
        req.body.userId = req.user.id
        const order = new Order(req.body);
        order.save()
                .then(() => res.json(formatResponse(0, 'Đặt hàng thành công')))
                .catch(() => res.json(formatResponse(4,'Đặt hàng thất bại')))
    }

    // GET BY USERID
    async getOrdersByUserId(req, res) {
        try {
            const orders = await Order.find({ userId: req.params.userId })
            res.json(orders)
        } catch(err) {
            res.json(formatResponse(4, 'Lấy dữ liệu thất bại!'))
        }
    }

    // GET ONE
    getOrderById (req, res) {
        Order.findById(req.params.id)
            .then((order) => {
                res.json(order)
            })
            .catch((err) => {
                console.log(err)
                res.json(formatResponse(4, 'Lấy dữ liệu thất bại!'))
            })
    }

    // GET ALL
    async getAll (req, res) {
        const qStatus = req.query.status
        try {
            let orders
            if(qStatus) {
                orders = await Order.find({ status: qStatus }).sort({ createdAt: -1 })
            } else {
                orders = await Order.find({}).sort({ createdAt: -1 })
            }
            res.json(orders)
        } catch (err) {
            res.json(formatResponse(4, 'Lấy dữ liệu thất bại!'))
        }
    }
}

module.exports = new OrderController()