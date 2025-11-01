// question one 
// Find the Maximum of Three Numbers
const num  = [10, 80, 30];
const maxNum = Math.max(...num);
// console.log("Maximum number is: " + maxNum);
function maxNumbers(a, b, c) {
    let max;
    if (a> b && a>c){
        max = a;
    }else if(b>a && b>c){
        max = b;
    }
    else{
        max = c;
    }
    return max;
}
// console.log(maxNumbers(10, 20, 300))

// question two
// Check if a Number is Positive, Negative, or Zero

const number = -10;
function checkNumbers(number){
if (number > 0) {
    // console.log(number + " is a positive number.");
} else if (number < 0) {
    // console.log(number + " is a negetive number");
} else {
    // console.log(number + " is zero number");
}
}
checkNumbers(number);

// question three
// Calculate Electricity Bill

const units = 101;
function calculateBills(units){

    let billAmount;
    if(units <= 100){
        billAmount = units * 5;
    }
    else if(units >100 && units <= 200){
        billAmount =(100 *5) + (units - 100) *8;
    }
    else if( units >200 && units <= 300){
        billAmount = (100 * 5) + (100 * 8) ((units - 200) * 10);
    }
    else{
        billAmount = (100 * 5) + (100 * 8) + (100 * 10) + ((units  - 300) * 15);
    }
return billAmount;
}
// console.log(calculateBills(units));

// question four
// Check if a Character is a Vowel or Consonant
const char = "e";
function checkChar(char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        // console.log(char + " is a vowel");
    }
    else{
        // console.log(char + " is a consonant");
    }
    return char;
}
checkChar(char)

// question five
// Check if a Year is a Leap Year

const year = 2024;
function checkLeapYear(year){
    if(year % 4 ===0 && year % 100 !==0 || year % 400 ===0){
        // console.log(year + " is a leap year");
    }
    else{
        // console.log(year+ " is not a leap year");
    }
}
checkLeapYear(year);

// 🏠 Homework / Practice Challenge
// Check if a Character is Uppercase, Lowercase, Digit, or Special Character
const character = "@";
function characterType(character){
    if(character >= "A" && character <= "Z"){
        // console.log(character + " is uppercase");
    }
    else if(character >= "a" && character <= "z"){
        // console.log(character + " is lowercase");
    }
    else if (character >= 0 && character <= 9){
        // console.log(character + " is digit");
    }
    else{
        // console.log(character + " is special character");
    }
}
characterType(character);

// Check Triangle Type Using Sides and Angles
// Input: Sides = 3, 4, 5

// Output: Right-Angled Triangle

// ✨ Combines geometric reasoning + Pythagoras theorem check.

// Example Logic:

// If a² + b² = c² → Right-angled
// Else if all sides equal → Equilateral
// Else if any two equal → Isosceles
// Else → Scalene

// Calculate Income Tax Based on Slabs

const income = 750000;

function calculateIncomeTax(income){
    let tax;
    if(income <= 250000){
        tax = 0;
    }
    else if(income >= 250001 && income <= 500000){
        
        tax = (income - 250000) * 0.05;
    } 
    else if (income >= 500001 && income <= 1000000){
        tax = ( 250000 * 0.05) + ((income - 500000)* 0.20)
    }
    else{
        tax = ( 250000 * 0.05) + (500000 *0.20) + ((income - 1000000) * 0.30)
    }
    console.log(tax);
    return tax;
}
calculateIncomeTax(income);

