//Given number is positive, negative or zero

function checkvalue(number) {
  if (number > 0) {
    console.log("Positive");
  } else if (number < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

checkvalue(-5);