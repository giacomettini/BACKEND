class ProductManager {
    #products;

    constructor() {
        this.#products = [];
    }

    getProducts = () => {
        return this.#products;
    };


    createProductId = () => {
        const index = this.#products.length;
        const id = index > 0 ? index + 1 : 1;
        return id;
    };


    searchProdcutCode = (productCode) => {
        const productsCopy = [...this.#products];
        const productSearched = productsCopy.some(
            (product) => product.code === productCode
        );
        return productSearched;
    };

    validateInputs = ({
        title,
        description,
        price,
        thumnail,
        code,
        stock
    }) => {
        return (
            title.trim().length > 0 &&
            description.trim().length > 0 &&
            thumnail.trim().length > 0 &&
            code.trim().length > 0 &&
            price.toString().trim().length > 0 &&
            stock.toString().trim().length > 0 &&
            price > 0 &&
            stock > 0
        );
    };


    getProductById = (productId) => {
        const productsCopy = [...this.#products];
        const productSearched = productsCopy.find(
            (product) => product.id === productId
        );
        productSearched
            ?
            console.log(productSearched) :
            console.error(`Product: ${productId} NOT FOUND`);
    };


    addProduct = (title, description, price, thumnail, code, stock) => {
        const newProduct = {
            id: this.createProductId(),
            title,
            description,
            price,
            thumnail,
            code,
            stock,
        };
        if (this.searchProdcutCode(newProduct.code)) {
            console.error(`Product ${newProduct.code} is already in the DB`);
            return;
        }
        if (!this.validateInputs({
                ...newProduct
            })) {
            console.error("Fill all the inputs to continue");
        } else {
            this.#products.push(newProduct);
            console.log(
                `Product: ${newProduct.title} has succesfully been added to the DB`
            );
        }
    };
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