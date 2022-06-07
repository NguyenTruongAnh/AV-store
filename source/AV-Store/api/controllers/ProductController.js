const Product = require('../models/Product');
const { formatResponse } = require('../utils/response');

class ProductController {
    // UPDATE
    update (req, res) {
        req.body.size = JSON.parse(req.body.size)
        req.body.img = "http://localhost:5000/images/" + req.file.originalname
        Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(() => res.json(formatResponse(0,'Chỉnh sửa thông tin sản phẩm thành công')))
            .catch(() => res.json(formatResponse(4,'Chỉnh sửa thông tin sản phẩm thất bại')))
    }

    // DELETE
    delete (req, res) {
        Product.deleteOne({ _id: req.params.id })
                .then(() => res.json(formatResponse(0,'Xóa thành công')))
                .catch(() => res.json(formatResponse(4,'Xóa thất bại')))
    }
    // CREATE
    create (req, res) {
        req.body.size = JSON.parse(req.body.size)
        req.body.img = "http://localhost:5000/images/" + req.file.originalname
        const product = new Product(req.body);
        product.save()
                .then(() => res.json(formatResponse(0, 'Thêm sản phẩm thành công')))
                .catch(() => res.json(formatResponse(4,'Thêm sản phẩm thất bại')))
    }

    // GET ONE
    getProductById (req, res) {
        Product.findById(req.params.id)
            .then((product) => {
                res.json(product)
            })
            .catch((err) => {
                res.json(formatResponse(4, 'Lấy dữ liệu thất bại!'))
            })
    }

    // GET ALL
    async getAll (req, res) {
        const start = req.query.start ? parseInt(req.query.start) : 0
        const category = req.query.category
        try {
            let products
            if(category) {
                products = await Product.find({category}).sort({ createdAt: -1 }).skip(start).limit(8)
            } else {
                products = await Product.find({})
            }
            res.json(products)
        } catch (err) {
            res.json(formatResponse(4, 'Lấy dữ liệu thất bại!'))
        }
    }
}

module.exports = new ProductController()