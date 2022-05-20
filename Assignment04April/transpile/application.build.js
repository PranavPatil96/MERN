"use strict";

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _EmpNo = /*#__PURE__*/new WeakMap();

var _EmpName = /*#__PURE__*/new WeakMap();

var _DeptName = /*#__PURE__*/new WeakMap();

var _Designation = /*#__PURE__*/new WeakMap();

var _Salary = /*#__PURE__*/new WeakMap();

var Employee = /*#__PURE__*/function () {
  function Employee() {
    _classCallCheck(this, Employee);

    _classPrivateFieldInitSpec(this, _EmpNo, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _EmpName, {
      writable: true,
      value: ""
    });

    _classPrivateFieldInitSpec(this, _DeptName, {
      writable: true,
      value: ""
    });

    _classPrivateFieldInitSpec(this, _Designation, {
      writable: true,
      value: ""
    });

    _classPrivateFieldInitSpec(this, _Salary, {
      writable: true,
      value: 0
    });
  }

  _createClass(Employee, [{
    key: "EmpNo",
    get: function get() {
      return _classPrivateFieldGet(this, _EmpNo);
    },
    set: function set(v) {
      _classPrivateFieldSet(this, _EmpNo, v);
    }
  }, {
    key: "EmpName",
    get: function get() {
      return _classPrivateFieldGet(this, _EmpName);
    },
    set: function set(v) {
      _classPrivateFieldSet(this, _EmpName, v);
    }
  }, {
    key: "DeptName",
    get: function get() {
      return _classPrivateFieldGet(this, _DeptName);
    },
    set: function set(v) {
      _classPrivateFieldSet(this, _DeptName, v);
    }
  }, {
    key: "Designation",
    get: function get() {
      return _classPrivateFieldGet(this, _Designation);
    },
    set: function set(v) {
      _classPrivateFieldSet(this, _Designation, v);
    }
  }, {
    key: "Salary",
    get: function get() {
      return _classPrivateFieldGet(this, _Salary);
    },
    set: function set(v) {
      _classPrivateFieldSet(this, _Salary, v);
    }
  }]);

  return Employee;
}();

var _employees = /*#__PURE__*/new WeakMap();

var _validateInput = /*#__PURE__*/new WeakSet();

var EmployeeLogic = /*#__PURE__*/function () {
  function EmployeeLogic() {
    _classCallCheck(this, EmployeeLogic);

    _classPrivateMethodInitSpec(this, _validateInput);

    _classPrivateFieldInitSpec(this, _employees, {
      writable: true,
      value: []
    });

    // Initialize the Employees array like properties from the Employee class
    _classPrivateFieldSet(this, _employees, []);

    console.log("I am here");
  }

  _createClass(EmployeeLogic, [{
    key: "getEmployees",
    value: function getEmployees() {
      return _classPrivateFieldGet(this, _employees);
    }
  }, {
    key: "addEmployee",
    value: function addEmployee(emp) {
      // call for validate
      if (!_classPrivateMethodGet(this, _validateInput, _validateInput2).call(this, emp)) {
        alert("validation error!");
        return;
      }

      _classPrivateFieldGet(this, _employees).push(emp);

      console.log(_classPrivateFieldGet(this, _employees));
      return _classPrivateFieldGet(this, _employees);
    }
  }, {
    key: "updateEmployee",
    value: function updateEmployee(id, emp) {
      // call for validate
      // 1. Logic to search adn then update Employee
      console.log("inside update employee");
      var new_emp = emp;
      var e = [];

      for (var i = 0; i < _classPrivateFieldGet(this, _employees).length; i++) {
        e = _classPrivateFieldGet(this, _employees)[i];

        if (e.EmpNo === id) {
          _classPrivateFieldGet(this, _employees)[i] = new_emp;
        }
      }

      return _classPrivateFieldGet(this, _employees);
    }
  }, {
    key: "deleteEmployee",
    value: function deleteEmployee(id) {
      // 1. Logic to search adn then delete Employee
      console.log("delete empl called " + id);

      for (var index = 0; index < _classPrivateFieldGet(this, _employees).length; index++) {
        console.log("inised delete " + _classPrivateFieldGet(this, _employees)[index].EmpNo + " item " + id);

        if (_classPrivateFieldGet(this, _employees)[index].EmpNo == id) {
          console.log("hereeeeee");

          _classPrivateFieldGet(this, _employees).splice(index, 1);

          return _classPrivateFieldGet(this, _employees);
        }
      }

      return _classPrivateFieldGet(this, _employees);
    }
  }, {
    key: "searchEmployee",
    value: function searchEmployee(searchObject) {
      // possible value for search object may be as follows
      // EmpNo:1, EmpName:'DDDD', DeptName:'ggg', Designation:'dfff'
      // Search from employee has to0 takes place based on searchObject and data will be returned accordingly
      _classPrivateFieldGet(this, _employees).filter(function (val) {
        return val.EmpNo === searchObject.EmpNo;
      });

      return _classPrivateFieldGet(this, _employees);
    }
  }, {
    key: "searchComplexEmployee",
    value: function searchComplexEmployee(searchObject) {
      // possible value for search object may be as follows
      //  {DeptName:'IT', Designation:'Manager'} and condition
      // This Must return all Employee in IT Dept those are Managers
      _classPrivateFieldGet(this, _employees).filter(function (desig) {
        return desig.Designation === 'Manager' && desig.DeptName === 'IT';
      });

      return _classPrivateFieldGet(this, _employees);
    }
  }, {
    key: "searchEmployeeByCriria",
    value: function searchEmployeeByCriria(searchObject) {
      // possible value for search object may be as follows
      // EmpName: 'A', all Employees Starts from A
      return _classPrivateFieldGet(this, _employees);
    } //acces to 

  }, {
    key: "getEmployeeById",
    value: function getEmployeeById(id) {
      for (var i = 0; i < _classPrivateFieldGet(this, _employees).length; i++) {
        console.log("id " + id + " " + _classPrivateFieldGet(this, _employees)[i].EmpNo);
        console.log("here");

        if (_classPrivateFieldGet(this, _employees)[i].EmpNo == id) {
          return _classPrivateFieldGet(this, _employees)[i];
        }
      }
    }
  }]);

  return EmployeeLogic;
}();

