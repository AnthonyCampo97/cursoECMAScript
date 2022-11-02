const regex = /\b(apple)+\b/g;
const fruit = 'peras,banana, aranadanos,apple, etc,etc2';

for (const match of fruit.matchAll(regex)){ //Metodo para encontrar una cadena especifica 
    console.log(match);
}
