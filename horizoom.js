(function( $ ) {
  $.fn.horizoom = function() {
    
    var el = $(this),
        initWidth = el.width(),
		downX = 0,
		movX = 0,
		initVal = 0;

	el.css('backgroundSize', el.width());

	el.mousedown( function() {
		downX = movX; initVal = 1; }).mouseup( function() {
			downX = 0; initVal = 0; initWidth = el.width();
	});

	el.mousemove( function(e) { movX = e.clientX;
		if(initVal == 1) {
			el.width(initWidth + (movX - downX)); el.height(initWidth + (movX - downX)); el.css('backgroundSize', el.width());
		}
	});


    return this;
    
	}; 
})( jQuery );