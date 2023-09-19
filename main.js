const myLibrary = []; //initializing array for store of book objects

const library = document.querySelector('.books');
const form = document.querySelector('form');

function book (title, author, pages, status) { //book constructor 
    this.title=title;
    this.author=author;
    this.pages=pages; 
    this.status=status;
}

book1 = new book('Endurance', 'Alfred Lansing', 357, 'read');//making some manual books to add to library 
book2 = new book('Born A Crime', 'Trever Noah', 288, 'not read');

// myLibrary.push(book1);
// myLibrary.push(book2);


function addBookToLibrary(){ //function which takes user input, stores in temp variables, constructs book and then adds to library 
    tempTitle = prompt("Book Title?");
    tempAuthor = prompt("Book Author?");
    tempPages = prompt("Book Pages?");
    tempStatus = prompt("Book Status?");
    newBook = new book (tempTitle, tempAuthor, tempPages, tempStatus);
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
    data = newDiv.dataset;
    data.indexnumber = i;
    library.appendChild(newDiv); //adds new div to store each book 

    const newTitle = document.createElement('div'); //adds book name
    newTitle.classList.add('info');
    const newContentTitle = document.createTextNode(myLibrary[i].title);
    newTitle.appendChild(newContentTitle);
    newDiv.appendChild(newTitle);

    const headerAuthor = document.createElement('div'); //creates 'Author' element
    headerAuthor.classList.add('header')
    const newContentAuthor1 = document.createTextNode('Author');
    headerAuthor.appendChild(newContentAuthor1);
    newDiv.appendChild(headerAuthor);

    const newAuthor = document.createElement('div'); // adds book author
    newAuthor.classList.add('info');
    const newContentAuthor = document.createTextNode(myLibrary[i].author);
    newAuthor.appendChild(newContentAuthor);
    newDiv.appendChild(newAuthor);

    const headerPages = document.createElement('div'); //creates 'Pages' element
    headerPages.classList.add('header')
    const newContentPages1 = document.createTextNode('Pages');
    headerPages.appendChild(newContentPages1);
    newDiv.appendChild(headerPages);

    const newPages = document.createElement('div'); //adds book pages
    newPages.classList.add('info');
    const newContentPages = document.createTextNode(myLibrary[i].pages);
    newPages.appendChild(newContentPages);
    newDiv.appendChild(newPages);

    const newStatus = document.createElement('div'); //creates book status
    newStatus.classList.add('info');
    const newContentStatus = document.createTextNode(myLibrary[i].status);
    newStatus.appendChild(newContentStatus);
    newDiv.appendChild(newStatus);

    const newBin = document.createElement('div'); //creates bin button
    newBin.classList.add('bin');
    data = newBin.dataset;
    data.indexnumber = i;
    newDiv.appendChild(newBin);
    
    newDiv.addEventListener('click', () =>{
        console.log(data.indexnumber);
    } )
    
}
}

form.addEventListener("submit", (e)=> { //adds users inputted book to library 
    e.preventDefault();

    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");

    newBook = new book (input1.value, input2.value, input3.value, input4.value);
    myLibrary.push(newBook);
    displayLibrary(myLibrary);

    form.reset();
})




