// Preloader
$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

})


$(document).ready(function(){
  
	    // Smooth Scroll Navigation
    // Smooth scroll
    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

    });
	
	  //animate scroll
	   AOS.init({
	 offset: 40,
	 duration: 5000
	});


});

 