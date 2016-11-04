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
;jQuery(function($){
	// 获取页面元素
	var datalist = document.getElementById('gold-content');
	var _page = 1;
	// 1）创建xhr对象
	var xhr = new XMLHttpRequest();

	// 4）处理数据
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status === 200) {
			res = JSON.parse(xhr.responseText);
			console.log(res);
			var ul = document.createElement('ul');
			

			res.forEach(function(item) {
				var li = document.createElement('li');
				 li.className = 'gold-main';
				li.innerHTML = '<span>' + item.income + '</span><span>' + item.balance + '</span><span >' + item.remark + '</span><span>' + item.time + '</span>';
				ul.appendChild(li);

				console.log(item.time)
			});
 
			// 把数据写入页面
			datalist.appendChild(ul); 
		}
	}

	// 2）建立连接（配置参数）
	xhr.open('get', '../data/mymoney.json', true);

	// 3）发送请求
	xhr.send(null);
	window.onscroll = function() {

		if(window.scrollY >= document.body.scrollHeight - window.innerHeight - 100) {
			_page++;
			if(_page > 3) {
				_page = 1;
			}
			xhr.open('get', '../data/mymoney.json?pageNo=' + _page, true);
			xhr.send(null);
		}
	}

});
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
	})
	//点击section.eq(3)跳转到详情页；
	section.eq(3).on('singleTap','li',function(){
		location.href = '../html/product-detail.html';
	})

});
;jQuery(function($){
	var pageNum =1;
	$.ajaxSetup({
		data:{pageNo:pageNum},
		type:"get",
		url:"data/index.json",
		dataType:'json',
		async:true,
		success:function(res){//请求成功，以res返回数据
			
			//遍历数据，并加入页面
			$.each(res,function(idx,item){
				var $section = $('.section');
				var $box = $('<div/>');
				var $productlist = $('<div/>');
				var $a = $('<a/>');
				var $p1 = $('<p/>');
				var $p2 = $('<p/>');
				$('<img/>').attr('src',item.imgurl).appendTo($a);
				$p1.html(item.style);
				$a.appendTo($productlist).addClass('productlist');
				$productlist.appendTo($box).addClass('box');
				$p1.html(item.style).appendTo($box);
				$p2.html(item.p);
				$('<span/>').html(item.price).appendTo($p2);
				$p2.appendTo($box);
				$box.appendTo($section);
				
			});
		}
	});
	
	$.ajax();
	
	$(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop();
		// 懒加载：滚动《快到底部》的时候再加载
		if(scrollTop >= $(document).height() - $(window).height() - 300){
			pageNum++;
			
			if(pageNum>5){
				return;
			}
				$.ajax({
				data:{pageNo:pageNum}
			})
				
			
			
		}
	});
	
	//回到顶部
	var $callback = $('.callback');
		//绑定鼠标滚动
		$(window).scroll(function(){
			//获取滚动条距离顶端的距离
			var $scrollTop = $(window).scrollTop();
			//console.log($scrollTop);
			if($scrollTop>=400){
				$callback.show();
				
			}else{
					$callback.hide();
				}
		});
		//绑定点击事件
				$callback.on('click',function(){
					$('html,body').animate({'scrollTop':0});
				});
	
});



;jQuery(function($){
	var $name = $(".name");
	var $telephone = $(".telephone");
	var $p = $(".p");
	var $c = $(".c");
	var $t = $(".t");
	var $xijie = $(".xijie");
	var $tijiao = $(".tijiao");
	var info = localStorage.getItem('info');
	info = info ? JSON.parse(info) : {};
	var flag1 = flag2 = flag3 = flag4 = flag5 = flag6 = "";
	var str3 = "";
	init();

	function init() {
		$name.val(info.nickname);
		$telephone.val(info.telephone);
		$p.val(info.province);
		$c.val(info.city);
		$t.val(info.town);
		$xijie.val(info.detailAddress);
	}
	//用户名和手机号码的正则表达式
	var reg1 = /\w{6,18}/;
	var reg2 = /^1[34578]\d{9}$/;
	var reg3 = reg4 = reg5 = reg6 = "";
	//ajax请求省名称数据，添加到“选择省”的下拉列表中
	var $province = $("#province");
	$.ajax({
		url: "../data/address.json",
		success: function(res) {
			
			$("#province").html("");
			$.each(res, function(idx, item) {
				$("<option/>").val(item.p).appendTo($province);
			});
		}
	});

	//当“选择省”框失去焦点时，检查地址内容是否符合规范，符合则添加市信息到“选择市”下拉列表中

	$p.on('blur', function() {
		reg3 = $(this).val();
		$.ajax({
			url: "../data/address.json",
			success: function(res) {
				$.each(res, function(idx, item) {
					if(reg3 == item.p) {
						str = item.c;
						$("#city").html("");
						$.each(item.c, function(idx, item) {
							$("<option/>").val(item).appendTo($("#city"))
						});
					}

				});
			}
		});
		//提交按钮点击事件，判断各填写值是否符合要求，是，则更新localStorage
		$tijiao.on("singleTap", function() {
			
			var obj = {};
			flag1 = reg1.test($name.val());
			if(flag1) {
				obj.nickname = $name.val()
			}

			flag2 = reg2.test($telephone.val());
			if(flag2) {
				obj.telephone = $telephone.val();
			}

			reg3 = $p.val();
			reg4 = $c.val();

			if(str) {
				obj.province = $p.val();
				$.each(str, function(idx, item) {
					if(reg4 == item) {
						obj.city = $c.val();
					}
				});

			}

			reg5 = $t.val();
			if(reg5) {
				obj.town = $t.val();
			}
			reg6 = $xijie.val();
			if(reg6) {
				obj.detailAddress = $xijie.val();
			}

			obj = JSON.stringify(obj);

			localStorage.setItem("info", obj);
			location.href="personCenter.html";
		});
	})
});


