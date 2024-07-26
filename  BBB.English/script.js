$(function(){
// メインビジュアルのフェードイン 
const fadein1 = ()=>{
  $('.fade-img1').fadeIn(1000);
  setTimeout(function(){
    $('.fade-img1').fadeOut(1000,function(){
      fadein2();
    });
    },4000);
};

const fadein2 = ()=>{
  $('.fade-img2').fadeIn(1000);
  setTimeout(function(){
    $('.fade-img2').fadeOut(1000,function(){
      fadein3();
    });
    },4000);
};

const fadein3 = ()=>{
  $('.fade-img3').fadeIn(1000);
  setTimeout(function(){
    $('.fade-img3').fadeOut(1000,function(){
      fadein1();
    });
    },4000);
};

fadein1();

//fv-ani、アニメーション
$('.fv-text > div').on('mouseover',function(){
$(this).animate({
width:480,
height:90,
},100);
});

$('.fv-text > div').on('mouseout',function(){
  $(this).animate({
  width:430,
  height:80,
  },100);
  });

// 横からスライドイン
  let winHeight,winScroll,scrollPos;
  $(window).on('load scroll',function(){
    // これ何？
    // .scrollTop();スクロールの位置を取得？
    // .height();要素の高さ？
    winScroll = $(window).scrollTop();
    winHeight = $(window).height();
      // どういう計算？
    scrollPos = winHeight * 0.9 + winScroll;
    // .each　繰り返し？
    $(".right,.left").each(function(){
      if($(this).offset().top <= scrollPos){
        // .offset()　要素の位置を取得
        $(this).addClass("show");
      }else{
        $(this).removeClass("show");
      }
    });


// フェードイン
    const wHeight = $(window).height();
    // スクロールした量を取得
    const wScroll = $(window).scrollTop();
    $(".flex,.flex-2").each(function () {
      const bPosition = $(this).offset().top;
      // どういう計算？
  if (wScroll > bPosition - wHeight + 200) {
      $(this).addClass("fadeIn");
  }
});
});



  });


//   $(window).scroll(function () {
//     // ウィンドウの高さを取得
//     const wHeight = $(window).height();
//     // スクロールした量を取得
//     const wScroll = $(window).scrollTop();
//         // それぞれのblockクラスに対して…
    




// });