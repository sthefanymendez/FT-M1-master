'use strict';

function BinarioADecimal(num) {
   var sum=0;
   for(let i=0; i < num.length; i++){
      sum+= Math.pow(2, num.length-(i+1))*num[i]
   }
   return sum;
}

function DecimalABinario(num) {
   var binary=""
   while(num){
      binary=num %2 + binary
      num=Math.floor(num/2)
   }
   return binary
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
