class ProductManager {

    constructor() {
        this.products = []
    }

    getProductId = () => {
        const amount = this.products.length;
        const productId = (amount > 0) ? this.products[amount - 1].id + 1 : 1;
        return productId;
    }

    getProducts = () => {
        return this.products
    }

    getProductById = (productId) => {
        const productFound = this.products.find(element => element.id == productId)
        if (productFound) {
            console.log("The product is: ", productFound.title);
        } else {
            console.log("Not found");
        }
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        if (this.products.some(p => p.code == code)) return

        const product = {
            id: this.getProductId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(product)
    }

}


const product = new ProductManager()
console.log(product.getProducts());
product.addProduct("Producto 1", "Este es el Producto 1", 10, "image", "code1", 10)
product.addProduct("Producto 2", "Este es el Producto 2", 10, "image", "code2", 10)
product.addProduct("Producto 3", "Este es el Producto 3", 10, "image", "code3", 10)
product.addProduct("Producto 4", "Este es el Producto 4", 10, "image", "code4", 10)
product.addProduct("Producto 5", "Este es el Producto 5", 10, "image", "code5", 10)

product.getProductById(1)

console.log(product.getProducts());