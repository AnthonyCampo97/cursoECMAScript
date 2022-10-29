//Declarando
//class User {};
//Instancia de una clase
//const newUser = new User();
class user {
    //metodos
    greeting(){
        return 'hello';
    }
};
const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());


//Constructor 
class user {
    //Constructor
    constructor(){
        console.log('Nuevo usuario')
    } 
    greeting(){
        return 'hello';
    }
}
const david = new user();

//this
class user {
    constructor(name){
        this.name=name;
    }
    //metodos
    speak(){
        return 'hello';
    }
    greeting(){
        return  `${this.speak()} ${this.name}`;
    }
}
const ana = new user ('ana');
console.log(ana.greeting());

//setters & getters

class user {
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
    get uAge(){ //consultar parametro de contructor
        return this.age;
    }
    set uAge(n){ //Editar parametro de constructor
        this.age=n;
    }
    speak(){
        return 'hello 🖐';
    }
    greeting(){
        return  `${this.speak()} ${this.name} ${"Edad: "+this.age}`;
    }
}
const bebeloper2 = new user ('David',16);
console.log(bebeloper2.uAge);
console.log(bebeloper2.uAge = 18);
console.log(bebeloper2.greeting());