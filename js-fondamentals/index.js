// Reverses a given string
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  // Counts the number of characters in a string
  function countCharacters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      count++;
    }
    return count;
  }
  
  // Capitalizes the first letter of each word in a sentence
  function capitalizeWords(str) {
    let result = "";
    let capitalizeNext = true;
    
    for (let i = 0; i < str.length; i++) {
      if (capitalizeNext && str[i] !== " ") {
        result += str[i].toUpperCase();
        capitalizeNext = false;
      } else {
        result += str[i];
      }
      if (str[i] === " ") capitalizeNext = true;
    }
    
    return result;
  }
// Finds the maximum value in an array
function findMax(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
    }
    return max;
  }
  
  // Finds the minimum value in an array
  function findMin(arr) {
    if (arr.length === 0) return undefined;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
    }
    return min;
  }
  
  // Calculates the sum of all elements in an array
  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  // Filters out elements from an array based on a given condition
  function filterArray(arr, condition) {
    let filtered = [];
    for (let i = 0; i < arr.length; i++) {
      if (condition(arr[i])) {
        filtered.push(arr[i]);
      }
    }
    return filtered;
  }
// Calculates the factorial of a given number
function factorial(num) {
    let result = 1;
    for (let i = num; i > 1; i--) {
      result *= i;
    }
    return result;
  }
  
  // Checks if a number is prime
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Generates the Fibonacci sequence up to a given number of terms
  function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
      
  