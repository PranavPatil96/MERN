
//babel .\oops\overloading.js -o .\transpile\overloading.build.js
  //public methods 
  
 class Student{
     #studentId = 0;
     #studentName = '';
     #studentAge = 0;

     //setter
     set StudentAge(v){
       this.studentAge = v;
     }
     get StudentAge(){
       return this.#studentAge;
     }

     constructor(Student,name,fn){
        // 1. lets enable  to support overloading
        if (!this._overload) {
          this._overload = {}; // an object which will be used for defining overloaded functions
        }
      
        // 2. Make sure that these overloaded functions (with whatever function number 2,3,4,5... )
        // will have same name
      
        if (!this._overload[name]) {
          this._overload[name] = {};
        }
      
        // 3. lets enable the function have a body with parameters
        // [fn.length]: A Function body with parameters
        if (!this._overload[name][fn.length]) {
          this._overload[name][fn.length] = fn;
        }
      
        // 4. lets aks the JS parser to invoke and execute the
        // dynamically defined function body with  parameters
        // so that the function will be applied to the sourceObject
        // and executed with invocation
        // sourceObject[name]: The function name
        this[name] = function () {
          // the dynamic function with arguments
          if (this._overload[name][arguments.length]) {
            // return this dynamic body and execute it
            return this._overload[name][arguments.length].apply(this, arguments);
          }
        };
     }

      // find();
  
      // overload(Student, name, fn) {
        
      // }
      // lets define overloaded functions
  // find();
//   overload(Student, "find" , function () {
//     console.log("in here");
//    return Student.length; // return all
//  });
 }

 

 //let us define overload methods


let stud = new Student(this,"find",function(){console.log("in here"+this.studentAge);
return Student.length;});
let result = stud.find();
console.log(`All Studnets ${JSON.stringify(result)}`);