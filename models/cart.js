const fs = require('fs');

const path = require('path');
const p = path.join(path.dirname(require.main.filename), 'data', 'cart.json');

module.exports = class cart {
    static add(id, product_price) {

        fs.readFile(p, (err, content) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(content);
            }

            const existingProduct = cart.products.find(prod => prod.id === id);
            if(existingProduct){
                
            }
            else {

            }
            fs.writeFile(p, JSON.stringify());
        });
    }
}