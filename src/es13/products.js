import fetch from "node-fetch"; //npm install node-fetch
//Consulta informacion de una API
const response = await fetch('https://api.escuelajs.co/api/v1/products');
//convierte los valores de consulta a formato JSON
const products = await response.json();

//Exporta informacion de la consulta en formato JSON. 
export {products};