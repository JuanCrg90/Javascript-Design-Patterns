function sum() {
  var x = 0;
  for(var i = 0; i < arguments.length; i++) {
    x += arguments[i];
  }
  return x;
}

console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1,2,3,4,5));
