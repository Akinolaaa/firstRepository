var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 5));
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var css = document.querySelector("h3");
var body = document.querySelector("#gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);
function setGradient(){
	//background: linear-gradient(to right, red, yellow);
	body.style.background = `linear-gradient(to right,
	 ${color1.value},  ${color2.value} )`;

	css.innerHTML = body.style.background + ";" ;

	// textContent , innerHTML, createTextNode
}

color1.addEventListener("input", setGradient); 
// onclick = "setGradient" --> an attribute of <input> could also 
//                            be used but its not extensible 

color2.addEventListener("input", setGradient);