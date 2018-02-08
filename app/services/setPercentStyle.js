(function(){
"use strict";

var setPercentStyle = function() {

		var setStyle = function(value) {
			if(value > 0){
				return this.percentStyle = "positive-value";
			}
			else if(value < 0){
				return this.percentStyle = "negative-value";
			}
			else if(value === 0){
				return this.percentStyle = "zero-value";
			}
		};

		return{
			setStyle : setStyle
		};
};


angular.module("CryptoBase").factory("setPercentStyle", setPercentStyle);

}());