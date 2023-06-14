let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Printing all Even numbers:");
for (let i = 0; i < array.length; ++i) {
  if (array[i] % 2 === 0) {
    console.log(array[i]);
  }
}

console.log("Printing all Prime numbers:");
for (let i = 0; i < array.length; ++i) {
  if (isPrime(array[i])) {
    console.log(array[i]);
  }
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
