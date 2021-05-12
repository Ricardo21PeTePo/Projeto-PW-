var $target = $('.anime'),
    animationClass = "anime-start";
function animeScroll(){
    var documentTop = $(document).scrollTop();
    
    $target.each(function(){
        var itemTop = $(this).offset().top;
        if(documentTop>itemTop-300){
            $(this).addClass(animationClass);
        } else {
            $(this).removeClass(animationClass);
        }
    })
}
animeScroll();

$(document).scroll(function(){
    animeScroll();
})