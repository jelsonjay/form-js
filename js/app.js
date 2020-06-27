'use strict';
let backgrColor, fontColor, favourColor;

function getColor() {
	favourColor = document.querySelector('#favourColor').value;
	localStorage.backColor = backgrColor;
	localStorage.textColor = fontColor;
	localStorage.name = favourColor;
}

function setColor(index, color) {
	if (index === 1) {
		document.body.style.backgroundColor = color;
		backgrColor = color;
	} else {
		document.body.style.color = color;
		fontColor = color;
	}
}
