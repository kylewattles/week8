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