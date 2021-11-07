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
                    || dataList[i].CoinInfo.FullName === "FlowChainCoin"
                    || dataList[i].CoinInfo.FullName === "DDAM"
                    || dataList[i].CoinInfo.FullName === "Gaps Chain"
                    || dataList[i].CoinInfo.FullName === "Hyperion"
                    || dataList[i].CoinInfo.FullName === "Homeros"
                    || dataList[i].CoinInfo.FullName === "PlayFuel"
                    || dataList[i].CoinInfo.FullName === "Chainlink"
                    || dataList[i].CoinInfo.FullName === "CTAGtoken"
                    || dataList[i].CoinInfo.FullName === "NewYork Exchange"
                    || dataList[i].CoinInfo.FullName === "Elamachain"
                    || dataList[i].CoinInfo.FullName === "Thorenext"
                    || dataList[i].CoinInfo.FullName === "HedgeTrade"
                    || dataList[i].CoinInfo.FullName === "TNC Coin"
                    || dataList[i].CoinInfo.FullName === "Compound"
                    || dataList[i].CoinInfo.FullName === "Polkadot"
                    || dataList[i].CoinInfo.FullName === "Uniswap Protocol Token"
                    || dataList[i].CoinInfo.FullName === "TitanSwap"
                    || dataList[i].CoinInfo.FullName === "HEX"
                    || dataList[i].CoinInfo.FullName === "Thorecoin"
                    || dataList[i].CoinInfo.FullName === "Bitcoin ABC"
                    || dataList[i].CoinInfo.FullName === "Terra"
                    || dataList[i].CoinInfo.FullName === "Axie Infinity Shards")
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