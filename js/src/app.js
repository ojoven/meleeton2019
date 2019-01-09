(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Handle gender
    $('#gender').on('change', function() {
       var val = $(this).val();
        var $genderChange = $('.gender-change');
        $genderChange.text(val);

        // Variation 1: e for masculine / a for femenine
        if (val === 'o') {
            var $genderChangeVariation1 = $('.gender-change-variation-1');
            $genderChangeVariation1.text('e');
        }

        // Variation 2: ue for neutral (amigues)
        if (val === 'e') {
            var $genderChangeVariation2 = $('.gender-change-variation-2');
            $genderChangeVariation2.text('ue');
        }

        // Variation 2: e with qu
        var $genderChangeVariation3 = $('.gender-change-variation-3');
        var html = $genderChangeVariation3.parent().html();
        if (val === 'e') {
            html = html.replace('c', 'qu');
        } else {
            html = html.replace('qu', 'c');
        }

        $genderChangeVariation3.parent().html(html);
    });

})(jQuery); // End of use strict
