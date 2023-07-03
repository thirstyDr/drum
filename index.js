// Event listener for button clicks
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    // Select each element with the class "drum" and add a click event listener
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var inner = this.innerHTML;
  
      Makesound(inner); // Call Makesound function with inner HTML as parameter
      animation(inner); // Call animation function with inner HTML as parameter
    });
  }
  
  // Event listener for keydown events
  document.addEventListener("keydown", function (event) {
    Makesound(event.key); // Call Makesound function with the key value from the event
    animation(event.key); // Call animation function with the key value from the event
  });
  
  // Function to play sound based on key/button pressed
  function Makesound(key) {
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        var kick = new Audio("sounds/kick_bass.mp3");
        kick.play();
        break;
      case "l":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      default:
        console.log("Invalid key"); // Log an error message for invalid keys
    }
  }
  
  // Function to add animation to the button/key pressed
  function animation(key) {
    // Select the element with the class equal to the key value
    var ani = document.querySelector("." + key);
  
    ani.classList.add("pressed"); // Add the "pressed" class to the button/key element
  
    setTimeout(function () {
      ani.classList.remove("pressed"); // Remove the "pressed" class after 100 milliseconds
    }, 100);
  }
  