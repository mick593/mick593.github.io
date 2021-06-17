let myLibrary = [];

function Book(name, pages) {
  // Book constructor
  this.name = name
  this.pages = pages 
  this.added = false;

}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book)
}

function displayBooks() {
    const container = document.querySelector('div.books-container')
    console.log(container)
    myLibrary.forEach(function(e) {
        console.log(e)
        //add card for each book into page
        let card = document.createElement('div')
        card.classList.add('book')
        card.textContent = 'Title : ' + e['name'] + '\n' + 'Pages : ' + e['pages']
        container.appendChild(card)
    })
}
function overlayActive() {
    document.getElementById("overlay-container").style.display = "block";
    document.getElementById("overlay").style.display = "block";
   

}
function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay-container").style.display = "none";
  }

let addBtn = document.getElementById('new-book-btn')
addBtn.addEventListener('click', function() {
    overlayActive()
})

let overlay = document.getElementById('overlay')
overlay.addEventListener('click',function() {
    off()
})


let b1 = new Book("Anna",121)
addBookToLibrary(b1)
addBookToLibrary(b1)

displayBooks()