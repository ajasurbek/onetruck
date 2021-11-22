$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:5,
		autoplay:true,
		speed:1000,
		autoplaySpeed:85500,
		responsive:[
			{
				breakpoint: 1240,
				settings: {
					slidesToShow:4
				}
			},
			{
				breakpoint: 1010,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow:2
				}
			}
		]
	});
});

// ================

