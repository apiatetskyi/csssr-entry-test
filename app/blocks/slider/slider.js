import noUiSlider from 'nouislider';

const slider = document.querySelector('.slider');
const lvlMark = slider.querySelectorAll('.slider__mark');
const lvlLeft = [0, 1, 2, 3];
const sliderInput = document.querySelector('#sliderInput');

noUiSlider.create(slider, {
	start: [1],
	range: {
		min: 0,
		'19.452%': 1,
		'48.85%': 2,
		max: 3
	}
});

Array.from(lvlMark).forEach(function (item, i) {
	item.addEventListener('click', function (event) {
		event.preventDefault();
		slider.noUiSlider.set(lvlLeft[i]);
	});
});

slider.noUiSlider.on('update', function ( values, handle ) {
	sliderInput.value = values[handle];
});

sliderInput.addEventListener('change', function (){
	slider.noUiSlider.set(this.value);
});
