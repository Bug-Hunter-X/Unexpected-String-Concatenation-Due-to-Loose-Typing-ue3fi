function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return 'Invalid input types';
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Invalid input types

//Alternative solution using Number() for conversion
function foo2(a, b) {
    return Number(a) + Number(b);
}
console.log(foo2(1, '2')); //Output: 3
console.log(foo2('1',2)); //Output: 3