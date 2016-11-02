$(function(){
	var $dataList = $(".dataList");
	var $footer = $("footer");
	var buyList = localStorage.getItem("buyList")?JSON.parse(localStorage.getItem("buyList")):[];
	//根据点选状态，变换图标
	$dataList.on("singleTap","input",function(){
		if($(this).prop("checked")){
			$(this).next().attr("src","../img/tick.png");
			var $checked = $dataList.find("input").filter(":checked");
			
			if($dataList.find("input").length == $checked.length){
				
				$footer.find("input").prop("checked",true).next().attr("src","../img/tick.png");
			}else{
				
				$footer.find("input").prop("checked",false).next().attr("src","../img/noPick.png");
			}
			
		}else{
			
			$(this).next().attr("src","../img/noPick.png");
			$footer.find("input").next().attr("src","../img/noPick.png");
		}
		
	});
	//根据全选状态，变换图标
	$footer.on("singleTap","input",function(){
		
		
		if($(this).prop("checked")){
			$("body input").prop("checked",$(this).prop("checked"));
			$("body input").next().attr("src","../img/tick.png");
		}else{
			$("body input").next().attr("src","../img/noPick.png");
			$("body input").prop("checked",$(this).prop("checked"));
		}
		
	});
	
	//减数量按钮点击，数量-1，如果减前减后等于1，显示禁用，点击结果依然为1
	var $redu = $(".redu");
	$dataList.on("singleTap")
	
});
