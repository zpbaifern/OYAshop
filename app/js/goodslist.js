;jQuery(function($){
//	var li1 = $(".oleft li");
//	var li2 = $(".hide");
//	li2.first().removeClass().addClass("atcive");
//	$(".oright").hide();
//	$(".oleft li").on('singleTap',function() {
//
//		$(this).css({
//			"background": "#F1F5F6",
//			"color": "#FE3E3E"
//		});
//		$(this).siblings().css({
//			"background": "#FFFFFF",
//			"color": "#000000"
//		});
//		li2.removeClass("oright")
//		var index = $(this).index();
//		li2.removeClass("atcive").addClass("hide");
//		li2.eq(index).removeClass().addClass("atcive")
//
//	})
	
	var $oright = $('.oright');
	var section = $oright.find('section');
	section.eq(0).show().siblings().hide();
	
	$('.oleft').on('singleTap','li',function(){
		var idx = $(this).index()
		$(this).css({"background": "#F1F5F6","color": "#FE3E3E"});
		$(this).siblings().css({"background": "#FFFFFF","color": "#000000"});
		
		section.eq(idx).show().siblings().hide();
	});
	//点击section跳转到详情页；
	section.eq(0).on('singleTap','li',function(){
		location.href = '../html/product-detail.html';
	});
	section.eq(1).on('singleTap','li',function(){
		location.href = '../html/product-detail.html';
	});
		section.eq(2).on('singleTap','li',function(){
		location.href = '../html/product-detail.html';
	});
	section.eq(3).on('singleTap','li',function(){
		location.href = '../html/product-detail.html';
	});

});