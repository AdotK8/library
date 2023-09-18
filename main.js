const myLibrary = []; //initializing array for store of book objects

let tempName; //initializing temporary variables to allow users to input new book objects
let tempAuthor;
let tempPages;
let tempStatus;
const library = document.querySelector('.books');

function book (name, author, pages, status) { //book constructor 
    this.name=name;
    this.author=author;
    this.pages=pages; 
    this.status=status;
}

book1 = new book('Endurance', 'Alfred Lansing', 357, 'read');//making some manual books to add to library 
book2 = new book('Born A Crime', 'Trever Noah', 288, 'not read');

myLibrary.push(book1);
myLibrary.push(book2);


function addBookToLibrary(){ //function which takes user input, stores in temp variables, constructs book and then adds to library 
    tempName = prompt("Book Name?");
    tempAuthor = prompt("Book Author?");
    tempPages = prompt("Book Pages?");
    tempStatus = prompt("Book Status?");
    newBook = new book (tempName, tempAuthor, tempPages, tempStatus);
    myLibrary.push(newBook);
    displayLibrary(myLibrary);
}

displayLibrary(myLibrary);

function displayLibrary(myLibrary) {

    while (library.firstChild) {
        library.removeChild(library.firstChild); // if library currenrly has books -> remove them 
    }

for (let i = 0; i < myLibrary.length ; i++) {  //add all books in the library to the DOM 
    const newDiv = document.createElement('div');
    newDiv.classList.add('bookCard');
    library.appendChild(newDiv); //adds new div to store each book 

    const newName = document.createElement('div');
    newName.classList.add('info');
    const newContentName = document.createTextNode(myLibrary[i].name);
    newName.appendChild(newContentName);
    newDiv.appendChild(newName);

    const newAuthor = document.createElement('div');
    newAuthor.classList.add('info');
    const newContentAuthor = document.createTextNode(myLibrary[i].author);
    newAuthor.appendChild(newContentAuthor);
    newDiv.appendChild(newAuthor);

    const newPages = document.createElement('div');
    newPages.classList.add('info');
    const newContentPages = document.createTextNode(myLibrary[i].pages);
    newPages.appendChild(newContentPages);
    newDiv.appendChild(newPages);

    const newStatus = document.createElement('div');
    newStatus.classList.add('info');
    const newContentStatus = document.createTextNode(myLibrary[i].status);
    newStatus.appendChild(newContentStatus);
    newDiv.appendChild(newStatus);
}
}







