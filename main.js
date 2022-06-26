$(function () {
    $('.openbtn1').on('click', function () {
        $(this).toggleClass('active');
        $("#h-nav").toggleClass('panelactive');
    });
    $('.works-slick-list').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
    });
});
