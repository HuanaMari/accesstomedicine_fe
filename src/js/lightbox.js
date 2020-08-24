jQuery(function($) {
	$(document).on('click', '.lightbox-play-btn', function(e){
		e.preventDefault();
		$('.bitsia_video_lightbox').remove();
		$('body').append('<div class="bitsia_video_lightbox"><div class="video_border"><div class="frame-holder"><div class="close_btn_fancy"></div><iframe class="frame1" src="https://www.youtube.com/embed/'+ $(this).attr('href') +'?autoplay=1&amp;rel=0&amp;showinfo=0&amp;allow=autoplay" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div></div>');
	});
	$(document).on('click', '.videoCarouselPlay', function(e){
		e.preventDefault();
		$('.bitsia_video_lightbox').remove();
		$('body').append('<div class="bitsia_video_lightbox"><div class="video_border"><div class="frame-holder"><div class="close_btn_fancy"></div><iframe class="frame1" src="https://www.youtube.com/embed/'+ $('.slick-active img').attr('videoid') +'?rel=0&amp;showinfo=0&amp;autoplay=1&amp;allow=autoplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div></div>');
	});
	$(document).on('click','.close_btn_fancy',function(){
	    $('.bitsia_video_lightbox').remove();
	    $('.bitsia_content_lightbox').remove();
	});
});