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
        var splide = new Splide( '.slide_top', {
            type   : 'loop',
            padding: '20rem',
        } );

        splide.mount();
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
