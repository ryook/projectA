$(window).load(function(){
	console.log(c1[0,20])
	c1.slice(0,40).forEach(function(x){
		$("#c1").append("<img class='img' src='"+ x.img +"'/>")
	});
	c2.slice(0,40).forEach(function(x){
		$("#c2").append("<img class='img' src='"+ x.img +"'/>")
	});
	c3.slice(0,40).forEach(function(x){
		$("#c3").append("<img class='img' src='"+ x.img +"'/>")
	});
	c4.slice(0,40).forEach(function(x){
		$("#c4").append("<img class='img' src='"+ x.img +"'/>")
	});
	// c5.slice(0,20).forEach(function(x){
	// 	$("#c5").append("<img class='img' src='"+ x.img +"'/>")
	// });
	// c6.slice(0,20).forEach(function(x){
	// 	$("#c6").append("<img class='img' src='"+ x.img +"'/>")
	// });
	// c7.slice(0,20).forEach(function(x){
	// 	$("#c7").append("<img class='img' src='"+ x.img +"'/>")
	// });
	// c8.slice(0,20).forEach(function(x){
	// 	$("#c8").append("<img class='img' src='"+ x.img +"'/>")
	// });
	$(".frame").on("click", function(){
		$("#l2_frame").empty()
		_data = $(this).attr("id")
		if(_data == "c1"){
			data = c1
		}else if(_data == "c2"){
			data = c2
		}else if(_data == "c3"){
			data = c3
		}else if(_data == "c4"){
			data = c4
		}else if(_data == "c5"){
			data = c5
		}else if(_data == "c6"){
			data = c6
		}
		else if(_data == "c7"){
			data = c7
		}else if(_data == "c8"){
			data = c8
		}
		$("#top").css("display", "none")
		$("#l2").css("display", "block")
		data.forEach(function(x){
			$("#l2_frame").append("<img class='img2' src='"+ x.img +"'/>")
		})
		$("#no").on("click",function(){
			$("#top").css("display", "block")
			$("#l2").css("display", "none")
		})
	})
	
})