console.log("main.js is loaded");

let counter = 0;
while (counter < 10) {
    console.log("while-loop:", counter);
    counter ++;
}

for(let i = 1; i= 10; i++) {
    console.log("for-loop", i);
}

for(let counter = 0; counter < 10; counter++){
    console.log("for-loop v2", counter);
}

const todos = ["trainen", "huiswerk maken", "boodschappen doen", "slapen"];
debugger
for (let m = 0; m < todos.length; m++){
    const task = todos[m];
    console.log("---" + task +"---")
}