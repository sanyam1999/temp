const Product = require('../models/product');

exports.Add_Products = (_req, res, _next) => {
    res.render('admin/add_product', { docTitle: 'Add Products' });
}

exports.adminProd = (_req, res) => {

    Product.fetchAll((products) => {
        res.render('admin/admin_prod', { docTitle: 'Admin Products', product: products });
    });
}

exports.Use_Product = (req, res, _next) => {
    //READING DATA SUBMITTED IN FORM AND THEN REDIRECTING TO HOME PAGE
    const name = req.body.name;
    const imgUrl = req.body.imgUrl;
    const Description = req.body.Description;
    const price = req.body.price;
    const prod = new Product(name, imgUrl, Description, price);
    prod.save();  // THIS METHOD CALL SAVES THE ENTERED PRODUCT TO THE PRODUCTS ARRAY INSIDE PRODUCT.JSON
    res.redirect('/');
}
