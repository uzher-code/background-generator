var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomize");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	button.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	css.textContent = button.style.background + ";";
}

function randomSetGradient() {
	var r1 = Math.floor((Math.random() * 255) + 1);
	var g1 = Math.floor((Math.random() * 255) + 1);
	var b1 = Math.floor((Math.random() * 255) + 1);

	var r2 = Math.floor((Math.random() * 255) + 1);
	var g2 = Math.floor((Math.random() * 255) + 1);
	var b2 = Math.floor((Math.random() * 255) + 1);
	body.style.background = 
	"linear-gradient(to right, " 
	+ "rgb("
	+ r1
	+ ", "
	+ g1
	+ ", " 
	+ b1 
	+ ")"
	+ ", "
	+ "rgb("
	+ r2
	+ ", "
	+ g2
	+ ", " 
	+ b2 
	+ ")"
	+ ")";

	button.style.background = 
	"linear-gradient(to right, " 
	+ "rgb("
	+ r1
	+ ", "
	+ g1
	+ ", " 
	+ b1
	+ ")"
	+ ", "
	+ "rgb("
	+ r2
	+ ", "
	+ g2
	+ ", " 
	+ b2 
	+ ")"
	+ ")";

	css.textContent = body.style.background + ";";
	css.textContent = button.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomSetGradient);