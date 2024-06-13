// JavaScript Document
$(document).ready(function() {
    var position=0;  //최초위치
    //var movesize=150; //이미지 하나의 너비
    var movesize=$('.slide_gallery ul li').outerWidth(true); //400px
    //console.log(movesize);
    var timeonoff;
   
    $('.slide_gallery ul').after($('.slide_gallery ul').clone());
 
    function moveG() {
        position-=movesize;  // 150씩 감소
        $('.slide_gallery').animate({left:position}, 'fast',
            function(){							
            if(position<=-3600){
                $('.slide_gallery').css('left',-800);
                position=-800;
            } // 여기 폭 보면서 수정 
        }).clearQueue();
    }

   // timeonoff= setInterval(moveG, 3000);
  
    
        //슬라이드 겔러리를 한번 복제
  let lastClickTime = 0;


  $('.button').click(function(e){
     e.preventDefault();

    // clearInterval(timeonoff);
    const currentTime = new Date().getTime();
          //console.log(currentTime);
    const timeDiff = currentTime - lastClickTime;
    // 일정 시간(예: 500ms) 이내에 다시 클릭한 경우 이벤트를 무시
    if (timeDiff < 500) {
        e.preventDefault();
        return;
    }
    lastClickTime = currentTime;
     
     if($(this).is('.m1')){  //이전버튼 클릭
         
          position-=movesize;  // 400씩 감소
         $('.slide_gallery').animate({left:position}, 'fast',function(){
            if(position<=-3600){
                position=-800;
                $('.slide_gallery').css('left',-800);
             }
         }).clearQueue();  

     }else if($(this).is('.m2')){  //다음버튼 클릭
           if(position>=0){
                $('.slide_gallery').css('left',-2800);
                position=-2800;
            }
 
            position+=movesize; // 150씩 증가
            $('.slide_gallery').animate({left:position}, 'fast',
                function(){							
                    if(position>=0){
                        $('.slide_gallery').css('left',-2800);
                        position=-2800;
                    }
                }).clearQueue();
  
      }
   });
});

