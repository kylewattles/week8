const  numbers = [
"1",
"2",
"3",
]

function forEach(array,callback){
    for(let i=0; i<array.length; i++){
        callback(array[i],i,array);
    }
}
function displayNumber(value,callback,index){
    console.log(value);    
}

forEach(numbers,displayNumber)

numbers.forEach((number) => {
    console.log(number);
    
})

const strikes = [
    "PUNCH",
    "KICK",
    "ELBOW",
    "KNEE"
]
const LowerCaseStrikes = (strikes) => {
    return strikes.toLowerCase();
}
const newStrikes = strikes.map(LowerCaseStrikes)
    console.log(newStrikes);
    

    class Car {
        constructor(brand,model,year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        renderBrand(){
            console.log(`Brand: ${this.brand} model: ${this.model} year: ${this.year}`);
            
        }
        honkHonk(){
            console.log("honk honk");
            
        }

        getBrand(){
            return this.brand;
        }
    }

    class ElectricCar extends Car {
        constructor(brand, model, year, batteryCapacity) {
            super(brand, model, year);
            this.battery = batteryCapacity;
        }
    }

    const honda = new Car("Honda", "Civic", 2020, "full");
        honda.honkHonk();
        honda.renderBrand();
        const lexus = new Car("Lexus", "RX", 2021);
        lexus.renderBrand();
        const tesla = new ElectricCar("Tesla", "Model S", 2021, "100kwh");
        tesla.renderBrand();