;jQuery(function($){

	var payList = localStorage.getItem('payList');

	payList = payList ? JSON.parse(localStorage.getItem('payList')) : [];

	
	if(payList) {
		$(".content").html("");
		$.each(payList, function(idx1, item1) {
			var amount = sum = 0;
			var $p1 = str = "";
			$.each(item1, function(idx, item2) {
				var $li2 = $div2 = $div2_1 = $div2_2 = $div2_2_1 = $div2_2_2 = "";
				$p1 = $("<p/>").html("<span>店铺1</span><span></span>");

				$li2 = $("<li/>");
				$div2 = $("<div/>");
				$div2_1 = $("<div/>").addClass("pic").html("<img src=../img/p" + item2 + ".jpg />");
				$div2_2 = $("<div/>").addClass("info");
				$div2_2_1 = $("<div/>").addClass("goodName").html("日默瓦同款时尚铝框万向轮拉杆箱");
				$div2_2_2 = $("<div/>").addClass("priceAndNum").html("<span>￥998</span><span>x1</span>");
				$div2_2.append($div2_2_1).append($div2_2_2);
				$div2.append($div2_1).append($div2_2);
				$li2.append($div2);

				amount += 1;
				sum += 998;

				
				str += ("<li>" + $li2.html() + "</li>");
			});
			var $li3 = $("<li/>").addClass("total");
			var $p3_1 = $("<p/>").html("共<span class='amount'>" + amount + "</span>商品，合计：￥<span class='sum'>" + sum + "</span>");
			var $p3_2 = $("<p/>").html("<p><span>付款</span><span class='delete'>删除订单</span><span>查看物流</span></p>");
			$li3.append($p3_1).append($p3_2);

			var $dataList = $("<ul/>").addClass("dataList");

			$dataList.append($p1).append(str).append($li3);
			$(".content").append($dataList);
		});
	}

	$(".content").on("singleTap", ".delete", function() {
		
		var index = $(this).closest(".dataList").index();
		console.log(index);
		$(this).closest(".dataList").remove();
		$.each(payList, function(idx, item) {
			if(idx == index) {
				payList.splice(index, 1);
			}
		});
		payList = JSON.stringify(payList);
		localStorage.setItem("payList", payList);
	});
	
	
	
	

});


;jQuery(function($){
	var $person = $('.person');
	var $head = $person.find('.left');
	var $my = $('.my');
	var $wanshanziliao = $my.find('.wanshanziliao');
	
	$head.on('singleTap',function(){
		location.href="../html/myInfo.html";
		console.log(9999);
	});
	
	$wanshanziliao.on('singleTap',function(){
		location.href="../html/myInfo.html";
	});
	
	//一加载页面就请求localStorage数据，把电话号码放到个人中心
	var telephone = $person.find('.telephone');
	var obj =localStorage.getItem('info');
	obj = obj ? JSON.parse(obj) : {};
	console.log(obj);
		telephone.html(obj.telephone);

});

