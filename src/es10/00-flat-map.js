//flat
const array = [1,2,3,4,5, [9,8,7,6, [10,20,30]]];

console.log(array.flat(3));

//FlatMap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2]));