let myLibrary = [];
let idCount = 0;
function Book(name, pages) {
  // Book constructor
  this.name = name
  this.pages = pages 
  this.added = false;
  this.id = idCount++

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
        if (!e.added) {
            //add card for each book into page
            let card = document.createElement('div')
            card.classList.add('book')
            card.value = e.id
            card.textContent = 'Title : ' + e['name'] + '\n' + 'Pages : ' + e['pages'] 

            let removeBtn = document.createElement('button')

            removeBtn.addEventListener('click', function(x) {
                removeBook(removeBtn.value)
                container.removeChild(card)
            })

            removeBtn.textContent = 'X'
            card.appendChild(removeBtn)
            removeBtn.classList.add('remove-btn')
            removeBtn.value = e.id
            console.log(removeBtn.value)
            
            container.appendChild(card)
            e.added = true
        }
    
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

function removeBook(value) {
    myLibrary.forEach(function(e) {
        console.log(e.id, value +' dd')
        if(e.id == value) {
            
            myLibrary.splice(myLibrary.indexOf(e),1)
        }
    })
    // redisplay()fggddf
}

function redisplay() {
    container.remove
}


let addBtn = document.getElementById('new-book-btn')
addBtn.addEventListener('click', function() {
    overlayActive()
})

let overlay = document.getElementById('overlay')
overlay.addEventListener('click',function() {
    off()
})

let submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', function() {
    console.log('clicked')
    let formName = document.getElementById('book-name').value
    let formPages = document.getElementById('book-pages').value
    console.log(formName,formPages)
    let newBook = new Book(formName,formPages) 
    console.log(newBook)
    addBookToLibrary(newBook)
    displayBooks()
    off()
})

off()

let b1 = new Book("Anna",121)
addBookToLibrary(b1)


displayBooks()