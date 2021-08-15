const Product = require('../models/product');

exports.Home = (_req, res) => {

    Product.fetchAll((products) => {
        res.render('shop/Prod_list', { product: products, docTitle: "Welcome" });
    });
}

exports.getProduct = (req, res) => {

    const prodID = req.params.ProdID;
    Product.fetchID(prodID, product => {
        res.render('shop/product_details', { product: product, docTitle: product.name + " Details" });
    });
}

exports.Cart = (_req, res) => {
    res.render('shop/cart', { docTitle: "Cart" });
}

exports.add_to_cart = (req,res)=>{
    const id = req.body.productID;
    console.log(id);
    res.redirect('/cart');
}

exports.error = (_req, res) => { res.status(404).render('shop/error'); }
