// Author constructor function
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

// Book constructor function
function Book(title, author, genre, price) {
    this.title = title;
    this.author = author; // Author object
    this.genre = genre;
    this.price = price;
}

// Method in Book prototype to get book information
Book.prototype.getBookInfo = function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log('----------------------');
};

// Creating Author instances
const author1 = new Author('J.K. Rowling', 1965, 'British');
const author2 = new Author('George R.R. Martin', 1948, 'American');

// Creating Book instances
const book1 = new Book('Harry Potter and the Sorcerer\'s Stone', author1, 'Fantasy', 20.99);
const book2 = new Book('A Game of Thrones', author2, 'Fantasy', 25.99);

// Displaying book details for each book in the bookstore
book1.getBookInfo();
book2.getBookInfo();
