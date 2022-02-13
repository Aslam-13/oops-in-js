class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class UI {
  creatingBooks(book) {
    const row = document.querySelector('#book-list');
    const creating = document.createElement('tr');
    creating.innerHTML = `<td>${book.title}</td>
                     <td>${book.author}</td>
                     <td>${book.isbn}</td>
                     <td><a href="#" class = "delete" >X</a></td>`;
    row.appendChild(creating);

  }
  sendMessage(msg, className) {
    const create = document.createElement('div');
    create.className = `alert ${className}`;
    create.appendChild(document.createTextNode(msg));
    const before = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    before.insertBefore(create, form);
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);

  }
  clearingValues() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';

  }
  delete(target) {
    target.parentElement.parentElement.remove();
  }
}
document.querySelector('#submitbtn').addEventListener('click', function (e) {
  const bookName = document.querySelector('#title').value;
  const authorName = document.querySelector('#author').value;
  const isbnvalue = document.querySelector('#isbn').value;
  const book = new Book(bookName, authorName, isbnvalue);
  const ui = new UI();
  if (bookName === '' || authorName === '' || isbnvalue === '') {
    ui.sendMessage('please fill the values', 'error');

  } else {
    ui.creatingBooks(book);
    ui.sendMessage('Added successfully', 'success');
    ui.clearingValues();
  }
  e.preventDefault();
});
document.querySelector('#book-list').addEventListener('click', function (e) {
  const ui = new UI();
  if (e.target.className === 'delete') {
    ui.delete(e.target);
    ui.sendMessage('book removed...', 'success');
  }
  e.preventDefault();
})