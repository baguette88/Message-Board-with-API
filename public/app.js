console.log("app.js connected")
$(document).ready(function(){
    let cl = (value) => console.log(value);
    cl("Jquery Active")

     let userName = ''
    let defaultName = userName || 'Stranger'
const $tellplayer=  document.getElementById("tellPlayer")
const $gameScene1 = document.getElementsByClassName("gameScene1")
const $gameScene2 = document.getElementsByClassName("gameScene2")
const $titleScene = document.getElementsByClassName("titleScene")
const $gameOverScene = document.getElementsByClassName("gameOverScene")

function showTitleScene() {
$($titleScene).show()
 $($gameScene1).hide()   //HIDE ENTIRE DIV
 $($gameScene2).hide() 
 $($gameOverScene).hide()
}

function showFeed() {
    $(".titleScene").hide()
    $(".gameScene1").fadeIn(400).show()
    $(".gameScene2").hide()
    $(".gameOverScene").hide()
    console.log("btn2")
    // $(".navbar").animate({ scrollBottom: $(document).height() }, -1000);
    // // NEED AUTOSCROLL TO BOTTOM OF MESSAGES
    //   });
}

let loggedIn = 1
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

checkLogin()

// showTitleScene()

function createUser() {
    console.log("user created")
}



function LogIn() {
    console.log("logged in")
}




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
    tobottom()
    // NEED AUTOSCROLL TO BOTTOM OF MESSAGES
      });
    
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
  
function tobottom(){
	$('html, body').animate({scrollTop:$(document).height()}, 'slow');

$(function(){
    //make connection
 let socket = io.connect('http://localhost:3001')

 //buttons and input
 let message = $("#message")
 let username = $("#username")
 let send_message = $("#send_message")
 let send_username = $("#send_username")
 let chatroom = $("#chatroom")
 let feedback = $("#feedback")
 let ulz = $('.ulz')

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


}

const baseURL = `http://www.omdbapi.com/?`
const apiKey = `apikey=53aa2cd6` //backticks
// ff05b1a8 MINE
const queryType = `t=`
let titleQuery = 'fight club'
let queryURL = baseURL + apiKey + '&' + queryType




const getMovie = () => {
  $.ajax({
    url: queryURL + titleQuery
  }).then((movieData) => {
    console.log(movieData)
    $('.container').html(`
      <h2> ${movieData.Title} </h2>
      <h3> ${movieData.Year} </h3>
      <h4> ${movieData.Rated} <h4>
      <h5> ${movieData.Genre} <h5>
      <p>  ${movieData.Plot} </p>
      `)
      const $img = $('<img>').attr('src', movieData.Poster).attr('alt', movieData.Title)
      $('.container').append($img)
  }, (error) => {
    console.error(error)
  })
}
