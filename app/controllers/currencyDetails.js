(function(){
"use strict";


angular.module("CryptoBase").controller("CurrencyDetails", currencyDetails);


function currencyDetails(getCryptoDetails, setSource) {
	var vm = this;
	vm.cryptoCurrency = getCryptoDetails[0];



	vm.getLogoSrc = function(logoName){
		return setSource.setImageSource(logoName);
	}


};


}());