var xhr = new XMLHttpRequest();                 
var responseObject;

xhr.onload = function() {                    
 
    responseObject = JSON.parse(xhr.responseText);  
	                                                 
};

xhr.open('GET', './js/sub2_1.json', true);        
xhr.send(null);                 

$(document).ready(function(){
 
    var newContent='';
   $('.contlist .box a').click(function(e){
       e.preventDefault();
 
       var ind = $(this).index('.contlist .box a');  // 0~8
       //console.log(ind);
 
      $('.modal_box').fadeIn('slow');

        newContent='';
        newContent+='<img src="./images/content1/'+ responseObject.card[ind].img_src +'" alt="">';
        newContent+='<dl>';
        newContent+='<dt>'+responseObject.card[ind].title+'</dt>';
        newContent+='<dd>'+responseObject.card[ind].con+'</dd>';
        newContent+='</dl>';
        // newContent+='<ul>';
        // newContent+='<li>※ 대상:'+responseObject.card[ind].list1+'</li>';
        // newContent+='<li>※ 일정:'+responseObject.card[ind].list2+'</li>';
        // newContent+='<li>※ 장소:'+responseObject.card[ind].list3+'</li>'
        // newContent+='<li>※ 소요시간:'+responseObject.card[ind].list4+'</li>'
        // newContent+='</ul>';

        // $('.card_content').html(newContent);
        $('.modal_body').html(newContent);
   });
 
  
 
   $('.modal_box .close_btn').click(function(e){
       e.preventDefault();
       $('.modal_box').fadeOut('fast');
   });
 });