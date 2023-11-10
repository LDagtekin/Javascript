// Opdr. 1
let salaris = 2000;
let verhoging = 1.05;
let antwoord = salaris * verhoging;


 const ul = document.querySelector(".results")
 ul.innerHTML += "<li>" + antwoord + "<li>"
// Opdr. 2
let prijs = 400000;
let percentage = 1.025;
let Waarde = prijs * percentage;

ul.innerHTML += "<li>" + Waarde + "<li>"
// Opdr. 3
let prijsJas = 100;
let btw = 1.21;
let volPrijs = prijsJas * btw;

ul.innerHTML += "<li>" + volPrijs + "<li>"
// Opdr. 4
let person = prompt("Wat ben jij?")
if (person === "docent"){
  console.log("Jij bent een docent")
}
else{
  console.log("Jij bent gek")
};

// Opdr. 5


// Opdr. 6
for (let counter = 0; counter < 10; counter++) {
  console.log("Einde loop", counter);
}
console.log("Opdracht 6")

// Opdr. 7

counter = 0;
while (counter < 21) {
    console.log("Dit is zin 1. Dit is zin 2.", counter)

    counter = counter + 1;
    if (counter >= 11) {
        console.log("Dit is zin 2.", counter)
        break

    }
  }

// Opdr. 8
for (let counter = 0; counter > -1; counter++) {
  console.log("opdracht 8", counter);

  if (counter >= 9) {
      break
  }
};

// Opdr. 9

const kleurenArray = ["rood", "groen", "geel", "blauw", "roze"];
ul.innerHTML += "<li>" + kleurenArray + "<li>"

