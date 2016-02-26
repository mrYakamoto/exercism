var DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function(dnaString){
  var rnaString = '';
  for (var i = 0; i < dnaString.length; i++){
    switch (dnaString[i]){
      case 'G':
        rnaString = rnaString.concat('C');
        break;
      case 'C':
        rnaString = rnaString.concat('G');
        break;
      case 'T':
        rnaString = rnaString.concat('A');
        break;
      case 'A':
        rnaString = rnaString.concat('U');
        break;
      default:
        throw 'all characters must be DNA nucleotides'
    }
  }
  return rnaString;
}

module.exports = DnaTranscriber;