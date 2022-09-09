let library = [];

class Book {
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    info = () => {
        return `${this.title}, ${this.author}, ${this.pages} pages, ${(this.read ? 'already read.' : 'hasn\'t been read.')}`
    }
    addBookToLibrary = () => {
        library.push(this)
        displayBooks()
    }
}

// function Book(title, author, pages, read){
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read    
//     this.info = function(){
//         return `${this.title}, ${this.author}, ${this.pages} pages, ${(this.read ? 'already read.' : 'hasn\'t been read.')}`
//     }
// }

// Book.prototype.addBookToLibrary = () => {
//     library.push(this)
//     displayBooks()
// }

function clearBooks(){
    const books = document.querySelectorAll('.container > .book')
    books.forEach(book => {
        book.remove()
    })
    console.log('Books cleared')
}

function displayBooks(){
    clearBooks()
    for (let i = 0; i < library.length; i++) {
        let card = document.createElement("div")
        card.classList.add("book")
        card.setAttribute('data-id', i)
        
        let text = document.createElement('p')
        text.textContent = library[i].info()
        
        let readButton = document.createElement('button')
        readButton.textContent = 'Mark as Read'
        readButton.setAttribute('onclick', 'onClickMarkAsRead(this)')
        
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete Book'
        deleteButton.setAttribute('onclick', 'onClickDeleteBook(this)')
        
        let buttonBox = document.createElement('div')
        buttonBox.classList.add('card-buttons')
        buttonBox.appendChild(deleteButton)
        buttonBox.appendChild(readButton)
 
        card.appendChild(text)
        card.appendChild(buttonBox)
        
        let container = document.querySelector('.container')
        container?.appendChild(card)
    }
}

function onClickCreateBook(){
    console.log('created book');
    const formdivs = document.querySelectorAll('.create-form-bg, .create-form')
    formdivs.forEach(div => {
        div.addEventListener('click', onClickOffForm)
        // @ts-ignore
        div.style.display = 'block'
    })
}

function onClickOffForm(e){
    e.stopPropagation()
    if (this.classList.contains('create-form-bg')){
        this.style.display = 'none'
        clearCreateForm()
    }
}

function clearCreateForm(){
    console.log('form cleared.');
    const form = document.getElementById('book-form').reset()
    
}

function onClickAddBook(){
    const form = document.getElementById('book-form')
    const newBook = new Book(form.elements["title"].value, 
                             form.elements["author"].value, 
                             form.elements["pages"].value, 
                             form.elements["read"].value)
    console.log(newBook);
    newBook.addBookToLibrary()
    clearCreateForm()
}

function onClickDeleteBook(el){
    const id = el.parentElement.parentElement.getAttribute('data-id')
    library.splice(id, 1)
    displayBooks()
    console.log(library);
}

function onClickMarkAsRead(el){
    const id = el.parentElement.parentElement.getAttribute('data-id')
    console.log(library[id]);
    library[id].read = !library[id].read
    displayBooks()
}


let example = new Book('Example Book', 'Author', 500, false)
example.addBookToLibrary()
console.log(library)
displayBooks()