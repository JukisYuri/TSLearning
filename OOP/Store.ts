class Product{
    private readonly _id: number
    private readonly _name: String
    private readonly _price: number

    constructor(id: number, name: String, price: number) {
        this._id = id;
        this._name = name;
        this._price = price;
    }

    get id(): number {
        return this._id;
    }

    get name(): String {
        return this._name;
    }

    get price(): number {
        return this._price;
    }
}

class Order{
    private readonly _products: Product[]

    constructor(products: Product[]) {
        this._products = products;
    }

    get products(): Product[] {
        return this._products;
    }

    addProduct(product: Product[]): void{
        this._products.push(...product)
    }

    getTotalPrice(): number{
        let result: number = 0;
        for (const product of this._products) {
            result += product.price
        }
        return result;
    }

    findProductByName(name: string): Product | undefined{
        let result: Product = null;
        for (const product of this._products) {
            if(product.name === name){
                result = product
            }
        }
        return result
    }
}

let order = new Order([])
let product1: Product = new Product(12, "Jukis Yuri", 25000)
let product2: Product = new Product(14, "Pilos Jukis", 30000)
order.addProduct([product1, product2])
console.log(order)
console.log(order.getTotalPrice())
console.log(order.findProductByName("Jukis Yuri"))