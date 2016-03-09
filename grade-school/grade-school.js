var School = function(){
  this.db = {};
};

School.prototype.roster = function(){
  return this.db;
};

School.prototype.add = function(studentName, gradeNum){
  if (!(gradeNum in this.db)){
    this.db[gradeNum] = [];
  }
  this.db[gradeNum].push(studentName);
  this.db[gradeNum] = this.db[gradeNum].sort();
}

School.prototype.grade = function(gradeNum){
    return this.db[gradeNum] || [];
}




module.exports = School;