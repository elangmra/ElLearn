$(window).on("load", function () {

    "use strict";

/* ===================================
        Loading Timeout
 ====================================== */

    $('.side-menu').removeClass('hidden');
    $('.link').addClass('d-none');

    setTimeout(function () {
        $(".loader").fadeOut("slow");
    }, 1000);
});

jQuery(function ($) {

    "use strict";

/* ===================================
       Header Appear
====================================== */

$(window).on('scroll', function () {

    if ($(this).scrollTop() > 500) { // Set position from top to add class
        $('.inner-header').addClass('header-appear');
        $('.link').removeClass('d-none');
    } else {
        $('.inner-header').removeClass('header-appear');
        $('.link').addClass('d-none');
    }
});

/*===================================
    Go Top Scroll
====================================== */

$(function(){
    // Scroll Event
    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });
    // Click Event
    $('.go-top').on('click', function() {
        $("html, body").animate({ scrollTop: "0" },  500);
    });
});

/* ===================================
       Navbar smooth Scroll
====================================== */

$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 80}, 1200);
});

/* ===================================
    Side Menu
====================================== */

if ($("#sidemenu_toggle").length) {
    $("#sidemenu_toggle").on("click", function () {
        $(".side-menu").removeClass("side-menu-opacity");
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function(){
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    }), $(".side-nav .navbar-nav .nav-link, .side-logo").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function(){
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function(){
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    });
}

/* ===================================
        WOW Animation
====================================== */

if ($(window).width() > 991) {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    new WOW().init();
}

/* ===================================
        Mouse parallax
====================================== */

$('.banner-slider .slider-img-area').mousemove(function(e) {
    $('[data-depth]').each(function () {
        var depth = $(this).data('depth');
        var amountMovedX = (e.pageX * -depth/4);
        var amountMovedY = (e.pageY * -depth/4);

        $(this).css({
            'transform':'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)',
        });
    });
});

/* ===================================
        Counters
====================================== */

$(".company-stats-section").appear(function () {
    $('.stats-number-inner span').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

/* ===================================
        Cube Portfolio
====================================== */

$('#js-grid-mosaic').cubeportfolio({
    filters: '#js-filters-mosaic',
    layoutMode: 'grid',
    sortByDimension: true,
    mediaQueries: [{
        width: 1500,
        cols: 2,
    }, {
        width: 1100,
        cols: 2,
    }, {
        width: 768,
        cols: 1,
    }, {
        width: 480,
        cols: 1,
        options: {
            gapHorizontal: 60
        }
    }],
    defaultFilter: '*',
    animationType: 'fadeIn',
    gapHorizontal: 50,
    gapVertical: 50,
    gridAdjustment: 'responsive',
    caption: 'zoom',

    // lightbox
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
    lightboxTitleSrc: 'data-title',
    lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

    plugins: {
        loadMore: {
            element: "#js-loadMore-lightbox-gallery",
            action: "click",
            loadItems: 5,
        }
    }
})
    .on('initComplete.cbp', function () {
        // your functionality
        var $this = $(this);
        if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
            $("#js-loadMore-lightbox-gallery").addClass("active");
        } else {
            $("#js-loadMore-lightbox-gallery").removeClass("active");
        }
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");

            console.log();
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
            }
        });
    })
    .on('onAfterLoadMore.cbp', function () {
        // your functionality
        var $this = $(this);
        $("#js-loadMore-lightbox-gallery a").addClass("d-none");
        $("#js-loadMore-lightbox-gallery").addClass("active-outer");
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");
            console.log();
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
            }
        });
    })
    .on('filterComplete.cbp', function () {
        // your functionality
        var $this = $(this);
        if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
            $("#js-loadMore-lightbox-gallery").addClass("active");
            $("#js-loadMore-lightbox-gallery").removeClass("d-none");
        } else {
            $("#js-loadMore-lightbox-gallery").removeClass("active");
            $("#js-loadMore-lightbox-gallery").addClass("d-none");
        }
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
            }
        });
    });

/*=====================================
      Testimonial Carousel
======================================*/
$('.testimonial-box').owlCarousel({
    loop: true,
    margin: 20,
    slideSpeed: 5000,
    slideTransition: 'linear',
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        },
    }
});

});

