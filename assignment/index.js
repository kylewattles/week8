class Actor {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    //defining class of Actor along with constructor with parameters

    describe() {
       return `${this.name} plays ${this.role}`;
    }
    //uses describe method to return info using template literals
}

class Movie {
    constructor(name) {
        this.name = name;
        this.actors = [];
    }
//defining class of Movie with a constructer that holds the name value and an empty array for actors 

    addActor(actor) {
       if (actor instanceof Actor) {
        this.actors.push(actor);
       } else {
        throw new Error(`You can only add an instance of actor. Argument is not an actor: ${actor}`)
       }
       //used addActor method to first check to see if the input a user entered is valid (actor) if it is it adds it to the actors array

    }
    describe() {
        return `${this.name} has ${this.actors.length} actors.`;
    }
    //used describe method to return the name of a movie and the ammount of actors array

}
class Menu {
    constructor() {
        this.movies = [];
        this.selectedMovie = null
        //defined Menu class with a constructor that uses an empty array for movies and a selected movie which will have its value passed to it later in the code
    }

    start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
        switch (selection) {
            case "1":
              this.createMovie();
              break;
            case "2":
              this.viewMovie();
              break;
            case "3":
              this.deleteMovie();
              break;
            case "4":
              this.displayMovies();
              break;
            default:
                selection = 0;
            }
            //created main menu with 5 options

            selection = this.showMainMenuOptions();
        }
        alert("Go on now git!");
        //created alert for if user exits the menu

    }
    showMainMenuOptions() {
        return prompt(`
           0) exit
           1) create new Movie
           2) view movie
           3) delete movie
           4) display all Movies
            `);
    }
    //created prompt to show visual representation of main menu

    showMovieMenuOptions (movieInfo) {
        return prompt(`
           0) back
           1) create actor
           2) delete actor
           ------------------
           ${movieInfo}
            `);
    }
    //created prompt to show visual representation of menu for movie options

    displayMovies() {
        let movieString = "";
        for (let i = 0; i < this.movies.length; i++) {
            movieString += i + ") " + this.movies[i].name + "\n";
        }
        alert(movieString);
    }
    //uses a for loop to iterate through the movies array display all the movies in the array

    createMovie() {
        let name = prompt("enter name for new movie:");
        this.movies.push(new Movie(name));
    }
    //created a fucntion that allows you to enter a name to create a movie by pushing the user input into the movies array

    viewMovie() {
       let index = prompt("Enter the index of the movie you wish to view");
       if (index > -1 && index < this.movies.length) {
         this.selectedMovie = this.movies[index];
         //checks to make sure the user input is a valid choice within the movies array by making sure it is within the range of the array

         let description = "Movie Name: " + this.selectedMovie.name + "\n";
         //asigns description to mean the name of the movie and the name of the actor

         for (let i = 0; i < this.selectedMovie.actors.length; i++) {
            if (this.selectedMovie.actors[i]) {
            description += i + ") " + this.selectedMovie.actors[i].name + " - " + this.selectedMovie.actors[i].role + "\n";
            }
            //iterates through and checks to make sure the input is valid and if it is, displays the name of the movie, the actors and the actors roles
         }

         let selection = this.showMovieMenuOptions(description);
         switch (selection) {
            case "1":
                this.createActor();
                break;
            case "2":
                this.deleteActor();
         }
         //creates a funtion that uses a switch statement to delete or create an actor

        }
       }
    deleteMovie() {
     let index = prompt("Enter the index of the movie you wish to delete:" );
     if (index > -1 && index < this.movies.length) {
        console.log(this.movies);
         this.movies.splice(index,1);
         //created a method that checks if an input is valid in an array and if it is uses .splice to remove an item from the stated index in the movies array
     }
    }

    createActor() {
        let name = prompt("Enter name for new actor");
        let role = prompt("Enter role for new actor");
        this.selectedMovie.actors.push(new Actor(name, role));
    }
    //uses. push to allow a user to add a name for an actor and a role for an actor to the actors array

    deleteActor() {
       let index = prompt("Enter the index of the actor you wish to delete");
       if (index > -1 && index < this.selectedMovie.actors.length) {
        this.selectedMovie.actors.splice(index, 1);
       }
       //checks to see that the input is valid in the array and then uses .splice to remove the item at the stated index from the actors array
    }
}
let menu = new Menu();
//defines menu as an instance of Menu

menu.start();
//invokes the demon that is my menu