const express = require('express');
const router = express.Router();
const Messages = require('../models/messages.js')
// const app = express.Router();
let PORT2 = 3001

// ROUTES //
///////////
//LOGIN //
///////////
router.get('/messages/login', (req, res)=>{
  
    res.render('login.ejs', {
     
      })
  })
///////////
//INDEX //
///////////
router.get('/messages', (req, res)=>{
  Message.find({}, (error, allMessages)=>{
    res.render('index.ejs', {
      allMessages: allMessages
      // tobottom()
      })
  })

  
})
///////////
//REDIRECT ON START // (to login)
///////////
router.get('/', (req, res)=>{   //INITIAL LOGIN
 
    res.redirect('/messages/login')

})
///////////
//BOARDS (GET) //
///////////

router.get('/messages/boards', (req, res)=>{
 
    res.render('boards.ejs');
  
})
///////
//NEW//
///////
router.get('/messages/new', (req, res) => {
  res.render('new.ejs');
  //res.send('new') send string of new to test
})



///////////////////
//CREATE ACCOUNT//
//////////////////
router.get('/messages/newuser', (req, res) => {
    res.render('newuser.ejs');
    //res.send('new') send string of new to test
  })

//////////
//MAKE A POST//
///post///
router.post('/messages/', (req, res)=>{    //Post is an express method to POST

  Message.create(req.body, (error, createdMessage)=>{
    console.log("message created")
    res.redirect('/messages')
   
  })
})
  
/////////////
/// EDIT ////
/////////////
// router.get('/messages/:id/edit', (req, res)=>{
  router.get('/messages/:id/edit', (req, res)=>{
  Message.findById(req.params.id, (err, foundMessage)=>{ //find the Message
      res.render('edit.ejs', 
        { message: foundMessage, //pass in found message 
      })
  })
})

// router.get('/messages/login', (req, res)=>{
//   Message.findById(req.params.id, (err, foundMessage)=>{ //find the Message
//       res.render('login.ejs');
  
// })
// })
///////////
// UPDATE//
///////////
router.put('/messages/:id', (req, res)=>{
  // if(req.body.readyToEat === 'on'){
  //     req.body.readyToEat = true;
  // } else {
  //     req.body.readyToEat = false;
  // }
  Message.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel)=> {
    res.redirect('/messages');
  })
})

// show///
//////////
router.get('/messages/:id', (req, res) =>{
  Message.findById(req.params.id, (err, foundMessage)=>{
    res.render('show.ejs', {
      message: foundMessage,
    })
  })
})

////////////
// delete //
router.delete('/messages/:id', (req, res) => {
  Message.findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err, data)=>{
    res.redirect('/messages') //redirect back to Message index
  })
})

router.patch('/messages/:id', (req,res) => {  ////LIKE BUTTON INCREMENT
  console.log(req.body)
  Message.findByIdAndUpdate(req.params.id, {$inc: {'likes': +1}}, (err) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect(`/messages`)
    }
  })
})



// $(function(){
//     //make connection
//  let socket = io.connect('http://localhost:3001')

//  //buttons and input
//  const message = $("#message")
//  const username = $("#username")
//  const send_message = $("#send_message")
//  const send_username = $("#send_username")
//  const chatroom = $("#chatroom")
//  const feedback = $("#feedback")
//  const ulz = $('.ulz')

//  //Emit message
//  send_message.click(function(){
//      socket.emit('new_message', {message : message.val()})
//  })

//  //Listen on new_message
//  socket.on("new_message", (data) => {
//      feedback.html('');
//      message.val('');
//      chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
//  })

//  //Emit a username
//  send_username.click(function(){
//      socket.emit('change_username', {username : username.val()})
//  })

//  //Emit typing
//  message.bind("keypress", () => {
//      socket.emit('typing')
//  })

//  //Listen on typing
//  socket.on('typing', (data) => {
//      "user is typing"
//      feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
//  })
// });




// const express = require('express')  //REDUNDANT
// const router = express()                 // REDUNDANT

//set the template engine ejs
// app.set('view engine', 'ejs')   //NEED FOR EJS???

//middlewares
// router.use(express.static('public')) //THROWS AN ERROR

//routes
// router.get('/', (req, res) => {
// 	res.render('index')
// })

//Listen on port 3000
 // PORT THROWING ERROR, USING PORT 2 UNTIL FIX IS FOUND
//   server = app.listen(PORT)
// //  server.listen(PORT2, () => {
// //     console.log('listening')
// //   })
// //socket.io instantiation
// const io = require("socket.io")(server)


// //listen on every connection
// io.on('connection', (socket) => {
// 	console.log('New user connected')

// 	//default username
// 	socket.username =  'Stranger'

//     //listen on change_username
//     socket.on('change_username', (data) => {
//         socket.username = data.username
//     })

//     //listen on new_message
//     socket.on('new_message', (data) => {
//         //broadcast the new message
//         io.sockets.emit('new_message', {message : data.message, username : socket.username});
//     })

//     //listen on typing
//     socket.on('typing', (data) => {
//     	socket.broadcast.emit('typing', {username : socket.username})
//     })
// })

module.exports = router;