var BeerSong = function(){};

BeerSong.prototype.verse = function(num){
  return this.sing(num, num);
}

BeerSong.prototype.sing = function(startNum, endNum){
  var startNum = startNum;
  var endNum = endNum || 0;
  var song = "";

  for (var i = startNum; i >= endNum; i--){
    var currentVessel = vessel(i);
    var nextVessel = vessel(i-1);

    if (i < startNum){
      song +="\n";
    }

    if (i > 0){
      song += ""+i+" "+currentVessel+" of beer on the wall, "+i+" "+currentVessel+" of beer.";
    }


    if (i > 1){
      song += "\nTake one down and pass it around, "+(i-1)+" "+nextVessel+" of beer on the wall.\n";
    } else if (i == 1){
      song += "\nTake it down and pass it around, no more bottles of beer on the wall.\n";
    } else if (i === 0){
      song += "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
    }
  }
  return song;

  function vessel(num){
  if (num == 1){
    return "bottle";
  } else {
    return "bottles";
  }
}
};



module.exports = BeerSong;