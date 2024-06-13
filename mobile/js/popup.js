

$(document).ready(function(){
  //객체배열(json)
  var memo = [
        {imgsrc:'program1.jpg' ,title:'수달 생태설명회', price:'아삭아삭! 수달이들의 먹방 ASMR과 야생에서 보이는 건강하고 자연스러운 행동을 유지하기 위한 수달이들의 행동풍부화 활동을 보실 수 있습니다! 아쿠아리스트가 수달에게 먹이주는 모습도 관람하고 롯데월드 아쿠아리움의 수달들과 그들의 생태에 대한 설명도 들으며 기분 좋은 시간 보내세요~'},
        {imgsrc:'program2.jpg' ,title:'제품명2', price:'20,000원', sub1:'안녕', sub2:'하세요'},
        {imgsrc:'program3.jpg' ,title:'제품명3', price:'25,000원', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'program4.jpg' ,title:'제품명4', price:'30,000원', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'program5.jpg' ,title:'제품명5', price:'30,000원', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'program6.jpg' ,title:'제품명6', price:'30,000원', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'program7.jpg' ,title:'제품명6', price:'30,000원', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'program8.jpg' ,title:'제품명6', price:'30,000원', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'program9.jpg' ,title:'제품명6', price:'30,000원', sub1:'제품설명1', sub2:'제품설명2'}
      ];
    
 
  $('.pop .pop_menu a').click(function(e){
      e.preventDefault();
      var txt ='';  //dl태그 생성
      var ind = $(this).index('.pop .pop_menu a');  // 0 1 2 3

      $('.pop .modal_box').fadeIn('fast');
      $('.pop .popup').fadeIn('slow');

      //$('.pop .popup img').attr('src','./images/big'+(ind+1)+'.jpg');
      $('.pop .popup img').attr('src','./images/'+memo[ind].imgsrc);// 위 주석 같은 값

      txt+= '<dl>';
      txt+= '<dt>'+memo[ind].title+'</dt>';
      txt+= '<dd>'+memo[ind].price+'</dd>';
      // txt+= '<dd>제품설명1 : '+memo[ind].sub1+'</dd>';
      // txt+= '<dd>제품설명2 : '+memo[ind].sub2+'</dd>';
      txt+= '</dl>';
      
    // var aaa = mome [1].title;

      $('.pop .popup .txt').html(txt); //dl태그 생성

  });

  $('.close_btn,.pop .modal_box').click(function(e){
      e.preventDefault();
      $('.pop .modal_box').hide();
      $('.pop .popup').fadeOut('fast');
  });
});
