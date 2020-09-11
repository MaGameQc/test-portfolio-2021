setTimeout(function () {
  // $("#rightDoor").css("display", "none");
  // $("#leftDoor").css("display", "none");

  // $("#doorBackground").css("display", "none");
  $("#doorContainer").css("display", "none");

}, 2500);

$("#aboutMe").click(function () {




$("#aboutMeText").empty();


  var text = 'Bonjour, moi cest Tommy, programmeur web front-end qui compte bien devenir full stack un jour. Je suis animateur de podcast, compositeur et ce qui me passionne par dessu tout, cest la technologie en générale. Un jour alors que je travaillais tout les jours sur une application web, je me suis posé la question "mais comment ont ils créer ce site web", et depuis, jai jamais cesser de programmer';
  var writeTextIn = document.getElementById("aboutMeText");
  var i = 0;

  function shit() {
      if (i < text.length) {
          writeTextIn.innerHTML += text.charAt(i);

          i++;
          setTimeout(shit, 30);
      }
  }
  shit();
});

var imageIsLoaded = new Image();
imageIsLoaded.src = "door/doorLeft.png";
imageIsLoaded.onload = function () {
  $("body").toggle();
};

var selection = new Audio("selection.wav");
var clicked = new Audio("clicked.wav");

$(".buttonDiv").mouseenter(function () {
  selection.currentTime = 0;
  selection.play();
});
$(".buttonDiv").click(function () {
  clicked.currentTime = 0;
  clicked.play();
});

var opacity = 0.3;
var state = true;
setInterval(function () {
  if (opacity >= 1) {
      state = false;
  }
  if (opacity <= 0.3) {
      state = true;
  }
  if (state == true) {
      opacity += 0.01;
      $("#subTitle").css("background-image", "linear-gradient(to right, rgba(0,0,0,0), rgba(255, 149, 36, " + opacity + "), rgba(0,0,0,0))");
  }
  if (state == false) {
      opacity -= 0.01;
      $("#subTitle").css("background-image", "linear-gradient(to right, rgba(0,0,0,0), rgba(255, 149, 36, " + opacity + "), rgba(0,0,0,0))");
  }
}, 20);

$("#projets").click(function () {
  $("#aboutMeContainer").css("display", "none");
  $("#projectCont").css("display", "grid");
  $("#contactMeMainContainer").css("display", "none");
});

$("#aboutMe").click(function () {
  $("#aboutMeContainer").css("display", "grid");
  $("#projectCont").css("display", "none");
  $("#contactMeMainContainer").css("display", "none");
});

$("#contactMe").click(function(){
  $("#aboutMeContainer").css("display", "none");
  $("#projectCont").css("display", "none");
  $("#contactMeMainContainer").css("display", "grid");
});

///////////////////////////ham menu

$("#hamburgerButton").click(function () {
  let listContainerActualHeight = $("#listContainer").height();
  if (listContainerActualHeight == 0) {
      mobileMenuShow();
      animateHamMenuStepOne();
  } else {
      mobileMenuHide();
      animateHamMenuStepTwo();
  }
});

mobileMenuShow = () => {
  $("#listContainer").css({ display: "grid", width: "100vw" });
  $("#listContainer").animate({ height: "90vh", opacity: "1" }, 1000);
  clicked.play();
};

animateHamMenuStepOne = () => {
  document.getElementById("line1").animate([{ transform: "translate(0px)" }, { transform: "translateY(-100px)", opacity: "0" }, { transform: "rotate(-45deg) translate(0, 11px)", opacity: "1" }], {
      duration: 800,
      delay: 0,
      fill: "forwards",
  });

  document.getElementById("line2").animate([{ transform: "translate(0px)" }, { transform: "translate(-100px)", opacity: "0" }], {
      duration: 300,
      delay: 150,
      fill: "forwards",
  });

  document.getElementById("line3").animate([{ transform: "translate(0px)" }, { transform: "translateY(100px)", opacity: "0" }, { transform: "rotate(45deg) translate(0, -11px)", opacity: "1" }], {
      duration: 800,
      delay: 300,
      fill: "forwards",
  });
};

mobileMenuHide = () => {
  clicked.play();
  $("#listContainer").animate({ height: "0px", opacity: "0" }, 1000);
  setTimeout(function () {
      $("#listContainer").toggle();
  }, 1000);
};

animateHamMenuStepTwo = () => {
  document.getElementById("line1").animate(
      [
          { transform: "rotate(0deg) translate(0, 11px)", opacity: "1" },
          { transform: "rotate(0deg) translateY(-100px)", opacity: "0" },
          { transform: "translate(0px)", opacity: "1" },
      ],
      {
          duration: 800,
          delay: 0,
          fill: "forwards",
      }
  );

  document.getElementById("line2").animate([{ transform: "translate(100px)" }, { transform: "translate(-0px)", opacity: "1" }], {
      duration: 300,
      delay: 150,
      fill: "forwards",
  });

  document.getElementById("line3").animate(
      [
          { transform: "rotate(0deg) translate(0, -11px)", opacity: "1" },
          { transform: "rotate(0deg) translateY(100px)", opacity: "0" },
          { transform: "translate(0px)", opacity: "1" },
      ],
      {
          duration: 800,
          delay: 300,
          fill: "forwards",
      }
  );
};


// $(".projectsTestButton").on("mouseover", function(){
//     let getElementIndex = $(this).index();
//     alert(getElementIndex);
//   document.getElementsByClassName("underButton")[getElementIndex].animate([{ transform: "translate(0px, 0px) skew(-30deg)" }, { transform: "translate(-10px, -10px) skew(-30deg)" }], {
//     duration: 800,
//     delay: 0,
//     fill: "forwards",
// });
// });