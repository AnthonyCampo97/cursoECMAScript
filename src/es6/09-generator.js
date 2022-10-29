//Genedador * lo diferencia
function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['oscar','eliana','Victoria','gerardo']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
//Al continuar consultado salen valores indefinidos ya que no existen esa... 
//...Posiciones en el Array


function* getId(){
    let lastId = 1;
  while (true) {
    yield lastId++;
  }
}
const id = getId();
console.log(id.next().value); //1
console.log(id.next().value); //2
console.log(id.next().value); //3
console.log(id.next().value); //4
console.log(id.next().value); //5
