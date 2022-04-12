let myLibrary = [];

//Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

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


//addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);

// function to add a book to the library
function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
}

addBookToLibrary("harry potter", "jk", 300, true);
addBookToLibrary("50 shades of ass", "donkey kong", 1000, false);

console.log(myLibrary);

