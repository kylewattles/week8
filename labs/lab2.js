
/*create class with student info and names*/
class Student {
    constructor(firstName, lastName, phoneNumber, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    } 
    /* introduce using template literals in the console log*/
    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber} regarding their grade: ${this.grade}`);
        
    }
}
/*creatib=ng case samples to be passed in*/
let student1 = new Student("Kyle", "Wattles", "805-805-8055", "A");
let student2 = new Student("Gabriella", "Hart", "123-456-7890", "A")
/*calling the function*/
student1.introduce();
student2.introduce();
class bear {
    constructor(color, size, region, danger){
        this.color = color;
        this.size = size;
        this.region = region;
        this.danger= danger;
    }
    bearTraits(){
        console.log(`color: ${this.color} size: ${this.size} region: ${this.region} danger: ${this.danger}`);
        
    }
}
let panda = new bear("black and white", "medium", "China", "relatively low");
let polarBear = new bear("white", "huge", "arctic", "very high");
panda.bearTraits();
polarBear.bearTraits();
/*how can i make this into a function that will take in the descriptions of the bears and give me what type of bear it is? would it use if statements?*/
class notificationSender {
    constructor(status) {
        this.status = status;
    }
    sendNotification(notification) {
        console.log("sending: " + notification);
     }
     findUserWithStatus(status) {
       let user = getUser(status)
         return users;
     }
}
class promotionSender extends notificationSender{
    constructor(status){
        super(status);
    }
    
    calculateDiscount(status) {
        if (status === "GOLD") {
            return .30;
        } else if (status === "SILVER") {
            return .15;
        }
        return 0;
    }
}
class CollectionsSender extends notificationSender {
    constructor(status){
        super(status);
    }
    calculatedFee(status) {
        if (status === "OVERDUE") {
            return 10;
        }else if (status === "DELINQUENT"){
            return 25;
        }
        return 5;
    }
}
let collectionsSender = new CollectionsSender("OVERDUE");
collectionsSender.sendNotification("this is a test collections notification");
/*introduction to handling errors*/
try{
List.push("hello");
} catch(err) {
console.log(err);
}
console.log("goodbye");
/*menu app*/
class Player {
    constructor(name, position) {
       this.name = name;
       this.position = position; 
    }
    describe() {
        return `${this.name} plays ${this.position}`
    }
}
class team {
   constructor(name) {
    this.name = name;
    this.players = [];
   } 
addPlayer(player) {
    if(player instanceof Player) {
        this.players.push(player);
    } else {
        throw new Error(`you can only add an instance of a player. Arguement is not a player: ${Player}`)
    }
  }
  describe() {
    return `${this.name} has ${this.players.length} players.`
  }
}
class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        /*show menu options and user will make a selection*/
        while (selection != 0) {
            /*determining what the user selected of the aptions available*/
            switch (selection) {
              case "1":
                this.createTeam();
                break;
              case "2":
                this.viewTeam();
                break;
              case "3":
                this.deleteTeam();
                break;
              case "4":
                this.displayTeams();
                break;
              default:
                selection = 0;        
            }
           selection = this.showMainMenuOptions(); 
        }
    /*added alert with prompts to make selctions in the menu*/
        alert("Goodbye!");
    }
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new team
            2) view team
            3) delete team
            4) display all teams
            `);
    }
    showTeamMenuOptions(teamInfo) {
        return prompt(`
            0) back
            1) create player
            2) delete player
            ----------------------
            ${teamInfo}
            `);
    }
   displayTeams() {
    let teamString = " ";
    for (let i = 0; i < this.teams.length; i++){
        teamString += i + ") " + this.teams[i].name + "\n";
    }
    alert(teamString);
   }
   createTeam() {
    let name = prompt("Enter a name for your new team.")
    this.teams.push(new team(name));
   }
   viewTeam() {
    let index = prompt("Enter the index of the team you wish to view");
    if (index > -1 && index < this.teams.length) {
       this.selectedTeam = this.teams[index];
       let description = "Team Name: " + this.selectedTeam.name + "\n";
       
       for (let i = 0; i < this.selectedTeam.players.length; i++) {
        description += i + ") " + this.selectedTeam.players[i].name + " - " + this.selectedTeam.players[i].position + "\n"
      }
      let selection = this.showTeamMenuOptions(description);
      switch (selection) {
        case "1":
            this.createPlayer();
            break;
        case "2":
            this.deletePlayer();
      }
    }
  }
  createPlayer() {
    let name = prompt("Enter name for new player.");
    let position = prompt("enter position for new player");
    this.selectedTeam.players.push(new player(name, position));
  }
  deletePlayer() {
    let index = prompt("enter thge index of the player you wish to delete: ");
    if (index > -1 && index < this.selectedTeam.players.length) {
        this.selectedTeam.players.splice(index, 1);
    }
  }
}
let menu = new Menu();
menu.start();