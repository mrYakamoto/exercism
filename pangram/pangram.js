var Pangram = function(input){
  this.text = input;
};

Pangram.prototype.isPangram = function(){
  if (!this.text){ return false;}
  var alphabet = this.alphabet();
  input = this.text.toLowerCase();
  for (var i = 0; i < input.length; i++){
    if (alphabet.indexOf(input.charAt(i)) > -1 ){
      alphabet = alphabet.replace(input.charAt(i), '');
    }
  }
  if (alphabet.length > 0){
    return false;
  } else {
    return true;
  }
};
Pangram.prototype.alphabet = function(){
  return 'abcdefghijklmnopqrstuvwxyz';
};

module.exports = Pangram;