const express = require('express');
const shopData = require('../controllers/Shop_control');

const routes = express.Router();

routes.get('/',shopData.Home);
routes.get('/cart',shopData.Cart);
routes.post('/cart',shopData.add_to_cart)
routes.get('/products/:ProdID',shopData.getProduct);
routes.use(shopData.error);

module.exports = routes;