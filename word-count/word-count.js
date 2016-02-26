var Words = function(){};

Words.prototype.count = function(input){
  var wordArray = input.split(/\s+|\\n+|\\t+/g);
  var wordCount = {};
  for (var i = 0; i < wordArray.length; i++){
    if (wordCount.hasOwnProperty(wordArray[i])){
      wordCount[wordArray[i]]++;
    } else {
      wordCount[wordArray[i]] = 1;
    }
  }
  return wordCount;
}

module.exports = Words;