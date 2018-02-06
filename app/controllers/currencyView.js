(function(){
"use strict";
angular.module("CryptoBase").controller("CurrencyView", currencyView);

function currencyView(cryptoGet) {
	var vm = this;
	var cryptoListSize = 8;


  	// Retrives data from API
	cryptoGet.getCurrencyList(cryptoListSize)
		.then(function(data) {
			vm.cryptoCurrency = data;
		}
	);




	vm.setPercentChangeStyle =  function(value){
		if(value > 0){
			return vm.percentStyle = "positive-value";
		}
		else if(value < 0){
			return vm.percentStyle = "negative-value";
		}
		else if(value === 0){
			return vm.percentStyle = "zero-value";
		}
	}



};

}());