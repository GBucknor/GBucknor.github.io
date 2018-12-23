$(() => {
    $('.nav').on('click', function(e) {
        e.preventDefault();
        let toNav = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(toNav).offset().top
        }, 1700);
    });
});