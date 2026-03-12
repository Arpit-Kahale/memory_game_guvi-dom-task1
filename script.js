// select all cards
let cards = document.getElementsByClassName("card");

// restart button
let restartBtn = document.getElementById("restart");

// numbers for pairs
let numbers = [1,2,3,4,1,2,3,4];

// simple shuffle
for(let i = 0; i < numbers.length; i++){

    let randomIndex = Math.floor(Math.random() * numbers.length);

    let temp = numbers[i];
    numbers[i] = numbers[randomIndex];
    numbers[randomIndex] = temp;

}


// variables
let firstCard = null;
let secondCard = null;


// assign numbers to cards
for(let i = 0; i < cards.length; i++){

    cards[i].setAttribute("data-number", numbers[i]);

    const backSide = cards[i].querySelector(".back");
    backSide.innerHTML = numbers[i];

    cards[i].addEventListener("click", flipCard);

}



// flip card
function flipCard(){

    this.classList.add("flip");

    if(firstCard == null){

        firstCard = this;

    }else{

        secondCard = this;

        checkMatch();

    }

}



// match check
function checkMatch(){

    let num1 = firstCard.getAttribute("data-number");
    let num2 = secondCard.getAttribute("data-number");

    if(num1 == num2){

        firstCard = null;
        secondCard = null;

    }else{

        setTimeout(function(){

            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");

            firstCard = null;
            secondCard = null;

        },1000);

    }

}



// restart game
restartBtn.addEventListener("click", function(){

    location.reload();

});