$(function(){
    $(".header_left> li").mouseover(function(){
        $(this).children(".sub").stop().slideDown();
    });
    $(".header_left> li").mouseout(function(){
        $(this).children(".sub").stop().slideUp();
    });
});
