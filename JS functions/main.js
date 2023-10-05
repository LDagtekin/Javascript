console.log("main.js is loaded");

// Opdr. 1
function greet() {
    console.log("Hallo wereld");
}

greet();

// Opdr. 2
function welcome() {
    console.log("Welkom op ROC Mondriaan")
    document.body.textContent = "Welkom op ROC Mondriaan"
}
welcome();

// Opdr. 3
function calculateSum() {
    console.log("Het antwoord is:", 3 + 4)
}
calculateSum();

// Opdr. 4
function calculateDivision() {
    console.log("Het antwoord is:", 8 / 2)
}
calculateDivision();

// Opdr. 5
function showArrayOfNumbers() {
    console.log("Array priemgetallen", [2, 3, 5, 7, 11])
}
showArrayOfNumbers();

// Opdr. 6
function showArrayOfBrands() {
    console.log("Array automerken", ["Mercedes", "Volkswagen", "Peugeot", "Tesla", "Toyota"])
}
showArrayOfBrands();

// Opdr. 7

let computer = 7;
let user = 5;
let bid = prompt("Voer 'hoger' of 'lager' in:");
function printValues() {
    console.log("Computer: " + computer);
    console.log("User: " + user); 
}
printValues();

// Opdr. 8
function showMessage(message) {
console.log(message);
}
showMessage("Opdracht 8")