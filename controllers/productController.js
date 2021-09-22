const products = require("../information/products")

exports.getProject = async(req, res) =>{
    const container = products.products.filter(item => item.name === req.params.name)
    res.json({...container[0]})
}