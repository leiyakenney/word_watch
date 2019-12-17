import $ from 'jquery'

$(document).ready(() => {
  $.ajax({
    url: "https://wordwatch-api.herokuapp.com/api/v1/top_word",
    success: function(data){
      $(".word-count").append(`"${Object.keys(data.word)}" sample: ${Object.values(data.word)}`)
    },
    error: function(error){
      console.log(error)
    }
  }),

  $("#breakdown").click(function() {
    let text = $("#submission").val()

    $.ajax({
      type: "POST",
      url: "https://wordwatch-api.herokuapp.com/api/v1/words",
      data: JSON.stringify({ word: { value: `${text}`}}),
      contentType: "application/json",
      success: function(response) {
        alert("sample added")
        $("#submission").val("")
      },
      error: function(error){
        console.log(error)
      }
    })
  })
})
