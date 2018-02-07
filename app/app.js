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

	}]
);




}());