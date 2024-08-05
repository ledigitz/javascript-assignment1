//Create the library Array:
const library =[]

//Create book objects
let book1 = {title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, available: true}
let book2 = {title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, available: true}
let book3 = {title: "1984", author: "George Orwell", yearPublished: 1949, available: false}
let book4 = {title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813, available: true}

//Add Books to the Library:
library.push(book1)
library.push(book2)
library.push(book3)
library.push(book4)

//Update the Availability of a Book:
library[2].available = true

//Remove Pride and Prejudice from the Library:
library.splice(3,1)

//Check if a Book is in the Library:
// for(let title in library){
//     let result = library.ti
//     console.log(result)
// }
//let result = library.includes("The Great Gatsby");
// for(let i=0; i<library.length; i++)
// {
// if(library[i].title == "The Great Gatsby"){
//     console.log("The Great Gatsby is available")
// }
// else{
//     console.log("The Great Gatsby is not available")
// }
// }'
console.log(library)
