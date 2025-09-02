let buttonelem = document.getElementsByClassName("buttonclose")[0]
buttonelem.addEventListener("click", () => {
	addTransition(true)
	toggle()
})

let wrapper = document.getElementsByClassName("toc--wrapper")[0]
let toc = document.getElementsByClassName("toc")[0]
wrapper.style.left = -(toc.getBoundingClientRect().width + 7) + "px"

let isOpen = localStorage.getItem("sidebar") !== null ? true : false
open(isOpen)

addEventListener('resize', (event) => {
	if (wrapper.classList.contains("opened")) {
		wrapper.style.transform = "translate(" + (toc.getBoundingClientRect().width + 7) + "px)"
	}
	wrapper.style.left = -(toc.getBoundingClientRect().width + 7) + "px"
});

function toggle() {
	let wrapper = document.getElementsByClassName("toc--wrapper")[0]
	open(!wrapper.classList.contains("opened"))
}

function open(open) {
	let wrapper = document.getElementsByClassName("toc--wrapper")[0]
	if (!open) {
		wrapper.classList.remove("opened")
		wrapper.style.transform = "initial"
		localStorage.removeItem("sidebar")
	} else {
		wrapper.classList.add("opened")
		wrapper.style.transform = "translate(" + (toc.getBoundingClientRect().width + 7) + "px)"
		localStorage.setItem("sidebar", "open")
	}
}

function addTransition(add) {
	let wrapper = document.getElementsByClassName("toc--wrapper")[0]
	let button = document.getElementsByClassName("buttonclose")[0]
	if (add && !wrapper.classList.contains("transitioner")) {
		wrapper.classList.add("transitioner")
		button.classList.add("transitioner")
	} else if(!add && wrapper.classList.contains("transitioner")) {
		wrapper.classList.remove("transitioner")
		button.classList.remove("transitioner")
	}
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
	return evt.touches ||             // browser API
		evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
	const firstTouch = getTouches(evt)[0];
	xDown = firstTouch.clientX;
	yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
	if (!xDown || !yDown) {
		return;
	}

	var xUp = evt.touches[0].clientX;
	var yUp = evt.touches[0].clientY;

	var xDiff = xDown - xUp;
	var yDiff = yDown - yUp;

	if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
		if (xDiff > 200) {
			/* right swipe */
			addTransition(true)
			open(false)
		} else if (xDiff < -100) {
			/* left swipe */
			addTransition(true)
			open(true)
		}
	}
};
