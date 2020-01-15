const Product = require('../Models/Product');

exports.Index = function (req, res) {
    res.json({
        alamin: 'asdf'
    });
};
exports.Create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};