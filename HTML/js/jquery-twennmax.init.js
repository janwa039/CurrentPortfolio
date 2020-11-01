
//TWEEN
// moves the image when the mouse hovers on the image
	$( document ).mousemove( function( e ) {
		$( '.about-tween' ) .parallax( 70, e );
	});