$(document).ready(function(){
  var boardArr = [[],[],[],[],[],[],[]];

  var boardhtml = "";

  var piece = "url(img/red.png)";

  var turn = "red";


  //Create board
  for(var i = 0; i < 7; i++){
    boardhtml += "<div id='box"+i+"' class='aboveBoardSection' col="+i+"></div>";
  };
  for(var i = 7; i < 49; i++){
    boardhtml += "<img id='box"+i+"' class='boardSection img-responsive' src='img/ConnectFour.png' taken='false'>";
  };
  $(".board").html(boardhtml);

  //Populate board Array
  for(var r = 0; r < 7; r++){
    for(var c = 0; c < 7; c++){
      boardArr[r].push($("#box" + (c+(7*r))));
    };
  };

  //Show piece above board
  $(".aboveBoardSection").hover(function(){
    $(this).css("background-image", piece);
  }, function(){
    $(this).css("background-image", "none");
  });

  //Drop a piece, make a turn
  $(".aboveBoardSection").click(function(){
    var col = $(this).attr("col");
    for(var r = 6; r > 0; r--){
      if($(boardArr[r][col]).attr("taken") != "true"){
        $(boardArr[r][col]).css("background-image", piece);
        $(boardArr[r][col]).attr("taken", true);
        break;
      }
    };


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
