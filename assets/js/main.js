(function ($) {
    var _duration = 1000,
        _easing = "easeOutCubic",
        _width = window.innerWidth,
        _windowWidth = window.innerWidth,
        _windowHeight = window.innerHeight,
        _spmode = 768,
        _speed = 1000;
    let distance = 0;
    if (_width <= _spmode) {
    }
    // loading after
    $(window).on('load', function(){
        scrollAnimation('.list_scroll a');
        $('#search_bar .list_search a').on('click', function(e){
            e.preventDefault();
            const idModal = $(this).attr('href');
            $('.modal_wrapper.show').removeClass('show');
            $(idModal).addClass('show');
            $('#modal').addClass('show');
            $('.page_list').addClass('active');
            $('#modal').css('top', distance);
        });

        //handle modal

        $('#modal .close').on('click', function() {
            $('#modal').removeClass('show');
            $('.page_list').removeClass('active');
        });

        $('.main_tabs a').on('click', function(e){
            e.preventDefault();
            $('.main_tabs li.active').removeClass('active')
            const idTabActive = $(this).attr('href');
            $(this).parent('li').addClass('active');
            $('.location_tabs .sub_tabs.active').removeClass('active');
            $(`.location_tabs ${idTabActive}`).addClass('active');
        });

        $('#modal').on('click', '.label_all',function(){
            const modalWrapper = $(this).parents('.modal_wrapper');
            const listInput = modalWrapper.find('input[type="checkbox"]');
            const inputCheckAll = $(this).children('#all').attr('checked');
            listInput.attr('checked', !inputCheckAll);
        });

        $('#modal').on('click', '.clear', function(){
            const modalWrapper = $(this).parents('.modal_wrapper');
            const listInput = modalWrapper.find('input[type="checkbox"]:checked');
            listInput.attr('checked', false);
        })

        $('.sub_tabs a').on('click', function(e){
            e.preventDefault();
            $('.sub_tabs li.active').removeClass('active')
            const idTabActive = $(this).attr('href');
            $(this).parent('li').addClass('active');
            $('.list_choice').show();
            $('.list_choice ul.active').removeClass('active');
            $(`.list_choice ${idTabActive}`).addClass('active');
        });

        $('.list_choice li').on('click', function(){
            $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
            if($(this).index() == 0) {
                $(this).nextAll('li').toggleClass('active');
            }
        })

        $(document).mouseup(function(e) {
            var container = $("#modal .modal_wrapper");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                $('#modal').removeClass('show');
                $('.page_list').removeClass('active');
            }
        });

        $('#search_bar .conditional').on('click', function() {
            $(this).toggleClass('active');
            $('#search_bar .list_search.sp').slideToggle('active');
        });

        $('header .hamburger').on('click', function(){
            $(this).toggleClass('active');
            $('.header_content nav').toggleClass('active');
            $('body').toggleClass('hidden');
        });

    })

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

    $('.btn_show_login').on('click', function(e) {
        e.preventDefault();
        $('#form_login').toggleClass('active');
    });
    $('.menu_avatar').on('click', function(e) {
        e.preventDefault();
        $('.list_item_menu').toggleClass('active');
    });

    //resize after
    window.onresize = function () {
        _width = $(window).width();
        if (_width <= _spmode) {
        } else {
        }
    };

    //scroll after
    window.onscroll = function () {
        distance = this.scrollY;
    };

})(jQuery);
