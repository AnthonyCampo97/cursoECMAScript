class user {
    //constructor
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
    //metodos
    #speak(){
        return 'hello 🖐';
    }
    greeting(){
        return  `${this.speak()} ${this.name} ${"Edad: "+this.age}`;
    }
    get #uAge(){ //consultar parametro de contructor
        return this.age;
    }
    set #uAge(n){ //Editar parametro de constructor
        this.age=n;
    }
}
const bebeloper2 = new user ('David',16);
console.log(bebeloper2.uAge);
console.log(bebeloper2.uAge = 18);
console.log(bebeloper2.greeting());