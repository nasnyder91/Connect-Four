$(document).ready(function(){

  //Global variables
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

    var beginTop = $(this).offset().top - $(".game").scrollTop();
    var beginLeft = $(this).offset().left - $(".game").scrollLeft();
    var endTop;
    var height = $(this).height();
    var width = $(this).width();
    var noURLPiece = piece.replace("url(", "");
    noURLPiece = noURLPiece.replace(")", "");

    for(var r = 6; r > 0; r--){
      if($(boardArr[r][col]).attr("taken") != "true"){
        endTop = $(boardArr[r][col]).offset().top - $(".game").scrollTop();
        $(".game").append("<img id='piece"+r+col+"' class='piece img-responsive' row='"+r+"' col='"+col+"' src='"+noURLPiece+"'>");
        $("#piece"+r+col+"").offset({top:beginTop, left: beginLeft});
        $("#piece"+r+col+"").height(height);
        $("#piece"+r+col+"").width(width);
        $("#piece"+r+col+"").animate({top: endTop},200).animate({top: (endTop-30)},75).animate({top: endTop},75).animate({top: (endTop-20)},75).animate({top: endTop},75).animate({top: (endTop-10)},75).animate({top: endTop},75);


        //$(boardArr[r][col]).css("background-image", piece);
        $(boardArr[r][col]).attr("taken", true);
        break;
      }
    };

    changeTurn();
  });

  //Resize/align elements on browser window resize
  $(window).resize(function(){
    for(var r = 0; r < 7; r++){
      for(var c = 0; c < 7; c++){
        $("#piece"+r+c+"").height($(boardArr[r][c]).height());
        $("#piece"+r+c+"").width($(boardArr[r][c]).width());
        $("#piece"+r+c+"").offset({top:$(boardArr[r][c]).offset().top - $(".game").scrollTop(), left: $(boardArr[r][c]).offset().left - $(".game").scrollLeft()});
      };
    };
  });

//Switch turns
  function changeTurn(){
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
  }
});
