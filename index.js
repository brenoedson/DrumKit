// document.querySelectorAll("button")[0].addEventListener('click',handleClick);

// function handleClick(){
//     alert("I got clicked");
// }
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        // alert (`I clicked the button ${i}`);
        // this.style.color = "white";
        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

// Detecting keybord press 
document.addEventListener("keydown", function(event){ 
    makeSound(event.key);
    buttonAnimation(event.key);
}); 

function makeSound(key){
    switch (key) {
        case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case `a`:
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case `s`:
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case `d`:
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case `j`:
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case `k`:
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case `l`:
            let kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
            break;

        default: console.log(`A tecla ${event.key} foi pressionada!`);
            break;
    }
}

function buttonAnimation(key){
    if(key === `w`|| key === `a` || key === `s` || key === `d` || key === `j` || key ===  `k` || key === `l`){
        document.querySelector(`.${key}`).classList.add(`pressed`);
        setTimeout(function(){
            document.querySelector(`.${key}`).classList.remove(`pressed`);
        },200);
    }
    
}