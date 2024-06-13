
var screenHeight = $(window).height();  

$(window).on('scroll',function(){//스크롤의 거리가 발생하면

    var scroll = $(window).scrollTop();  

    //스크롤의 거리를 리턴하는 함수

    //console.log(scroll);



    if(scroll>screenHeight-80){//스크롤이 비주얼의 높이-header높이 까지 내리면

        $('#headerArea').css('background','rgba(0,0,0,.6)');

    }else{//스크롤 내리기 전 디폴트(마우스올리지않음)

        $('#headerArea').css('background','none');  

    }; 


    if(scroll>600){//스크롤이 비주얼의 높이-header높이 까지 내리면

      $('.top_move').fadeIn('slow');

    }else{//스크롤 내리기 전 디폴트(마우스올리지않음)

      $('.top_move').fadeOut('fast'); 

    }; 

 });



  //top 상단이동
  $('.top_move').hide();
  $('.top_move').click(function(e){

    e.preventDefault();

    //상단으로 스르륵 이동합니다.

    $("html,body").stop().animate({"scrollTop":0},800); 

    //해당위치고 스크롤 탑값을 부드럽게 이동시키는 코드

  });

  //
  document.addEventListener('DOMContentLoaded', () => {
	  const textContainer = document.querySelector('.text-container');
	  const text = textContainer.textContent;
	  textContainer.innerHTML = '';
  
	  for (let i = 0; i < text.length; i++) {
		const span = document.createElement('span');
		span.textContent = text[i];
		textContainer.appendChild(span);
	  }
  
	  const spans = textContainer.querySelectorAll('span');
	  spans.forEach((span, index) => {
		setTimeout(() => {
		  span.style.opacity = 1;
		  span.style.transform = 'translateY(0)';
		}, 150 * index);  // Delay between each letter animation
	  });
	});


 // 호버 시 이미지 변경
 $(function() { 
  $(".unesco1 .unesco2").hover(
    function() { 
      // 마우스를 ul 위에 올렸을 때 실행되는 코드
      $(".unesco1_2 img").each(function() {
        $(this).attr("src", $(this).attr("src").replace(".jpg", "_2.jpg"));
        $(this).css('opacity', '0').stop().fadeTo('slow', 1);
      });
    }, 
    function() { 
      // 마우스를 ul에서 벗어났을 때 실행되는 코드
      $(".unesco1_2 img").each(function() {
        $(this).attr("src", $(this).attr("src").replace("_2.jpg", ".jpg"));
        $(this).css('opacity', '0').stop().fadeTo('slow', 1);
      });
    }
  ); 
});

$(function() { 
  $(".unesco3 .unesco4").hover(
    function() { 
      // 마우스를 ul 위에 올렸을 때 실행되는 코드
      $(".unesco3_2 img").each(function() {
        $(this).attr("src", $(this).attr("src").replace(".jpg", "_2.jpg"));
        $(this).css('opacity', '0').stop().fadeTo('slow', 1);
      });
    }, 
    function() { 
      // 마우스를 ul에서 벗어났을 때 실행되는 코드
      $(".unesco3_2 img").each(function() {
        $(this).attr("src", $(this).attr("src").replace("_2.jpg", ".jpg"));
        $(this).css('opacity', '0').stop().fadeTo('slow', 1);
      });
    }
  ); 
});

  