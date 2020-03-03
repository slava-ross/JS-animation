$(document).ready(function(){
	/**function move(){
		setTimeout(function(){
			var left = parseInt($('.block').css('left'));
			var top = parseInt($('.block').css('top'));
			$('.block').css({
				'left': '+=1',
				'top': '+=1'
			});
			if (left <= 500 && top <= 500 ){
				move();
			};
		},10);
	};
	move();*/
	
	
	/**var block = $('.block');
	
	block.on('click',function(){
		var D_b = $(this);
		
		D_b.animate({
			top: '0px',
		},3000, function(){
			D_b.animate({
				top: '200px',
			},3000);
		});
	});
	
	block.on('mouseover', function(){
		var D_b = $(this);
		
		D_b.stop().animate({
			width: '120px',
		},500);
	})
	
	block.on('mouseout', function(){
		var D_b = $(this);
		
		D_b.stop().animate({
			width: '100px',
		},500);
	});*/
	var block = $('.block');
	var box = $('.box');
	var arr = [];
	
	box.each(function(){
		var p = $(this).position();
		arr.push({
			top: p.top,
			left: p.left,
			right: p.left + $(this).width(),
			bottom: p.top + $(this).height()
		})
	});
	console.log(arr);
	
	$('body').on('keydown', function(e){
		var block = $('.block');
		
		
		if (e.keyCode === 39 || e.keyCode === 37){
			var left = parseInt(block.css('left'));
			if(e.keyCode === 39){
				left+=5;
			}else if (e.keyCode === 37){
				left-=5;
			}
			for (var i = 0; i < arr.length; i++){
				arr[i];
			}
		};
		if (e.keyCode === 38){
			block.animate({
				top: '180px'
			},500, function(){
				block.animate({
					top: '200px'
				},500);
			} )
		};
	});
	
	
	
});