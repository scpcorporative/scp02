/* 
    Theme Name: Donnie - Personal Responsive WebPage Tamplate
    Author: Themesdesign
    Version: 1.0.0
    File Description: Main JS file of the template
*/

! function($) {
    "use strict";

    var Donnie = function() {};

    Donnie.prototype.initStickyMenu = function() {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();

                if (scroll >= 50) {
                    $(".sticky").addClass("nav-sticky");
                } else {
                    $(".sticky").removeClass("nav-sticky");
                }
            });
        },

        Donnie.prototype.initSmoothLink = function() {
            $('.navbar-nav a').on('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 0
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        },

        Donnie.prototype.initScrollspy = function() {
            $("#navbarCollapse").scrollspy({
                offset: 70
            });
        },

        Donnie.prototype.initPortfolio = function() {
            $(window).on('load', function() {
                var $container = $('.projects-wrapper');
                var $filter = $('#filter');
                $container.isotope({
                    filter: '*',
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });
                $filter.find('a').click(function() {
                    var selector = $(this).attr('data-filter');
                    $filter.find('a').removeClass('active');
                    $(this).addClass('active');
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });
            });

        },

        Donnie.prototype.initMfpimage = function() {
            $('.mfp-image').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-fade',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                }
            });

        },

        Donnie.prototype.initCounter = function() {
            var a = 0;
            $(window).scroll(function() {
                var oTop = $('#counter').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('.counter-value').each(function() {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                                countNum: countTo
                            },

                            {
                                duration: 2000,
                                easing: 'swing',
                                step: function() {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function() {
                                    $this.text(this.countNum);
                                    //alert('finished');
                                }

                            });
                    });
                    a = 1;
                }
            });
        },

        Donnie.prototype.initContact = function() {
            $('#contact-form').submit(function() {

                var action = $(this).attr('action');

                $("#message").slideUp(750, function() {
                    $('#message').hide();

                    $('#submit')
                        .before('')
                        .attr('disabled', 'disabled');

                    $.post(action, {
                            name: $('#name').val(),
                            email: $('#email').val(),
                            comments: $('#comments').val(),
                        },
                        function(data) {
                            document.getElementById('message').innerHTML = data;
                            $('#message').slideDown('slow');
                            $('#cform img.contact-loader').fadeOut('slow', function() {
                                $(this).remove()
                            });
                            $('#submit').removeAttr('disabled');
                            if (data.match('success') != null) $('#cform').slideUp('slow');
                        }
                    );

                });

                return false;

            });
        },

        Donnie.prototype.init = function() {
            this.initStickyMenu();
            this.initSmoothLink();
            this.initScrollspy();
            this.initPortfolio();
            this.initMfpimage();
            this.initCounter();
            this.initContact();
        },
        //init
        $.Donnie = new Donnie, $.Donnie.Constructor = Donnie
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Donnie.init();
}(window.jQuery);