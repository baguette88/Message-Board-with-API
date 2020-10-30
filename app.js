

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




$(()=> {
  getMovie()

  $('form').on('submit', (event) => {
    event.preventDefault()
    console.log('clicky')
    titleQuery = $('input[type="text"]').val()
    getMovie()
  })

  console.log(queryURL)
})

$('.btn-counter').on('click', function(event, count) {
  event.preventDefault();
  
  var $this = $(this),
      count = $this.attr('data-count'),
      active = $this.hasClass('active'),
      multiple = $this.hasClass('multiple-count');
  
  // First method, allows to add custom function
  // Use when you want to do an ajax request
  /* if (multiple) {
  $this.attr('data-count', ++count);
  // Your code here
  } else {
  $this.attr('data-count', active ? --count : ++count).toggleClass('active');
  // Your code here
  } */
  
  // Second method, use when ... I dunno when but it looks cool and that's why it is here
  $.fn.noop = $.noop;
  $this.attr('data-count', ! active || multiple ? ++count : --count  )[multiple ? 'noop' : 'toggleClass']('active');
  
});