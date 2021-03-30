// $(window).scroll(function() {
//     var scTop = $(this).scrollTop()
//     if(scTop > 200) {
//         if(!$('.header-wrapper').hasClass('active')) /* active를 가지고 있으면 아래의 효과 적용X (! = not) */
//         $('.header-wrapper').css('top', '-60px')
//         $('.header-wrapper').stop().animate({'top':0}, 300)
//         $('.header-wrapper').addClass('active')
//     }
//     else {
//         $('.header-wrapper').removeClass('active')
//     }
// })


$(window).scroll(function () {
	var scTop = $(this).scrollTop()
	if (scTop > 200) {
		$('.header-wrapper').css('transform', 'translateY(-100%)')
		$('.header-wrapper').css('transform')
		$('.header-wrapper').addClass('active')
		$('.header-wrapper').css('transform', 'translateY(0)')
	} else {
		$('.header-wrapper').css('transform', 'translateY(0)')
		$('.header-wrapper').removeClass('active')
	}
})


$('.mo-bars').click(function() {
	$('.monavi-wrapper').toggleClass('active')
})

$('.modal-wrapper').click(function(){
	$(this).css('display', 'none')
})

$('.pf-wrap > .pf > img').click(function(){
	var src = $(this).attr('src')
	var desc = $(this).attr('alt')
	$('.modal-wrapper').css('display', 'block')    /* 일단 큰 틀이 먼저 보여지면서 만들어져야 아래의 트랜지션을 수행할 수 있음 */
	$('.modal-wrapper .modal-wrap').css('transform', 'scale(0)')
	$('.modal-wrapper .modal-wrap').css('transform')    /* transform을 한번 더 입력해줘야 0값을 인식하여 반영됨 */
	$('.modal-wrapper .modal-img').attr('src', src)
	$('.modal-wrapper .modal-title').text(desc)
	$('.modal-wrapper .modal-wrap').css('transform', 'scale(1)')
})