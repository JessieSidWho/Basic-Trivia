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
  $("#timer").hide();
  $("#reset").hide();
  $("#start").show();


  // Answer Key
  const answerKey = {

    question1: 2,
    question2: 3,
    question3: 1,
    question4: 3,
    question5: 2,
    question6: 3,

  };
  
  // Variables
  var correctAnswers = 0;
  var wrongAnswers = 0;
  var timeStart = 60;
  var intervalId;
  
  // Reset function
  var intializeReset = function(){
    correctAnswers = 0;
    wrongAnswers = 0;
    timeStart = 60;

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    $("#questions").hide();
    $("#timer").hide();
    $("#reset").hide();
    $("#start").show();

    $('#reset').click(function () {

      $(".answers").each(function(i) 
       {
            this.checked = false;
       });
  
    });
  }


  // Timer function
  function decrement() {
    timeStart--;

    if (timeStart > 9) {
      $("#timer").html("00:" + timeStart);
    } else if (timeStart < 10) {
      $("#timer").html("00:0" + timeStart);  
    }
    if (timeStart === 0) {
      clickSubmit();
    }
  }

  // START button click
  $("#start").on("click", function(){
    // console.log("You click the start button!");
    $("#start").hide();
    $("#questions").show();
    $("#timer").show();
    $("#reset").hide();

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    decrement(); 
  });


  // Submit Function
  var clickSubmit = function(){

    $("#start").hide();
    $("#questions").hide();
    $("#timer").hide();
    $("#reset").show();
    clearInterval(intervalid);
    $(".answers").each(function(){
      // console.log($(this).is(":checked"));
      
      if ($(this).is(":checked") === true) {
            
            var q = $(this).attr("name");
            var ans = $(this).attr("data-ans");
          if (ans == answerKey[q]) {
            correctAnswers++;
          } else {
            wrongAnswers++
          }
      }
    });

    $("#correct").html("You got " + correctAnswers + " right!");
    $("#wrong").html("You got " + wrongAnswers + " wrong!");
    
  }


  // SUBMIT button click
    $("#submit").on("click", clickSubmit);

  // RESET button click
  $("#reset").on("click", function(){
    // console.log("You clicked the Reset Button!");
    intializeReset();
  });

  intializeReset();

});