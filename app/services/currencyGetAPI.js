(function(){
"use strict";

var cryptoGet = function($http) {
    var getCurrencyList = function(number) {
        return $http.get("https://api.coinmarketcap.com/v1/ticker/?convert=GBP&limit=" + number)
        .then(function(response){
            return response.data;
        })
    };

    var getSingleCurrency = function(currencyId){
    	return $http.get("https://api.coinmarketcap.com/v1/ticker/"+ currencyId +"/?convert=GBP&limit=1")
    	.then(function(response){
    		return response.data;
    	})
    };

    return {
        getCurrencyList : getCurrencyList,
        getSingleCurrency : getSingleCurrency

    }

};

angular.module("CryptoBase").factory("cryptoGet", cryptoGet);


})();