// using this file is optional
// you can also load the code snippets in using your browser's console

const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
if (e.key === "g") {
return e.preventDefault()
} else {
console.log(e.key)
}
});
let divs = document.querySelectorAll('div');

function bubble(e) {
console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
divs[i].addEventListener('click', bubble);
}

divs = document.querySelectorAll('div');

functiion capture(e) {
console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
divs[i].addEventListener('click', capture, true)
}

divs = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}

const divs = document.querySelectorAll('div');

function bubble(e) {
e.stopPropagation();

console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
divs[i].addEventListener('click', bubble);
}


const main = document.getElementById('main');

main.addEventListener('mouseover', function(event) {
console.log(event.key);
});


const main = document.getElementById('main');

main.addEventListener('mouseover', function(event) {
console.log(event.key);
});

function talksAbout(node, string) {
	if(node.nodeType == node.ELEMENT_NODE) {
  	for (let i = 0; i < node.childNodes.length; i++) {
  		if(talksAbout(node.childNodes[i], string)) {
  			return true;
  		}
  	}
  	return false;
  } else if (node.nodeType == node.TEXT_NODE) {
  	return node.nodeValue.indexOf(string) > -1;
  }
}
console.log(talksAbout(document.body, "book"));
