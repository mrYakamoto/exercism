var Anagram = function(subject){
  this.subject = subject;
};

Anagram.prototype.matches = function(args){
  var matchedArray = [];
  var argsArray = [];

  if (typeof arguments[0] == 'string'){
    argsArray = Array.prototype.slice.call(arguments);
  } else{
    argsArray = args;
  }
  for (var i = 0; i < argsArray.length; i++){
    var currentWord = argsArray[i];

    compareWords(currentWord, this.subject.toLowerCase())
  }

  return matchedArray;

  function compareWords(string, subject){
    var subjectLetters = subject;
    for (var j = 0; j < string.length; j++){
      var currentLetter = string.charAt(j).toLowerCase();
      if ((subjectLetters.indexOf(currentLetter) > -1)){
        subjectLetters = subjectLetters.replace(currentLetter,'');
      }
    }

    if ((subjectLetters.length === 0)&&(string.length == subject.length)){
      if (string.toLowerCase()!= subject){
        matchedArray.push(currentWord);

        return true;
      }
    }
    return false;
  }

};


module.exports = Anagram;