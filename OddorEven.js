// Odd or Even 
function checkOddOrEven(number) {
  if (number % 2 === 0) {
    console.log(number + " is Even");
  } else {
    console.log(number + " is Odd");
  }
}

let number = 20;
checkOddOrEven(number);

let decimal = 52.54;
checkOddOrEven(decimal);

//checkOddOrEven(7); // Prints: Odd
//checkOddOrEven(8); // Prints: Even