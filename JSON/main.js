//Opdracht 1a
const person = `
{
        "firstname": "Judeska",
        "email": "judeska@example.com"
}
`
const objPerson = JSON.parse(person);

console.log("Object person", objPerson);
console.log("Email", objPerson.email);

//Opdracht 1b
const person2 = `
{
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "birthDate": "1973-01-22",
    "phone": "(555) 555-1234",
    "website": "www.johndoe.com"
  }
  `
  const objPerson2 = JSON.parse(person2);

  console.log("id is", objPerson2.id);
  console.log("firstname is", objPerson2.firstname);
  console.log("Lastname is", objPerson2.lastname);

  //Opdracht 2

  const tweet = `
  {
    "id": 1,
    "slug": "lorem-ipsum",
    "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
    "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "status": "published",
    "category": "lorem",
    "publishedAt": "04/02/2023 13:25:21",
    "updatedAt": "14/03/2023 17:22:20",
    "userId": 1
  }`

  const objtweet = JSON.parse(tweet);
  console.log("Title is:", objtweet.title);
  console.log("content is:", objtweet.content);
  console.log("publischedAt is:", objtweet.publishedAt);

//Opdracht 3
const person3 = `
{
    "id": 4,
    "firstname": "Emily",
    "lastname": "Davis",
    "email": "emilydavis@example.com",
    "birthDate": "1974-11-30",
    "login": {
      "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
      "username": "emilydavis",
      "password": "jsonplaceholder.org",
      "md5": "c1328472c5794a25723600f71c1b4586",
      "sha1": "35544a31cc19bd6520af116554873167117f4d94",
      "registered": "2022-07-10T11:21:20.033Z"
    },
    "address": {
      "street": "321 Maple Street",
      "suite": "Apt. 50",
      "city": "Anytown",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "42.9012",
        "lng": "-71.5678"
      }
    },
    "phone": "(555) 555-3456",
    "website": "www.emilydavis.com",
    "company": {
      "name": "GHI Corporation",
      "catchPhrase": "Your success is our priority",
      "bs": "Consulting"
    }
  }
`

const objPerson3 = JSON.parse(person3);
console.log("email is:", objPerson3.email);
console.log("username is:", objPerson3.login.username);
console.log("city is:", objPerson3.address.city);
console.log("company name is:", objPerson3.company.name);

//Opdracht 4
const comment1 = `
{
    "id": 11,
    "postId": 3,
    "userId": 2,
    "comment": "Cras convallis ipsum eget sapien hendrerit dignissim."
  }
`
const objcomment1 = JSON.parse(comment1);
console.log("Comment", objcomment1);

//Opdracht 5
const comment2 = `
[
    {
      "id": 1,
      "postId": 1,
      "userId": 1,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id": 2,
      "postId": 1,
      "userId": 1,
      "comment": "Nulla quis libero vel orci rutrum suscipit."
    },
    {
      "id": 3,
      "postId": 3,
      "userId": 2,
      "comment": "Cras ac elit sit amet mi placerat bibendum."
    }
  ]`

  const objcomment2 = JSON.parse(comment2);

  for(let i = 0; i < objcomment2.length; i++){
     console.log("Comment" + objcomment2[i].id + ": " + objcomment2[i].comment);
  }

//Opdracht 6
const video = `
[
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    }
  ]`

  const objvideo = JSON.parse(video)
  console.log("Video", objvideo)
//Opdracht 7
const Person4 = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}
  console.log(Person4);
  
  const jsonperson4 = JSON.stringify(Person4)

//Opdracht 8
const hero =
[
	{ 
		name: 'Wolverine', 
		age: 38,
		marks: {
			science: 20,
			math: 15
		}
	},
	{ 
		name: 'Xavier', 
		age: 64,
		marks: {
			science: 95,
			math: 90
		}
	},
	{ 
		name: 'Magneto', 
		age: 68,
		marks: {
			science: 90,
			math: 85
		}
	}
]
console.log(hero);
  
  const jsonhero = JSON.stringify(hero)