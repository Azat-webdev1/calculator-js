const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');


console.log(books);
console.log(book);
book[1].remove();
book[2].remove();
book[3].remove();
book[5].remove();

//Восстановить порядок книг.
books[0].append(book[3]);
books[0].append(book[5]);
book[5].after(book[2]);
books[0].prepend(book[1]);