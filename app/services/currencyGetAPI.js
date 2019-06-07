(function(){
"use strict";

var cryptoGet = function($http) {
    var getCurrencyList = function() {
        return $http.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=GBP&api_key={ce4b9f2a883bc7972917eb4afc24c564c5937be8f65b859ed038734970f8c7fe}")
        .then(function(response){
            return response.data.Data;
        })
    };

    var getSingleCurrency = function(currencyType){
    	return $http.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym="+currencyType+"&api_key={ce4b9f2a883bc7972917eb4afc24c564c5937be8f65b859ed038734970f8c7fe}")
    	.then(function(response){
    		return response.data.Data;
    	})
    };

    var getStaticData = function(){
        return $http.get("app/other/staticCurrencyData.json")
            .then(function(response){
                return response.data;
            })
    };

    return {
        getCurrencyList : getCurrencyList,
        getSingleCurrency : getSingleCurrency,
        getStaticData : getStaticData

    }

};

angular.module("CryptoBase").factory("cryptoGet", cryptoGet);


})();