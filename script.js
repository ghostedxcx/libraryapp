let myLibrary = [];
let length = myLibrary.length;



//Book constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}



// function to add a book to the library
function addBookToLibrary() {
    console.log("Add Button Clicked");
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
    closeForm();

}


//addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
function displayBooks() { 
    let table = document.getElementById("table");
    let row = document.createElement("tr");
    let title = document.createElement("td");
    let author = document.createElement("td");
    let pages = document.createElement("td");
    let read = document.createElement("td");
    let button = document.createElement("button");
    let setReadText = document.createElement("td");
    let readIt = document.getElementById("read").checked;


    if (readIt == true) {
        setReadText.innerHTML = "Read";
    } else {
        setReadText.innerHTML = "Not Read";
    }


    button.innerHTML = "Delete";
    button.setAttribute("onclick", "deleteBook(" + (length - 1) + ")");




    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        title.innerHTML = book.title;
        author.innerHTML = book.author;
        pages.innerHTML = book.pages;
        read.innerHTML = book.read;
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(read);
        row.appendChild(button);
        row.appendChild(setReadText);
        table.appendChild(row);
    }
}

// create a function to remove book from table after delete button is clicked
function removeBook() {
    let table = document.getElementById("table");
    table.removeChild(table.lastChild);
}

// delete book from library
function deleteBook(index) {
    myLibrary.splice(index, 1);
    removeBook();
}

console.log(myLibrary);

// functionality to open/close form
function openForm() {
    document.querySelector(".hide-model").style.display = "block";
}

function closeForm() {
    document.querySelector(".hide-model").style.display = "none";
}




