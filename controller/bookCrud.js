//load modules.
const books=require('../model/bookSchema');
const db=require('../services/db');


//add book details
let addBook=async(bName,bAuthor,relDate,bPrice,bQuantity)=>{
    try{
    let add= await new books({bookName:bName,bookAuthor:bAuthor,releaseDate:relDate,bookPrice:bPrice,bookQuantity:bQuantity}).save();
    return "Added Succesfully."
}
    catch(error){
        console.log('ERROR OCCURED :'+error);
    }
}

//find book by id
let getBook=async(bId)=>{
    try{  console.log(bId)
        return await books.findOne({bookId:bId});
    }
    catch(error){
        console.log(error);
    }
}

//get all books
let getAllBooks=async()=>
{
    try {
        return await books.find({});;
    } catch (error) {
        console.log(error);
    }
}

//get all books in Aesc order based on quantity
let getAllBooksAescOnQuantity=async()=>
{
    try {
        return await books.find({}).sort( { bookQuantity: 1 } );
    } catch (error) {
        console.log(error);
    }
}


//get all books in Aesc order based on name
let getAllBooksAescOnName=async()=>
{
    try {
        return await books.find({}).sort( { bookName: 1 } );
    } catch (error) {
        console.log(error);
    }
}


//update book Quantity by Id
let updateBook=async(bId,bQuantity)=>{
   
    try{
        let update= await books.updateOne({bookId:bId},{bookQuantity:bQuantity});
        return "Updated Succesfully."
    }
    catch(error){
        console.log(error);
    }
}

//Delete Book by id
let deleteBook=async(bId)=>{
    try{
         await books.deleteOne({bookId:bId});
         return "Deleted Succesfully."
    }
    catch(error){
        console.log(error);
    }
}


//export methods
module.exports={addBook,getBook,getAllBooks,getAllBooksAescOnQuantity,getAllBooksAescOnName,updateBook,deleteBook}