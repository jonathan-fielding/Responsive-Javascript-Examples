(function(window){
	var mql = window.matchMedia("screen and (max-width:768px)");
	mql.addListener(function(e){
		if(e.matches){
			console.log('enter mobile');
		}
		else{
			console.log('leave mobile');
		}
	});
}(window));