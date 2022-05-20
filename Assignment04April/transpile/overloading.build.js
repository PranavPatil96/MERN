"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _studentId = /*#__PURE__*/new WeakMap();

var _studentName = /*#__PURE__*/new WeakMap();

var _studentAge = /*#__PURE__*/new WeakMap();

//babel .\oops\overloading.js -o .\transpile\overloading.build.js
//public methods 
var Student = /*#__PURE__*/function () {
  function Student(_Student, name, fn) {
    _classCallCheck(this, Student);

    _classPrivateFieldInitSpec(this, _studentId, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _studentName, {
      writable: true,
      value: ''
    });

    _classPrivateFieldInitSpec(this, _studentAge, {
      writable: true,
      value: 0
    });

    // 1. lets enable  to support overloading
    if (!this._overload) {
      this._overload = {}; // an object which will be used for defining overloaded functions
    } // 2. Make sure that these overloaded functions (with whatever function number 2,3,4,5... )
    // will have same name


    if (!this._overload[name]) {
      this._overload[name] = {};
    } // 3. lets enable the function have a body with parameters
    // [fn.length]: A Function body with parameters


    if (!this._overload[name][fn.length]) {
      this._overload[name][fn.length] = fn;
    } // 4. lets aks the JS parser to invoke and execute the
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
  } // find();
  // overload(Student, name, fn) {
  // }
  // lets define overloaded functions
  // find();
  //   overload(Student, "find" , function () {
  //     console.log("in here");
  //    return Student.length; // return all
  //  });


  _createClass(Student, [{
    key: "StudentAge",
    get: function get() {
      return _classPrivateFieldGet(this, _studentAge);
    },
    set: //setter
    function set(v) {
      this.studentAge = v;
    }
  }]);

  return Student;
}(); //let us define overload methods


var stud = new Student(void 0, "find", function () {
  console.log("in here" + this.studentAge);
  return JSON.stringify(Student);
});
var result = stud.find();
console.log("All Studnets ".concat(JSON.stringify(result)));
