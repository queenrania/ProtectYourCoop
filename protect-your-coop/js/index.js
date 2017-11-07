

function gameLayout(){
    var container = $("#container");
    var count = 48;

    var square = 'square';
    var insideSquare = 'insideSquare';
    var topBorderX = 'topBorderX';
    var bottomBorderX = 'bottomBorderX';
    for (var i=0; i<count; i++) {
          container.append('<div id= "number' + i + '" class="' + square + ' "><div class="' + insideSquare + '"><div class="' + topBorderX + '"></div><div class="' + bottomBorderX + '"></div></div></div>');

    }  
}; 
function gameOver(){   
  //alert('time out');
  var numWinningItems = $('.winningState').length;
  var numLosingItems = $('.losingState').length;
  if (numWinningItems == 40) {
    //alert('you ran out of time but guess what!! you did it!!')
  } else if (numLosingItems == 8){
    // alert('you are out of time...brain power failed');
  }
  $('.square').unbind("click"); 

  //alert("Time is OUT");
  //$('#timeOut').css('visibility','visible');
  //$('#timeOut').css('visibility','visible');
 terminate();
}
function gameOverWin(){   
  // alert('gaveOver code -- you win');
  var numWinningItems = $('.winningState').length;
  var numLosingItems = $('.losingState').length;

  $('.square').unbind("click"); 

  //alert("Time is OUT");
  //$('#timeOut').css('visibility','visible');
  //$('#timeOut').css('visibility','visible');
 restart();
}
function gameOverLose(){   
  // alert('gaveOver code -- you lose');
  var numWinningItems = $('.winningState').length;
  var numLosingItems = $('.losingState').length;

  $('.square').unbind("click"); 

  //alert("Time is OUT");
  //$('#timeOut').css('visibility','visible');
  //$('#timeOut').css('visibility','visible');
 terminate();
}
// TERMINATE FUNCTION
function terminate(){ 
  // alert('terminate');
  $('#timeOut, #timeOutAnimation, #visualTimer').css('visibility','visible');
  myStopFunction();
};

// RESTART FUNCTION
function restart(){ 
  $('#youWin, #youWinAnimation, #visualTimer').css('visibility','visible');
  myStopFunction();
};
// set TIMEOUT function
var myVar;  
function myFunction() { 
    myVar = setTimeout(function(){ 
      gameOver();
    }, 30000); 
}
function myStopFunction() {
    clearTimeout(myVar); 
}
function startOver(){
  location.reload(true);
};

gameLayout();
function addWinningClass(){
  $('.square').click(function() {  
    var $this = $(this); 

    if ($this.hasClass('winningState')) {
      $this.removeClass('circle state2win').addClass('winningState');

    } else if ($this.hasClass('state2win')) {
      $this.removeClass('circle state2win').addClass('winningState'); 

    } else if ($this.hasClass('circle')) {
      $this.addClass('state2win');
    } else {
      $this.addClass('circle state2win');  
    }

    function youWin(){
      var numItems = $('.winningState').length;
      //alert(numItems);
      if (numItems == 40) {
        // alert('you win');
        gameOverWin();
      }  
    }
    youWin();  

  });  
}; 
addWinningClass();

// addLosingClass to a specific 8 -- this will evenutally be a function that randomizes the numbers as you add levels
function addLosingClass(){
  $('#number11, #number47, #number2, #number13, #number8, #number33, #number40, #number29').click(function() {  
    var $this = $(this); 

    if ($this.hasClass('losingState')) {
      $this.removeClass('circle state2lose winningState').addClass('losingState'); 

    } else if ($this.hasClass('state2lose')) {
      $this.removeClass('circle state2lose winningState').addClass('losingState');

    } else if ($this.hasClass('circle')) {
      $this.addClass('state2lose');
    } else {
      $this.addClass('circle');   
    }

    function youLose(){
      var numItems = $('.losingState').length;
      //alert(numItems);
      if (numItems == 8) {
        // alert('you hit too many foxes');
        gameOverLose();
      }  
    }
    youLose(); 
  });
};

addLosingClass();

  //setTimeout(gameOver, 30000);            

    $(document).ready(function(){
        $("#intro1").fadeIn(100);
    $(document).on('click','#next1_button',function(){
          var $this=$(this);
          $this.prop('id','next2_button');
          $this.val("NEXT");
          $("#intro1").fadeOut(200);
          $("#intro2").fadeIn(1000);
          });
      });
      $(document).on('click','#next2_button',function(){
          var $this=$(this);
          $this.prop('id','next1_button');
          $this.val("NEXT");
          $("#intro2").fadeOut(200);
          $("#intro3").fadeIn(1000);
      });
      $(document).on('click','#next2_button',function(){
          var $this=$(this);
          $this.prop('id','play_button');
          $this.val("PLAY");
          $("#intro3");
      });
      
       // Visual Timer
       window.onload = function () {
            var display = document.querySelector('#visualTimer'),
                timer = new CountDownTimer(30),
                timeObj = CountDownTimer.parse(30);
        
            format(timeObj.minutes, timeObj.seconds);
            
            timer.onTick(format);

            $(document).on('click','#play_button',function(){
                timer.start();
                $("#intro3").fadeOut(200);
                $(".mask").fadeOut(200);
                $("#play_button").fadeOut(200);
                $('#play_button').unbind("click");                
                $("#timerDiv").fadeIn(200); 
              myFunction();    
              });
            
            function format(minutes, seconds) {
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
               display.textContent = minutes + ':' + seconds;
            }
        };

$('#timeOut, #timeOutAnimation').click(function () {
  //alert('you lose');

      $('.square').removeClass('circle state2lose state2win winningState losingState');
      $('#timeOut, #timeOutAnimation').css('visibility','hidden');
      $('.square').attr("hasBeenClicked", "false");
    //startOver();
    addWinningClass();
    addLosingClass();
    myFunction();
  }); 
 $('#youWin, #youWinAnimation').click(function () {
  //alert('you win');

      //startOver();
   
      $('.square').removeClass('circle state2lose state2win winningState losingState');
      $('#youWin, #youWinAnimation').css('visibility','hidden');
      $('.square').attr("hasBeenClicked", "false");
    //startOver();
    addWinningClass();
    addLosingClass();
    myFunction();
  });