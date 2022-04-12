let myLibrary = [];
const formModel = document.getElementById("form-popup");

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


// function to add a book to the library
function addBookToLibrary(title, author, pages, read) {
    let a = document.getElementById("title").value;
    let b = document.getElementById("author").value;
    let c = document.getElementById("pages").value;
    let d = document.getElementById("read").checked;

    if (a !== "" && b !== "" && c !== "") {
        myLibrary.push(new Book(a, b, c, d));
        displayBooks();
    }
}


//addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);

console.log(myLibrary);

// functionality to open/close form
function openForm() {
    document.querySelector(".hide-model").style.display = "block";
}

function closeForm() {
    document.querySelector(".hide-model").style.display = "none";
}




