import $ from 'jquery'

$(document).ready(() => {
  $.ajax({
    url: "https://wordwatch-api.herokuapp.com/api/v1/top_word",
    success: function(data){
      $('.word-count').append(`The most popular word is ${Object.keys(data.word)} with a frequency of ${Object.values(data.word)}`)
    },
    error: function(error){
      console.log(error)
    }
  })
})
