// create express variable
const express = require('express');
const Bookdata= require('./src/model/bookdata');
const Authordata=require('./src/model/authordata');
const Userdata=require('./src/model/userdata');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bodyparser = require('body-parser');
// accessing mongoose package
const mongoose = require('mongoose');
const { name } = require('ejs');
mongoose.set('useFindAndModify', false);

const port = process.env.PORT || 3000

mongoose.connect('mongodb+srv://userone:userone@ictakfiles.slzuy.mongodb.net/<LIBRARYAPP>?retryWrites=true&w=majority',
    {   useNewUrlParser: true ,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
  
// create express application
const app = new express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views','./src/views');

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }



app.post('/login', async(req,res)=>{
    // const {name,password} = req.body;
    console.log(req.body.username)
    const user = await Userdata.findOne({'email':req.body.username},(error,user)=>{
        console.log(user)
        if(error){
            console.log(error)
        }
        if(req.body.username=='admin@gmail.com'&& req.body.password=="Admin.123"){
            console.log('admin here!')
            let payload = {subject: req.body.username }
            console.log(payload)
            let tokena = jwt.sign(payload, 'adminonly')
            res.status(200).send({tokena})
            console.log('A.token:'+tokena)
        }else
        if (!user) {
                res.status(401).send('Invalid Username')
              } else
        if ( user.password !== req.body.password) {
                res.status(401).send('Invalid Password')
            }
        
        else if(user){
               console.log('huray!')
                let payload = {subject: req.body.username }
                console.log(payload)
               let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
                console.log('B-TOKEN:'+token)
            
        }
        
    })

           

  
})



app.get('/books',function(req,res){
   
    Bookdata.find()
    .then(function(books){
        res.send(books);

    });
});
// to get single book
app.get('/books/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id: id})
    .then(function(book){
        
        res.send(book)
        //console.log(book)
    }) 
 
 })
 // get single author
app.get('/authors/:id',  (req, res) => {
  
    const id = req.params.id;
    Authordata.find()
    .findOne({"_id":id})
      .then((author)=>{
          res.send(author);
      });
  })

//  addbook
app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
    var book={
        title:req.body.book.title,
        author:req.body.book.author,
        genre:req.body.book.genre,
        image:req.body.book.imageUrl
    }
    var book = new Bookdata(book);
    book.save();
    console.log("books"+book);
    
})
// updatebook
app.put('/updateb/:id',(req,res)=>{
    console.log(req.body)
    const id = req.params.id;    
    title=req.body.title,
    author=req.body.author,
    genre=req.body.genre,
    imageUrl=req.body.imageUrl
Bookdata.findByIdAndUpdate(id,
    {$set:{"title":title,
        "author":author,
        "genre":genre,
        "image":imageUrl}}
    )
    .then(function(){
        res.send();
    })

})

app.delete('/removeb/:id',(req,res)=>{
   
    id = req.params.id;
    Bookdata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
    // userdata
    app.post('/adduser',function(req,res){
        console.log(req.body);
        var user={
            name:req.body.user.name,
            email:req.body.user.email,
            password:req.body.user.password,
        }
        var user =new Userdata(user);
        user.save();
        console.log(user);
        
    })










app.get('/authors',function(req,res){
   
    Authordata.find()
    .then(function(authors){
        res.send(authors);
    });

});
// get single author
app.get('/authors/:id',  (req, res) => {
  
    const id = req.params.id;
    Authordata.find()
    .findOne({"_id":id})
      .then((author)=>{
          res.send(author);
      });
  })

//   add author
app.post('/inserta',function(req,res){
    
    console.log(req.body);
    var author={
        name:req.body.author.name,
        genre:req.body.author.genre,
        works:req.body.author.works,
        image:req.body.author.imageUrl
    }
    var author = new Authordata(author);
    author.save();
    console.log(author);
})
// update author
app.put('/updatea/:id',(req,res)=>{
    console.log(req.body)
    const id = req.params.id;    
    const author={
        name:req.body.author.name,
        genre:req.body.author.genre,
        works:req.body.author.works,
        image:req.body.author.imageUrl
    }
Authordata.findByIdAndUpdate(id,
    {$set:{"name":name,
        "genre":genre,
        "works":works,
        "image":imageUrl}}
    )
    .then(function(){
        res.send();
    })

})


// delete author
app.delete('/removea/:id',(req,res)=>{
   
    id = req.params.id;
    Authordata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })







app.listen(port,()=>{console.log("server ready at"+port)});
