//Inititate game from "play" button
document.querySelector("button").addEventListener("click", init)

function init (){
  document.body.removeChild(document.querySelector("div.welcome"));
  // this is a nice touch
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
    // in the way your code is written, do you want the click counter to increment no matter what?
    // if they click the same element, the click counter will still go up, put this incremementation in the if conditionals below
    // once you figure this part out, i think you'll have the solution for the click on the same div bug.
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

    // this if conditional seems complicated
    // why not instead nest this logic inside of the above conditionals?
    // would also be good to abstract this into a function, something like confirmMatch
    if(guess1 && guess2 && guess1 === guess2 && clickCounter === 2){
      console.log("it's a match");
      clickCounter = 0;
      guess1 = "";
      guess2 = "";
      shufflePieces(bgDivs);

    }
    // this would also be a good place to abstract, hideCards or something like that
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
