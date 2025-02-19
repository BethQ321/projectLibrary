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


let cardContainer = document.querySelector('.cardContainer');

function displayLibrary() {
    cardContainer.innerHTML = '';
    myLibrary.forEach(book => {
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
            cardContainer.removeChild(bookCard);
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
    let newBook = new Book();
    let addBookButton = document.querySelector('#addBook');
    addBookButton.addEventListener('click', () => {
        newBook.title = document.querySelector('#title').value;
        newBook.author = document.querySelector('#author').value;
        newBook.pages = document.querySelector('#pages').value;
        myLibrary.push(newBook);
        cardContainer.innerHTML = '<div class="sidebar">Sidebar content here</div>';
        displayLibrary();
    });
}
addBookToLibrary();