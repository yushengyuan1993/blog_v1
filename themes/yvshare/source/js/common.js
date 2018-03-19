function GetScrollPosition () {
  var scrollPos = null;

  if (window.pageYOffset) {
    scrollPos = window.pageYOffset
  } else if (document.compatMode && document.compatMode != 'BackCompat') {
    scrollPos = document.documentElement.scrollTop
  } else if (document.body) {
    scrollPos = document.body.scrollTop
  }

  return scrollPos;
}

if (GetScrollPosition() > 200) {
  $('.page-top').hide();
  $('.toTop').show();
} else {
  $('.page-top').show();
  $('.toTop').hide();
}

$(document).on('scroll', function () {
  // 获取页面 Y轴 滚动量
  var scrollPos = GetScrollPosition();

  if (scrollPos > 200) {
    $('.page-top').slideUp('normal');
    $('.toTop').slideDown('normal');
  } else {
    $('.page-top').slideDown('normal');
    $('.toTop').slideUp('normal');
  }
})

$('.toTop').click(function () {
  toTop1();
})

function toTop1(){
  var timer = null;
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(function fn() {
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (oTop > 0) {
      document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
      timer = requestAnimationFrame(fn);
    } else {
      cancelAnimationFrame(timer);
    } 
  });
}

var timer1 = null;
function toTop2(){
  cancelAnimationFrame(timer1);
  timer1 = requestAnimationFrame(function fn() {
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (oTop > 0) {
      scrollTo(0,oTop-50);
      timer1 = requestAnimationFrame(fn);
    } else {
      cancelAnimationFrame(timer1);
    } 
  });
}


