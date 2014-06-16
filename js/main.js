(function($){
	// ----------------------------------------
	// ! add hover support
	// ----------------------------------------

	$('.tab-nav-hover').on('mouseenter', 'a', function(){
		//$(this).closest('li').siblings().find('a');
		$(this).tab('show');
	})

	$('section.service a img').hover(
		function(){
			TweenMax.to(this, .35, {rotation: 10, scale:1.15})
		},
		function(){
			TweenMax.to(this, .35, {rotation: 0, scale:1})
		}
	)

	$('.answer-people-list').on('show.bs.tab', 'a', function(e){
		var $target  = $($(e.target).attr('href'));

		TweenMax.set($target, {opacity:0});
		TweenMax.to($target, .65, {opacity: 1, delay: .2});
	})

	// ----------------------------------------
	// ! in modal trigger
	// ----------------------------------------

	
	// ----------------------------------------
	// ! slide
	// ----------------------------------------
	$('.more-information-btn').click(function(e){
		e.preventDefault();

		$('.more-information').slideToggle();

		$(this).find('.fa').toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
	})
	
	$(document).one('click.removeHide', '.more-information-btn', function(e){
		$('.more-information').removeClass('hide');
	})

})(jQuery)