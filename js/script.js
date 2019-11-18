$(document).ready(function(){

	/*  burger  */
	$('.mobile_nav').on('click', function(){
		$('.mobile_nav-menu').show();
		$(this).hide();
		$('.mobile_nav-close').show();
	})
	$('.mobile_nav-close').on('click', function(){
		$('.mobile_nav-menu').hide();
		$('.mobile_nav-close').hide();
		$('.mobile_nav').show();
	})


      $('.top_slider').slick({
        
      });
      $('.team_slider').slick({
      	infinite: true,
      	slidesToShow: 3,
      	slidesToScroll: 1,
      	appendArrows: '.arrows',
      	responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});