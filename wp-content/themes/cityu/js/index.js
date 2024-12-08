$(document).ready(function(){ 
/*首頁幻燈片
*/       
var swiper1 = new Swiper('.a_banner',{
	effect : 'fade',
	loop : true,
	//direction: 'vertical', // 垂直切换选项
	autoplay: {
	    disableOnInteraction: false,
	    delay: 5000,
	},
	navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
	},
	 pagination: {
		el: '.swiper-pagination',
		clickable :true,
	}
})

/* 公告
*/
var swiperNotice = new Swiper(".a_notice",{
   	direction : 'vertical',
   	loop: true,//循環
   	autoplay: {
	    delay: 2000,
	    stopOnLastSlide: false,
	    disableOnInteraction: true,
    },
})

/* 樂在城大
*/
var swiperEnjoy = new Swiper(".enjoy-swiper",{
	autoplay: {
		delay: 2000, //1秒切换一次
		disableOnInteraction: false,
	},
   	slidesPerView : "auto",
// 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
	spaceBetween : 15
})

var winW = $("window").width();
var winH = $("window").height();
 

jQuery(".enjoy-swiper .swiper-slide").on("click",function(){
	var enjoyIndex = $(".enjoy-swiper .swiper-slide").index(this);
	var src=$(".enjoy-swiper .swiper-slide img").eq(enjoyIndex).attr("src");
	var imgW = $(".enjoy-swiper .swiper-slide img").eq(enjoyIndex).width();
	var imgH = $(".enjoy-swiper .swiper-slide img").eq(enjoyIndex).height();
	if(imgW  > winW){
		console.log("11");
		$(".enjoy_bg img").css({"width":"100%"});
	}else if(imgH > winH){
		console.log("22");
		$(".enjoy_bg img").css({"heigth":"100%"});
	}
	$(".enjoy_con img").attr("src",src);
	$(".enjoy_bg").show();
})
jQuery(".enjoy_close").on("click",function(){
	$(".enjoy_bg").hide();
})
		

/* 新聞
*/
var swiperNews = new Swiper(".news-swiper",{
	autoplay: {
		delay: 2000, //1秒切换一次
		disableOnInteraction: false,
	},
   	slidesPerView : 4,
   	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		767: {
			slidesPerView: 2,
		},
		400: {
			slidesPerView: 1,
		}
	},
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
	spaceBetween : 30
})
}); 


/* 首頁視頻
*/
( function( $ ) {
	$(function(){   
		var video_con = $(".video_bg");
		$(".video-list .item").on("click",function(){
			video_con.show();
			let itemIndex=$(".video-list .item").index(this);
			$(".video_lang").eq(itemIndex).show().siblings().hide();
			$(".video_lang").eq(itemIndex).children('video').attr('id','player');
			$(".video_lang").eq(itemIndex).siblings().children('video').attr('id','');
			$("body,html").css({'overflow-y':'hidden'});
			player = $("#player")[0];
	        if (player.paused){ /*如果已经暂停*/
	            player.play(); /*播放*/
	        }else {
	            player.pause();/*暂停*/
	        }
		})
	
	$(".video_icon").on("click",function(){
		video_con.show();
		$(".video_lang").eq(0).children('video').attr('id','player');
		$(".video_lang").eq(0).siblings().children('video').attr('id','');
		$(".video_lang").eq(0).show().siblings().hide();
		$("body,html").css({'overflow-y':'hidden'});
		player = $("#player")[0];
		if (player.paused){ /*如果已经暂停*/
            player.play(); /*播放*/
        }else {
            player.pause();/*暂停*/
        }
	})
	$(".video_close").on("click",function(){
		video_con.hide();
		player.pause();/*暂停*/
		$("body,html").css({'overflow-y':'auto'});
	})
	

	var rvideo_con = $(".rvideo_bg");
	$(".rvideo_icon").on("click",function(){
		rvideo_con.show();
		$(".rvideo_lang").eq(0).children('video').attr('id','player');
		$(".rvideo_lang").eq(0).siblings().children('video').attr('id','');
		$(".rvideo_lang").eq(0).show().siblings().hide();
		$("body,html").css({'overflow-y':'hidden'});
		player = $("#player")[0];
		if (player.paused){ /*如果已经暂停*/
            player.play(); /*播放*/
        }else {
            player.pause();/*暂停*/
        }
	})
	$(".rvideo_close").on("click",function(){
		rvideo_con.hide();
		player.pause();/*暂停*/
		$("body,html").css({'overflow-y':'auto'});
	})
	
	//首頁
	// $(".apply-list .item").hover(function(){
	// 	var src = $(this).children("img").attr("src");
	// 	// var reg = /[*\.]/;
	// 	var reg = new RegExp(".png");
	// 	var str2=src.replace(reg,"_hover.png");
	// 	$(this).children("img").attr("src",str2);
	// },function(){
	// 	var src = $(this).children("img").attr("src");
	// 	var reg = new RegExp("_hover");
	// 	var str2 = src.replace(reg,"");
	// 	$(this).children("img").attr("src",str2);
	// })

	// 頭部搜索框
	var sear = true;
	$(".a_header .search_icon").on("click",function(){
		var textClass = $(".a_header .search .text");
		if( sear == true ){
			textClass.animate({width:"233px"},10);
			$(".a_header .search_icon").addClass("search_icon_active");
			$(".a_header .language_icon").addClass("language_icon_active");
			$(".a_header .language").addClass("language_active");
			sear = false;
		}else{
			textClass.animate({width:"0px"},10);
			$(".a_header .search_icon").removeClass("search_icon_active");
			$(".a_header .language_icon").removeClass("language_icon_active");
			$(".a_header .language").removeClass("language_active");
			sear = true;
		}
	})

});
} )( jQuery );