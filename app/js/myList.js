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
//		localStorage.setItem("payList", payList);
	});
	
	
	
	

});

