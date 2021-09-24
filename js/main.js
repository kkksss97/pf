$(document).ready(function(){ 
    
    $('.homeletter').addClass('opa');


    //#section05 gallery
    $(".thumb").isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        stagger: 30
      });

      $("nav li").click(function(e){
            e.preventDefault();
      });

      

      $(".s5_btn01").click(function(){
        $(".thumb").isotope({ filter: '.all' });
      });
      $(".s5_btn02").click(function(){
        $(".thumb").isotope({ filter: '.design' });
      });
      $(".s5_btn03").click(function(){
        $(".thumb").isotope({ filter: '.painting' });
      });


    //btn버튼을 클릭하면 해당 섹션으로 부드럽게 이동  
    $('.btn1, .boxBtn1').click(function(){
        $('html').animate({scrollTop:0},1000,'swing');
    });
    $('.btn2, .boxBtn2').click(function(){
         $('html').animate({scrollTop:700},1000,'swing');
    });
    $('.btn3, .boxBtn3').click(function(){
        $('html').animate({scrollTop:1400},1000,'swing');
    });
    $('.btn4, .boxBtn4').click(function(){
        $('html').animate({scrollTop:2100},1000,'swing');
    });
    $('.btn5, .boxBtn5').click(function(){
        $('html').animate({scrollTop:5100},1000,'swing');
    });



    //스크롤 시 섹션의 위치를 판단하여 클라스 on추가
    $(window).scroll(function(){
        var yPos = $(window).scrollTop(); 
        //A.scrollTop() :A가 스크롤 된 거리(위쪽부터)

        if( yPos<700){
            $('#nav li, #btn_box li').removeClass('on');
            $('#nav li').eq(0).addClass('on');
            $('#btn_box li').eq(0).addClass('on');
        } 
        else if ( yPos>=700 && yPos<1400){
            $('#nav li, #btn_box li').removeClass('on');
            $('#nav li').eq(1).addClass('on');
            $('#btn_box li').eq(1).addClass('on');
        }
        else if ( yPos>=1400 && yPos<2100){
            $('#nav li, #btn_box li').removeClass('on');
            $('#nav li').eq(2).addClass('on');           
            $('#btn_box li').eq(2).addClass('on');
        }
        else if ( yPos>=2100 && yPos<5100){
            $('#nav li, #btn_box li').removeClass('on');
            $('#nav li').eq(3).addClass('on');
            $('#btn_box li').eq(3).addClass('on');
        } else {
            $('#nav li, #btn_box li').removeClass('on');
            $('#nav li').eq(4).addClass('on');
            $('#btn_box li').eq(4).addClass('on');
        }
    });

});

// 모바일 크기로 새창 띄우기_반응형1
function mobileOpen1() {
    window.open('https://kkksss97.cafe24.com/responsive/Lincoln_CORSAIR/index.html','반응형1','width=550; height=700; scrolling=no; resizable=no; left=500; top=200');
};
//window.open("주소","팝업이름","속성");

// 모바일 크기로 새창 띄우기_반응형2
  function mobileOpen2() {
    window.open('https://kkksss97.cafe24.com/bootstrap/BESPOKE/index.html','반응형2','width=450; height=700; scrolling=no; resizable=no; left=500; top=200');
};
//window.open("주소","팝업이름","속성");

// 모바일 크기로 새창 띄우기_반응형3
function mobileOpen3() {
    window.open('https://kkksss97.cafe24.com/SW/VIBE/index.html','반응형3','width=350; height=700; scrolling=no; resizable=no; left=500; top=200');
};
//window.open("주소","팝업이름","속성");

// 모바일 크기로 새창 띄우기_반응형4
function mobileOpen4() {
    window.open('https://kkksss97.cafe24.com/Mobile/asanmedical/index.html','반응형4','width=450; height=700; scrolling=no; resizable=no; left=500; top=200');
};
//window.open("주소","팝업이름","속성");


new WOW().init();