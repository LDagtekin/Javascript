// Opdracht 1
let persons = [
    {
       Name: "Eitan",
       Surname: "Kartal",
       hobby: "Tennis"
    },
    {
       Name: "Teppo",
       Surname: "Hansson",
       hobby: "Football"
    }
];

let personsList = document.getElementById("personsList");

for (let i = 0; i < persons.length; i++) {
    let personItem = document.createElement('li');
    personItem.innerHTML = 'Person: ' + persons[i].Name + ' ' + persons[i].Surname + ', Hobby: ' + persons[i].hobby;
    personsList.appendChild(personItem);
}

// Opdracht 2 
let car1 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: 25000
};

let car2 = {
    brand: "Honda",
    model: "Civic",
    year: 2021,
    price: 22000
};

let carArray = [car1, car2];

function showCarInformation() {
    let carInfoList = document.getElementById("carInfoList");
    let totalAmountList = document.getElementById("carInfoList");
    let totalAmount = 0;

    for (let i = 0; i < carArray.length; i++) {
        let car = carArray[i];
        totalAmount += car.price;

        let carItem = document.createElement("li");
        carItem.innerHTML = 'Car: ' + car.brand + ' ' + car.model + ', Year: ' + car.year + ', Price: €' + car.price.toLocaleString();
        carInfoList.appendChild(carItem);
    }

    let totalAmountItem = document.createElement('li');
    totalAmountItem.innerHTML = 'Total Amount: €' + totalAmount.toLocaleString();
    totalAmountList.appendChild(totalAmountItem);
}

// Opdracht 3
function showStudents() {
    let studentsArray = [
        {
            firstname: "John",
            classname: "ICT",
            course: "Computer Science"
        },
        {
            firstname: "Alice",
            classname: "BIO",
            course: "Biology"
        },
        {
            firstname: "Bob",
            classname: "ENG",
            course: "English"
        }
    ];

    let studentsList = document.getElementById("studentsList");

    for (let i = 0; i < studentsArray.length; i++) {
        let studentItem = document.createElement('li');
        studentItem.innerHTML = 'Student: ' + studentsArray[i].firstname + ', Class: ' + studentsArray[i].classname + ', Course: ' + studentsArray[i].course;
        studentsList.appendChild(studentItem);
    }
}
showCarInformation();
showStudents();

// Opdracht 4
fetch('https://meme-api.com/gimme/5')
    .then(response => response.json())
    .then(data => {
        showMemeCards(data.memes);
    })
    .catch(error => console.error('Error fetching meme data:', error));
function showMemeCards(memes) {
    let memeCardsDiv = document.getElementById("memeCards");
    if (memes && memes.length > 0) {
        memes.forEach(meme => {
            let memeCard = document.createElement("div");
            memeCard.classList.add("meme-card");

            let memeImage = document.createElement("img");
            memeImage.classList.add("meme-image");
            memeImage.src = meme.url;
            memeImage.alt = "Meme Image";

        

            memeCard.appendChild(memeImage);
           
            memeCardsDiv.appendChild(memeCard);
        });
    } else {
        memeCardsDiv.textContent = "No memes found.";
    }
}

// Opdracht 5
