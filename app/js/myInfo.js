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

