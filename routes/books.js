var express = require('express');
var router = express.Router();

const fs = require("fs");
var books;


fs.readFile("books.json", function(err, data){
    if (err) {
        console.log(err);
    }
    books = JSON.parse(data)
    return;
});

console.log(books);

/* GET users listing. */
router.get('/', function(req, res, next) {
        res.send(books)
});

router.get('/:id', function(req, res) {
    let bookId = req.params.id;
    books[bookId].loanBook();
    res.json(books[bookId]);
});



router.post('/borrow', function(req, res) {
    res.send({message: "works"})
    let borrowedBook = req.body;

    books.map(book => {
        if((book.title).toLowerCase() === (borrowedBook.title).toLowerCase()){
            book.available = false;
        }
        console.log(books)
    })
})

router.post('/leave', function(req, res){
    res.send({message: "works"})
    let returnedBook = req.body;

    books.map(book => {
        if((book.title).toLowerCase() === (returnedBook.title).toLowerCase()){
            book.available = true;
        }
        console.log(books)

    })
});

router.post('/add', function (req, res) {
    res.send({message: "Tack för ditt fantastiska tillägg"});
let newTitle = req.body.title;
let newAuthor = req.body.author;
let newPages = req.body.pages;
let newId = books.length + 1;
let NewBook = newBook(newTitle, newAuthor, newPages, true, newId);
books.push(newBook);
console.log (books);
books.json(books);
})

module.exports = router;
