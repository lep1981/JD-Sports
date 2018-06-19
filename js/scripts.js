
jQuery(document).ready(function(){
	
	$.ajax({
		url: 'js/shoes.json',
		dataType: 'json',
		type: 'get',
		cache: false,
		success: function(data) {
			$(data).each(function(index, value){
				$("#shoe-scroller").append('<div class="shoe"><img src="'+value.photo+'" alt="'+value.name+'" class="shoe-img" /><h2 class="shoe-name">'+value.name+'</h2><p class="price">'+value.price+'</p></div>');
			});
			
			$(".regular").slick({
				dots: true,
				autoplay: true,
				infinite: true,
				speed: 500,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					  }
					},
					{
					  breakpoint: 600,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					  }
					},
					{
					  breakpoint: 480,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					  }
					}
				  ]
			});
		}
	});
	
});