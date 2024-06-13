$(document).ready(function(){
  //var cnt=3;  //탭메뉴 개수 ***

  var key, value;
  
  function getParams() {
 
  // 현재 페이지의 url   tab.html?num=1
  var url = decodeURIComponent(location.href);
  // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
  url = decodeURIComponent(url);  
  //  'tab.html?num=1'

  var params='';
  // url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
  params = url.substring( url.indexOf('?')+1, url.length );   
  // 'abcdefg'.substring(2,4);=> 'cdef'
  // params = "num=1" 
 
  key = params.split("=")[0];  //'num'
  value = params.split("=")[1];  // '1'

  value = Number(value);  //   value=1;
  }
      
  getParams();  //함수호출

  //value=1 , value=2 ,value=3 

  if(!value){
      value=1;   //기본 링크시 1번 초기화
  }



  $('.tabs .contlist:eq('+ (value-1) +')').show(); // 첫번째 탭 내용만 열어라
  $('.tabs .tab'+value).addClass('active-tab').css('border-bottom', '3px solid #00a7ce').css('font-weight','700'); //첫번째 탭메뉴 활성화
             //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
  $('.tabs .tab').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
        
        var ind = $(this).index('.tabs .tab');  // 클릭시 해당 index를 뽑아준다
        //console.log(ind);

        $(".tabs .contlist").hide(); //모든 탭내용을 안보이게...
        $(".tabs .contlist:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
        $('.tab').removeClass('active-tab').css('border-bottom', '3px solid #fff').css('font-weight','400'); //모든 탭메뉴를 비활성화
        $(this).addClass('active-tab').css('border-bottom', '3px solid #00a7ce').css('font-weight','700');// 클릭한 해당 탭메뉴만 활성화

   });

  $('.tabs .tab').hover(
    function() {
        // 호버시 실행되는 코드
        $(this).not('.active-tab').css({
            'border-bottom': '3px solid #00a7ce',
            'font-weight': '700'
        });
    },
    function() {
        // 호버 해제시 실행되는 코드
        $(this).not('.active-tab').css({
            'border-bottom': '3px solid transparent',
            'font-weight': '400'
        });
    }
  );

});