document.addEventListener('DOMContentLoaded', (event) => {
    const myQuestions = [
        {
            question: "1. Apa peran utama dari server dalam arsitektur client-server?",
            answers: {
                a: "Mengirim permintaan data",
                b: "Memproses data di sisi client",
                c: "Menyediakan sumber daya dan layanan kepada client",
                d: "Menyimpan data secara lokal"
            },
            correctAnswer: "c"
        },
        {
            question: "2. ODBC adalah singkatan dari?",
            answers: {
                a: "Online Database Connectivity",
                b: "Open Database Connectivity",
                c: "Object Database Connection",
                d: "Oracle Database Connection"
            },
            correctAnswer: "b"
        },
        {
            question: "3. Apa itu protokol dalam konteks jaringan client-server?",
            answers: {
                a: "Alamat IP server",
                b: "Sebuah set aturan untuk transfer data",
                c: "Nama domain dari client",
                d: "Sistem operasi server"
            },
            correctAnswer: "b"
        },
        {
            question: "4. Dalam arsitektur client-server, istilah 'thin client' mengacu pada apa?",
            answers: {
                a: "Client dengan perangkat keras yang minimal",
                b: "Client yang melakukan sebagian besar pemrosesan",
                c: "Server dengan beban kerja yang rendah",
                d: "Client yang hanya memiliki antarmuka pengguna"
            },
            correctAnswer: "d"
        },
        {
            question: "5. Protokol apa yang biasanya digunakan untuk transfer file di internet?",
            answers: {
                a: "HTTP",
                b: "FTP",
                c: "TCP",
                d: "SSH"
            },
            correctAnswer: "b"
        },
        {
            question: "6. Apa kepanjangan dari SQL dalam konteks database?",
            answers: {
                a: "Simple Query Language",
                b: "Structured Query Language",
                c: "Standard Query Language",
                d: "Sequential Query Language"
            },
            correctAnswer: "b"
        },
        {
            question: "7. Apa itu 'client' dalam model client-server?",
            answers: {
                a: "Perangkat yang menyediakan layanan",
                b: "Perangkat yang meminta layanan",
                c: "Jaringan yang menghubungkan client dan server",
                d: "Perangkat lunak yang menghubungkan database"
            },
            correctAnswer: "b"
        },
        {
            question: "8. Dalam konteks ODBC, apa fungsi dari 'DSN'?",
            answers: {
                a: "Data Server Name",
                b: "Database Source Name",
                c: "Data Source Name",
                d: "Database Server Number"
            },
            correctAnswer: "c"
        },
        {
            question: "9. Apa manfaat utama menggunakan arsitektur client-server?",
            answers: {
                a: "Pengelolaan data yang lebih mudah",
                b: "Pengurangan beban kerja pada client",
                c: "Keamanan data yang lebih baik",
                d: "Semua jawaban benar"
            },
            correctAnswer: "d"
        },
        {
            question: "10. Apa yang dimaksud dengan 'middleware' dalam sistem client-server?",
            answers: {
                a: "Perangkat keras yang menghubungkan client dan server",
                b: "Perangkat lunak yang memfasilitasi komunikasi antara client dan server",
                c: "Protokol jaringan",
                d: "Perangkat lunak server"
            },
            correctAnswer: "b"
        }
    ];

    function buildQuiz(){
        const output = [];

        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];

                for(letter in currentQuestion.answers){
                    answers.push(
                        `<label>
                            <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                        </label><br>`
                    );
                }

                output.push(
                    `<div class="question fw-700"> ${currentQuestion.question} </div>
                    <div class="answers fw-400" > ${answers.join('')} </div>`
                );
            }
        );

        quizContainer.innerHTML = output.join('');
    }

    function showResults(){
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        myQuestions.forEach( (currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if(userAnswer === currentQuestion.correctAnswer){
                numCorrect++;
                answerContainers[questionNumber].style.color = 'lightgreen';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `${numCorrect} dari ${myQuestions.length} jawaban benar`;
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    
    buildQuiz();

    submitButton.addEventListener('click', showResults);
});
