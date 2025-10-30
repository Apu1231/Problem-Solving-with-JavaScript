// Question one
//  Print Numbers from 1 to N and take n value from user

 let userInput = parseInt(prompt("Enter a number"));
for(let i = 1; i <= userInput; i++){
    console.log(i);
}
// Question two
// Print Numbers from N to 1 without changing the loop condition of above question

let userInput2 = parseInt(prompt("Enter a number"));
for(let i = userInput2; i >= 1; i--){
    console.log(i);
}
// Question three
// Print All Even Numbers from 1 to N

let num2 = 100;
for(let i = 1; i <= num2; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// Question four
// Sum of All Even Numbers up to N

let num3 = 100;
let sum3 = num3 * (num3 + 1 ) / 2;
console.log( sum3);

// Question five
// Product (Factorial) of N


let num4 = 5;
let product = 1;
for(let i = 1; i<= num4; i++){
    product *= i;
}
console.log(product);

// Question six
// Sum of All Even Numbers up to N
let num5 = 10;
let sum5 = 0;
for(let i = 1;  i<=num5; i++){
    if(i % 2 === 0){
        // sum += i; // or
        sum5 = i*(i+1)
    }
}
console.log(sum5);

// 🏠 Homework / Practice Challenge Print all numbers divisible by 3 and 5 up to N
let num6 = 50;
for(let i = 1;  i<= num6; i++){
    if(i % 3 ===0 && i % 5 === 0){
        console.log(i);
    }
}
