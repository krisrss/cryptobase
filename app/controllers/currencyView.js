(function(){
"use strict";
angular.module("CryptoBase").controller("CurrencyView", currencyView);

function currencyView(cryptoGet) {
	var vm = this;
	var cryptoListSize = 8;


    function onSuccess(data) {
    	vm.cryptoCurrency = data;
    }
	cryptoGet.getCurrencyList(cryptoListSize).then(onSuccess);

};

}());