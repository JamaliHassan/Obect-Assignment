"use strict";
let car = {
    model: "GTR",
    manufacturer: "Nissan",
    engine: {
        horsePower: 550, //stock
    },
    getHorsePower: () => {
        return car.engine.horsePower;
    },
};
console.log(car);
console.log(car.getHorsePower());
