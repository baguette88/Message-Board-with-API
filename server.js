//npm init
//npm i express
//"main":"server,js" in package.json
//npm i ejs
//npm i mongoose
///DELETE npm i method-override
//npm install express-session
//npm install dotenv

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')



//SOCKET
let http = require("http").createServer();
const io = require("socket.io")(http);



// app.use(express.urlencoded({extended: false})); //  recognize the incoming object as strings or arrays.

app.use(express.json());  // allows us to recognize the incoming request as a JSON object. 
app.use(express.urlencoded({extended: false})); //  recognize the incoming object as strings or arrays.
app.use(express.static(__dirname + '/public'));  // ???
app.use(methodOverride('_method'))

//Port for HEROKU_______________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT 
const PORT2 = process.env.PORT2 || 3001   //process.env.PORT || 3001

http.listen(PORT2, () => {
  console.log("server is listening on: " +PORT2+" ...SOCKET...")
})


//IO
io.on("connection", (socket) => {

  //socket is line between user and client
  socket.emit("welcome", "Welcome to Jibber-Jabber") // NOT GETTING THIS YET
  console.log("NEW CLIENT CONNECTED!")
})



//Database

// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/'+ 'messages';

// Connect to Mongo
mongoose.connect(MONGODB_URI,  { useNewUrlParser: true,  useUnifiedTopology: true});

const db = mongoose.connection
////////
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('3000... mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});
////////
////////



// mongoose connection logic
// mongoose.connect('mongodb://localhost:27017/messageCRUD', { useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// importing the message model
const Message = require('./models/messages.js');
const { Socket } = require('socket.io-client');
const { hasUncaughtExceptionCaptureCallback } = require('process');

// ROUTES //
///////////
// INDEX //
///////////
app.get('/messages', (req, res)=>{
  Message.find({}, (error, allMessages)=>{
    res.render('index.ejs', {
      allMessages: allMessages
      })
  })
})

app.get('/', (req, res)=>{   //INITIAL LOGIN
 
    res.redirect('/messages')

})


app.get('/messages/boards', (req, res)=>{
  Message.find({}, (error, allMessages)=>{
    res.render('/messages/boards', {
      allMessages: allMessages
      })
  })
})

///////
//NEW//
///////
app.get('/messages/new', (req, res) => {
  res.render('new.ejs');
  //res.send('new') send string of new to test
})

//////////
//CREATE//
///post///
app.post('/messages/', (req, res)=>{    //Post is an express method to POST
  if(req.body.userType === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    req.body.userType = true;
  } else { //if not checked, req.body.readyToEat is undefined
    req.body.userType = false;
  }
  Message.create(req.body, (error, createdMessage)=>{
    res.redirect('/messages');
  })
})

/////////////
/// edit ////
/////////////
// app.get('/messages/:id/edit', (req, res)=>{
  app.get('/messages/:id/edit', (req, res)=>{
  Message.findById(req.params.id, (err, foundMessage)=>{ //find the Message
      res.render('edit.ejs', 
        { message: foundMessage, //pass in found message 
      })
  })
})

///////////
// update//
///////////
app.put('/messages/:id', (req, res)=>{
  if(req.body.readyToEat === 'on'){
      req.body.readyToEat = true;
  } else {
      req.body.readyToEat = false;
  }
  Message.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel)=> {
    res.redirect('/messages');
  })
})

//////////
// show///
//////////
app.get('/messages/:id', (req, res) =>{
  Message.findById(req.params.id, (err, foundMessage)=>{
    res.render('show.ejs', {
      message: foundMessage,
    })
  })
})

////////////
// delete //
app.delete('/messages/:id', (req, res) => {
  Message.findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err, data)=>{
    res.redirect('/messages') //redirect back to Message index
  })
})

////CHANGE LIKES
app.patch('/messages/:id', (req,res) => {
  console.log(req.body)
  Message.findByIdAndUpdate(req.params.id, {$inc: {'likes': +1}}, (err) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect(`/messages`)
    }
  })
})


// the app running the server. HOW DO I REPLACE THIS WITH SOCKET PROPERLY
app.listen(PORT, () => {
  console.log('listening')
})

