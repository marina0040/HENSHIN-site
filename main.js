$(function () {
    $('.openbtn1').on('click', function () {
        $(this).toggleClass('active');
        $("#h-nav").toggleClass('panelactive');
    });
    $('.show').modaal({
        fullscreen: true,
        hide_close: false,
        background: '#000',
        overlay_opacity: 0.8,
        overlay_close: true,
        animation_speed: 300,
        background_scroll: false,
        width: 400,
        height: 300,
    });
});
