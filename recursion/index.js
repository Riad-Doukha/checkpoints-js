//Leap Year Checker
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

// Testing the function
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2023)); // false


//Ticket Pricing Program
function getTicketPrice(age) {
  if (age <= 12) {
    return "$10";
  } else if (age >= 13 && age <= 17) {
    return "$15";
  } else {
    return "$20";
  }
}

// Testing the function
console.log(getTicketPrice(10)); // "$10"
console.log(getTicketPrice(15)); // "$15"
console.log(getTicketPrice(25)); // "$20"


//Palindrome Checker
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  // Recursive helper function
  function check(start, end) {
    if (start >= end) return true; // Base case: reached the middle
    if (cleanStr[start] !== cleanStr[end]) return false; // Not a palindrome
    return check(start + 1, end - 1); // Recursive case
  }

  return check(0, cleanStr.length - 1);
}

// Testing the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
  

//Power Function
function power(base, exponent) {
    if (exponent === 0) return 1; // Base case: any number to the power of 0 is 1
    return base * power(base, exponent - 1); // Recursive case
  }
  
  // Testing the function
  console.log(power(2, 5)); // 32
  console.log(power(3, 3)); // 27
  console.log(power(5, 0)); // 1
  console.log(power(10, 2)); // 100  