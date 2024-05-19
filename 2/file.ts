type Car = {
  model: string;
  manufacturer: string;
  engine: {
    horsePower: number;
  };
  getHorsePower: () => number;
};

let car: Car = {
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
