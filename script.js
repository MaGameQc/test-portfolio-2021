
setTimeout(function(){ 
    $("#rightDoor").css("display", "none");
    $("#leftDoor").css("display", "none");

    $("#doorBackground").css("display", "none");

  }, 2500);

  
$("#aboutMe").click(function(){
    var text = "Bonjour, mon nom est Tommy Audet, gros fan de programmation web et de halo, vous l'aurez surement deviner tout seul... ceci est un test";
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

  $("#hamburgerButton").click(function(){
      let listContainerActualHeight = $("#listContainer").height();
      if(listContainerActualHeight == 0){
        $("#listContainer").css({display: "block", width: "100vw"});

        $("#listContainer").animate({ height: "100vh", opacity: "1"},1000);

          document.getElementById("line1").animate(
            [
              { transform: 'translate(0px)'},
              { transform: 'rotate(-45deg) translate(0, 11px)'}
            ], {
              duration: 500,
              fill: 'both'
            }
          );

          document.getElementById("line2").animate(
            [
              { transform: 'translate(0px)'},
              { transform: 'translate(-100px)', opacity: '0'}
            ], {
              duration: 500,
              delay: 100,
              fill: 'forwards'
            }
          );

          document.getElementById("line3").animate(
            [
              { transform: 'translate(0px)'},
              { transform: 'rotate(45deg) translate(0, -11px)'}
            ], {
              duration: 500,
              delay: 0,
              fill: 'both'
            }
          );

      } else{
        $("#listContainer").animate({ height: "0px", opacity: "0"},1000);
            setTimeout(function(){
                $("#listContainer").toggle();
            },1000);
        
      }

  });