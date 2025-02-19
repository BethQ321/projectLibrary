const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    myLibrary.push(this);
}

theHobbit = new Book('The Hobbitt', 'J.R.R. Tolkien', 295);
lordOfTheFlies = new Book('Lord of the Flies', 'William Golding', 224);
theGreatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180);
littleWomen = new Book('Little Women', 'Louisa May Alcott', 777);
theCatcherInTheRye = new Book('The Catcher in the Rye', 'J.D. Salinger', 277);


const cardContainer = document.querySelector('.cardContainer');

function displayLibrary() {
    cardContainer.innerHTML = '';
    myLibrary.forEach((book, index) => {
        let bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        cardContainer.appendChild(bookCard);

        let title = document.createElement('h2');
        title.textContent = book.title;
        bookCard.appendChild(title);

        let author = document.createElement('p');
        author.textContent = "author: " + book.author;
        bookCard.appendChild(author);

        let pages = document.createElement('p');
        pages.textContent = "pages: " + book.pages;
        bookCard.appendChild(pages);

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        bookCard.appendChild(removeButton);

        removeButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayLibrary();
        });

        let readButton = document.createElement('button');
        readButton.textContent = 'Not Read';
        readButton.classList.add('read-button');
        bookCard.appendChild(readButton);
        readButton.addEventListener('click', () => {
            book.toggleRead();
            readButton.textContent = book.haveRead ? 'Read' : 'Not Read';
        });
    });
}
displayLibrary();

Book.prototype.haveRead = false;

Book.prototype.toggleRead = function() {
    this.haveRead = !this.haveRead;
}

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;

    if (title && author && pages) {
        new Book(title, author, pages);
        displayLibrary();
        clearForm();
    }
}

function clearForm() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
}   

document.querySelector('#addBook').addEventListener('click', addBookToLibrary);