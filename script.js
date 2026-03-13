let cards = document.getElementsByClassName("card");
let restartBtn = document.getElementById("restart");

let numbers = [1,2,3,4,5,6,1,2,3,4,5,6];

// shuffle numbers
for(let i=0;i<numbers.length;i++){

let randomIndex = Math.floor(Math.random()*numbers.length);

let temp = numbers[i];
numbers[i] = numbers[randomIndex];
numbers[randomIndex] = temp;

}

let firstCard = null;
let secondCard = null;
let lockBoard = false;


// assign numbers
for(let i=0;i<cards.length;i++){

cards[i].setAttribute("data-number",numbers[i]);

let backSide = cards[i].querySelector(".back");
backSide.innerHTML = numbers[i];

cards[i].addEventListener("click",flipCard);

}


// flip function
function flipCard(){

if(lockBoard) return;

if(this === firstCard) return;

this.classList.add("flip");

if(firstCard === null){

firstCard = this;

}else{

secondCard = this;
lockBoard = true;

checkMatch();

}

}


// match check
function checkMatch(){

let num1 = firstCard.getAttribute("data-number");
let num2 = secondCard.getAttribute("data-number");

if(num1 === num2){

firstCard.removeEventListener("click",flipCard);
secondCard.removeEventListener("click",flipCard);

resetBoard();

}else{

setTimeout(function(){

firstCard.classList.remove("flip");
secondCard.classList.remove("flip");

resetBoard();

},1000);

}

}


// reset
function resetBoard(){

firstCard = null;
secondCard = null;
lockBoard = false;

}


// restart
restartBtn.addEventListener("click",function(){

location.reload();

});
