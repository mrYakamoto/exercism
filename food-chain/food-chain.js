var FoodChain = function(){};

FoodChain.prototype.verse = function(number){
  var firstAnimal = animalArray[number - 1];
  var song = assembleSong(firstAnimal);
  return song;
};

FoodChain.prototype.verses = function(startNum, endNum){
  var startIndex = startNum - 1;
  var song = ''
  for ( var i = startIndex; i < endNum; i++){
    var firstAnimal = animalArray[i];
    song += assembleSong(firstAnimal);
    song += '\n';
  }
  return song;
};

animalArray = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];

function assembleSong(firstAnimal){
  var firstAnimalIndex = animalArray.indexOf(firstAnimal);
  var song = firstLine(firstAnimal);

  if ( firstAnimalIndex > 0 ) {
    song += secondLine(firstAnimal);
  }

  if ( firstAnimalIndex != 7 ){
    for (var i = firstAnimalIndex; i > 0; i--){
      song += listLine(animalArray[i]);
    }
  } if ( firstAnimalIndex === 0 ){
    song += lastLine();
  }


  return song;
}

function firstLine(animal){
  return 'I know an old lady who swallowed a '+animal+".\n";
}
function lastLine(){
  return 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
}
function listLine(animal){
  var nextAnimal = animalArray[animalArray.indexOf(animal)-1];
  if (animal == 'bird'){
    return 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n';
  } else if (animal == 'spider'){
    return 'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
  } else {
    return 'She swallowed the '+animal+' to catch the '+nextAnimal+'.\n';
  }
}

function secondLine(animal){
  var line;
  switch (animal){
    case 'spider':
    line = 'It wriggled and jiggled and tickled inside her.\n';
    break;
    case 'bird':
    line = 'How absurd to swallow a bird!\n';
    break;
    case 'cat':
    line = 'Imagine that, to swallow a cat!\n';
    break;
    case 'dog':
    line = 'What a hog, to swallow a dog!\n';
    break;
    case 'goat':
    line = 'Just opened her throat and swallowed a goat!\n';
    break;
    case 'cow':
    line = 'I don\'t know how she swallowed a cow!\n';
    break;
    case 'horse':
    line = 'She\'s dead, of course!\n';
  }
  return line;
}

var x = new FoodChain();
console.log(x.verse(8));


module.exports = FoodChain;