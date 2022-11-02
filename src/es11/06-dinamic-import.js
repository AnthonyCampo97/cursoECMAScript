const button = document.getElementById('btn');

button.addEventListener("click",async function () { //Agrega un avento al boton, crea una funciona anonima
    const module = await import ('./module.js'); //importa funcion desde otro script alojado en el directorio raiz
    console.log(module);
    module.hello();
})