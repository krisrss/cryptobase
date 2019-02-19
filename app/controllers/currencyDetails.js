(function(){
"use strict";


angular.module("CryptoBase").controller("CurrencyDetails", currencyDetails);


function currencyDetails(getCryptoDetails,setPercentStyle,cryptoGet,currencyData,$stateParams) {
	var vm = this;
	var currencyId = $stateParams.currencyId.toUpperCase();
	var currencyList = [];


	for (var i = 0; i < getCryptoDetails.length; i++) {
		var item = getCryptoDetails[i];
		currencyList.push(item.CoinInfo.Name)
	}


	var currencyIndex = currencyList.indexOf(currencyId)
	vm.setRank = currencyIndex + 1;


	vm.cryptoCurrency = getCryptoDetails[currencyIndex];



	vm.getStaticData = function(currencyName){
		return currencyData[0][currencyName];
	}


	vm.setPercentChangeStyle =  function(value){
		return setPercentStyle.setStyle(value);
	};


    vm.currencyTypes = ["GBP","USD","JPY","EUR","AUD","RUB"];

    vm.userSelect = vm.currencyTypes[0];


    vm.loadData = function () {
    	cryptoGet.getSingleCurrency(vm.userSelect)
			.then(function(data) {
				vm.cryptoCurrency = data[currencyIndex];
			}
		);
    }





}; 

}());