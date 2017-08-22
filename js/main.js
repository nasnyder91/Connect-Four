$(document).ready(function(){
  var boardArr = [];

  var boardhtml = "";

  var piece;

  var turn;

  for(var i = 0; i < 7; i++){
    boardhtml += "<div class='aboveBoardSection btn'></div>"
  }
  for(var i = 7; i < 49; i++){
    boardhtml += "<img class='img-responsive' src='img/ConnectFour.png'>";
  }

  $(".board").html(boardhtml);

  $(".aboveBoardSection").hover(function(){

    $(this).css("background-image", "url(img/red.png)");
  }, function(){
    $(this).css("background-image", "none");
  });
});
