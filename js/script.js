$(document).ready(function() {
    $('button').click(function() {
        var toAdd = $("input[name=message]").val();
        $('#messages').append("<p>"+toAdd+"</p>");
    });
});

function crazytrain() {
	
	
		/*function dweedle(base, exponent) {
		document.write(base + " crazy train " + exponent)  
		};
 		dweedle(5,6);*/

		function makeAddFunction(amount) {
		  function add(number) {
		    return number + amount;
		  }
		  return add;
		}

		var addTwo = makeAddFunction(2);
		var addFive = makeAddFunction(5);
		return (addTwo(98) + addFive(1));
		
		


}

/*=================smooth scroll======================*/

// Smooth scroll for in page links created by Satyajit Sahoo, edit to third line prevents carousel from inheriting behavior.
$(function(){
    var target, scroll;

    $("a[href*=#]:not([href=#carousel-example-generic])").on("click", function(e) {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            target = $(this.hash);
            target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

            if (target.length) {
                if (typeof document.body.style.transitionProperty === 'string') {
                    e.preventDefault();
                  
                    var avail = $(document).height() - $(window).height();

                    scroll = target.offset().top;
                  
                    if (scroll > avail) {
                        scroll = avail;
                    }

                    $("html").css({
                        "margin-top" : ( $(window).scrollTop() - scroll ) + "px",
                        "transition" : "1.5s ease-in-out"
                    }).data("transitioning", true);
                } else {
                    $("html, body").animate({
                        scrollTop: scroll
                    }, 1000);
                    return;
                }
            }
        }
    });

    $("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function (e) {
        if (e.target == e.currentTarget && $(this).data("transitioning") === true) {
            $(this).removeAttr("style").data("transitioning", false);
            $("html, body").scrollTop(scroll);
            return;
        }
    });
});