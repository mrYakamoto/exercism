"use strict";

function SpaceAge(numSeconds){
  this.seconds = numSeconds;
  SpaceAge.earth = 31557600;
  SpaceAge.mercury = (SpaceAge.earth * 0.2408467)
  SpaceAge.venus = (SpaceAge.earth *  0.61519726);
  SpaceAge.mars = (SpaceAge.earth *  1.8808158);
  SpaceAge.jupiter = (SpaceAge.earth *  11.862615);
  SpaceAge.saturn = (SpaceAge.earth *  29.447498);
  SpaceAge.uranus = (SpaceAge.earth *  84.016846);
  SpaceAge.neptune = (SpaceAge.earth *  164.79132);
};

SpaceAge.prototype.onEarth = function(){
  var age = calcAge.call(this, SpaceAge.earth);
    return roundAge(age);
}
SpaceAge.prototype.onMercury = function(){
  var age = (this.seconds / SpaceAge.mercury);
  return roundAge(age);
}
SpaceAge.prototype.onVenus = function(){
  var age = (this.seconds / SpaceAge.venus);
  return roundAge(age);
}
SpaceAge.prototype.onMars = function(){
  var age = (this.seconds / SpaceAge.mars);
  return roundAge(age);
}
SpaceAge.prototype.onJupiter = function(){
  var age = (this.seconds / SpaceAge.jupiter);
  return roundAge(age);
}
SpaceAge.prototype.onSaturn = function(){
  var age = (this.seconds / SpaceAge.saturn);
  return roundAge(age);
}
SpaceAge.prototype.onUranus = function(){
  var age = (this.seconds / SpaceAge.uranus);
  return roundAge(age);
}
SpaceAge.prototype.onNeptune = function(){
  var age = (this.seconds / SpaceAge.neptune);
  return roundAge(age);
}

function roundAge(age){
  return (Math.round(age * 100) / 100);
}
function calcAge(planetTime){
  return this.seconds / planetTime
}

module.exports = SpaceAge;