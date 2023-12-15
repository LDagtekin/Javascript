
const ul = document.createElement('ul');

for(let i = 0; i < objvideo.length; i++){
    const li = document.createElement('li');
    li.innerHTML = `<h3>${objvideo[i].title}</h3><img src="${objvideo[i].thumbnailUrl}" alt="${objvideo[i].title}">`;
    ul.appendChild(li);
}

document.body.appendChild(ul);


//Opdracht 2
let auto1 = {
    merk: "Toyota",
    model: "Camry",
    bouwjaar: 2020,
    prijs: 25000
   };
   
   let auto2 = {
    merk: "Honda",
    model: "Civic",
    bouwjaar: 2021,
    prijs: 27000
   };
   
   let autoArray = [auto1, auto2];
   
   for (let i = 0; i < autoArray.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = "Merk: " + autoArray[i].merk + "<br>" +
                      "Model: " + autoArray[i].model + "<br>" +
                      "Bouwjaar: " + autoArray[i].bouwjaar + "<br>" +
                      "Prijs: " + autoArray[i].prijs;
    document.body.appendChild(div);
   }
   
   let totaalBedrag = auto1.prijs + auto2.prijs;
   let divTotaal = document.createElement("div");
   divTotaal.innerHTML = "Totaal bedrag: " + totaalBedrag;
   document.body.appendChild(divTotaal);
   
   //Opdracht 3
   function createStudent(firstname, classname, course) {
       return {
           firstname: firstname,
           classname: classname,
           course: course
       };
   }
   
   let students = [
       createStudent("Jan", "5C", "ICT"),
       createStudent("Piet", "4C", "ICT"),
       createStudent("Klaas", "5B", "ICT")
   ];
   
   function displayStudents(students) {
       let studentList = document.getElementById("studentList");
   
       for (let i = 0; i < students.length; i++) {
           let listItem = document.createElement("li");
           listItem.textContent = "Student: " + students[i].firstname + ", Class: " + students[i].classname + ", Course: " + students[i].course;
           studentList.appendChild(listItem);
       }
   }
   
   displayStudents(students);