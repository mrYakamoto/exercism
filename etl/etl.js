// "use strict";

function ETL(){};

ETL.prototype.transform = function(oldData){
  var newData = {};
  for (key in oldData){
    letterArray = oldData[key].map(function(letter){
      return letter.toLowerCase();
    });
    letterArray.forEach(function(letter){
      newData[letter] = parseInt(key);
      return;
    })
  }
  return newData;
}



module.exports = ETL;
