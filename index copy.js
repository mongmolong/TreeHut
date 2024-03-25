$(document).ready(function () {
  restoreHeaderState();

let delay = 300;
let timer = null; 
$(window).on('resize', function(){
	clearTimeout(timer);
	timer = setTimeout(function(){
	document.location.reload();
	}, delay);
});



 $("#topBtn").fadeOut();

    $(window).scroll(function() {
        checkScrollPosition(); 
    });

    $(window).on('beforeunload', function() {
        saveHeaderState();
    });


function checkScrollPosition() {
    var scroll = $(window).scrollTop();
    var topTop = $("#move01").offset().top;

    if (scroll >= topTop) {
        $("#topBtn").fadeIn();
        $(".bottom").addClass("current");
    } else {
        $("#topBtn").fadeOut();
        $(".bottom").removeClass("current");
    }

    if (scroll >= topTop) {
        $(".bottom").addClass("current");
    }

    $(".bottom").css("top", 0);
}

function saveHeaderState() {
    var scroll = $(window).scrollTop();
    localStorage.setItem('headerScrollTop', scroll);
}

function restoreHeaderState() {
    var scrollTop = localStorage.getItem('headerScrollTop');
    if (scrollTop) {
        $(window).scrollTop(scrollTop);
        checkScrollPosition();
    }
}

let headerHeight = $("#move01").height(); // 동영상 상단에 있는 요소의 높이

$(window).scroll(function () {
    let scroll = $(this).scrollTop();

    // 동영상의 위치를 스크롤에 따라 조정
    $(".media").css("top", -scroll);

    // 아래 아이템들의 위치를 조정
    $(".bottom").css("margin-top", scroll);

    // 아래 아이템들이 동영상 아래에 갇히지 않도록 제어
    if (scroll >= headerHeight) {
        $(".bottom").addClass("current");
    } else {
        $(".bottom").removeClass("current");
    }
});


  $(window).scroll(function () {
     let bottom = $("#bottomFooter").offset().top;
     let height = $(document).scrollTop();
          if(height == bottom ){
            $("#topBtn").stop().animate({"bottom":"250px"});
          } 
          else {
              $("#topBtn").stop().animate({"bottom":"100px"});
          }
         
    });



  // ------------------------------------------------------------scrub

  let scrub_list = 0;
  let scrub_count = $(".scrubLists>li").length;
  let scrub_width = $(".scrubLists>li").width();


  let auto_scrub = setInterval(function () {
    if (scrub_list == scrub_count - 1) {
      scrub_list = 0;
    } else {
      scrub_list++;
    }
    scrubControl();     
  }, 3000);


    $(".scrubIndi>li").click(function () {
     scrub_list = $(this).index();
      scrubControl();     
    });


    $(".scrubLists").mouseenter(function () {
      clearInterval(auto_scrub);
    });
    $(".scrubIndi").mouseenter(function () {
      clearInterval(auto_scrub);
    });
  
    $(".scrubLists").mouseleave(function () {
      auto_scrub = setInterval(function () {
        if (scrub_list == scrub_count - 1) {
          scrub_list = 0;
        } else {
          scrub_list++;
        }
        scrubControl();        
      }, 5000);
    });
  
    $(".scrubIndi").mouseleave(function () {
      auto_scrub = setInterval(function () {
        if (scrub_list == scrub_count - 1) {
          scrub_list = 0;
        } else {
          scrub_list++;
        }
        scrubControl();     
      }, 5000);
    });
  
  


function scrubControl(){
  $(".scrubLists").stop().animate({ "margin-left": -scrub_width * scrub_list });
    $(".scrubIndi>li").removeClass("s_indiOn");
    $(".scrubIndi>li").eq(scrub_list).addClass("s_indiOn");
}

  // ------------------------------------------------------------wash

  let washBig_list = 0;
  let washBig_count = $(".washPhotos>li").length;

  let wash_auto = setInterval(function () {
    if ( washBig_list == 0) {
      washBig_list = washBig_count - 1;
    } else {
      washBig_list--;
    }
    washControl();     
  }, 3000);


  $(".washLeft").click(function () {
    if (washBig_list == washBig_count - 1) {
      washBig_list = 0;
    } else {
      washBig_list++;
    }

    washControl();
  });

  $(".washRight").click(function () {
    if (washBig_list == 0) {
      washBig_list = washBig_count - 1;
    } else {
      washBig_list--;
    }
    washControl();
  });

  function washControl() {
    $(".washPhotos>li").stop().fadeOut();
    $(".washPhotos>li").eq(washBig_list).stop().fadeIn();

    $(".washItems>li").stop().fadeOut();
    $(".washItems>li").eq(washBig_list).stop().fadeIn();

    $(".washSmallPhotos>li").stop().fadeOut(700);
    $(".washSmallPhotos>li").eq(washBig_list).stop().fadeIn(700);
  };

  // ------------------------------------------------------------lip
  let lip_list = 0;
  let lip_count = $(".lip_lists>li").length;
  let lip_hi = $(".lip_lists>li").height();

  let auto_lip = setInterval(function () {
    if (lip_list == lip_count - 1) {
      lip_list = 0;
    } else {
      lip_list++;
    }

    $(".lipItems>li").stop().fadeOut();
    $(".lipItems>li").eq(lip_list).stop().fadeIn();

    $(".lip_lists")
      .stop()
      .animate({ "margin-top": "-380px" }, 800, function () {
        $(".lip_lists>li").first().appendTo(".lip_lists");
        $(".lip_lists").css({ "margin-top": "0px" });
      });
  }, 4000);
});
