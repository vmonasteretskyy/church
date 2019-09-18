

$(window).on('scroll', function () {

    var scroll = $(window).scrollTop();

});

$(document).ready(function ($) {

    $(".searchTerm").on("focus", function() {
        $(".searchTerm").val("");
    });

    $('#searchMob').click(function() {
        $("#searchMob, .search-close").addClass('open');
        $( "#searchMob" ).keyup(function() {
            $('.search-clean').show();
        });
    });

    $('.search-close').click(function() {
        $("#searchMob, .search-close").removeClass('open');
        $("#searchMob").val("");
        $('.search-clean').hide();

    });

    $(".search-clean").on("click", function() {
        $("#searchMob").val("");
    });
    

    // FIXED MENU start
    var mq1000min = window.matchMedia("(min-width: 1000px)");
    var mq991min = window.matchMedia("(min-width: 991px)");
    var mq576 = window.matchMedia("(max-width: 575.8px)");
    var mq1100 = window.matchMedia("(max-width: 1100px)");
    var mq900h = window.matchMedia("(max-height: 900px)");

    if (mq991min.matches) {
        $('.link').click(function () {
            if ($(window).scrollTop() < 100) {


            }
            else {
                var ths = $(this);
                $(ths).toggleClass('header-menu-open');
                $('.header-menu h3').not(this).removeClass('header-menu-open');
            }
        });


        $(window).on('scroll', function () {
            if ($(window).scrollTop() < 100) {
                $('.link').each(function ($key, $item) {
                    $($item).removeClass('header-menu-open');
                });
            }
        });


        $(window).on('scroll', function () {

            if ($(document).scrollTop() > 100) {
                $('.header').addClass('header-fixed');
                $('.header-btn .btn').addClass('calendar-none');
                $('.header-menu ul').addClass('dis-none');
            } else {
                $('.header').removeClass('header-fixed');
                $('.header-menu ul').removeClass('dis-none');
                $('.header-btn .btn').removeClass('calendar-none');
            }

        });
    }
    // FIXED MENU end

    // POPUP THANKS start
    $('.donate-btn').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('.popup-thanks')
                    .css('display', 'block')
                    .animate({ opacity: 1, top: '50%' }, 200);
            });
    });
    $('.modal_close, #overlay').click(function () {
        $('.popup-thanks').animate({ opacity: 0, top: '45%' }, 200,
            function () {
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            }
        );
    });

    // POPUP THANKS end

    // HUMBURGER MENU start
    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('is-active');
        $('.header-navigation').slideToggle();
    });

    var mq991 = window.matchMedia("(max-width: 991px)");


    $(function () {
        if (mq991.matches) {
            var Accordion = function (el, multiple) {
                this.el = el || {};
                this.multiple = multiple || false;

                // Variables privadas
                var links = this.el.find('.link');
                // Evento
                links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
            }

            Accordion.prototype.dropdown = function (e) {
                var $el = e.data.el;
                $this = $(this),
                    $next = $this.next();

                $next.slideToggle();
                $this.parent().toggleClass('open');

                if (!e.data.multiple) {
                    $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
                };
            }

            var accordion = new Accordion($('#accordion'), false);
        }
    });

    // HUMBURGER MENU end


    // STYLE FOR MAIN start
    var heightHeader = $('.header').height();
    $('.main').css('margin-top', heightHeader);
    $('.first-screen__slide').css('height', 'calc(100vh - ' + heightHeader + 'px)');
    $('.dash__first-screen').css('height', 'calc(100vh - ' + heightHeader + 'px)');
    var heightFooter = $('.footer').height();

     if (mq1100.matches) {
         $('.first-screen__slide').css('height', 'calc(60vh - ' + heightHeader + 'px)');
     }

     if (mq576.matches || (mq1100.matches && mq900h.matches)) {
         $('.first-screen__slide').css('height', 'calc(100vh - ' + heightHeader + 'px)');
     }

