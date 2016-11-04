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
