const productList = require('./productList');

module.exports = {
    getAllProducts() {
        return productList;
    },

    searchProduct(search) {
        let product = { message: 'Product Not Found' };

        productList.find((value) => {
            if (value.title == search) {
                product = value;
            }
        })

        return product;
    }
}
