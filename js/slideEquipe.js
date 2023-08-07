$(function(){
    initSlider();

    function initSlider (){
        var amt = $('.sobre-autor').length;
        var sizeContainer = 100 * amt
        var sizeBoxSingle = 100 / amt

        $('.sobre-autor').css('width', sizeBoxSingle+'%')
        $('.scroll-wraper').css('width', sizeContainer+'%')

        for(var i = 0; i < amt; i++){
            if(i == 0 ){
                $('.slider-bullet').append('<span style="background-color: rgb(59, 59, 59);"></span>')
            }else{
                $('.slider-bullet').append('<span></span>')
            }
        }
    }
})