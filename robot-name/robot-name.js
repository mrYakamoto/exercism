"use strict";
var Robot = function(){
  this.name = Robot.prototype.assignName();
  Robot.usedNames.push(this.name);
}

Robot.prototype.assignName = function(){
  var name = "";
  for (var i = 0; i < 2; i++){
    name = name.concat(String.fromCharCode(97 + Math.floor(Math.random() * 26)));
    name = name.toUpperCase();
  }
  for (i = 0; i < 3; i++){
    name = name.concat(Math.floor(Math.random() * 10))
  }
  if (Robot.usedNames.indexOf(name) > -1){
    name = Robot.prototype.assignName();
  }
  return name;
}

Robot.prototype.reset = function(){
  var oldNameIndex = Robot.usedNames.indexOf(this.name);
  this.name = Robot.prototype.assignName();
  Robot.usedNames.splice(oldNameIndex,1);
  Robot.usedNames.push(this.name);
  return true;
}

Robot.usedNames = [];

module.exports = Robot;