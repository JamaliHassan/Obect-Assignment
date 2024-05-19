type Product = {
    name: string
    price:number 
    color: string
    inventory: {
        stock: number
        colorOptions?:string []
       
    },
    changeColor: (newColor: string) => {}
}
let product:Product = {

    name: "T Shirt",
    price: 1500, 
    color: "black",
    inventory: {
        stock: 100,
        colorOptions: ["Grey", "Red"],
        },
        changeColor(newColor:string) {
            if (newColor === "Red") {
                product.price = product.price + (product.price * 10 / 100)
            }else if (newColor === "Grey") {
                product.price = product.price + (product.price * 5 / 100)
            }else if(newColor === "black") {
                product.price = product.price
            }
            return newColor
        }
       
    }

    console.log(product);

product.changeColor("black")
console.log(`The of black color T Shirt is: ${product.price} `);

product.changeColor("Red")
console.log(`The price of Red Color T Shirt is:  ${product.price} `);

product.changeColor("Grey")
console.log(`The Price of Grey  Color T Shirt is: ${product.price} `)


