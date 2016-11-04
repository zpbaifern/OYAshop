;jQuery(function($){
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		// paginationClickable: true,
		autoplay: 2000,
		loop: true,
	});

	$(function() {

		//点击显示列表
		$('.top li:eq(1)').addClass('active');
		$('.show').hide();

		$('.top li:eq(3)').on('singleTap', function() {

			$('.show').toggle();
			console.log('ssssssssss')
		})

		$('.xiangqing').show();
		$('.comment').hide();
		
		//详情和评论页的切换
		$('.top li:eq(2)').on('singleTap', function() {

			$(this).addClass('active');
			$('.top li:eq(1)').removeClass('active');
			$('.xiangqing').hide();
			$('.comment').show();
		})

		$('.top li:eq(1)').on('singleTap', function() {
			$(this).addClass('active');
			$('.top li:eq(2)').removeClass('active');
			$('.xiangqing').show();
			$('.comment').hide();

		});

		$('.color .options').on('singleTap', function() {
			$(this).addClass('cur');
			$(this).siblings().removeClass('cur');
			
			var $color=$(this).html();
			console.log($(this).html());
		});

		$('.size .options').on('singleTap', function() {
			$(this).addClass('cur');
			$(this).siblings().removeClass('cur');
			
			console.log($(this).html());
			var $size=$(this).html();
			console.log($size);
		});

		//±£´æÑ¡ÔñµÄ²úÆ·ÐÅÏ¢   ÅÐ¶Ï Èç¹ûÑÕÉ«ºÍ³ß´çoptionsÖÐÓÐclassÃûÎªcurÇÒ µã»÷ÁËÁ¢¼´¹ºÂò»òÕß¼ÓÈë¹º³µ¾Í°ÑÓÐclassÃûÎªcurµÄÖµÑ¹ÈëÊý×é²¢±£´æµ½storage
		
		
		

		$('.addcar').on('singleTap',function(){
			var datalist = localStorage.getItem('datalist');//ÕâÀïµÃµ½µÄÓÐ¿ÉÄÜÎªnull
			
			datalist = datalist?JSON.parse(datalist):[];
			console.log(datalist);
			var flag =0;
			alert
			var obj={};
			obj.title=$(".goods-name span").text();
			obj.price=$(".price span").text();
			

			var color = $(".color .cur").text();
			var size = $(".size .cur").text();
			if(color && size){
				flag=1;
				obj.color=$(".color .cur").text();
				obj.size=$(".size .cur").text();
				obj.order=$(".color .cur").index();
			}
			
			
			console.log(flag);
			if(flag){
				
				console.log(obj);alert('添加成功!');
				datalist.push(obj);
				datalist=JSON.stringify(datalist);

				localStorage.setItem("datalist",datalist);
			}
		});
		
		//点击立即购买
		$('.buy').on('singleTap',function(){
			var datalist = localStorage.getItem('datalist');//ÕâÀïµÃµ½µÄÓÐ¿ÉÄÜÎªnull
			
			datalist = datalist?JSON.parse(datalist):[];
			console.log(datalist);
			var flag =0;
			
			var obj={};
			obj.title=$(".goods-name span").text();
			obj.price=$(".price span").text();
			

			var color = $(".color .cur").text();
			var size = $(".size .cur").text();
			if(color && size){
				flag=1;
				obj.color=$(".color .cur").text();
				obj.size=$(".size .cur").text();
				obj.order=$(".color .cur").index();
			}
			
			
			console.log(flag);
			if(flag){
				
				console.log(obj);alert(datalist);
				datalist.push(obj);
				datalist=JSON.stringify(datalist);

				localStorage.setItem("datalist",datalist);
			}
		});
		
		

		// ÆÀÂÛ²¿·Ö
		var data = [{
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			 {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			  {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			 {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			 {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			  {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			  {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			  {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			  {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			 {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			 {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			 {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			  {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			  {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			 {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			 {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			 {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			 {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			},
			 {
				"img": "../img/tx.jpg",
				"name": "匿名",
				"time": "2016-05-16",
				"star": "../img/star.jpg",
				"buydate": "购买日期 2016-05-10  14 £º00",
				"good": "真心好，下次还会再来买!"

			}

		];

		$.each(data, function(index, ele) {

			//Í·Ïñ£¬ÐÕÃû£¬ÆÀÂÛÈÕÆÚ
			var $head = $('<div>').addClass('head').html('<img src="' + ele.img + '"/>');
			var $p = $('</p>').addClass('name').html(ele.name);
			$p.appendTo($head);
			var $time = $('</p>').addClass('head-time').html(ele.time).appendTo($head);
			$time.appendTo($head);
			$head.appendTo('.comment');

			//	ºÃÆÀ¼¸¸öÐÇÒÔ¼° ÆÀÂÛÄÚÈÝ  ¹ºÂòÊ±¼ä			

			var $content = $('<div/>').addClass('content').html('<img src="' + ele.star + '"/>');
			var $good = $('</p>').html(ele.good).appendTo($content);
			$('<p/>').addClass('ctime').html(ele.buydate).appendTo($content);

			$content.appendTo('.comment');

		});

	});

});