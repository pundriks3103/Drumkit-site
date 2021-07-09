//Callback Function
function handleClick(){
    var buttonInnerHTML=this.innerHTML;
    switchKeys(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

//Assigning both the events viz. button click and keydown to all the HTML button elements
for(var i=0 ; i < document.querySelectorAll(".drum").length ; ++i)
  {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
  }

document.addEventListener("keydown",function (event){
  switchKeys(event.key);
  buttonAnimation(event.key);
});

// Switch Keys function
function switchKeys(key)
{
  switch (key.toLowerCase()) {

    case "w":
      var tom1Audio=new Audio("sounds/tom-1.mp3");
      tom1Audio.play();
      break;

    case "arrowup":
      var tom11Audio=new Audio("sounds/tom-1.mp3");
      tom11Audio.play();
      break;

    case "a":
      var tom2Audio=new Audio("sounds/tom-2.mp3");
      tom2Audio.play();
      break;

    case "arrowleft":
      var tom22Audio=new Audio("sounds/tom-2.mp3");
      tom22Audio.play();
      break;

    case "s":
      var tom3Audio=new Audio("sounds/tom-3.mp3");
      tom3Audio.play();
      break;

    case "arrowdown":
      var tom33Audio=new Audio("sounds/tom-3.mp3");
      tom33Audio.play();
      break;

    case "d":
      var tom4Audio=new Audio("sounds/tom-4.mp3");
      tom4Audio.play();
      break;

    case "arrowright":
      var tom44Audio=new Audio("sounds/tom-4.mp3");
      tom44Audio.play();
      break;

    case "j":
      var snareAudio=new Audio("sounds/snare.mp3");
      snareAudio.play();
      break;

    case "k":
      var kickAudio=new Audio("sounds/kick-bass.mp3");
      kickAudio.play();
      break;

    case "l":
      var crashAudio=new Audio("sounds/crash.mp3");
      crashAudio.play();
      break;

    default:console.log(this.innerHTML);

  }
}

//------------------------------------------------------------------------------------------

// Button Animation function
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

//------------------------------------------------------------------------------------------
