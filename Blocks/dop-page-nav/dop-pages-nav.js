$(document).ready(function () {
    $(function () {
        let current = location.pathname.replace(/^.*([\\/:])/, '');
        $('.navigation-bar__menu.dop-page-nav li a').each(function () {
            let link = $(this);
            if (link.attr('href').indexOf(current) !== -1) {
                link.addClass('active');
            }
        });
    });
});