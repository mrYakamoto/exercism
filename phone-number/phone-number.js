var PhoneNumber = function(numberString){
  this.input = numberString;
};

PhoneNumber.prototype.number = function(){
  phoneNum = this.input.replace(/\D/g,'');
  if (notCorrectLength(phoneNum)){
    return '0000000000';
  } else if (phoneNum.length == 11){
    if (doesntBeginWithOne(phoneNum)){
      return '0000000000';
    } else {
      phoneNum = phoneNum.slice(1,phoneNum.length);
      return phoneNum;
    }
  } else {
    return phoneNum;
  }


  function notCorrectLength(number){
    var result = ((number.length < 10)||(number.length > 11)) ? true : false;
    return result;
  }
  function doesntBeginWithOne(number){
    var result = number.charAt(0) == 1 ? false : true;
    return result;
  }
};

PhoneNumber.prototype.areaCode = function(){
  return this.number().slice(0,3);
};

PhoneNumber.prototype.toString = function(){
  var number = this.number();
  return "("+number.slice(0,3)+") "+number.slice(3,6)+"-"+number.slice(6,10);
};

module.exports = PhoneNumber;