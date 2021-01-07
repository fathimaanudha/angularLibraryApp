// accessing mongoose package
const mongoose = require('mongoose');


// Schema definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name:String,
    genre:String,
    works:String,
    image:String
});

var Authordata=mongoose.model('authordata',AuthorSchema);

module.exports=Authordata;