;jQuery(function($){
	var $dataList = $(".dataList");
	var $footer = $("footer");
	var buyList = localStorage.getItem("datalist");
	var buyList = buyList? JSON.parse(localStorage.getItem("datalist")) : [];
	console.log(buyList);
	var str = 0;
	
	
	//点击显示列表
		$('header span:eq(0)').addClass('active');
		$('.show').hide();

		$('header span:eq(2)').on('singleTap', function() {

			$('.show').toggle();
			console.log('ssssssssss')
		})
	
//根据获取的本地存储数据，生成商品列表

	if(buyList){
		
		$dataList.html("");
		$.each(buyList, function(idx, item) {

			var $div1 = $("<div/>").addClass("choice");
			var $input1 = $("<input/>").attr("type", "checkbox");
			var $img1 = $("<img/>").attr("src", "../img/noPick.png");
			$div1.append($input1).append($img1);

			var $div2 = $("<div/>").addClass("goods");
			var $img2 = $("<img/>").attr("src", "../img/p" + item.order + ".jpg");
			$div2.append($img2);

			var $div3 = $("<div/>").addClass("info");
			var $div_1 = $("<div/>").addClass("title").html(item.title);
			var $div_2 = $("<div/>").addClass("priceAndNum");
			var $div_2_1 = $("<div/>").addClass("price").html('&yen;<span class="yen">998</span>');
			var $div_2_2 = $("<div/>").addClass("numChange");
			var $span_2_2_1 = $("<span/>").addClass("redu").html("-");
			var $span_2_2_2 = $("<span/>").addClass("num").html(1);
			var $span_2_2_3 = $("<span/>").addClass("add").html("+");
			$div_2_2.append($span_2_2_1).append($span_2_2_2).append($span_2_2_3);
			$div_2.append($div_2_1).append($div_2_2);
			$div3.append($div_1).append($div_2);

			var $div4 = $("<div/>").addClass("del iconfont icon-laji");

			var $li = $("<li/>").append($div1).append($div2).append($div3).append($div4).attr("order",item.order);
			$dataList.append($li);

		});

	}
	//初始化支付总额
	sum();

	function sum() {
		
		str = 0;
		var $sum = $(".sum");
		var checked = $dataList.find("input").filter(":checked");

		$.each(checked, function(idx, item) {
			str += ($(this).closest("li").find(".yen").html() - 0) * ($(this).closest("li").find(".num").html() - 0);
		});

		$sum.html(str);
	}
	
	//根据点选状态，变换图标
	$dataList.on("singleTap", "input", function() {
	
		if($(this).prop("checked")) {
			$(this).next().attr("src", "../img/tick.png");
			var $checked = $dataList.find("input").filter(":checked");

			if($dataList.find("input").length == $checked.length) {

				$footer.find("input").prop("checked", true).next().attr("src", "../img/tick.png");
			} else {

				$footer.find("input").prop("checked", false).next().attr("src", "../img/noPick.png");
			}

		} else {

			$(this).next().attr("src", "../img/noPick.png");
			$footer.find("input").next().attr("src", "../img/noPick.png");
		}
		sum();
	});
	//根据全选状态，变换图标
	$footer.on("singleTap", "input", function() {

		if($(this).prop("checked")) {
			$("body input").prop("checked", $(this).prop("checked"));
			$("body input").next().attr("src", "../img/tick.png");
		} else {
			$("body input").next().attr("src", "../img/noPick.png");
			$("body input").prop("checked", $(this).prop("checked"));
		}
		sum()
	});

	//减数量按钮点击，数量-1，如果减前减后等于1，显示禁用，点击结果依然为1
	var $redu = $(".redu");
	$dataList.on("singleTap", ".redu", function() {
		if($(this).closest("li").find("input").prop("checked")) {
			var num = $(this).next().html() - 0;
			if(num <= 2) {
				$(this).next().html(1);
				$(this).addClass("disable");

			} else {
				$(this).next().html(--num);
				$(this).remove("disable");
			}
			sum();
		} else {
			alert("未选中")
		}
	});
	//加数量按钮点击，数量+1
	var $add = $(".add");
	$dataList.on("singleTap", ".add", function() {
		if($(this).closest("li").find("input").prop("checked")) {
			var num = $(this).prev().html() - 0;
			$(this).prev().html(++num);
			sum();
		} else {
			alert("未选中")
		}
	});

	//垃圾桶按钮点击，删除所在的li
	var $del = $(".del");
	$dataList.on("singleTap", ".del", function() {
	
		if($(this).closest("li").find("input").prop("checked")) {
			$(this).closest("li").remove();
			sum();
		} else {
			alert("未选中");
		}
	});
	
	
	//确认支付点击，把选中的信息，保存为payList的本地存储数据
	$(".pay").on("singleTap","a",function(){
		
		var payList = localStorage.getItem("payList") ? JSON.parse(localStorage.getItem("payList")) : [];
		
		var $liChecked =$(".dataList").find("input").filter(":checked").closest("li");
		if($liChecked.length){
		var arr=[];
		$.each($liChecked,function(idx,item){
			
			arr.push($(this).attr("order"));
		});
		payList.push(arr);
		arr=[];
		payList = JSON.stringify(payList);
		console.log(payList);
		localStorage.setItem("payList",payList);
		}
		location.href="myList.html";
		
	});
	
	
		
	
});