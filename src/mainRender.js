

let mainContent = document.querySelector('.mainContent');
let butTimer = document.querySelector("#butTimer");
let butData = document.querySelector("#butData");
let sectionData = document.querySelector("#sectionData");
let sectionTimer = document.querySelector("#sectionTimer");

butTimer.addEventListener('click', () => {
	sectionData.style.display = 'none';
	sectionTimer.style.display = 'flex';

});

butData.addEventListener('click', () => {
	sectionData.style.display = 'flex';
	sectionTimer.style.display = 'none';

});

