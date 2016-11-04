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


