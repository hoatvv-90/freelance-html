(function ($) {
    var _duration = 1000,
        _easing = "easeOutCubic",
        _width = window.innerWidth,
        _windowWidth = window.innerWidth,
        _windowHeight = window.innerHeight,
        _spmode = 768,
        _speed = 1000;

    if (_width <= _spmode) {
    }
    // loading after
    window.onload = function () {
        scrollAnimation('.list_scroll a');

    };

    function activeTab(obj) {
        $('.tabs_list ul li').removeClass('active_tab');
        $(obj).addClass('active_tab');
        var id = $(obj).find('a').attr('href');
        $('.tab_item').hide();
        $(id).show();
    }
    $('.tab_nav li').click(function() {
        activeTab(this);
        return false;
    });
    activeTab($('.tab_nav li:first-child'));

    $('.question').on('click', function () {
        $(this).toggleClass('active');
        const answer = $(this).next();
        answer.slideToggle({
            duration: 500,
            step: function () {
                if (answer.css('display') == 'block') {
                    answer.css('display', 'flex');
                }
            },
            complete: function () {
                if (answer.css('display') == 'block') {
                    answer.css('display', 'flex');
                }
            }
        });
    })

    function scrollAnimation ( selector ) {
        $(selector).click(function (e) {
            let targetPage = $(this).attr("href");
            if( targetPage.includes('#') ) {
                let currentPage = $(`${targetPage}`);
                if (currentPage.length > 0) {
                    $('html, body').animate({
                        scrollTop: $(currentPage).offset().top - 90
                    }, 1000);
                } else {
                    let originName = window.location.origin;
                    window.location.href = originName;
                    localStorage.setItem('idSection', targetPage);
                }
            }
        });
    }

    //resize after
    window.onresize = function () {
        _width = $(window).width();
        if (_width <= _spmode) {
        } else {
        }
    };

    //scroll after
    window.onscroll = function () {};

})(jQuery);
