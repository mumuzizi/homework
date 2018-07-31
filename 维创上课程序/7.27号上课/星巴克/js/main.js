$(".nav-menu").on("click",function(){
    $(".overlay").addClass("active");
  })
  $(".menu-close").on("click",function(){
    $(".overlay").removeClass("active");
  })

  // 轮播图切换
  var nowIndex = 0;
  $(".slick-next").on("click",function(){
    nowIndex ++;
    var runLeft = $(".slick-list li").width() * nowIndex;
    $(".slick-list").css({
      transform:'translateX('+(-runLeft)+'px)',
      transition:'all 1s ease'
    });
  setTimeout(function(){
    if(nowIndex == 3){
      nowIndex = 0;
      $(".slick-list").css({
        transition:'none',
        transform:'translateX(0)',
      });
    }
  },1000)
});