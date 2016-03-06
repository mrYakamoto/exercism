var School = function(){
  this.db = {};
};

School.prototype.roster = function(){
  for (grade in this.db){
    this.db[grade] = this.db[grade].sort();
  }
  return this.db;
};

School.prototype.add = function(studentName, gradeNum){
  if (!(gradeNum in this.db)){
    this.db[gradeNum] = [];
    this.db[gradeNum].push(studentName);
  } else {
    this.db[gradeNum].push(studentName);
  }
}

School.prototype.grade = function(gradeNum){
  if (gradeNum in this.db){
    var students = this.db[gradeNum].sort();
    return students;
  } else {
    return [];
  }
}




module.exports = School;