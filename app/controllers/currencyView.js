(function(){
"use strict";
angular.module("CryptoBase").controller("CurrencyView", currencyView);

function currencyView(cryptoGet,setSource,setPercentStyle) {
	var vm = this;
	var cryptoListSize = 8;


  	// Retrives data from API
	cryptoGet.getCurrencyList(cryptoListSize)
		.then(function(data) {
			vm.cryptoCurrency = data;
		}
	);


	vm.getLogoSrc = function(logoName){
		return setSource.setImageSource(logoName);
	}


	vm.setPercentChangeStyle =  function(value){
		return setPercentStyle.setStyle(value);
	};



};

}());