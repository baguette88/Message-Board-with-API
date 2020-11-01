console.log("app.js connected")
$(document).ready(function(){
    let cl = (value) => console.log(value);
    cl("Jquery Active")

const $tellplayer=  document.getElementById("tellPlayer")
const $gameScene1 = document.getElementsByClassName("gameScene1")
const $gameScene2 = document.getElementsByClassName("gameScene2")
const $titleScene = document.getElementsByClassName("titleScene")
const $gameOverScene = document.getElementsByClassName("gameOverScene")

$($titleScene).show()
 $($gameScene1).hide()   //HIDE ENTIRE DIV
 $($gameScene2).hide() 
 $($gameOverScene).hide()

$(".btn1").click(function btn1(){ //TITLE SCREEN
    $(".titleScene").fadeIn(700).show().css("color","green")
    $(".gameScene1").hide()
    $(".gameScene2").hide()
    $(".gameOverScene").hide()
    console.log("btn1")
       });
$(".btn2").click(function btn2(){ //Game Scene 1
    $(".titleScene").hide()
    $(".gameScene1").fadeIn(400).show()
    $(".gameScene2").hide()
    $(".gameOverScene").hide()
    console.log("btn2")
    });
$(".btn3").click(function btn3(){ //Game Scene 2
    $(".titleScene").hide()
    $(".gameScene1").hide()
    $(".gameScene2").fadeIn(700).show().css("color","green")
    $(".gameOverScene").hide()
    console.log("btn3")
    });
$(".btn4").click(function btn4(){ //Game Over Scene
    $(".titleScene").hide()
    $(".gameScene1").hide()
    $(".gameScene2").hide()
    $(".gameOverScene").fadeIn(700).show().css("color","green")
    console.log("btn4")
    });  
$(".btn5").click(function btn5(){ //Game Over Scene
     $(".titleScene").hide()
     $(".gameScene1").show().css("color","green")
    $(".gameScene2").hide()
     $(".gameOverScene").hide()
     console.log("btn5")
        });  
});  


$(function(){
    //make connection
 var socket = io.connect('http://localhost:3001')

 //buttons and input
 var message = $("#message")
 var username = $("#username")
 var send_message = $("#send_message")
 var send_username = $("#send_username")
 var chatroom = $("#chatroom")
 var feedback = $("#feedback")
 var ulz = $('.ulz')

 //Emit message
 send_message.click(function(){
     socket.emit('new_message', {message : message.val()})
 })

 //Listen on new_message
 socket.on("new_message", (data) => {
     feedback.html('');
     message.val('');
     chatroom.append("<li class='message'>" + data.username + ": " + data.message + "</li>")
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




// const baseURL = `http://www.omdbapi.com/?`
// const apiKey = `apikey=53aa2cd6` //backticks
// // ff05b1a8 MINE
// const queryType = `t=`
// let titleQuery = 'fight club'
// let queryURL = baseURL + apiKey + '&' + queryType




// const getMovie = () => {
//   $.ajax({
//     url: queryURL + titleQuery
//   }).then((movieData) => {
//     console.log(movieData)
//     $('.container').html(`
//       <h2> ${movieData.Title} </h2>
//       <h3> ${movieData.Year} </h3>
//       <h4> ${movieData.Rated} <h4>
//       <h5> ${movieData.Genre} <h5>
//       <p>  ${movieData.Plot} </p>
//       `)
//       const $img = $('<img>').attr('src', movieData.Poster).attr('alt', movieData.Title)
//       $('.container').append($img)
//   }, (error) => {
//     console.error(error)
//   })
// }



