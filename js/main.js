$(document).ready(function(){
  var boardArr = [[],[],[],[],[],[],[]];

  var boardhtml = "";

  var piece = "url(img/red.png)";

  var turn = "red";


  //Create board
  for(var i = 0; i < 7; i++){
    boardhtml += "<div id='box"+i+"' class='aboveBoardSection'></div>";
  };
  for(var i = 7; i < 49; i++){
    boardhtml += "<img id='box"+i+"' class='img-responsive' src='img/ConnectFour.png'>";
  };
  $(".board").html(boardhtml);

  //Populate board Array
  for(var r = 0; r < 7; r++){
    for(var c = 0; c < 7; c++){
      boardArr[r].push($("#box" + (c+(7*r))));
    };
  };
  console.log(boardArr);

  //Show piece above board
  $(".aboveBoardSection").hover(function(){
    $(this).css("background-image", piece);
  }, function(){
    $(this).css("background-image", "none");
  });

  //Drop a piece, make a turn
  $(".aboveBoardSection").click(function(){
    


    if(turn == "red"){
      piece = "url(img/black.png)";
      turn = "black";
      return;
    };
    if(turn == "black"){
      piece = "url(img/red.png)";
      turn = "red";
      return;
    };
  });
});
