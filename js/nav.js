window.onscroll = () => {windowScrolling()};
var sticky = $('nav').offset().top;

function windowScrolling() {
    if (window.pageYOffset >= sticky) {
        $(navbar).css('position', 'fixed');
        $(navbar).css('top', '0');
        $(navbar).css('opacity', '0.8');
    } else {
        $(navbar).css('position', 'relative');
        $(navbar).css('opacity', '1');
    }
}

let year = $('#year');
$(year).html((new Date).getFullYear());
