(function(){
"use strict";


angular.module("CryptoBase").controller("CurrencyDetails", currencyDetails);


function currencyDetails(getCryptoDetails, setSource,setPercentStyle,cryptoGet) {
	var vm = this;

	vm.cryptoCurrency = getCryptoDetails[0];
	
	vm.setCurrentPrice = vm.cryptoCurrency.price_gbp;
	vm.setMarketCap = vm.cryptoCurrency.market_cap_gbp;


	vm.getLogoSrc = function(logoName){
		return setSource.setImageSource(logoName);
	}


	vm.setPercentChangeStyle =  function(value){
		return setPercentStyle.setStyle(value);
	};


    vm.currencyTypes = ["GBP","USD","JPY","EUR"];

    vm.userSelect = vm.currencyTypes[0];


    vm.loadData = function (id) {
    	cryptoGet.getSingleCurrency(id,vm.userSelect)
			.then(function(data) {
				vm.cryptoCurrency = data[0];

				vm.setCurrentPrice = vm.cryptoCurrency['price_' + vm.userSelect.toLowerCase()];

				vm.setMarketCap = vm.cryptoCurrency['market_cap_' + vm.userSelect.toLowerCase()];


			}
		);
    }





}; 

}());