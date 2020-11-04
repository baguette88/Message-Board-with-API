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
showFeed()

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

$(".btn1").click(function btn1(){ //TITLE SCREEN
    $(".titleScene").fadeIn(700).show().css("color","green")
    $(".gameScene1").hide()
    $(".gameScene2").hide()
    $(".gameOverScene").hide()
    $(".titleScene").css("background-image",url("public/back.jpg"))
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
    $(".gameScene2").show().css("color","black")
    $(".gameOverScene").hide()
    console.log("btn3")
    getMovie()
   
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
     getMovie()
        });  
  
function tobottom(){
  $('html, body').animate({scrollTop:$(document).height()}, 'slow');
  getMovie()
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
    $('.p').html(`
      <h2> ${movieData.Title} </h2>
      <h3> ${movieData.Year} </h3>
      <h4> ${movieData.Rated} <h4>
      <h5> ${movieData.Genre} <h5>
      <p>  ${movieData.Plot} </p>
      `)
      console.log(movieData.Title)
      const $img = $('<img>').attr('src', movieData.Poster).attr('alt', movieData.Title)
      $('.p').append('body')
  }, (error) => {
    console.error(error)
  })
}

//sidebar functions
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
