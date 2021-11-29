var score = 0;
onEvent("button5", "click", function( ) {
  setScreen("storypage1");
});
onEvent("button12", "click", function( ) {
  setScreen("storypage2");
});
onEvent("button14", "click", function( ) {
  setScreen("storypage3");
});
onEvent("button15", "click", function( ) {
  setScreen("storypage4");
});
onEvent("button16", "click", function( ) {
  setScreen("question1screen");
});
onEvent("button1", "click", function( ) {
  setScreen("answer1incorrect");
});
onEvent("button2", "click", function( ) {
  setScreen("answer1incorrect");
});
onEvent("button3", "click", function( ) {
  setScreen("answer1incorrect");
});
onEvent("button4", "click", function( ) {
  setScreen("answer1correct");
  score = score + 1;
});
onEvent("button19", "click", function( ) {
  setScreen("question2screen");
});
onEvent("button18", "click", function( ) {
  setScreen("question2screen");
});
onEvent("button7", "click", function( ) {
  setScreen("answer2incorrect");
});
onEvent("button9", "click", function( ) {
  setScreen("answer2incorrect");
});
onEvent("button10", "click", function( ) {
  setScreen("answer2incorrect");
});
onEvent("button11", "click", function( ) {
  setScreen("answer2correct");
  score = score + 1;
});
onEvent("buttonnext", "click", function( ) {
  setScreen("question3screen");
});
onEvent("button23", "click", function( ) {
  setScreen("question3screen");
});
onEvent("button6", "click", function( ) {
  setScreen("answer3correct");
  score = score + 1;
});
onEvent("button8", "click", function( ) {
  setScreen("Answer3incorrect");
});
onEvent("button17", "click", function( ) {
  setScreen("scorescreen");
  setText("score", score);
});
onEvent("button24", "click", function( ) {
  setScreen("scorescreen");
  setText("score", score);
});
onEvent("button25", "click", function( ) {
  setScreen("storypage1");
  score = 0;
});
onEvent("button13", "click", function( ) {
  playSound("assets/mermaids-message.mp3", false);
});
