//load modules
var express = require('express');
const app=express();
var router = express.Router();
const path=require('path')
const bookCrud=require('../controller/bookCrud');

//Home page route.
router.get('/', function (req, res) {
    console.log("inside home")  
    
});

//add book endpoint
router.get('/addBook', function (req, res) {
    res.setHeader('Content-Type','application/json')
 console.log("inside register up get")
 const addStatus=bookCrud.addBook(req.query.bName,req.query.bAuthor,req.query.releaseDate,req.query.bPrice,req.query.bQuantity)
 
 addStatus.then(result=>{
    res.json(result);
 } ) .catch(error=> console.log(error))
})

//getOne

router.get('/getOneBook',function(req,res)
{    res.setHeader('Content-Type','application/json')
console.log(req.query.bId)
    const getOneStatus=bookCrud.getBook(req.query.bId);
    getOneStatus.then(result=>{
        console.log("inside getOne try")
        res.json(result);
    })
    .catch(error=> console.log(error))

})

//getAll

router.get('/getAllBooks',function(req,res)
{     res.setHeader('Content-Type','application/json')
    const getAllStatus=bookCrud.getAllBooks();
    getAllStatus.then(result=>{
        res.json(result);
    })
    .catch(error=> console.log(error))

})

//getting books on ascending order based on book quantity
router.get('/getAllBooksAescOnQuantity',function(req,res)
{   console.log("inside aesc "+req.url)
      res.setHeader('Content-Type','application/json')
    const getAllStatus=bookCrud.getAllBooksAescOnQuantity();
    getAllStatus.then(result=>{
        res.json(result);
    })
    .catch(error=> console.log(error))

})


//getting books on ascending order based on book name
router.get('/getAllBooksAescOnName',function(req,res)
{   console.log("inside aesc "+req.url)
      res.setHeader('Content-Type','application/json')
    const getAllStatus=bookCrud.getAllBooksAescOnName();
    getAllStatus.then(result=>{
        res.json(result);
    })
    .catch(error=> console.log(error))

})

//update
router.get('/updateBook',function(req,res)
{     res.setHeader('Content-Type','application/json')
   
    const updateStatus=bookCrud.updateBook(req.query.bId,req.query.bQuantity)
     
    updateStatus.then(result=>{  
        res.json(result);
    })
  .catch(error=> console.log(error))

})

//Delete
router.get('/deleteBook',function(req,res)
{    res.setHeader('Content-Type','application/json')
    
    console.log("Inside Delete  "+req.query.bId)
  const deleteStatus=bookCrud.deleteBook(req.query.bId);
  
  deleteStatus.then(result=>{
    res.json(result);
  } ) .catch(error=> console.log(error))
})


//exporting
module.exports=router;