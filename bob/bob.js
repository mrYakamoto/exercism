var Bob = function() {};

Bob.prototype.hey = function(input) {
  input = input.replace(/ /gi, '')
  if (input.length === 0 ){
    return 'Fine. Be that way!'
  } else if (input == input.toUpperCase()){
    return 'Whoa, chill out!';
  } else if (input[input.length-1] == '?'){
    return 'Sure.';
  } else {
    return 'Whatever.'
  }
};

module.exports = Bob;

'Fine. Be that way!'
