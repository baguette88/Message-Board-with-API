//npm init
//npm i express
//"main":"server,js" in package.json
//npm i ejs
//npm i mongoose
///DELETE npm i method-override
//npm install express-session
//npm install dotenv

//nmp i bcrypt (authentication encrytion via hash)
const messagesController = require('./controllers/messages.js');
const usersController = require('./controllers/users.js');
app.use('/messages', messagesController)
app.use('/users', usersController)

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')

// middleware to help with the form submission
// app.use(express.urlencoded({extended: false})); //  recognize the incoming object as strings or arrays.

app.use(express.json());  // allows us to recognize the incoming request as a JSON object. 
app.use(express.urlencoded({extended: false})); //  recognize the incoming object as strings or arrays.
app.use(express.static(__dirname + '/public'));  // Access public directory
app.use(methodOverride('_method'))  //allow editing

//Port_
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;
const PORT2 = process.env.PORT || 3001;

//_
//Database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/'+ 'messages';

// Connect to Mongo
mongoose.connect(MONGODB_URI,  { useNewUrlParser: true,  useUnifiedTopology: true});
// mongoose.connect('mongodb://localhost:27017/messageCRUD', { useNewUrlParser: true, useUnifiedTopology: true } );
//replaced with direct MONGODB connect

const db = mongoose.connection
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});
////////




// mongoose connection logic
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// importing the message and user models
const Message = require('./models/messages.js')
const User = require('./models/messages.js')

////////////////////////
//USER AUTHENTICATION///
////////////////////////

checkLogin()

// showTitleScene()


$(function(){ 
    
    //make connection
 let socket = io.connect('http://localhost:3001')

 //buttons and input
 const message = $("#message")
 const username = $("#username")
 const send_message = $("#send_message")
 const send_username = $("#send_username")
 const chatroom = $("#chatroom")
 const feedback = $("#feedback")
 const ulz = $('.ulz')

 //Emit message
 send_message.click(function(){
     socket.emit('new_message', {message : message.val()})
 })

 //Listen on new_message
 socket.on("new_message", (data) => {
     feedback.html('');
     message.val('');
     chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
 })

 //Emit a username
 send_username.click(function(){
     socket.emit('change_username', {username : username.val()})
 })

 //Emit typing
 message.bind("keypress", () => {
     socket.emit('typing')
 })

 //Listen on typing
 socket.on('typing', (data) => {
     "user is typing"
     feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
 })
});



/////LOGIN
function createUser() {
    console.log("user created")
}



function LogIn() {
    console.log("logged in")
}

let loggedIn = 1 // INITIALLY LOGGED OUT

function checkLogin () {
    console.log("checking credentials")
    if (loggedIn == 1) {
        showFeed()
        console.log("user is logged in")
    } else {
        showTitleScene()
        ("user needs to log in")
    }

}


//localhost:3000/retreive-session
//initial state
///////////////////////
//  const bcrypt = require('bcrypt')

// app.get('/create-session,' (req, res) => {
//   const hashedString = bcrypt.hashSync('your string here';
//    bcrypt.genSaltSync(10))
// })

// app.get('/retreive-session'), (req,res) =>
// if (bcrypt.compareSync('you guess here', req.session.password)){
//   console.log("pass matches")  
// } else {
//   console.log("not a match")
// }
// res.redirect ('/')
// })


 // PORT THROWING ERROR, USING PORT 2 UNTIL FIX IS FOUND

// the app running the server    PORT SHOULD BE ON?!
app.listen(PORT, () => {
  console.log('listening')
})