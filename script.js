// create array of css colors

var colors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige"," bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"]

//create function to shuffle arrays
function shuffle(array){
  var i;
  var j;
  var temp;
  for (i=array.length-1; i > 0; i--){
    j= Math.floor(Math.random()*(i+1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

//call function to shuffle array of css colors
var newColors = shuffle(colors)

//change background of divs with matched pairs
var oneDivs = document.querySelectorAll("div.box.one")
var twoDivs = document.querySelectorAll("div.box.two")

for (var i = 0; i < oneDivs.length; i++) {
  oneDivs[i].style.background = newColors[i]
  oneDivs[i].innerHTML = newColors[i]
};
for (var i = 0; i < twoDivs.length; i++) {
  twoDivs[i].style.background = newColors[i];
  twoDivs[i].innerHTML = newColors[i]

};

//randomize order of divs

var allDivs = document.querySelectorAll("div.box")
for(i = allDivs.length-1; i > 0; i--){
  j= Math.floor(Math.random()*(i+1));
  allDivs[i].style.order = j;
};

document.querySelector("button").addEventListener("click", function(){
  document.body.removeChild(document.querySelector("div.welcome"));
  for(var i=0; i<allDivs.length; i++){
    allDivs = document.querySelectorAll("div.box")
    allDivs[i].classList.add('cover')
  }});

  var lastClicked = [];
  var clickCounter = 0;

  // function memory(){
    for(var i=0; i<allDivs.length; i++){
      allDivs[i].addEventListener( "click", function(){
        this.classList.remove('cover');
        lastClicked.unshift(this);
        clickCounter++;
      }
    )
  };
// };
//
//   memory();

if ((lastClicked.length % 2 === 0) && (clickCounter !== 0)){
   if (allDivs[0].classList.length === 3 && allDivs[8].classList.length === 3){console.log("it's a match!");}
   if (allDivs[1].classList.length === 3 && allDivs[9].classList.length === 3){console.log("it's a match!");}
   if (allDivs[2].classList.length === 3 && allDivs[10].classList.length === 3){console.log("it's a match!");}
   if (allDivs[3].classList.length === 3 && allDivs[11].classList.length === 3){console.log("it's a match!");}
   if (allDivs[4].classList.length === 3 && allDivs[12].classList.length === 3){console.log("it's a match!");}
   if (allDivs[5].classList.length === 3 && allDivs[13].classList.length === 3){console.log("it's a match!");}
   if (allDivs[6].classList.length === 3 && allDivs[14].classList.length === 3){console.log("it's a match!");}
   if (allDivs[7].classList.length === 3 && allDivs[15].classList.length === 3){console.log("it's a match!");}
   else{
     lastClicked[0].classList.add('cover');
     lastClicked[1].classList.add('cover');
     console.log("working");
   };

 };
