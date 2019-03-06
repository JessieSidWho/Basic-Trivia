/*
- What variables do I need?
  + correctAnswers
  + wrongAnswers
  + intervalID (timer)

- What buttons do I need?
  + START
  + SUBMIT
  + RESET

- What functions will I need?
  + Start Button Click
    -- start timer
    -- display questions w/ radio buttons? (.hide() && .show())
    -- 
  + Timer function
  + Reset Button

- What functions need to be called?
  + Once the start button is clicked, questions appear
  + Timer will need to start automatically
  + Once timer stops NewDiv loads with score
*/




$(document).ready(function(){

  // questions are hidden before start
  $("#questions").hide();
  
  // variables
  var correctAnswers = 0;
  var wrongAnswers = 0;
  var timeStart = 101;
  var intervalID;
  
  // reset function
  var intializeReset = function(){
    correctAnswers = 0;
    wrongAnswers = 0;
  }

  var timer = function(){
    
  }

  $("#start").on("click", function(){

    console.log("You click the start button!");


    


  });







});