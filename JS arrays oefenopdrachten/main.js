console.log("main.js is loaded");

let list1 = [];
console.log("list1 is:", list1);
list1.push(4);
list1.push(5);
list1.push(8);
list1.push(12);
list1.push(-1);
list1.push(99);
console.log("list1 met push", list1);

let list2 = [];
console.log("list2 is:", list2);
list2.push(0.33);
list2.push(4.8);
list2.push(11.1);
list2.push(34.5);
list2.push(129.1);
list2.push(-2.56);
list2.push(-17.4);
console.log("list2 met push", list2);

let colour = [];
console.log("Kleuren:", colour);
colour.push('rood');
colour.push('groen');
colour.push('geel');
colour.push('blauw');
colour.push('roze');
console.log("Kleuren met push", colour);

list1[3] = 21;
console.log("list 1 is", list1);

list2[0] = 3.3;
list2[6] = -1.74;
console.log("list 2 is", list2);

colour.push('zwart')
console.log("Update kleuren met push", colour)

list1[0] = 0;
console.log("Update list1:", list1);

list2.pop(0.33);
list2.pop(-17.4);
console.log("List2 met pop", list2)

var items = document.querySelector('items');

 

function addItemToList() {
  var newItem = prompt("Noem een film");
  if (newItem != null) {
    var ul = document.querySelector('ul');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = newItem;
  }
}