(function($) {
    let openTime = $.now();
    $(window).on('load',function(){
        let loadTime = $.now() - openTime
        console.log(loadTime);
        $('.footer__page-load').text("Page load time is: " + loadTime + "ms");
    });
})(jQuery);