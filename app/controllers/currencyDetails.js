(function(){
"use strict";


angular.module("CryptoBase").controller("CurrencyDetails", currencyDetails);


function currencyDetails(getCryptoDetails,setPercentStyle,cryptoGet,currencyData,$stateParams,setCurrencyBlacklist) {
	var vm = this;
	var currencyId = $stateParams.currencyId.toUpperCase();
	var currencyList = [];
	var filteredList = setCurrencyBlacklist.setBlacklist(getCryptoDetails);

	for (var i = 0; i < filteredList.length; i++) {
		var item = filteredList[i];
		currencyList.push(item.CoinInfo.Name)
	}


	var currencyIndex = currencyList.indexOf(currencyId)
	vm.setRank = currencyIndex + 1;


	vm.cryptoCurrency = filteredList[currencyIndex];



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