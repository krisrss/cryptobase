(function(){
"use strict";
var cryptoBase = angular.module("CryptoBase", ["ui.router"]);



cryptoBase.config(["$stateProvider","$urlRouterProvider",
	function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/");


		$stateProvider
		.state("home",{
			url: "/",
			templateUrl: "app/currencyView.html",
			controller : "CurrencyView as vm"
		})


		.state("details",{
			url: "/details/:currencyId",
			templateUrl: "app/currencyDetails.html",
			controller : "CurrencyDetails as vm",


			resolve : {
				getCryptoDetails: function(cryptoGet, $stateParams){
					var currencyId = $stateParams.currencyId;
					return cryptoGet.getSingleCurrency(currencyId);
				}
			}
		})
	}
]); 




}());