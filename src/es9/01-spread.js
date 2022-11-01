const user={username:'Tony',age:25, country: 'COL'};
const {username, ...values}=user;
console.log(username);
console.log(values);