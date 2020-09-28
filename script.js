var projectsButton = {
  ghProject1 : document.getElementById("ghProject1"),
  demoProject1 : document.getElementById("demoProject1"),
  ghProject2 : document.getElementById("ghProject2"),
  demoProject2 : document.getElementById("demoProject2"),
  ghProject3 : document.getElementById("ghProject3"),
  demoProject3 : document.getElementById("demoProject3"),

  createListenners : function(){
    this.ghProject1.addEventListener("click", function(){
      projectsButton.redirect("https://github.com/MaGameQc/Projet-piano");
    });
    this.demoProject1.addEventListener("click", function(){
      projectsButton.redirect("https://magame.ca/piano/");
    });

    this.ghProject2.addEventListener("click", function(){
      projectsButton.redirect("https://github.com/MaGameQc/projet-JohnTube");
    });
    this.demoProject2.addEventListener("click", function(){
      projectsButton.redirect("https://magame.ca/jonTube/");
    });

    this.ghProject3.addEventListener("click", function(){
      projectsButton.redirect("https://github.com/MaGameQc/compendium");
    });
    this.demoProject3.addEventListener("click", function(){
      projectsButton.redirect("https://magame.ca/compendium/");
    });
    
  },

  redirect : function(url){
    window.location.href = url;
  }
}

projectsButton.createListenners();








setTimeout(function () {
  // $("#rightDoor").css("display", "none");
  // $("#leftDoor").css("display", "none");

  // $("#doorBackground").css("display", "none");
  $("#doorContainer").css("display", "none");
}, 2500);


var aboutMeState = false;
$("#aboutMe, #aboutMeList").click(function () {
  if(aboutMeState == false){
    $("#aboutMeText").empty();

    var text = "Bonjour, moi c'est Tommy, programmeur web front-end. Un jour, alors que je travaillais comme agent au soutien technique en informatique, je me suis mis à me demander comment fonctionne un site web, car je travaille sur des applications web. J'ai appris ce qu'était HTML et CSS, et j'ai jamais décroché depuis. J'ai tout appris seul, je sais comment apprendre et rapidement, j'ai développé plusieurs petits projets en HTML, CSS, Bootstrap, Javascript, Jquery, PHP, MySql." ;
    var writeTextIn = document.getElementById("aboutMeText");
    var i = 0;
  
    function writing() {
        if (i < text.length) {
            writeTextIn.innerHTML += text.charAt(i);
  
            i++;
            setTimeout(writing, 30);
        }
    }
    writing();
  }

  aboutMeState = true;

  

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

$("#projets, #projectList").click(function () {
  $("#aboutMeContainer").css("display", "none");
  $("#projectCont").css("display", "grid");
  $("#contactMeMainContainer").css("display", "none");
});

$("#aboutMe, #aboutMeList").click(function () {
  $("#aboutMeContainer").css("display", "grid");
  $("#projectCont").css("display", "none");
  $("#contactMeMainContainer").css("display", "none");
});

$("#contactMe, #contactMeList").click(function () {
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



var autoTyper = {
  description1: "Learn piano est une application web permettant d'apprendre les gammes, accords mineurs et majeurs au piano. Il est possible de jouer des notes avec les touches de votre clavier d'ordinateur, avec un click de la souris ou encore, Grace au Web Midi API, de brancher son piano par usb, et jouer les notes.",
  description2: "JonTube est Une reproduction de YouTube en version simplifié. Il est possible d'écouter une vidéo, la mettre en pause, la mettre en sourdine, l'avancer, commenter une vidéo et tout est codé en vanilla Javascript, puisque Jquery devient désuet.",
  description3: "Compendium est un projet que j'ai programmer pour les assistants technique en pharmacie. Ces assistants doivent souvent trouver le nom de la molécule d'un médicament rapidement. Par exemple, le nom de la molécule du Tylenol c'est de l'acétaminophène, et le seul compendium auquels ces employés ont accès est un petit livre pour se rappeller des noms plus compliqué comme le sulfaméthoxazole par exemple.",

  project1: document.getElementById("project1"),
  project2: document.getElementById("project2"),
  project3: document.getElementById("project3"),

  title: document.getElementById("title"),
  subTitle: document.getElementById("subTitle"),
  generatedText: document.getElementById("aboutMeText2"),
  autoTypeIndex: 0,

  showDescription: function () {
      this.title.style.display = "none";
      this.subTitle.style.display = "none";
      this.generatedText.style.display = "inline";
  },

  hideDescription: function () {
      this.title.style.display = "block";
      this.subTitle.style.display = "block";
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


autoTyper.createMouseEnterEventListener();
autoTyper.createMouseLeaveEventListener();

$("#myResumeList").click(function(){
  window.location.href = "cv/Tommy Audet.pdf"
});
$("#myResumePc").click(function(){
  window.location.href = "cv/Tommy Audet.pdf"
});