import { DateTime } from './luxon.js';
import { renderTime, renderTimeFinished } from './common.js';
import './howler.js'
import scrSound from '../assets/solovja.mp3'


export function diffDates(date1, date2){
	const iso1 = DateTime.fromISO(date1);
	const iso2 = DateTime.fromISO(date2);
	return iso2.diff(iso1, ['years', 'months', 'days']).toObject();
}

export function timeDates(delyaTime){

	let timer = setInterval(function () {
		const delyaValue = DateTime.fromISO(delyaTime);
		const currentValue = DateTime.now();
		const interimResult = currentValue.diff(delyaValue, ['hours', 'minutes', 'seconds']).toObject();

		if (interimResult.seconds > 0 ){
			var sound = new Howl({
				src: [scrSound]
			});			
			sound.play();
			renderTimeFinished("Время вышло!!!");
			return;
		}else {
			renderTime(interimResult);
		}

}, 1000)
};