//Promesas
const anotherFuncion = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Hey!!');
        }else{
            reject ('Upss');
        }
    })
}
anotherFuncion()
    .then(Response =>console.log(Response))
    .catch(err=> console.log(err));