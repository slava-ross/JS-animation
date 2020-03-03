$(document).ready(function(){
	/* function animation(){
		
		setTimeout(function(){
			$('#animation').css('left', '+=1');
			$('#animation').css('top', '+=1');
			if(parseInt( $('#animation').css('left') ) <= 500 ){
				animation();
				console.log();
			}
		}, 10);
		
	}
	animation(); */
	/* $('.animation').on('click', function(){
		$(this).animate({
			top:'0px'
		}, 1000, function(){
			$(this).animate({
				top:'500px'
			}, 1000);
		});
	}); */
	$('.animation').on('mouseover', function(){
		$(this).stop().animate({
			width:'800px'
		}, 1000);
	});
	$('.animation').on('mouseout', function(){
		$(this).stop().animate({
			width:'200px'
		}, 1000);	
	});
});