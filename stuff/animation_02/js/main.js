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
	/* $('.animation').on('keydown', function(){
		$(this).stop().animate({
			left:'+=5'
		}, 1000);
	});
	$('.animation').on('mouseout', function(){
		$(this).stop().animate({
			width:'200px'
		}, 1000);	
	}); */
	var arr = [];
	var wall.each(function(){
		var p=$(this).position();
		arr.push({
			top: p.top,
			left: p.left,
			right: p.left + $(this).width(),
			bottom: p.top + $(this).height()
		});
		
	});
	
	$('body').keydown(function(e){
		if(e.which == 39|| e.which == 37) {
			var left = parseInt($('.wall').css('left'))
			$('.animation').stop().animate({
				left:'+=10'
			}, 50)
		}else if(e.which == 37){
			$('.animation').stop().animate({
					left:'-=10'
			}, 50)
		}else if(e.which == 32){
			$('.animation').stop().animate({
					top:'-=110'
			}, 250, function(){
				$('.animation').stop().animate({
					top:'500'
				})
			});
		}
		//console.log(e.which);
	});
});