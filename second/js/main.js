$(function() {
	'use strict';

	/* Маска номера телефона
	------------------------------------------------------- */
	$('.js-tel').mask('+7 999 999 99 99');


	/* Открыть модальное окно
	------------------------------------------------------- */
	$('.js-open-modal').on('click', function(){
		let $modal = $($(this).data('modalId'));
		$modal.show().removeClass('zoomOut').addClass('zoomIn');
		$('#js-mobile-menu').removeClass('open');
		$('#page').addClass('form-open');
		return false;
	});


	/* Закрыть модальное окно
	------------------------------------------------------- */
	$('.js-close').on('click', function(){
		let $modal = $($(this).data('modalId'));
		closeModalWindow($modal); //закрываем модальное окно
		return false;
	});


	/* Закрыть модальное окно при клике вне его зоны
	------------------------------------------------------- */
	$(function(){
		$(document).on('click touchstart', function(event) {
			if ($('.js-modal').is(':visible')) {
				if ($(event.target).closest('.js-modal').length) { return; }
				closeModalWindow($('.modal-box:visible')); //закрываем модальное окно
				event.stopPropagation();
			}
		});
	});


	/* Меню на мобильных устройствах
	------------------------------------------------------- */
	$('#js-menu-open').click(function () {
		$('#js-mobile-menu').addClass('open');
		$('#page').addClass('form-open');
		return false;
	});


	$('#js-menu-close').click(function () {
		$('#js-mobile-menu').removeClass('open');
		$('#page').removeClass('form-open');
		return false;
	});


	$(function(){
		$(document).on('click touchstart', function(event) {
			if ($('#js-mobile-menu').hasClass('open')) {
				if ($(event.target).closest('#js-mobile-menu').length) { return; }
				$('#js-mobile-menu').removeClass('open');
				$('#page').removeClass('form-open');
				event.stopPropagation();
			}
		});
	});

});


/* Закрыть модальное окно
------------------------------------------------------- */
function closeModalWindow($modal) {
	'use strict';

	$modal.removeClass('zoomIn').addClass('zoomOut');
	$('#page').removeClass('form-open');

	setTimeout(function() {
		$modal.hide();
	}, 700);
}
