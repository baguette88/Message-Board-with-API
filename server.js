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

// middleware to help with the form submission
// app.use(express.urlencoded({extended:false}))
// app.use(methodOverride('_method'))


// app.use(express.urlencoded({extended: false})); //  recognize the incoming object as strings or arrays.

app.use(express.json());  // allows us to recognize the incoming request as a JSON object. 
app.use(express.urlencoded({extended: false})); //  recognize the incoming object as strings or arrays.
app.use(express.static(__dirname + '/public'));  // ???
app.use(methodOverride('_method'))

//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/'+ 'messages';

// Connect to Mongo
mongoose.connect(MONGODB_URI,  { useNewUrlParser: true,  useUnifiedTopology: true});

const db = mongoose.connection
////////
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
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
const Message = require('./models/messages.js')

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

// the app running the server
app.listen(3000, () => {
  console.log('listening')
})