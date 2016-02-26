var Gigasecond = function(birthday){
  this.birthdayInSeconds = birthday.getTime();
};

Gigasecond.prototype.date = function(){
  var gigaDate = new Date(this.birthdayInSeconds + 1000000000000);
  return gigaDate
}

module.exports = Gigasecond;