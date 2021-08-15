const file = require('fs');
const path = require('path');
// path.dirname(process.mainModule.filename) was pervious command however mainModule is now deprecated
const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const helper = (cb) => {

    file.readFile(p, (err, fileData) => {
        if (err) { cb([]); }
        else { cb(JSON.parse(fileData)); }
    });
};

module.exports = class Product {

    constructor(name, imgUrl, Description, price) {
        this.name = name.toUpperCase();
        this.imgUrl = imgUrl;
        this.Description = Description;
        this.price = price;
        this.ID = Math.floor((Math.random() * 100) + 1).toString();
    }

    save() {

        helper((prod) => {
            prod.push(this);
            file.writeFileSync(p, JSON.stringify(prod));
        });
    }

    static fetchAll(cb) {
        helper(cb);
    }

    static fetchID(id, cb) {
        helper(products => {
            const prod = products.find(p => id === p.ID);
            cb(prod);
        });
    }
};