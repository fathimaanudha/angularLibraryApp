// accessing mongoose package
const mongoose = require('mongoose');

// // Database connection

// Schema definition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    
    title:String,
    author:String,
    genre:String,
    
    image:String
});

var Bookdata=mongoose.model('bookdata',BookSchema);



module.exports=Bookdata;

