/*practicing with jamal*/

const pasta = {
    name: "cacio e pepe",
    cuisine: "italian",
    color: "white",
    delicious: true
   }

   const mypasta = {
    ...pasta,
    difficulty: "easy"
   }

   console.log(mypasta)

/*another practice with jamal*/
   const greet = (name,callback) => {

    return "Hello " + callback(name);
  };
  
  const lowerCaseName = (name) => {
    return name.toLowerCase();
  };
  
  const upperCaseName = (name) => {
      return name.toUpperCase();
  }
  
  const greeting = greet("Tim", lowerCaseName);
  console.log(greeting); // Hello tim

/*example from michael*/
  // Parent class
class Vehicle {
  constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
  }

  start() {
      console.log(`${this.brand} ${this.model} is starting...`);
  }

  stop() {
      console.log(`${this.brand} ${this.model} is stopping...`);
  }
}

// Child class 1: Car
class Car extends Vehicle {
  constructor(brand, model, year, doors) {
      super(brand, model, year); // Call parent constructor
      this.doors = doors; // Add specific property
  }

  honk() {
      console.log(`${this.brand} ${this.model} is honking: Beep Beep!`);
  }

  // Overriding a parent method
  start() {
      console.log(`The car ${this.brand} ${this.model} is ready to go!`);
  }
}

// Child class 2: Motorcycle
class Motorcycle extends Vehicle {
  constructor(brand, model, year, type) {
      super(brand, model, year); // Call parent constructor
      this.type = type; // Add specific property
  }

  wheelie() {
      console.log(`${this.brand} ${this.model} is doing a wheelie!`);
  }
}

// Create instances and use the methods
const myCar = new Car("Toyota", "Corolla", 2022, 4);
myCar.start(); // Calls overridden method
myCar.honk();  // Specific to Car
myCar.stop();  // Inherited from Vehicle
console.log(`${myCar.brand} has ${myCar.doors} doors.`);

const myMotorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2023, "Cruiser");
myMotorcycle.start(); // Inherited method
myMotorcycle.wheelie(); // Specific to Motorcycle
myMotorcycle.stop(); // Inherited method
console.log(`${myMotorcycle.brand} is a ${myMotorcycle.type} motorcycle.`);







