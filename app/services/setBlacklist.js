(function(){
    "use strict";
    
    var setCurrencyBlacklist = function() {
    
            var setBlacklist = function(dataList) {

                var newArray = [];
                
                for(var i = 0; i < dataList.length; i++)
                {
                    if(dataList[i].CoinInfo.FullName === "Crypto.com Chain Token" 
                    || dataList[i].CoinInfo.FullName === "Aion" 
                    || dataList[i].CoinInfo.FullName === "Baer Chain" 
                    || dataList[i].CoinInfo.FullName === "FlowChainCoin")
                    {
                        continue;
                    }
                    else{
                        newArray.push(dataList[i]);
                    }
                }

                return newArray;
            };

            
    
            return{
                setBlacklist : setBlacklist
            };
    };
    
    
    angular.module("CryptoBase").factory("setCurrencyBlacklist", setCurrencyBlacklist);
    
    }());