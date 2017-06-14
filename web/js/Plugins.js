$(function() {
	
	$(".dropdown-button").dropdown();
	// Initialize collapse button
	$(".button-collapse").sideNav();
	
	$(document).ready(function() {
    $('select').material_select();
	$('#modalrequired').modal('open');
  });
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
	
$(document).ready(function(){
    $('.collapsible').collapsible();
  });
  
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: 350, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
	
	
	$("#clear").click(function(evt){
    evt.preventDefault();
    $("#search").val("").focus();

});

  
  
  /* Thanks to CSS Tricks for pointing out this bit of jQuery
		http://css-tricks.com/equal-height-blocks-in-rows/
		It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

		equalheight = function(container) {

			var currentTallest = 0, currentRowStart = 0, rowDivs = new Array(), $el, topPosition = 0;
			$(container).each(function() {

				$el = $(this);
				$($el).height('auto');
				topPostion = $el.position().top;

				if (currentRowStart != topPostion) {
					for ( currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
						rowDivs[currentDiv].height(currentTallest);
					}
					rowDivs.length = 0;
					// empty the array
					currentRowStart = topPostion;
					currentTallest = $el.height();
					rowDivs.push($el);
				} else {
					rowDivs.push($el);
					currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
				}
				for ( currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
			});
		};
	});
	$(window).load(function() {
		equalheight('.equalheight .eq');
	});

	$(window).resize(function() {
		equalheight('.equalheight .eq');
	});
	


$(document).ready(function() {
		$(window).scroll(function() {
			//if you hard code, then use console
			//.log to determine when you want the
			//nav bar to stick.
			var StickNavFromHeight = $('.top').css('display') == 'none'? 0 : $('.top').height();
			//console.log($(window).scrollTop());
			if ($(window).scrollTop() > StickNavFromHeight) {
				$('#navholder').addClass('navbartop-fixed');
			}
			if ($(window).scrollTop() < StickNavFromHeight + 1) {
				$('#navholder').removeClass('navbartop-fixed');
			}
		});
		
		
		
		/*----------------------------------------------------
 /*  Small Logo Upon Scroll
 /* ------------------------------------------------- */
jQuery(document).ready(function($) {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 40) {
            jQuery('.brand-logo').addClass('small-logo');
        } else {
            jQuery('.brand-logo').removeClass('small-logo');
        }
    });
});
		
		
		
		
		
	});
	
	