// STYLE FOR MAIN end


    // SELECT STYLE start
    $('select').each(function () {

        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });
    // SELECT STYLE end


    var headerHeight = $('.header').height();
    // $('.first-screen__slide').css({
    //     'margin-top': headerHeight,
    //     'height': 'calc(100vh - '+headerHeight+')'
    // });

    // SLIDER FIRST SCREEN start
    $('.first-screen__slider').slick({
        dots: true,
        arrow: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        slide: ".first-screen .slide",
    });

    // SLIDER FIRST SCREEN end

    // SLIDER NEWS HOME start
    $('.news-slider').slick({
        dots: false,
        arrow: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        slide: ".news-slide",
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // SLIDER NEWS HOME end



    $('#reloadMoreNews').click(function (event) {
        event.preventDefault();
        $('#newsContent').append('<article class="news-box"><div class="row align-items-center"><div class="col-12 col-md-5"><a href="#" class="news-box__image"><img src="img/blog/image-6.png" alt=""><div class="news-box__date"><span>27</span><span>11</span><span>18</span></div></a></div><div class="col-12 col-md-7"><div class="news-box__desc"><a href="#">Конференция освежающие  потоки - большой зал </a><p>Открылась новая церковь в г. Черноморск. Всех желающих приглашаем на богослужение. Верим, что Господь Иисус Христос, Сын Божий пришел во плоти, одинаково как Б...</p></div></div></div></article>');
    });


    // slider slider-watch-also start
    function slideDetect() {
        $('.slider-watch-also').slick({
            dots: false,
            arrow: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 99999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    arrow: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    slide: ".col-12"
                }
            }
            ]
        });
    }

    slideDetect();

    $(window).resize(function () {
        if ($(window).width() > 767) {
            $('.slider-watch-also').slick('unslick');
        }
        else if ($(window).width() <= 767) {
            slideDetect()
        }
    });
    // slider slider-watch-also end


    // slider page church_services-open start
    $('.slider-photo').slick({
        dots: false,
        arrow: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        slide: ".col-12",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-video').slick({
        dots: false,
        arrow: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        slide: ".col-12",
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });
    // slider page church_services-open end

    // slider page resources
    $('.resources-slider').slick({
        dots: false,
        arrow: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        slide: ".col-12",
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

    // POPUP video-open start

    var videoSrc;  
    $('.video-container__video').click(function() {
        videoSrc = $(this).data( "src" );
    });

    $('.video-container__video').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('.popup-video-open')
                    .css('display', 'block')
                    .animate({ opacity: 1, top: '50%' }, 200);
            });
        $("#video").attr('src',videoSrc + "?autoplay=1" ); 
    });
    $('.modal_close, #overlay, .close').click(function () {
        $('.popup-video-open').animate({ opacity: 0, top: '45%' }, 200,
            function () {
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            }
        );
        $("#video").attr('src',videoSrc); 
    });
    // POPUP video-open end
     


// CALENDAR start
    
    $('.calendar-event:nth-child(2n)').children(".calendar-event__information").addClass('order-2');
    $('.calendar-event:nth-child(2n)').children(".calendar-event__date").addClass('order-1');

    $('.calendar-event:odd').addClass('calendar-event__right');
    $('.calendar-event:even').addClass('calendar-event__left');


    if (mq576.matches) {
        $('.calendar-event:odd').removeClass('calendar-event__right');
        $('.calendar-event:even').removeClass('calendar-event__left');

        $('.calendar-event:even').children(".calendar-event__information").addClass('order-2');
        $('.calendar-event:even').children(".calendar-event__date").addClass('order-1');
    }

// CALENDAR end


    $("#cc").inputmask({
        mask: '9999  9999  9999  9999',
        placeholder: 'X'
    });

    $("#month").inputmask({
        mask: '99',
        placeholder: 'X'
    });

    $("#year").inputmask({
        mask: '99',
        placeholder: 'X'
    });

    $("#cvv").inputmask({
        mask: '999',
        placeholder: 'X'
    });


    $('#bank').on('click', function (e) {
        $('.donate__credit_card').slideToggle();
        if ($('.donate__bank_account').is(":visible")) {
            $('.donate__bank_account').slideUp();
        }
    });
    $('#bil').on('click', function () {
        $('.donate__bank_account').slideToggle();
        if ($('.donate__credit_card').is(":visible")) {
            $('.donate__credit_card').slideUp();
        }
    });

    $('#privat, #liqpay').on('click', function () {
        $('.payment-form').slideUp();
    });

    
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });


});


// YOUTUBE video

function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i<j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
 
    var nb_videos = videos.length;
    for (var i=0; i<nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
 
        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
 
        videos[i].onclick = function() {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
 
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
 
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }

// YOUTUBE video

    $(function(){
		$('#reloadMoreNews').click(function () {
            $('.reload-more span img').addClass("animate");
            setTimeout(RemoveClass, 6000);
            });
            function RemoveClass() {
            $('.reload-more span img').removeClass("animate");
		}
    });
    

    // waiting download pagination
    $(function(){
		$('.page-pagination__link').click(function () {
            var findLink = $(this);
            if ($('.page-pagination__link').hasClass('active')) {
                $('.page-pagination__link').removeClass('active');
                setTimeout(addClass, 3000);
            }
            else {
                setTimeout(addClass, 3000);
            }
            function addClass() {
                findLink.addClass('active');
            }
            $(this).next('.waiting-download').html('<svg id="spinner" width="174px" height="174px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="transparent" stroke-width="3.5" cx="33" cy="33" r="30" stroke="url(#gradient)"/><linearGradient id="gradient"><stop offset="50%" stop-color="#1d5c6f" stop-opacity="1"/><stop offset="65%" stop-color="#1d5c6f" stop-opacity=".7"/><stop offset="100%" stop-color="#1d5c6f" stop-opacity=".2"/></linearGradient></svg>');
                setTimeout(RemoveClass, 3000);
            });
            function RemoveClass() {
                $('#spinner').remove();
            }
            
    }); 


  



// AUDIO style
    Plyr.setup('.player');
// AUDIO style


});