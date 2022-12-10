$(document).scroll(function() {
    let scrollTopPos = $(document).scrollTop();
    if (scrollTopPos > 76) $('.navigation-bar').addClass('scroll')
    else $('.navigation-bar').removeClass('scroll');
});