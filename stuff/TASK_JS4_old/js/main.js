$(document).ready(function(){

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

	//console.log( coords );

// #############################################################################

	function move( varCssLeft ) {
		if ( varCssLeft.left >= 0 && varCssLeft.left <= 850 ) {
			setTimeout(function(){
				$('#mbox').css(varCssLeft);
			},  40);
		}
	}

// #############################################################################
	
	$('body').on('keydown', function(e){
		
		//console.log('Code: ' + e.keyCode);
		var mBox = $('#mbox');
		
		var mBoxLeft = parseInt(mBox.css('left'));
		var mBoxTop = parseInt(mBox.css('top'));
		var mBoxBottom = mBoxTop + parseInt(mBox.css('height'));
		var mBoxRight = mBoxLeft + parseInt(mBox.css('width'));

		if (e.keyCode === 39 || e.keyCode === 37) {

			//console.log('x = ' + mBoxLeft);
			
			if( e.keyCode === 39 ) { mBoxLeft += 5; }
					else { mBoxLeft -= 5; }

			var mBoxRight = mBoxLeft + parseInt(mBox.css('width'));

			var impact = false;			
			for( var i = 0; i < fixedBoxes.length; i++ ) {
				if( fixedBoxes[i].left < mBoxRight ) {
					console.log( 'FB_Left: ' + fixedBoxes[i].left + ' mBox_Right: ' + mBoxRight );
					if( mBoxTop <= fixedBoxes[i].bottom && mBoxBottom >= fixedBoxes[i].top ) {
						console.log( ' mBox_Top: ' + mBoxTop + 'FB_Bot: ' + fixedBoxes[i].bottom + ' mBox_Bot: ' +  mBoxBottom + ' FB_Top: ' +  fixedBoxes[i].top );
						console.log('Impact!');
						impact = true;
						break;	
					}
				}
			}

			if( !impact ) {
				var cssLeft = { 'left': mBoxLeft };
				move( cssLeft );
			}

		} else if ( e.keyCode === 38 ) {

			var impact = false;			
			for( var i = 0; i < fixedBoxes.length; i++ ) {
				if( mBoxRight >= fixedBoxes[i].left && mBoxLeft <= fixedBoxes[i].right ) {
					impact = true;
					var fixedBoxBottom = fixedBoxes[i].bottom;
					break;	
					}
				}
			}

			if( !impact ) {
				var cssTop = { 'top': fixedBoxBottom };
				mBox.animate( cssTop,500, function(){
					mBox.animate( { top: mBoxBottom },500 );	
				})
			} else {
				mBox.animate( {'top': 5px },500, function(){
					mBox.animate( { top: mBoxBottom },500 );	
				}
			}
		}


			
/*		xCoord = parseInt( mBox.css('left') );
		yCoord = parseInt( mBox.css('top') );
		console.log('x = ' + xCoord + '; y = ' + yCoord);

		switch( e.keyCode ) {
			case '37':
				console.log('key code: ' + e.keyCode);
 				xCoord -= 5;
 				var cssLeft = {'left': xCoord};
				move(cssLeft);
 				break;
			case '38':
				console.log('key code: ' + e.keyCode);
				$('#mbox').animate({
					top: '10px'
				},500, function(){
					$('#mbox').animate({
						top: '2w0px'
					},500);
				});	
				break;
			case '39':
				console.log('key code: ' + e.keyCode);
				xCoord += 5;
				var cssLeft = {'left': xCoord};
				move(cssLeft);
				break;
			
			default:
		
		}
		*/


	});
});