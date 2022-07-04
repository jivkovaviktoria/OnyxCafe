$(document).on('click', 'ul li', function (){
    $(this).addClass('active').siblings().removeClass('active')
})

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}