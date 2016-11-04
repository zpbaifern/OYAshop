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
		localStorage.removeItem("datalist");
		location.href="myList.html";
		
	});
	
	
		
	
});