$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('#preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".header-nav").removeClass("sticky");
        } else {
            $(".header-nav").addClass("sticky");
        }
    });

    //===== Swiper
    var menu = ['2018', '2019', '2020'];
    var mySwiper = new Swiper('.roadmap-main', {
        // Optional parameters
        pagination: {
            el: '.swiper-custom-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
    });
    var mySwiper = new Swiper('.roadmap-sec', {
        // Optional parameters
        slidesPerView: 5,
            breakpoints: {
            992: {
                slidesPerView: 2
            }
        }
    });

        // Single Features Active
        $('.future-roadmap').on('mouseover', '.roadmap-sec-slide', function() {
            $('.roadmap-sec-slide.active').removeClass('active');
            $(this).addClass('active');
        });

    //===== Mobile Menu 

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-angle-down"></i> </button>';
        });

        var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

        subMenuToggler.on('click', function () {
            $(this).parent().parent().children(".sub-menu").slideToggle();
            return false
        });

    }



    //===== faq accrodion

    if ($('.accrodion-grp').length) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function () {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function () {
                $(this).find('.accrodion-title').on('click', function () {
                    if ($(this).parent().parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().parent().addClass('active');
                        $(this).parent().parent().find('.accrodion-content').slideDown();
                    };


                });
            });
        });

    };






    $('.circle-1').circleProgress({
        value: 0.4,
        size: 145,
        thickness: 6,
        lineCap: "round",
        fill: {
            gradient: ["#ffc50c", "#ffc50c"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(40 + '<i>%</i>');
    });


    $('.circle-2').circleProgress({
        value: 0.2,
        size: 145,
        thickness: 6,
        lineCap: "round",
        fill: {
            gradient: ["#ffc50c", "#ffc50c"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(20 + '<i>%</i>');
    });


    $('.circle-3').circleProgress({
        value: 0.15,
        size: 145,
        thickness: 6,
        lineCap: "round",
        fill: {
            gradient: ["#ffc50c", "#ffc50c"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(15+ '<i>%</i>');
    });

    $('.circle-4').circleProgress({
        value: 0.15,
        size: 145,
        thickness: 6,
        lineCap: "round",
        fill: {
            gradient: ["#ffc50c", "#ffc50c"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(15+ '<i>%</i>');
    });

    $('.circle-5').circleProgress({
        value: 0.1,
        size: 145,
        thickness: 6,
        lineCap: "round",
        fill: {
            gradient: ["#ffc50c", "#ffc50c"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(10+ '<i>%</i>');
    });



    //===== syotimer js
    $('#simple_timer').syotimer({
        year: 2020,
        month: 9,
        day: 9,
        hour: 20,
        minute: 30,
    });


    //===== nice select
    $('select').niceSelect();






    //===== Back to top

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll_up').fadeIn();
        } else {
            $('#scroll_up').fadeOut();
        }
    });
    $('#scroll_up').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    //===== 
















});