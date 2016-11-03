<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {

	//						var moneyList = localStorage.getItem('moneyList');
	//						moneyList = moneyList ? JSON.parse(moneyList) : [];
	//
	//						//点击存数据
	//						$(".total").on("singleTap", "span:eq(2)", function(){
	//							//				console.log($(this).closest(".dataList").find("li").length);
	//							var res = $(this).closest(".dataList").find("li").not(":last"); //获取除当前的li
	//							var obj = {};
	//							//				遍历
	//							$.each(res, function(idx, item) {
	//								//console.log($(this).find(".priceAndNum span").eq(0).html()+$(this).find(".priceAndNum span").eq(1).html()+$(this).find(".goodName").html());
	//
	//								obj.title = $(this).find(".goodName").html();
	//								obj.price = $(this).find(".priceAndNum span").eq(0).html()
	//								obj.num = $(this).find(".priceAndNum span").eq(1).html()
	//
	//								console.log(obj.title);
	//								console.log(obj.price);
	//								console.log(obj.num);
	//							});
	//
	//							moneyList.push(obj);
	//							localStorage.setItem('moneyList', JSON.stringify(moneyList));
	//
	//						});
	//						
	//
	//						//点击删除订单
	//						$(".total").on("singleTap", "span:eq(3)", function(){
	//							$(this).closest(".dataList").empty();
	//						
	//					localStorage.removeItem("moneyList");
	//						
	//						
	//						});

	var payList = localStorage.getItem('payList');

	payList = payList ? JSON.parse(localStorage.getItem('payList')) : [];

//	payList = [
//		["1", "3"],
//		["1", "2", "3"],
//		["1", "2", "3", "4"]
//	];

	//					  <ul class="dataList">
	//
	//						<p><span>店铺1</span><span>交易成功</span></p>
	//						<li>
	//							<div>
	//								<div class="pic"><img src="../img/54.jpg" /></div>
	//								<div class="info">
	//									<div class="goodName">斯文印花黑灰色短袖连衣裙</div>
	//									<div class="priceAndNum">
	//										<span>￥120</span><span>x2</span>
	//									</div>
	//								</div>  
	//							</div>
	//						</li>
	//						<li class="total">
	//							<p>共<span>1</span>商品，合计：￥<span>100</span></p>
	//							<p><span>付款</span><span>删除订单</span><span>查看物流</span></p>
	//						</li>
	//					</ul>

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

				//									<ul class="dataList">
				//										<p><span>店铺1</span><span>交易成功</span></p>
				//										<li>
				//											<div>
				//												<div class="pic"><img src="../img/54.jpg" /></div>
				//												<div class="info">
				//													<div class="goodName">斯文印花黑灰色短袖连衣裙</div>
				//													<div class="priceAndNum">
				//														<span>￥120</span><span>x1</span>
				//													</div>
				//												</div>
				//											</div>
				//										</li>
				//										<li class="total">
				//											<p>共<span>1</span>商品，合计：￥<span>100</span></p>
				//											<p><span>付款</span><span>删除订单</span><span>查看物流</span></p>
				//										</li>
				//									</ul>
				
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

	$(".content").on("singTap", ".delete", function() {
		var index = $(this).closest(".datalist").index();
		$.each(payList, function(idx, item) {
			if(idx == i) {
				item.splice(i, 1);
			}
		});
		payList = JSON.stringify(payList);
		localStorage.setItem("payList", payList);
	});

});
=======
<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {

//						var moneyList = localStorage.getItem('moneyList');
//						moneyList = moneyList ? JSON.parse(moneyList) : [];
//
//						//点击存数据
//						$(".total").on("singleTap", "span:eq(2)", function(){
//							//				console.log($(this).closest(".dataList").find("li").length);
//							var res = $(this).closest(".dataList").find("li").not(":last"); //获取除当前的li
//							var obj = {};
//							//				遍历
//							$.each(res, function(idx, item) {
//								//console.log($(this).find(".priceAndNum span").eq(0).html()+$(this).find(".priceAndNum span").eq(1).html()+$(this).find(".goodName").html());
//
//								obj.title = $(this).find(".goodName").html();
//								obj.price = $(this).find(".priceAndNum span").eq(0).html()
//								obj.num = $(this).find(".priceAndNum span").eq(1).html()
//
//								console.log(obj.title);
//								console.log(obj.price);
//								console.log(obj.num);
//							});
//
//							moneyList.push(obj);
//							localStorage.setItem('moneyList', JSON.stringify(moneyList));
//
//						});
//						
//
//						//点击删除订单
//						$(".total").on("singleTap", "span:eq(3)", function(){
//							$(this).closest(".dataList").empty();
//						
//					localStorage.removeItem("moneyList");
//						
//						
//						});
						
						
						
						var payList = sessionStorage.getItem('payList');
						
						payList = payList?JSON.parse(sessionStorage.getItem('payList')):[];
						if(payList){
							$(".content").html("");
							$.each(payList,function(idx1,item1){
								var amount = sum =0; 
								var $p1=$li2=$div2=$div2_1=$div2_2=$div2_2_1=$div2_2_2="";
								$.each(item1, function(idx,item2) {
									
									$p1 = $("<p/>").html("<span>店铺1</span><span></span>");
									
									
									$li2 = $("<li/>");
									$div2 = $("<div/>");
									$div2_1 = $("<div/>").addClass("pic").html("<img src=../img/p"+item2.order+".jpg />");
									$div2_2 = $("<div/>").addClass("info");
									$div2_2_1=$("<div/>").addClass("goodName").html(item2.title);
									$div2_2_2=$("<div/>").addClass("priceAndNum").html("<span>￥"+item2.price+"</span><span>x1</span>");
									$div2_2.append($div2_2_1).append($div2_2_2);
									$div2.append($div2_1).append($div2_2);
									$li2.append($div2);
									
									amount+=1;
									sum+=item2.price;
									
									
									
//									<ul class="dataList">
//										<p><span>店铺1</span><span>交易成功</span></p>
//										<li>
//											<div>
//												<div class="pic"><img src="../img/54.jpg" /></div>
//												<div class="info">
//													<div class="goodName">斯文印花黑灰色短袖连衣裙</div>
//													<div class="priceAndNum">
//														<span>￥120</span><span>x1</span>
//													</div>
//												</div>
//											</div>
//										</li>
//										<li class="total">
//											<p>共<span>1</span>商品，合计：￥<span>100</span></p>
//											<p><span>付款</span><span>删除订单</span><span>查看物流</span></p>
//										</li>
//									</ul>
								});
								var $li3 = $("<li/>").addClass("total");
								var $p3_1 =$("<p/>").html("共<span class='amount'>"+amount+"</span>商品，合计：￥<span class='sum'>"+sum+"</span>");
								var $p3_2 =$("<p/>").html("<p><span>付款</span><span class='delete'>删除订单</span><span>查看物流</span></p>");
								$li3.append($p3_1).append($p3_2);
								
								var $dataList = $("<ul/>").addClass("dataList");
								$dataList.append($p1).append($li2).append($li3);
								$(".content").append($dataList);
							});
						}
//[
//	[{"title":"斯文印花黑灰色短袖连衣裙","price":"￥120","order":"1"}],
//	[{"title":"斯文印花黑灰色短袖连衣裙","price":"￥120","order":"2"},{"title":"斯文印花黑灰色短袖连衣裙","price":"￥120","order":"3"}
//
//]
						$(".content").on.("tap",".delete",function(){
							var index = $(this).closest(".datalist").index();
							$.each(payList, function(idx,item) {
								if(idx == i){
									item.splice(i,1);
								}
							});
							payList = JSON.stringify(payList);
							sessionStorage.setItem("payList",payList);
						});
						
						
		});				
						
=======
;(function($){
	
})(jQuery);
>>>>>>> 568b7dc5871fdae966709a904e7babe6cfb3b3f8
>>>>>>> 75754280ccccc7342e5208c9c12e055cdc4c11ee
