const message = document.querySelector('.massege');
const timerShow = document.getElementById("timer");
const timerFineshed = document.getElementById("timerFineshed");

export default function renderMassege(text) {
	message.textContent = text;
};

export function renderDates(result) {
	message.innerHTML = `
	<span>Годы:${result.years}</span>
	<span>Месяцы:${result.months}</span>
	<span>Дни:${result.days}</span>
	`
}

export function renderTime(interimResult) {
	timerShow.innerHTML = 
	`<span style="font-size: 30px;">${Math.abs(interimResult.hours)}:${Math.abs(interimResult.minutes)}:${Math.trunc(Math.abs(interimResult.seconds))}</span>`
}
export function renderTimeFinished(text) {
	timerFineshed.innerHTML =
	`
	<span>${text}</span>
	`
}