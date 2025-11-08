// Question 1
// Print Right-Angled Star Triangle

let num = 5;
for (i = 1; i <= num; i++) {
  let str = "";
  for (j = 1; j <= i; j++) {
    str += "*";
  }
  // console.log(str);
}

// Question 2
// Print Inverted Right-Angled Triangle
const row = 5;
for (i = row; i >= 1; i--) {
  let str = "";
  for (j = i; j >= 1; j--) {
    str = str + "*";
  }
  // console.log(str)
}

// Question 3
// Print Pyramid Pattern
const rows1 = 5;
for (let i = 1; i <= 2 * rows1 - 1; i += 2) {
  let str = "";
  for (let a = 1; a <= i; a++) {
    str += "*";
  }
  // console.log(str)
}

// Question 4
// Print Inverted Pyramid Pattern
const rows2 = 5;
for (let i = rows2; i >= 1; i--) {
  let str = "";

  // Print spaces
  for (let j = 0; j < rows2 - i; j++) {
    str += " ";
  }

  // Print stars
  for (let k = 0; k < 2 * i - 1; k++) {
    str += "*";
  }

  // console.log(str);
}

// Question 5
// Print Hollow Square Pattern
const val = 4;
for (let i = 1; i <= val; i++) {
  let str = "";
  for (let j = 1; j<= val; j++){
     if(i == 1 || i === val || j === 1 || j === val ){
      str += "*"
     }
     else{
      str = str +" "
     }
  }
  // console.log(str)
}

// Question 6
// Print Hollow Pyramid Pattern
const rows = 5;

for (let i = 1; i <= rows; i++) {
  let str = "";

  // Print leading spaces
  for (let j = i; j < rows; j++) {
    str += " ";
  }

  // Print stars and hollow spaces
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k === 1 || k === 2 * i - 1 || i === rows) {
      str += "*";
    } else {
      str += " ";
    }
  }

  // console.log(str);
}

// question 7
// Print Alternating Binary Triangle
// Print Alternating Binary Triangle
const number = 5;

for (let i = 1; i <= number; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    // (i + j) % 2 ensures alternating 1s and 0s
    str += (i + j) % 2 === 0 ? "1 " : "0 ";
  }
  console.log(str);
}




