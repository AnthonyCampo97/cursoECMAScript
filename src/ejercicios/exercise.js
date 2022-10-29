import { getData } from "./api.js";

export function solution() {
  return getData().then(movies => movies);
}
var list = solution();
console.log(list);
