let myLibrary = [];



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
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for (let i = 0; i < myLibrary.length; i++) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        let td = document.createElement("td");
        td.innerHTML = myLibrary[i].title;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = myLibrary[i].author;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = myLibrary[i].pages;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = myLibrary[i].read;
        tr.appendChild(td);
        td = document.createElement("td");
        let button = document.createElement("button");
        button.innerHTML = "Delete";
        button.setAttribute("onclick", "deleteBook(" + i + ")");
        td.appendChild(button);
        tr.appendChild(td);
    }
}

function removeBook() {
    let table = document.getElementById("table");
    table.removeChild(table.lastChild);
}

// delete book from library
function deleteBook(index) {
    myLibrary.splice(index, 1);
    removeBook();
    displayBooks();
}

console.log(myLibrary);

// functionality to open/close form
function openForm() {
    document.querySelector(".hide-model").style.display = "block";
}

function closeForm() {
    document.querySelector(".hide-model").style.display = "none";
}




