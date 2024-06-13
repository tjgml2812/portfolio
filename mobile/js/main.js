

//스와이퍼 호출코드 입력 

                //box1 호출코드
        
     // 예시 box1 원하는거 호출 코드
     var swiper1 = new Swiper('.swiper1', { // 바뀐 이름 넣어주기
        autoHeight: true,
        slidesPerView: 1,
        loop: true,
        pagination: {   //페이지 네이션
        el: '.pagination1', // 바뀐 이름 넣어주기
        dynamicBullets: true,
        clickable: true,
    },
        autoplay: {  //자동
     delay: 3000,
    disableOnInteraction: false
  },
    });

    
    var swiper2 = new Swiper('.swiper2', { // 바뀐 이름 넣어주기
        
        slidesPerView: '1',// 내가 원하는 크기대로 폭을 주고 싶으면 값을 주면 되고 그렇지 않으면 auto주면됨
        spaceBetween: 20,
        pagination: {   //페이지 네이션
        el: '.pagination2', // 바뀐 이름 넣어주기
        dynamicBullets: true,
        clickable: true,
       
    },
    });

    var swiper3 = new Swiper('.swiper3', { // 바뀐 이름 넣어주기
        slidesPerView: '2',// 내가 원하는 크기대로 폭을 주고 싶으면 값을 주면 되고 그렇지 않으면 auto주면됨
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
    });

    var swiper4 = new Swiper('.swiper4', { // 바뀐 이름 넣어주기
        autoHeight: true,
        slidesPerView: '1.5',// 내가 원하는 크기대로 폭을 주고 싶으면 값을 주면 되고 그렇지 않으면 auto주면됨
        spaceBetween: 20,
        scrollbar: {  //하단 스크롤바
            el: '.scrollbar4',
            hide: true
          }
        });
   
        var swiper5 = new Swiper('.swiper5', { // 바뀐 이름 넣어주기
            //autoHeight: true, // 높이 고정이니까 죽임
            slidesPerView: 1.2,
            spaceBetween: 5,
            
           
        });

    // var swiper4 = new Swiper('.swiper4', { // 바뀐 이름 넣어주기
    //     effect: 'coverflow',
        
    //     centeredSlides: true,
    //     slidesPerView: '3',
    //     initialSlide: 1,
    //     coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows : true,
    //     },
    // });

    

