jQuery(document).ready(function($) {

$(".backTop").click(function(){
	$("body,html").animate({"scrollTop":0},300);
	});
	
//左侧菜单
$(".ke_ConMenu li").hover(function(){
	$(this).find(".keCon_show,.keCon_wx").stop(false,true).fadeIn(300);
	},function(){
		$(this).find(".keCon_show,.keCon_wx").stop(false,true).fadeOut(300);
		});
		

TouchSlide({ slideCell:"#hmc1Chg" });
//产品切换
TouchSlide({ slideCell:"#hm_swiper" });

	
//幻灯片
var swiper = new Swiper('.hmFocus', {
	loop:true,
  pagination: {
    el: '.swiper-pagination2',
    clickable :true,
  },
	autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
	onInit: function(swiper){ 
	swiperAnimateCache(swiper); 
	swiperAnimate(swiper); 
  }, 
  onSlideChangeEnd: function(swiper){ 
	swiperAnimate(swiper);
  }
});


//友情连接
var swiper = new Swiper('.hmFrbox .swiper-container', {
	    slidesPerView: 'auto',
		grabCursor: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
        spaceBetween: 0
   });
   
//招聘
$(".m2zp_box dt").click(function(){
	if($(this).next("dd").css("display")=="none"){
		$(".m2zp_box dt").removeClass("on");
		$(".m2zp_box dd").slideUp(300);
		$(this).addClass("on");
		$(this).next("dd").slideDown(300);
	}else{
		$(this).removeClass("on");
		$(this).next("dd").slideUp(300);
	}
});

//产品切换
var cutInx = 0;
$(".m2pro_menu li").click(function(){
	if($(this).index()!=cutInx){
		$(this).addClass("on").siblings("li").removeClass("on");
	    $(".m2pro_con").hide();$(".m2pro_con").eq($(this).index()).fadeIn(300);
		cutInx = $(this).index();
		}
	});
	
//2016-04-21
$(".navbar-nav li").hover(function(){$(this).find(".navLayer").stop(false,true).fadeIn(300)},function(){$(this).find(".navLayer").stop(false,true).fadeOut(300)});
$(".navbar-nav li:gt(2)").find(".navLayer").addClass("navLayer2");
	
//百度分享
_bd_share_config = { "common": { "bdSign": "off", "bdSize": "24" }, "share": { "bdCustomStyle": "/mbvip/css/share.css" } }
with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];

});
