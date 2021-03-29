$(window).scroll(function() {
    var scTop = $(this).scrollTop()
    if(scTop > 200) {
        if(!$('.header-wrapper').hasClass('active')) /* active를 가지고 있으면 아래의 효과 적용X (! = not) */
        $('.header-wrapper').css('top', '-60px')
        $('.header-wrapper').stop().animate({'top':0}, 100)
        $('.header-wrapper').addClass('active')
    }
    else {
        $('.header-wrapper').removeClass('active')
    }
})