const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let currentSlide = 0;

function addAllDots() {
	let nbSlides = slides.length;
	for (let i = 0; i < nbSlides; i++) {
		let dot = document.createElement("div");
		let divDots = document.querySelector("#banner .dots");
		divDots.appendChild(dot);
		dot.classList.add("dot");
		if (i===0) {
			dot.classList.add("dot_selected");
		}
	} }
addAllDots();

function updateDots() {
	let dots = document.querySelectorAll("#banner .dots .dot");
	dots.forEach((dot, index) => {
		if (index === currentSlide) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}

function navSlide() {
	let image = document.querySelector("#banner .banner-img");
	let txtSlide = document.querySelector("#banner p");
	image.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	txtSlide.innerHTML = `${slides[currentSlide].tagLine}`;
	updateDots();
}

// Ajout des fleches du caroussel //
let arrowLeft = document.querySelector("#banner .arrow_left");
arrowLeft.addEventListener("click", function() {
	console.log("Fleche gauche");
	currentSlide--;
	if(currentSlide<0) {
		currentSlide=3;
	}
	navSlide();
});

let arrowRight = document.querySelector("#banner .arrow_right");
arrowRight.addEventListener("click", function() {
	currentSlide++;
	if (currentSlide>3){
		currentSlide=0;
	}
	navSlide();
});
