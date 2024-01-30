
var n = document.querySelectorAll("button").length;
for (i = 0; i < n; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttoninnerhtml = this.innerHTML;
    makesound(buttoninnerhtml);
    buttonanimation(buttoninnerhtml);
  });
}
document.addEventListener("keydown", (letter) => {
  makesound(letter.key);
buttonanimation(letter.key);
});

function makesound(pressevent) {
  switch (pressevent) {
    case "w":
      var audio = new Audio("sounds/tom.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/5.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/6.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/7.mp3");
      audio.play();
      break;
  }
}
function buttonanimation(currentkey)
{
  var activebutton=document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function()
  {
    activebutton.classList.remove("pressed");
  },100);
}
