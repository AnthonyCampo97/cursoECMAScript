//Arrays destructuring
let fruits = ['apple', 'banana'];
let [a,b]=fruits;
console.log(a,b);

//object destructuring
let user={username:'pedro', age:25};
let {username,age}=user;
console.log(username,age);

//spread operator
let person = {name:'luis', age:29};
let country ='COL';

let data = {id:2563,...person, country};
console.log(data);

//rest
function sum(num,...values){
    console.log(values);
    console.log(num + values[0]);
    return num+values[0];
}
sum(1,25,69,58,96,3214);

//Ejemplo practico
export function solution(
    json1 = {
      name: "Mr. Michi",
      food: "Pescado",
    },
    json2 = {
      age: 12,
      color: "Blanco",
    }
  ) {
    return {
      ...json1,
      ...json2,
    };
  }
  solution();