// import { DateTime } from './luxon.js';
import { timeDates } from './date.js';

	
	var startTime = document.getElementById("startTime");
	var valueSpan = document.getElementById("value");
	let buttonRun = document.getElementById("button");
	
	startTime.addEventListener("input", function() {
		valueSpan.innerText = startTime.value;
		let delyaTime = startTime.value;
		buttonRun.addEventListener('click', () => {
			const resultTime = timeDates(delyaTime);
		});
	
	
	}, false);






// let timerInput = document.getElementById("time"); 
// let buttonRun = document.getElementById("button");
// let timerShow = document.getElementById("timer"); 
// buttonRun.addEventListener('click', function() {
// 		let timeMinut = parseInt(timerInput.value) * 60;

// 		let timer = setInterval(function () {
// 			let seconds = timeMinut%60; 
// 			let minutes = timeMinut/60%60; 
// 			let hour = timeMinut/60/60%60; 
// 			if (timeMinut <= 0) {
// 					clearInterval(timer);
// 					alert("Время закончилось");
// 			} else { 
// 					let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
// 					timerShow.innerHTML = strTimer;
					
// 			}
// 			timeMinut--;
// 			 // Уменьшаем таймер
// 	}, 1000)
// });


