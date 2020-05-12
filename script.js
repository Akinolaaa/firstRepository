var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);
function setGradient(){
	//background: linear-gradient(to right, red, yellow);
	body.style.background = "linear-gradient(to right," 
		+ color1.value + ", "+ color2.value + ")";

	css.innerHTML = body.style.background + ";" ;

	// textContent , innerHTML, createTextNode
}

color1.addEventListener("input", setGradient); 
// onclick = "setGraient" --> an attribute of <input> could also 
//                            be used but its not extensible 

color2.addEventListener("input", setGradient);