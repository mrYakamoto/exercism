"use strict";
var BigInt = require('./big-integer');


var Grains = function(){};

Grains.prototype.square = function(int){
  var amount = new BigInt(1);
  for (var i = 1; i < int; i++){
    amount = amount.multiply(2);
  }
  return amount.toString();
}

Grains.prototype.total = function(){
  var bigI = new BigInt(1);
  var total = new BigInt(1);
  for (var i = 1; i < 64; i++){
    bigI = bigI.multiply(2)
    total = total.add(bigI)
  }
  return total.toString();
}

module.exports = Grains;