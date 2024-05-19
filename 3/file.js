var product = {
    name: "T Shirt",
    price: 1500,
    color: "black",
    inventory: {
        stock: 100,
        colorOptions: ["Grey", "Red"],
    },
    changeColor: function (newColor) {
        if (newColor === "Red") {
            product.price = product.price + (product.price * 10 / 100);
        }
        else if (newColor === "Grey") {
            product.price = product.price + (product.price * 5 / 100);
        }
        else if (newColor === "black") {
            product.price = product.price;
        }
        return newColor;
    }
};
console.log(product);
product.changeColor("black");
console.log("The of black color T Shirt is: ".concat(product.price, " "));
product.changeColor("Red");
console.log("The price of Red Color T Shirt is:  ".concat(product.price, " "));
product.changeColor("Grey");
console.log("The Price of Grey  Color T Shirt is: ".concat(product.price, " "));
