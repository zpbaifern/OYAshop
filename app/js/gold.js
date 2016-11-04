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