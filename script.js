// selecting all the cards 
const cards = document.getElementsByClassName("card")

// numbers for pairs
let numbers = [1,2,3,4,1,2,3,4]

// shuffle numbers
numbers.sort(() => Math.random() - 0.5)

// variable declaration
let firstCard = null
let secondCard = null


// shuffle cards and store numbers
for(let i = 0; i < cards.length; i++){

   let random = Math.floor(Math.random() * cards.length);

   cards[i].style.order = random;

   cards[i].setAttribute("data-number", numbers[i])  // number store

   cards[i].addEventListener("click", flipCard)

}


// card click event
function flipCard(){

   this.classList.add("flip")

   // number show
   this.innerHTML = this.getAttribute("data-number")

   if(firstCard === null){

      firstCard = this

   }else if(secondCard === null){

      secondCard = this

      checkMatch()

   }

}


// match check function
function checkMatch(){

 if(firstCard.innerHTML === secondCard.innerHTML){

   firstCard = null
   secondCard = null

 }else{

   setTimeout(function(){

     firstCard.classList.remove("flip")
     secondCard.classList.remove("flip")

     firstCard.innerHTML = ""
     secondCard.innerHTML = ""

     firstCard = null
     secondCard = null

   },1000)

 }

}
const restartBtn = document.getElementById("restart");

restartBtn.addEventListener("click", function(){

   location.reload();

});