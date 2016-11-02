//;
//(function($) {
//		var $inputs = $("input");
//		var info = localStorage.getItem('settings');
//		info = info ? JSON.parse(info) : {};
//		var flag1 = flag2 = flag3 = flag4 = flag5 = flag6 = "";
//		var str="";
//		init();
//
//		function init() {
//			$inputs[0] = info.nickname;
//			$inputs[1] = info.telephone;
//			$inputs[2] = info.province;
//			$inputs[3] = info.city;
//			$inputs[4] = info.town;
//			$inputs[5] = info.detailAddress;
//		}
//
//		var reg1 = /\w{6,18}/;
//		var reg2 = /^1[34578]\d{9}$/;
////		var reg3 = $inputs[2].val();
////		var reg4 = $inputs[3].val();
////		var reg5 = $inputs[4].val();
////		var reg6 = $inputs[5].val();
//		
//		//ajax请求省名称数据，添加到“选择省”的datalist中
//		$.ajax({
//			url:"../data/address.json",
//			success:function(res){
//				$.each(res, function(idx,item){
//					$("<option/>").val(item.p).appendTo($("#province"));
//				});
//			}
//		});
//		
//		
//		
//		
//		
//		
//		
//		
//		
//		
//		
////		$inputs[6].on("click", function() {
////			alert(1);
////				flag1 = reg1.test($inputs[0].val());
////				flag2 = reg2.test($inputs[1].val());
////				
////
////				
////					var obj = {};
////					if(flag1) {
////						obj.nickname = $inputs[0].val()
////					}
////					if(flag2) {
////						obj.telephone = $inputs[1].val();
////					}
////					if(flag3) {
////						obj.province = $inputs[2].val();
////					}
////					if(flag4) {
////						obj.city = $inputs[3].val();
////					}
////					if(flag5) {
////						obj.town = $inputs[4].val();
////					}
////					if(flag6) {
////						obj.detailAddress = $inputs[5].val();
////					}
////
////					obj = JSON.stringify(obj);
////
////					localStorage.setItem("info", obj);
////
////				});
//		})(jQuery);
		

$(function(){
	var $tijiao = $(".tijiao");
	
	
	$tijiao.on("singleTap",function(){
		var obj = {};
				
						obj.nickname = "1234567";
					
					
						obj.telephone = "18324545522";
					
						obj.province = "广东省";
				
						obj.city = "广州市";
				
						obj.town = "白云区";
					
						obj.detailAddress = "龙归";
					

					obj = JSON.stringify(obj);

					localStorage.setItem("info", obj);
					return false;
	});
});
