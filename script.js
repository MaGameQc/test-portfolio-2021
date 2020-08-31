
setTimeout(function(){ 
    $("#rightDoor").css("display", "none");
    $("#leftDoor").css("display", "none");

    $("#doorBackground").css("display", "none");

  }, 2500);

  
$("#aboutMe").click(function(){
    var text = "Bonjour, mon nom est Tommy Audet, gros fan de programmation web et de halo, vous l'aurez surement deviner tout seul...";
    var writeTextIn = document.getElementById("blinkingBorder");
    var i = 0;
  
    function shit(){
      if(i < text.length){
      writeTextIn.innerHTML += text.charAt(i);
    
      i++
      setTimeout(shit, 30);
    }
    }
  shit();
  
  
  });
  
    var imageIsLoaded = new Image();
    imageIsLoaded.src = "door/doorLeft.png";
    imageIsLoaded.onload = function(){$("body").toggle();}
  
  
  
    var selection = new Audio("selection.wav");
    var clicked = new Audio("clicked.wav")
  
    $(".buttonDiv").mouseenter(function() {
      selection.currentTime = 0;
    selection.play();
  });
  $(".buttonDiv").click(function(){
    clicked.currentTime = 0;
    clicked.play();
  });
  
  var opacity = 0.3;
  var state = true;
  setInterval(function(){
              if(opacity >= 1){
                state = false;
              }
              if(opacity <= 0.3){
                state = true
              }
              if(state == true){
                opacity += 0.01;
                 $("#subTitle").css("background-image", "linear-gradient(to right, rgba(0,0,0,0), rgba(255, 149, 36, "+ opacity +"), rgba(0,0,0,0))");
              }
              if(state == false){
                opacity -= 0.01;
                 $("#subTitle").css("background-image", "linear-gradient(to right, rgba(0,0,0,0), rgba(255, 149, 36, "+ opacity +"), rgba(0,0,0,0))");
                 
              }
              
              
           },20);
  
  
  $("#projets").click(function(){
    $("#upperContainer").toggle();
    $("#projetsContainer").toggle();
  });
  
  $("#aboutMe").click(function(){
    $("#aboutMeContainer").toggle();
    $("#upperContainer").toggle();
  });

  ///////////////////////////ham menu
  var viewPortHeight = document.documentElement.clientHeight;
  var viewPortWidth = document.documentElement.clientWidth;
  var actualNavBarHeight = $("#navBar").height(); 
  var actualNavBarWidth = $("#navBar").width(); 
  alert(actualNavBarWidth);

  $("#hamburgerButton").click(function(){
      if($("#navBar").height() == viewPortHeight){
        $("#navBar").animate({height: actualNavBarHeight+"px",width: actualNavBarWidth + "px", borderRadius: "50%"});
      } else{
        
        $("#navBar").animate({height: viewPortHeight+"px",width: viewPortWidth + "px", borderRadius: "0%"});
      }

  });