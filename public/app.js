console.log("app.js connected")

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetBottom;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// $(function(){
//    	//make connection
// 	var socket = io.connect('http://localhost:3000')

// 	//buttons and inputs
// 	var message = $("#message")
// 	var username = $("#username")
// 	var send_message = $("#send_message")
// 	var send_username = $("#send_username")
// 	var chatroom = $("#chatroom")
// 	var feedback = $("#feedback")

// 	//Emit message
// 	send_message.click(function(){
// 		socket.emit('new_message', {message : message.val()})
// 	})

// 	//Listen on new_message
// 	socket.on("new_message", (data) => {
// 		feedback.html('');
// 		message.val('');
// 		chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
// 	})

// 	//Emit a username
// 	send_username.click(function(){
// 		socket.emit('change_username', {username : username.val()})
// 	})

// 	//Emit typing
// 	message.bind("keypress", () => {
// 		socket.emit('typing')
// 	})

// 	//Listen on typing
// 	socket.on('typing', (data) => {
// 		feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
// 	})
// });




// const baseURL = `http://www.omdbapi.com/?`
// const apiKey = `apikey=53aa2cd6` //backticks
// // ff05b1a8 MINE
// const queryType = `t=`
// let titleQuery = 'fight club'
// let queryURL = baseURL + apiKey + '&' + queryType

           
// $(".like button").on("click", function() {
//   var $count = $(this).parent().find('.count');
//   $count.html($count.html() * 1 + 1);
//   if ($count > 5) {('.count').css("color","green") }
  
// }); 



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




// $(()=> {
//   getMovie()

//   $('form').on('submit', (event) => {
//     event.preventDefault()
//     console.log('clicky')
//     titleQuery = $('input[type="text"]').val()
//     getMovie()
//   })

//   console.log(queryURL)
// })

// $('.btn-counter').on('click', function(event, count) {
//   event.preventDefault();
  
//   var $this = $(this),
//       count = $this.attr('data-count'),
//       active = $this.hasClass('active'),
//       multiple = $this.hasClass('multiple-count');
  
 
// });