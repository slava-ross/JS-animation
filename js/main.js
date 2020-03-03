$(document).ready(function(){

	var leftLimit = 0;
	var rightLimit = 870;
	var topLimit = 0;
	var bottomLimit = 750;

	function init ()
	{
		var boxesArray = [ 
				{ boxClass: 'moving', boxId: 'mbox', top: '220px', left: '0px' },
				{ boxClass: 'fixed', boxId: 'box1', top: '10px', left: '350px' },
				{ boxClass: 'fixed', boxId: 'box2', top: '380px', left: '350px' },
				{ boxClass: 'fixed', boxId: 'box3', top: '200px', left: '700px' }
		];

		boxesArray.forEach(function( item, i ) {
	  		$('body').append('<div class = ' + item.boxClass + ' id = ' + item.boxId + '></div>');
	  		$('#' + item.boxId).css( { top: item.top, left: item.left } );
		} );

		$('body').css( { height: bottomLimit + parseInt($('#mbox').css('height')) - 1, width: rightLimit + parseInt($('#mbox').css('width')) - 1 } );
		$('body').css( { border: '1px solid black' } );
	};

	init();

// #############################################################################

	var fixedBoxes = [];

	$('.fixed').each(function(){
		var pos = $(this).position();
		fixedBoxes.push({
			top: pos.top,
			left: pos.left,
			right: pos.left + $(this).width(),
			bottom: pos.top + $(this).height()
		});
	});

// #############################################################################

	function move( varCssPosition ) {

		if ( varCssPosition.left >= leftLimit && varCssPosition.left <= rightLimit && varCssPosition.top >= topLimit && varCssPosition.top <= bottomLimit ) {
			setTimeout(function(){
				$('#mbox').css(varCssPosition);
			},  40);
		}
	}

// #############################################################################
	
	$('body').on('keydown', function(e){
		
		var mBox = $('#mbox');
		var mBoxLeft = parseInt(mBox.css('left'));
		var mBoxTop = parseInt(mBox.css('top'));
		var mBoxBottom = mBoxTop + parseInt(mBox.css('height'));
		var mBoxRight = mBoxLeft + parseInt(mBox.css('width'));
		var impact = false;
		var step = 5;

		if (e.keyCode === 37 || e.keyCode === 39) {
			
			if( e.keyCode === 39 ) { mBoxLeft += step; }
					else { mBoxLeft -= step; }
			
			var mBoxRight = mBoxLeft + parseInt(mBox.css('width'));
			
			for( var i = 0; i < fixedBoxes.length; i++ ) {
				if( fixedBoxes[i].left < mBoxRight && fixedBoxes[i].right > mBoxLeft ) {
					if( mBoxTop < fixedBoxes[i].bottom && mBoxBottom > fixedBoxes[i].top ) {
						impact = true;
						break;	
					}
				}
			}
		} else if (e.keyCode === 38 || e.keyCode === 40) {
			
			if( e.keyCode === 40 ) { mBoxTop += step; }
					else { mBoxTop -= step; }
			
			var mBoxBottom = mBoxTop + parseInt(mBox.css('height'));
			
			for( var i = 0; i < fixedBoxes.length; i++ ) {
				if( fixedBoxes[i].bottom > mBoxTop && fixedBoxes[i].top < mBoxBottom ) {
					if( mBoxRight > fixedBoxes[i].left && mBoxLeft < fixedBoxes[i].right ) {
						impact = true;
						break;	
					}
				}
			}
		} else if ( e.keyCode === 32 ) {

			var ceiling = 5;

			for( var i = 0; i < fixedBoxes.length; i++ ) {
				if( mBoxRight > fixedBoxes[i].left && mBoxLeft < fixedBoxes[i].right ) {

					impact = true;
					
					if( fixedBoxes[i].bottom > ceiling && mBoxBottom > fixedBoxes[i].top ) {
						ceiling = fixedBoxes[i].bottom;
					}
				}
			}
			ceiling += 'px';

			$('#mbox').animate({
				top: ceiling
				},500, function(){
					$('#mbox').animate({
						top: mBoxTop
					},500);
			});	
		}
		
		if( !impact ) {
			var cssPosition = { 'left': mBoxLeft, 'top': mBoxTop };
			move( cssPosition );
		}

	});
});