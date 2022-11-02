// function hello(){
//     console.log('Funcion de saludar !!')
// }
try {
    hello();
}catch(error) {
    console.log(error);
}

//Manejo del Catch. Se puede personalizar el error
try {
    anotherFn();
}catch{
    console.log('Entro al error');
}