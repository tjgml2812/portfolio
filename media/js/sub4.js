var wh = $(window).height();
$(window).on('scroll',function(){//스크롤의 거리가 발생하면

    var scroll = $(window).scrollTop();  

   if(scroll > wh/2){
      $('#content .MaiinBox .png_box img:eq(1)').addClass('img2');
   }else{
      $('#content .MaiinBox .png_box img:eq(1)').removeClass('img2');
   }
});