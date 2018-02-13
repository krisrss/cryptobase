(function(){
"use strict";
angular.module("CryptoBase").controller("CurrencyView", currencyView);

function currencyView(cryptoGet,setPercentStyle) {
	var vm = this;
	var cryptoListSize = 8;


  	// Retrives data from API
	cryptoGet.getCurrencyList(cryptoListSize)
		.then(function(data) {
			vm.cryptoCurrency = data;
		}
	);

	// Retrives static data from local JSON file
	cryptoGet.getStaticData()
		.then(function(data) {
			vm.getStaticData = data;
		}
	);


	vm.getLogo = function(currencyName){
		return vm.getStaticData[0][currencyName].logo;
	};



	vm.setPercentChangeStyle =  function(value){
		return setPercentStyle.setStyle(value);
	};



};

}());