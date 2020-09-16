setTimeout(function () {
  // $("#rightDoor").css("display", "none");
  // $("#leftDoor").css("display", "none");

  // $("#doorBackground").css("display", "none");
  $("#doorContainer").css("display", "none");
}, 2500);

$("#aboutMe").click(function () {
  $("#aboutMeText").empty();

  var text =
      'Bonjour, moi cest Tommy, programmeur web front-end qui compte bien devenir full stack un jour. Je suis animateur de podcast, compositeur et ce qui me passionne par dessu tout, cest la technologie en générale. Un jour alors que je travaillais tout les jours sur une application web, je me suis posé la question "mais comment ont ils créer ce site web", et depuis, jai jamais cesser de programmer';
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

$("#contactMe").click(function () {
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

var autoTyper = {
  description1:
      "Ceci est un projet que j'ai réaliser afin d'apprendre le piano. apprendre les accords, les gammes majeurs et mineurs et surtout, me servir du WEB MIDI API afin qu'il soit compatible avec les clavier MIDI brancher par usb. Ce projet m'as appris qu'il y as étonnament une logique mathématique derrirrière la musique et que c'est donc facilement programmable.",
  description2: "ceci est le test no 2 ceci est le test no 2 ceci est le test no 2 ceci est le test no 2 ceci est le test no 2 ceci est le test no 2 ceci est le test no 2",
  description3: "test no 3 test no 3 test no 3 test no 3 test no 3 test no 3 test no 3",

  project1: document.getElementById("project1"),
  project2: document.getElementById("project2"),
  project3: document.getElementById("project3"),

  title: document.getElementById("title"),
  generatedText: document.getElementById("aboutMeText2"),
  autoTypeIndex: 0,

  showDescription: function () {
      this.title.style.display = "none";
      document.getElementById("subTitle").style.display = "none";
      this.generatedText.style.display = "inline";
  },

  hideDescription: function () {
      this.title.style.display = "block";
      document.getElementById("subTitle").style.display = "block";
      this.generatedText.innerHTML = "";
      this.generatedText.style.display = "none";
  },

  createMouseEnterEventListener: function () {
      document.querySelectorAll(".thumbnailContainer").forEach(function (item) {
          item.addEventListener("mouseenter", function () {
              if (autoTyper.generatedText.style.display == "none") {
                  autoTyper.showDescription();
                  autoTyper.setAutoType(item.id);
              }
          });
      });
  },

  createMouseLeaveEventListener: function () {
      document.querySelectorAll(".thumbnailContainer").forEach(function (item) {
          item.addEventListener("mouseleave", function () {
              if (autoTyper.generatedText.style.display == "inline") {
                  autoTyper.hideDescription();
                  autoTyper.cancelAutoType();
              }
          });
      });
  },

  autoType: "",

  setAutoType: function (description) {
    let descriptionToWrite ;
    switch (description) {
      case "project1":
        descriptionToWrite = this.description1;
        break;

      case "project2":
        descriptionToWrite = this.description2;
        break;

      case "project3":
        descriptionToWrite = this.description3;
      break;
    
      default:
        console.log("error, did not find any corresponding description");
        break;
    }

    autoTyper.autoType = setInterval(function () {
      autoTyper.generatedText.innerHTML += descriptionToWrite.charAt(autoTyper.autoTypeIndex);
      autoTyper.autoTypeIndex++;
  }, 10);
  },

  cancelAutoType: function () {
      autoTyper.autoTypeIndex = 0;
      clearInterval(autoTyper.autoType);
  },
};

console.log("1111" + autoTyper.autoType);

autoTyper.createMouseEnterEventListener();
autoTyper.createMouseLeaveEventListener();

// function shit() {
//   if (i < text.length) {
//       writeTextIn.innerHTML += text.charAt(i);

//       i++;
//       setTimeout(shit, 30);
//   }
// }
