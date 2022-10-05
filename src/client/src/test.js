class School {

    constructor (name, level, num) {
      this._name = name;
      this._level = level;
      this._num = num;
    }
    get name () {
      return this._name
    }
    get level () {
      return this._level
    }
    get num () {
      return this._num
    };
  
    quickFacts() {
      return `${this._name} educates ${this._num} students at the ${this._level} school level.`;
    };
  
    static pickSubstituteTeacher  (substitueTeachers){
      const randomTeacherIndex = Math.floor(Math.random() * substituteTeachers.length)
      return substituteTeachers[randomTeacherIndex]
    };
  
    set num (input){
      if (typeof num !== "Number"){
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      }   
      else {
        this._num = input
      }
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, num, pickUpPolicy) {
      super(name, num);
      this._level = "primary" 
      this._pickUpPolicy = pickUpPolicy
    }
    get (pickUpPolicy){
      return this._pickUpPolicy
    }
  }
  
  class HighSchool extends School {
    constructor(sportsTeams) {
      super(name);
      super(num);
      super(level);
      this._sportsTeams = sportsTeams
    }
    get sportsTeams () {
      return this._sportsTeams
    }
  }
  
  const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.') 
  
  School.quickFacts(lorraineHansbury)
    