import Stretchy from 'stretchy';
import $ from 'jquery';

const textareaPretty = $('.textarea').val().replace(/\n\s\s+/g, ' ');
$('.textarea').val(textareaPretty);
