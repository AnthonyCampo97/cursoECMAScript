//Funcion con datos defaul manera clasica
function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 34;
    var country=country|| 'COL';
    console.log(name,age,country);
}
newUser();
newUser('Pedro',15,'VEN');

//Version ECMAScript actual

function newAdmin (name='oscar',age=32,country='COL'){
    console.log(name,age,country);
}
newAdmin();
newAdmin('lisa',19,'MEX');