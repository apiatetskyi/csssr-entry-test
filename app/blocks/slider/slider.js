import noUiSlider from 'nouislider';

const slider = document.querySelector('.slider');
const lvlMark = slider.querySelectorAll('.slider__lvl-mark');
const lvlLeft = [0, 149, 374, 766];


noUiSlider.create(slider, {
	start: [149],
	range: {
		min: 0,
		max: 766
	}
});

Array.from(lvlMark).forEach(function (item, i) {
	item.addEventListener('click', function (event) {
		event.preventDefault();
		slider.noUiSlider.set(lvlLeft[i]);
	});
});

