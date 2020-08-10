$('.toolbar__btn').on('click', function(e){
	e.preventDefault();
	$('.toolbar').toggleClass('toolbar__active');
	$('.content').toggleClass('content_active');
	$('.toolbar__btn').toggleClass('toolbar__btn-active')
	if(window.innerWidth < 1200){
		$('.content').toggleClass('adaptive');
	}
});

$('.card').on('click', function(e){
	e.preventDefault();
	theTarget = e.currentTarget;
	$(theTarget).find('.card__front').toggleClass('card__frontrotate');
	$(theTarget).find('.card__back').toggleClass('card__backrotate');
});

$('.cards-btn').on('click', function(e){
	$('.toolbar-btn').removeClass('toolbar-btn-active');
	$('.cards-btn').toggleClass('toolbar-btn-active');
	$('.hide-content').removeClass('show-content');
	$('.content__cards').toggleClass('show-content');

});

$('.tabs-btn').on('click', function(e){
	$('.toolbar-btn').removeClass('toolbar-btn-active');
	$('.tabs-btn').toggleClass('toolbar-btn-active');
	$('.hide-content').removeClass('show-content');
	$('.content__tabs').toggleClass('show-content');
});

$('.tables-btn').on('click', function(e){
	$('.toolbar-btn').removeClass('toolbar-btn-active');
	$('.tables-btn').toggleClass('toolbar-btn-active');
	$('.hide-content').removeClass('show-content');
	$('.content__tables').toggleClass('show-content');
});

var scroll_forward = 0;
var scroll_counter = 4;

$('.tabs__forward-btn').on('click', function(e){
	e.preventDefault();
	if(($('.tabs__item').length - scroll_counter) !== 0){
		scroll_forward -= 25;
		$('.tabs__items').css('transform', 'translateX' + '(' + scroll_forward + '%)');
		scroll_counter += 1;
	}
});

$('.tabs__back-btn').on('click', function(e){
	e.preventDefault();	
	if(scroll_counter > 4){
		scroll_forward += 25;
		$('.tabs__items').css('transform', 'translateX' + '(' + scroll_forward + '%)');
		scroll_counter += -1;
	}
});

$('.tabs__item').on('click', function(e){
	$('.tabs__item').css('background-color', '#ae9789');
	$(e.currentTarget).css('background-color', '#e8e8e8');
});
