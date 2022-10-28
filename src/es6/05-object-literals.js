//enahced object literals
function newUser(user, age, country,uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser('TonyCC',25,'COL',1143871658));