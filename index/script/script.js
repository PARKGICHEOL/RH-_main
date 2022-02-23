$(function(){
    $(".header_left").mouseover(function(){
        $(".sub").stop().slideDown();
    });
    $(".header_left").mouseout(function(){
        $(".sub").stop().slideUp();
    });
});
