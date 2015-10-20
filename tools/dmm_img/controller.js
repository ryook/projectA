$(window).load(function(){
	$("#btn").on("click",(function(){
		var clu = $("#text").val()
		$("#img").empty()
		$("#clu").empty()
		$("#clu").append(clu)
		data.forEach(function(d){
			if(d["cluster"] == clu){
				$("#img").append("<img src='"+d["img"]+"' />")
			};
		})
	}));
});