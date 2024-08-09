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
console.log(library)
//Update the Availability of a Book:
 library[2].available = true
console.log(library)
//Remove Pride and Prejudice from the Library:
library.splice(3,1);
console.log(library)

//Check if a Book is in the Library:

for(let i=0; i<library.length; i++)
{
if(library[i].title.includes("The Great Gatsby")){
    console.log("The Great Gatsby is available");
}
}
//Borrow the First Book:
// Update its available status to false before removing it from the array
library[0].available = false;
console.log(library)
//Remove the first book from the library array using the shift method
 library.shift()
console.log(library)
//... and then display the updated book details.
//console.log(library)
//Add a New Book to the Start of the Library:
let book5 = {title: "The Catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951, available: true}
library.unshift(book5);
console.log(library);
//Create a new array called newArrivals containing only the last two books in the library array using the slice method.
let newArrivals = library.slice(1,3);
console.log(newArrivals);