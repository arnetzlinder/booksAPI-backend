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
    let book = req.body;
    book.id = books.length + 1;
    book.available = true;
    books.push(book);
})

module.exports = router;
