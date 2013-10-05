(function(window){
	var stateManager = (function () {
		var state = null;
		var resizePage = function () {
			if ($('body').width() < 768) {
				if (state !== "mobile") { displayMobile(); }
					resizeMobile();
			}
			else {
				if (state !== "desktop") { displayDesktop(); }
					resizeDesktop();
			}
		};

		var displayMobile = function () {
			state = "mobile"; 
			console.log("enter mobile");
		};

		var displayDesktop = function () {
			state = "desktop";
			console.log("enter desktop");
		};

		var resizeMobile = function () {
			console.log("resizing mobile");
		};

		var resizeDesktop = function () {
			console.log("resizing desktop");
		};

		return {
			init: function () {
				resizePage();
				$(window).on('resize', resizePage);
			}
		};
	}());
	stateManager.init();

}(window));