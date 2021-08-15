const express = require('express');
const routes = express.Router();

const adminProd = require("../controllers/administrator");

routes.get('/add-prod', adminProd.Add_Products);
routes.get('/products',adminProd.adminProd);
routes.post('/prod', adminProd.Use_Product);

module.exports = routes;