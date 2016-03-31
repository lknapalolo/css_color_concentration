// create array of css colors

var colors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige"," bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"]

//create function to shuffle array
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
  oneDivs[i].textContent = newColors[i]
};

for (var i = 0; i < twoDivs.length; i++) {
  twoDivs[i].style.background = newColors[i];
  twoDivs[i].textContent = newColors[i]
};

//randomize order of divs
//tile divs
var allDivs = document.querySelectorAll("div.box")
for(i = allDivs.length-1; i > 0; i--){
  j= Math.floor(Math.random()*(i+1));
  allDivs[i].style.order = j;
};

//background divs
var bgDivs = document.querySelectorAll("div.boxbg")
for(i = bgDivs.length-1; i > 0; i--){
  j= Math.floor(Math.random()*(i+1));
  bgDivs[i].style.order = j;
};
