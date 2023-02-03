
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;
var k1=0;
//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + 0);
    //var lt;
    //for(lt=0;lt<=level;lt++){
    nextSequence();                    //YAHA SE SHURU KRNA H
  //}
    started = true;
    //level++;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  //for(var m=0;m<4;m+=1){
  //  if(userChosenColour==buttonColours[m]){
  console.log(gamePattern);
  console.log(userClickedPattern);
      checkAnswer(userChosenColour);
    //  }
  //}
});

function nextSequence() {

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //if(level>1){
  playSound(randomChosenColour);
  //}
  //userClickedPattern=[];
  //level++;
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 200);
}


function checkAnswer(currentLevel){

  // if(userClickedPattern===gamePattern){
  //   console.log("success");
  // }
  // else{
  //   console.log("Fail");
  // }
//   var is_same;
//   console.log(is_same = (userClickedPattern.length == gamePattern.length) && userClickedPattern.every(function(element, index) {
//     return element === gamePattern[index];
// }));
if(currentLevel===gamePattern[k1]){
  console.log("true");
  k1++;
}
else{
  console.log("False");
  wrongAnswer();
  return 0;
}
if(k1===gamePattern.length){
  setTimeout(function(){
    userClickedPattern=[];
    k1=0;
    level++;
    nextSequence()
  },1000)};
  }

  function wrongAnswer(){
    var t=new Audio("sounds/wrong.mp3");
    t.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },250);
    $("h1").html("Game Over, Press Any Key to Restart");
    startOver();
  }

  function startOver(){
  level=0;
  gamePattern=[];
  userClickedPattern=[];
  k1=0;
  started=false;
  //nextSequence();
  }
