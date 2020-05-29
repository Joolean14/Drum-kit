//Detecting Button Press

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons;i++) {

// document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
//     var buttonInnerHtml = this.innerHtml; 

//     makeSound(buttonInnerHtml);

//     buttonAnimation(buttonInnerHtml);
    
// });

//}

//Detecting Keyboard Press

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var kick = new Audio("sounds/kick.wav");
            kick.play();
            break;

        case "a":
            var rim = new Audio("sounds/rim.wav");
            rim.play();
            break;
        
        case "s":
            var snare = new Audio("sounds/snare.wav");
            snare.play();
            break;

        // case "d":
        //     var hiHat = new Audio("sounds/808-HiHats02.wav");
        //     hiHat.play();
        //     break;
        
        case "j":
            var openHiHat = new Audio("sounds/open-hi-hat.wav");
            openHiHat.play();
            break;
        
        case "k":
            var ride = new Audio("sounds/ride.wav");
            ride.play();
            break;
            
        default: console.log(buttonInnerHtml);
            break;
    }
}


// Animation when pressed

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    //stop playing sound
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

