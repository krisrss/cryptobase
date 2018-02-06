(function(){

var setSource = function() {
	var setImageSource = function(logoName) {
		var logoLowerCase = logoName.toLowerCase();
		return "images/"+ logoLowerCase + ".png";
	}


	return{
		setImageSource : setImageSource
	};
};


angular.module("CryptoBase").factory("setSource", setSource);

})();