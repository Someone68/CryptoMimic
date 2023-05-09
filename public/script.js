//import devtools from './modules/devtools-detect.js'
/*!
devtools-detect
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT Licence
*/
const devtools = {
	isOpen: false,
	orientation: undefined,
};

const threshold = 170;

const emitEvent = (isOpen, orientation) => {
	globalThis.dispatchEvent(new globalThis.CustomEvent('devtoolschange', {
		detail: {
			isOpen,
			orientation,
		},
	}));
};

const main = ({emitEvents = true} = {}) => {
	const widthThreshold = globalThis.outerWidth - globalThis.innerWidth > threshold;
	const heightThreshold = globalThis.outerHeight - globalThis.innerHeight > threshold;
	const orientation = widthThreshold ? 'vertical' : 'horizontal';

	if (
		!(heightThreshold && widthThreshold)
		&& ((globalThis.Firebug && globalThis.Firebug.chrome && globalThis.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
	) {
		if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
			emitEvent(true, orientation);
		}

		devtools.isOpen = true;
		devtools.orientation = orientation;
	} else {
		if (devtools.isOpen && emitEvents) {
			emitEvent(false, undefined);
		}

		devtools.isOpen = false;
		devtools.orientation = undefined;
	}
};

main({emitEvents: false});
setInterval(main, 500);
///////////////////////////////////////////////////////////////////////
let startTime = null;
let cps;
let cpu = 0;
let maxcpu = 100;
let cpuelm = document.getElementById("cpu");
let inDev= true;
let clicks = 0;
let bitcoin = 0;
let minebutton = document.getElementById("mine");
let minepower = 1;
let canchangecpu = true;
let upgrade = {
	
}
document.getElementById("mine").addEventListener('click', function() {
  if (!startTime) {
    startTime = Date.now();
  }
	clicks++
});

window.onload = function(){
	if (window.location.hostname.split('.')[1] === 'id') {
  document.write(`<link rel='stylesheet' href='style.css'><h1 titlet onclick='window.open("https://cryptomimic.tinymooshmallow.repl.co")'>Open in new tab to play</h1>`)
}
}

setInterval(function() {
  const endTime = Date.now();
  const timeDiff = endTime - startTime;
  cps = clicks / (timeDiff / 1000);

  document.getElementById("cps").innerHTML = cps.toFixed(2) + ' CPS';

  clicks = 0;
  startTime = null;
}, 1000);

function tick(){
	if(cpu >= maxcpu-20 && cpu <= maxcpu - 10){
		cpuelm.style.color = "orangered";
	}
		else if(cpu >= maxcpu - 10){
			cpuelm.style.color = "red";
		}
	else{
		cpuelm.style.color = "var(--text-color)"
	}
	if(canchangecpu){
	cpuelm.innerHTML = cpu+" / "+maxcpu+" CPU Usage"
	}
	else{
		cpuelm.innerHTML = "OVERHEAT!! <br>POWER LEFT: "+maxcpu;
	}
	document.querySelector("title").innerHTML = "₿ "+bitcoin+" - CryptoMimic"

	if(cpu > maxcpu){
		if(canchangecpu == true){
			setInterval(function(){maxcpu-=20},1000)
			canchangecpu = false;
		}
		if(maxcpu <= 0){
		document.documentElement.innerHTML=`<link rel='stylesheet' href='style.css'><h1 titlet style='color:red'>CPU has ran out!</h1><h2 style='color:red;text-align:center'>TIP: Try limiting your CPU Usage or buy an item that increases max CPU.</h2><h4 style='color:red;text-align:center;'>This is an in-game message, your CPU IRL is okay (hopefully)</h4>`
		}
	}
	if(devtools.isOpen && !inDev){
		window.close();
		document.documentElement.innerHTML=`<link rel='stylesheet' href='style.css'><h1 titlet>DevTools is NOT allowed!</h1>`
	}
	if(cps > 70){
		document.documentElement.innerHTML=`<link rel='stylesheet' href='style.css'><h1 titlet>Autoclickers are NOT allowed!</h1>`
	}
	document.getElementById("score").innerHTML = "₿ "+bitcoin
}

setInterval(tick,5)

function mine(){
	bitcoin += minepower;
}

var modal = document.getElementById("shop");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
