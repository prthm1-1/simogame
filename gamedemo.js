var userClickedPattern=[];
var i=0;
var j=0;
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randomChosenColour;


//$("document").ready(function(){
randomChosenColour = buttonColours[nextSequence()];
$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//});


function nextSequence() {
  j+=1;
  var randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(buttonColours[randomNumber]);
  return randomNumber;
}




function soundPlay(randomColour){
  //$("#" + randomColour).click(function() {
    var sound = new Audio("sounds/" + randomColour + ".mp3");
    sound.play();
  //});
  // i+=1;
  animatePress(randomColour);
}



// $("document").ready(function(){
  $(".btn").click(function(){
    // if (i==0){
    //   nextSequence();
    // }
    //else{
    levell(j);
    i+=1;
      console.log(i);
      var userChosenColour = this.id;
      userClickedPattern.push(userChosenColour);
      //console.log(userClickedPattern);
     // var soun=new Audio("sounds/"+userChosenColour+".mp3");
     // soun.play();
     soundPlay(userChosenColour);
     animatePress(userChosenColour);

  }).keydown(function(event){
    // if (i==0){
    //   nextSequence();
    // }
    // else{
      console.log(i);
      var userChosenColour = this.id;
      userClickedPattern.push(userChosenColour);
      //console.log(userClickedPattern);
     // var soun=new Audio("sounds/"+userChosenColour+".mp3");
     // soun.play();
     soundPlay(userChosenColour);
     animatePress(userChosenColour);
     i+=1;
   //}
 });





function animatePress(currentColor) {

  //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function levell(j){
    $("#level-title").html("Level "+j);
}