function _validateInput2(emp) {
  var validationErrorMsg = ''; // Logic to validate the Employee Object
  // EmpNo: Non Negative and Unique

  if (emp.EmpNo < 0) {
    validationErrorMsg = 'EmpNo must be positive';
    alert(validationErrorMsg);
    return false;
  } // EmpName: FirstName {single-space} MiddleName {single-space} LastName


  if (!emp.EmpName.match(/^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/)) {
    validationErrorMsg = 'There should be a single space';
    alert(validationErrorMsg);
    return false;
  } // DeptName: Must be either of the following, IT, HRD, SALES, ADMIN, ACCOUNTS


  if (emp.DeptName != 'IT' && emp.DeptName != 'HRD' && emp.DeptName != 'SALES' && emp.DeptName != 'ACCOUNTS') {
    validationErrorMsg = 'Must be either of the following, IT, HRD, SALES, ADMIN, ACCOUNTS';
    alert(validationErrorMsg);
    return false;
  } // Designation: MUST be either of the following, Engineer, Manager, Representative, Clerk, Assistant
  // IT (Engineer, Manager)
  // SALES (Manager, Representative, Assistant)
  // HRD (Manager, Clerk)
  // ADMIN (Manager, Clerk, Assistant)
  // ACCOUNTS (Manager, Clerk) 


  if (emp.DeptName == 'IT') {
    if (emp.Designation != 'Engineer' && emp.Designation != 'Manager') {
      validationErrorMsg = 'Designation must be Engineer & Manager';
      alert(validationErrorMsg);
      return false;
    }
  } else if (emp.DeptName == 'SALES') {
    if (emp.Designation != 'Manager' && emp.Designation != 'Representative' && emp.Designation != 'Assistant') {
      validationErrorMsg = 'Designation must be Representative, Assistant & Manager';
      alert(validationErrorMsg);
      return false;
    }
  } else if (emp.DeptName == 'HRD') {
    if (emp.Designation != 'Manager' && emp.Designation != 'Clerk') {
      validationErrorMsg = 'Designation must be Clerk & Manager';
      alert(validationErrorMsg);
      return false;
    }
  } else if (emp.DeptName == 'ADMIN') {
    if (emp.Designation != 'Manager' && emp.Designation != 'Clerk' && emp.Designation != 'Assistant') {
      validationErrorMsg = 'Designation must be Clerk,Assistant & Manager';
      alert(validationErrorMsg);
      return false;
    }
  } else if (emp.DeptName == 'ACCOUNTS') {
    if (emp.Designation != 'Manager' && emp.Designation != 'Clerk') {
      validationErrorMsg = 'Designation must be Clerk & Manager';
      alert(validationErrorMsg);
      return false;
    }
  }

  return true; //  if validation rules are successful     
}

var _e = /*#__PURE__*/new WeakMap();

var UserInterface = /*#__PURE__*/function () {
  function UserInterface() {
    _classCallCheck(this, UserInterface);

    _classPrivateFieldInitSpec(this, _e, {
      writable: true,
      value: null
    });

    console.log("called ");

    _classPrivateFieldSet(this, _e, new EmployeeLogic());
  } // Access on Save Button


  _createClass(UserInterface, [{
    key: "save",
    value: function save(emp, flag) {
      // Call to addEmployee of  EmployeeLogic in case of new Entry
      if (flag === true) {
        _classPrivateFieldGet(this, _e).addEmployee(emp);

        return;
      } else if (flag == false) {
        console.log("emp.empNo = ".concat(emp.EmpNo));

        _classPrivateFieldGet(this, _e).updateEmployee(emp.EmpNo, emp);

        return;
      } else {
        console.log("is delete called..?" + emp);

        _classPrivateFieldGet(this, _e).deleteEmployee(emp); // return ;

      } // call to updateEmployee of EmployeeLogic in case of Update
      // call to deleteEmployee of EmployeeLogic in case of Delete

    } // Access this on the Text Change UI Events to search

  }, {
    key: "search",
    value: function search() {// Call to various search methods opf EmployeeLogic class (Define your own UI)
      // make the UI Interactive
    } //access to change

  }, {
    key: "getEmployeeById",
    value: function getEmployeeById(id) {
      return _classPrivateFieldGet(this, _e).getEmployeeById(id);
    }
  }, {
    key: "getAllEmployee",
    value: function getAllEmployee() {
      return _classPrivateFieldGet(this, _e).getEmployees();
    }
  }, {
    key: "updateTable",
    value: function updateTable() {
      var employees = _classPrivateFieldGet(this, _e).getEmployees();

      var table = document.getElementById("empTable");
      var rowCount = table.rows.length;

      for (var i = 1; i < rowCount; i++) {
        table.deleteRow(1);
      }

      for (var _i = 0; _i < employees.length; _i++) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = employees[_i].EmpNo;
        cell2.innerHTML = employees[_i].EmpName;
        cell3.innerHTML = employees[_i].DeptName;
        cell4.innerHTML = employees[_i].Designation;
        cell5.innerHTML = employees[_i].Salary;
      }
    }
  }]);

  return UserInterface;
}(); //babel .\oops\application.js -o .\transpile\application.build.js
