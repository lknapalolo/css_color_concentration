//Inititate game from "play" button
document.querySelector("button").addEventListener("click", init)

function init (){
  document.body.removeChild(document.querySelector("div.welcome"));
  setTimeout (function(){for(var i=0; i<allDivs.length; i++){
    allDivs = document.querySelectorAll("div.box")
    allDivs[i].classList.add('cover')
  }}, 200)
};

//Match pairs of divs
var clickCounter = 0;
var guess1;
var guess2;
var lastClicked = [];

for(var i=0; i<allDivs.length; i++){
  allDivs[i].addEventListener( "click", match)}


  function match(){
    this.classList.add('clicked')
    this.classList.remove('cover');
    lastClicked.unshift(this);
    clickCounter++;

    if (clickCounter === 1 && this.classList.includes !== "clicked"){
      guess1 = this.innerHTML
      console.log(guess1);
    }
    else if (clickCounter === 2  && this.classList.includes !== "clicked"){
      guess2 = this.innerHTML
      console.log(guess2);
      //reset counter, hide things that didn't match
    }
    if(guess1 && guess2 && guess1 === guess2 && clickCounter === 2){
      console.log("it's a match");
      clickCounter = 0;
      guess1 = "";
      guess2 = "";
      shufflePieces(bgDivs);

    }
    else if (guess1 && guess2 && guess1 !== guess2 && clickCounter === 2){
      setTimeout(function(){
        lastClicked[0].classList.add('cover');
        lastClicked[1].classList.add('cover');
        lastClicked[0].classList.remove('clicked');
        lastClicked[1].classList.remove('clicked');

      }, 400)
      clickCounter = 0;
      guess1 = "";
      guess2 = "";
    }
  };
