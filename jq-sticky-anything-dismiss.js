/**
* @preserve Sticky Menu (or Anything!) on Scroll Add-on: Dismiss Button 1.0 | @senff | GPL2 Licensed
*/

(function($) {
  $(document).ready(function($) {
    checkScroll = setInterval(function(){dismissButton()},10);

    originalStyle = $('.sticky-element-original').attr('style');

	$('body').on('click','#sticky-element-dismiss-button',function(d){
		d.preventDefault();
		$('.sticky-element-placeholder').attr('id','sticky-element-placeholder-override');
		$('.sticky-element-original:not(.sticky-element-active)').addClass('sticky-element-original-override');
		$('#sticky-element-dismiss-button').addClass('sticky-element-dismiss-hide');
	});

  });

	function dismissButton() {
		var $stickyElement = $('.sticky-element-original:not(.sticky-element-active)');

		buttonMargins = 5;

		if ($stickyElement.length > 0 ) {

			// At this time, the element is sticky

			if( !$('#sticky-element-dismiss-button').length ) {
				$stickyElement.after('<a id="sticky-element-dismiss-button" href="#">X</a>');
			}
			var stickyPosition = $stickyElement.position();

			stickyLeftPos = stickyPosition.left;
			stickyTopPos = stickyPosition.top;
			stickyWidth = $stickyElement.width();
			stickyZ = $stickyElement.css('z-index');
			stickyMargin = $stickyElement.css('margin-top');

			buttonLeftPos = stickyLeftPos + stickyWidth - $('#sticky-element-dismiss-button').outerWidth() - buttonMargins;
			buttonTopPos = stickyTopPos + buttonMargins;

			$('#sticky-element-dismiss-button').css('left',buttonLeftPos).css('top',buttonTopPos).css('margin-top',stickyMargin).css('z-index',stickyZ+'0');

			if ($('.sticky-element-original-override').length) {
				$('.sticky-element-original-override').removeAttr('style');
				if (originalStyle) {
					$('.sticky-element-original-override').attr('style',originalStyle);
				}
			}

	  	} else {

	  		// The element is/becomes not sticky

			$('.sticky-element-placeholder').removeAttr('id');
			$('.sticky-element-original').removeClass('sticky-element-original-override');
	  		$('#sticky-element-dismiss-button').remove();
	  	}
	}

}(jQuery));
