const currentYear = (new Date()).getFullYear()


class User{
  constructor(name,sname) {
    this.name = name;
    this.sname = sname;
  }

  checkType(el){
    if(!RegExp(/[a-zA-Zа-яА-Я]/).test(el)){
      throw TypeError ('Should be name or sname')
    }
    if(el.length > 10 || el.length< 3){
      throw TypeError ('Invalid name or sname')
    }
    
  }

  get name(){
    return this._name
  }

  set name(name){
    this.checkType(name)
    return this._name = name.trim()
  }

  get sname(){
    return this._sname
  }

  set sname(sname){
    this.checkType(sname)
    return this._sname = sname.trim()
   
  }
 

  getFullName(){
    return `${this._name} ${this._sname}`
  }
}


class Student extends User{
  

  constructor(name,sname, yearIn){
    super(name,sname)
    this.yearIn = yearIn
  }
  get yearIn(){
    return  this._yearIn
  }    

  set yearIn(yearIn){
    if(typeof yearIn === 'number' &&  yearIn <= currentYear && (currentYear - yearIn) < 5){
        return this._yearIn = yearIn
    } else   throw TypeError ('not valid year')
  }

  getCourse(){
    return currentYear - this._yearIn + 1;
    }
}


class Group{
  constructor(name, students){
    this.name = name,
    this.students = students
  }

  get students(){
    this._students
  }

  set students(students){
    if(students instanceof Array){
      this._students = students;
    } else throw TypeError ('must be array')
  }

  addStudent(student){
    if(student instanceof Student){
      this._students.push(student)
    } else {
       throw TypeError ('must be a student')
    }
    return this._students.length
  }

  showStudents(){
    this._students.forEach(element => {
      const userName = element._name.toLowerCase().split('')
      userName[0] = userName[0].toUpperCase()

      console.log(`${userName.join('')} ${element._sname[0].toUpperCase()}.` )
   
    });{
   
    }
  }
}

const user1 = new Student(' Elon  ', 'Musk',2021)
const user2 = new Student('linus ', 'torvalds',2020)
const user3 = new Student('brendan ', 'eich ',2017)
const user4 = new Student('Timothy  ', 'Lee',2018)
const students = [user1, user2, user3]

const fm1 = new Group('fm', students)

fm1.addStudent(user4)

fm1.showStudents()



