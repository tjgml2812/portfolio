var swiper = new Swiper('.swiper-container', {
    //autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    //slidesPerView:3.5,  //단수 ( 슬라이드 하나에 보이는 갯수 )
    spaceBetween: 40,  //단사이 여백 ( px 안 줘도 됨 )

    scrollbar: {  //하단 스크롤바
        el: '.swiper-scrollbar',
        hide: true
      },
      breakpoints:{
       1280 : {
         slidesPerView: 3.5, 
       },
       1024 : {
         slidesPerView: 2.5, 
       },
       768 : {
         slidesPerView: 1.5, 
       },
       640: {
         slidesPerView: 1, 
       },
       480: {
        slidesPerView: 1, 
      },
      100: {
        slidesPerView: 1, 
      }
      }
  });