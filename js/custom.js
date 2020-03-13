/*
Copyright (c) 2017 
------------------------------------------------------------------
[Master Javascript]

Project:	ui  - Responsive HTML Template

-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var ui = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- ui Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.nav();
            this.team_member();
            this.story_member();
            this.popup_vid();
            this.hover_tab();
            this.wow();
        },
        /*-------------- ui Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
        
        // Fixed Menu
        nav: function() {

            if ($(".nav-opener").length) {
                $(".nav-opener").on("click", function(e) {
                    jQuery(this).toggleClass('active').find('i').toggleClass('fa-bars fa-times');
                    jQuery('.main-nav').toggleClass('nav-active');
                    e.preventDefault();
                });
            };

            if ($(".nav-opener").length) {
                $(".main-nav .nav ul li a").on("click", function(e) {
                    jQuery('.nav-opener').toggleClass('active').find('i').toggleClass('fa-times fa-bars');
                    jQuery('.main-nav').toggleClass('nav-active');
                    e.preventDefault();
                });
            };

            
            if ($("#submit1-tr").length) {
                $( "#submit1-tr" ).on( "click", function() {
                    $("#submit1").trigger( "click" );
                });
            };
                
            
        },
        //team_member
        team_member: function() {
            if ($('.team_member').length > 0) {

                var team_member = $('.team_member');


               team_member.owlCarousel({
                    margin:0,
                    autoplay:true,
                    autoplayHoverPause: true,
                    loop:true,
                    nav:true,
                    animateIn: 'fadeIn',
                    navText: ['&nbsp;', '<span>More Members </span><i class="flaticon-long-arrow-pointing-to-the-right"></i>' ],
                    items:1
                });

                $('.owl-carousel').mouseover(function(){
                    team_member.trigger('stop.owl.autoplay');
                })

                $('.owl-carousel').mouseleave(function(){
                    team_member.trigger('play.owl.autoplay',[1000]);
                })
                
            }
        },
		// story_member
        story_member: function() {
        	if ($('.story_member').length > 0) {
                var story_member =  $('.story_member');
	            story_member.owlCarousel({
	           		margin:0,
					autoplay:true,
                    autoplayHoverPause: true,
                    loop:true,
                    nav:true,
                    animateIn: 'fadeIn',
                    navText: ['&nbsp;', '<span>View Next Post</span> <i class="flaticon-long-arrow-pointing-to-the-right"></i>' ],
					items:1
				});
               $('.owl-carousel').mouseover(function(){
                    story_member.trigger('stop.owl.autoplay');
                })

                $('.owl-carousel').mouseleave(function(){
                    story_member.trigger('play.owl.autoplay',[1000]);
                })
        		
        	}
        },
        //input video
        popup_vid: function() {
            if ($('.video').length > 0) {
                $('.video').magnificPopup({
                      disableOn: 700,
                      type: 'iframe',
                      mainClass: 'mfp-with-zoom',
                      removalDelay: 300,
                      preloader: false,
                      fixedContentPos: false,
                      zoom: {
                                enabled: true,
                                duration: 400,
                                easing: 'ease-in-out',
                                opener: function(openerElement) {
                                    return openerElement.is('a') ? openerElement : openerElement.find('i');
                                }
                            }
                });
            };
        },

        //hover_tab
        hover_tab: function() {
            if ($('.work_slider').length > 0) {
                 //Owl Home page banner 
                 var owl = $(".work_slider").owlCarousel({
                 items: 1,
                 autoplay: true,
                 autoplayHoverPause: true,
                 dots: true,
                 dotsContainer: '#carousel-custom-dots',
                 nav: false,
                 navRewind: true,
                 smartSpeed:450,
                 loop: true,
                 responsive: {
                 991: {
                 dots: true
                 }
                 },
                 startPosition: randomPosition()
                 });
                 $('.owl-dot').on('click', function() {
                    owl.trigger('to.owl.carousel', [$(this).index(), 300]);

                 });
                 //Random index generator
                 function randomPosition(){
                 var r_hb = $('#carousel-custom-dots li').length;
                 var randomize = null;
                 
                 
                 randomize=1
                 
                 
                 if (randomize != 0) {
                 return (Math.floor(Math.random()* r_hb));
                 }
                 else { return 0 ;}
                 }
                 //Sort random function
                 function random(owlSelector){
                 owlSelector.children().sort(function(){
                 return Math.round(Math.random()) - 0.5;
                 }).each(function(){
                 $(this).appendTo(owlSelector);
                 });
                 };


                    $('.owl-carousel').mouseover(function(){
                        owl.trigger('stop.owl.autoplay');
                    })

                    $('.owl-carousel').mouseleave(function(){
                        owl.trigger('play.owl.autoplay',[1000]);
                    })

            }

        },
       

        wow: function() {
            if ($('.wow').length > 0) {
                new WOW().init();
            }
        }

        
    };
    $(document).ready(function() {
        ui.init();
    });
    //On load
     $(window).on('load', function() {
         var load;
         setTimeout(function() {
             $('body').addClass('load');
         }, 500);



        if ($('#navigation-menu').length) {
             // scroll to next id js
             $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
                highlightSelector:"#navigation-menu a"
            });
                
            /* demo functions */
            $("a[rel='next']").on('click', function(e) {
                e.preventDefault();
                var to=$(this).parent().parent("section,div").next().attr("id");
                $.mPageScroll2id("scrollTo",to);
            });
        };


        if ($('.screen').length) {
                    $( '.screen' ).scrollImage();  
            }

            
     });

          
     // Switcher Switcher
        
        if ($(".btn-clr").length) {
            $('.btn-clr').on('click', function(){
                $(this).toggleClass('btn-clr-clicked');
                $('.theme-menu').toggleClass('show-sidebar hide-sidebar');
            });
        };
            
        
        if ($("#style-switcher ul li").length) {
            $('#style-switcher ul li').on('click', function(){
                
                var path = $(this).data('path');
                $('#ui-theme-color').attr('href', path);
                var url = $(this).data('url');
              
                $("body .logo img").each(function(index){
                    var src = $(this).attr("src")
                    console.log(src);
                    var photoName = src.substr(src.lastIndexOf("/"));
                    $(this).attr("src", url+'/'+photoName)
                });
                

            });
        };


        // Window Scroll
        $(window).scroll(function() {
            //Go to top
            if ($(this).scrollTop() > 100) {
                $('#go_to_top').addClass('goto');
            } else {
                $('#go_to_top').removeClass('goto');
            }

        });

         $("#go_to_top").on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false
        });

	
})(jQuery);