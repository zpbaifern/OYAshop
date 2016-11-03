


	var datalist = localStorage.getItem('datalist');//这里得到的有可能为null
		datalist = datalist?JSON.parse(datalist):[];
		

		$('.addcar').on('click',function(){

			var flag =0; 
			
			var obj={};
			obj.title=$(".goods-name span").text();
			obj.price=$(".price span").text();
			

			var color = $(".color .cur").text();
			var size = $(".size .cur").text(); 
			if(color && size){input  val
				flag=1;
				obj.color=$(".color .cur").text();
				obj.size=$(".size .cur").text();
			}
			obj.color=$(".color .cur").text();
			obj.size=$(".size .cur").text();

			
			if(flag){
				datalist.push(obj);
				datalist=JSON.stringify(datalist);
				localStorage.setItem("datalist",datalist);
			}
		});
		
