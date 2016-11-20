/**
* @preserve Sticky Menu (or Anything!) on Scroll Add-on: Dismiss Button 1.0 | @senff | GPL2 Licensed
*/

(function($) {
  $(document).ready(function($) {

	buttonMargins = 10;

  	// Add the "close" button right away, hidden from view 
	$('body').append('<a id="sticky-element-dismiss-button" class="sticky-dismiss-button-hide" href="#"></a>');  	
    
	// Set the top position of the button, based on the plugin settings
	dismissButtonTop = parseFloat(sticky_anything_engage.topspace) + buttonMargins;
	$('#sticky-element-dismiss-button').css('top',dismissButtonTop);

	// Check if there's a sticky element through the function dismissButton()
	// If yes, position the left coordinate of the dismiss button and show it
    checkScroll = setInterval(function(){dismissButton()},10);

    originalStyle = $('.sticky-element-original').attr('style');

    // Clicking the dismiss button: override stuff
	$('body').on('click','#sticky-element-dismiss-button',function(d){
		d.preventDefault();
		$('.sticky-element-placeholder').attr('id','sticky-element-placeholder-override');
		$('.sticky-element-original:not(.sticky-element-active)').addClass('sticky-element-original-override');
		$('#sticky-element-dismiss-button').addClass('sticky-dismiss-button-hide').addClass('sticky-dismiss-button-override');
	});

	$(window).on('resize',function(r){
		
		if( !$('#sticky-element-dismiss-button').hasClass('sticky-dismiss-button-hide')) {

			var $stickyElement = $('.sticky-element-original:not(.sticky-element-active)');
			var stickyPosition = $stickyElement.position();

			stickyLeftPos = stickyPosition.left;
			stickyWidth = $stickyElement.outerWidth();

			buttonLeftPos = stickyLeftPos + stickyWidth - $('#sticky-element-dismiss-button').outerWidth() - buttonMargins;

			$('#sticky-element-dismiss-button').css('left',buttonLeftPos);

		}

	});

  });

	function dismissButton() {
		var $stickyElement = $('.sticky-element-original:not(.sticky-element-active)');

		if ($stickyElement.length > 0 ) {

			// At this time, the element is sticky

			// Check if the dismiss button is visible already
			// If not, position it and make it visible
			if( $('#sticky-element-dismiss-button').hasClass('sticky-dismiss-button-hide') && (!$('#sticky-element-dismiss-button').hasClass('sticky-dismiss-button-override')) ) {

				var stickyPosition = $stickyElement.position();

				stickyLeftPos = stickyPosition.left;
				stickyWidth = $stickyElement.outerWidth();
				stickyZ = $stickyElement.css('z-index');
				stickyMargin = $stickyElement.css('margin-top');

				buttonLeftPos = stickyLeftPos + stickyWidth - $('#sticky-element-dismiss-button').outerWidth() - buttonMargins;

				$('#sticky-element-dismiss-button').removeClass('sticky-dismiss-button-hide').css('left',buttonLeftPos).css('margin-top',stickyMargin).css('z-index',stickyZ+'0');

			} else {
				// The dismiss button is already visible. No need to make it visible again.
			}

			if ($('.sticky-element-original-override').length) {
				$('.sticky-element-original-override').removeAttr('style');
				if (originalStyle) {
					$('.sticky-element-original-override').attr('style',originalStyle);
				}
			}

	  	} else {

	  		resetSticky();

	  	}
	}

	function resetSticky() {

  		// The element is/becomes not sticky due to scrolling

		$('.sticky-element-placeholder').removeAttr('id');
		$('.sticky-element-original').removeClass('sticky-element-original-override');
  		$('#sticky-element-dismiss-button').addClass('sticky-dismiss-button-hide').removeClass('sticky-dismiss-button-override');

	}

}(jQuery));
