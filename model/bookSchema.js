//load mongoose module.
const mongoose=require('mongoose');
const db=require('../services/db')
//creating bookschema
let bookSchema=mongoose.Schema({
    bookId:{type:Number,require:true,unique:true},
    bookName:{type:String},
    bookAuthor:{type:String},
    releaseDate:{type:Date},
    bookPrice:{type:Number},
    bookQuantity:{type:String}
    
})

bookSchema.plugin(db.AutoIncrement,{inc_field:'bookId'})
//exporting by making public
module.exports=mongoose.model('bookstore',bookSchema);