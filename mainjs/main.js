// 프로그램 처리 코드

var origin=400;  //처음보여지는 크기 
var min_width=325;  //작아지는 놈!!
var max_width=550;  //커지는 놈!!

$('.program li').hover(function(){
    $('.program li').animate({width:min_width}, 300).clearQueue();
    $(this).animate({width:max_width}, 300).clearQueue();
    //$(this).find('dt').css({'margin':'40px 0 20px 40px'});
    // $(this).find('dd').css({'opacity':'1','transition':'all .3s','transition-delay':'.3s'});
    $(this).find('dl').css('top','240px');
},
function(){
    $('.program li').animate({width:origin},300).clearQueue();
    //$(this).find('dt').css({'margin':'40px 0 20px 100px'});
    
    // $(this).find('dd').css({'opacity':'0','transition':'none'});
    $(this).find('dl').css('top','395px');
});