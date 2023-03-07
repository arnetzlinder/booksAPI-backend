var express = require('express');
var router = express.Router();

const fs = require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {

    fs.readFile("books.json", function(err, data){
        if (err) {
            console.log(err);
        }

        const books = JSON.parse(data)

        res.send(books)
        return;
    });
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
        if((book.title).toLowerCase() === (borrowedBook.title).toLowerCase()){
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
