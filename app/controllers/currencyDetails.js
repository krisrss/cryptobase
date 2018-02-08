(function(){
"use strict";


angular.module("CryptoBase").controller("CurrencyDetails", currencyDetails);


function currencyDetails(getCryptoDetails, setSource,setPercentStyle) {
	var vm = this;
	vm.cryptoCurrency = getCryptoDetails[0];



	vm.getLogoSrc = function(logoName){
		return setSource.setImageSource(logoName);
	}


	vm.setPercentChangeStyle =  function(value){
		return setPercentStyle.setStyle(value);
	};


};


}());