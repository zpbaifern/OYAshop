;
$(function() {
	var li1 = $(".oleft li");
	var li2 = $(".hide");
<<<<<<< HEAD
	li2.first().removeClass().addClass("atcive");
	$(".oright").hide();
=======
	li2.first().removeClass().addClass("atcive")
>>>>>>> 75754280ccccc7342e5208c9c12e055cdc4c11ee
	$(".oleft li").on('singleTap',function() {

		$(this).css({
			"background": "#F1F5F6",
			"color": "#FE3E3E"
		});
		$(this).siblings().css({
			"background": "#FFFFFF",
			"color": "#000000"
		});
		li2.removeClass("oright")
		var index = $(this).index();
		li2.removeClass("atcive").addClass("hide");
		li2.eq(index).removeClass().addClass("atcive")

	})
});