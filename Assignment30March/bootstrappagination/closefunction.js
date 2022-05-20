// Create a CLose FUnction or a function object that will return the Literal with public members in it

function Logic() {
  var employees = [];


  // for(var i = 0;i<=50;i++){
  //   employees.push({
  //       EmpNo: 101+i,
  //        EmpName: "A"+i,
  //        DeptName: "Finance",
  //        Designation: "Sales",
  //       Salary: 9088,
  //      });
  // }
  employees.push({
    EmpNo: 101,
    EmpName: "A",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 9088,
  });
  employees.push({
    EmpNo: 102,
    EmpName: "B",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 8088,
  });
  employees.push({
    EmpNo: 103,
    EmpName: "C",
    DeptName: "Teaching",
    Designation: "Trainer",
    Salary: 8088,
  });
  employees.push({
    EmpNo: 104,
    EmpName: "D",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 808,
  });
  employees.push({
    EmpNo: 105,
    EmpName: "E",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 106,
    EmpName: "F",
    DeptName: "Teaching",
    Designation: "Trainer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 107,
    EmpName: "G",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 108,
    EmpName: "H",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 109,
    EmpName: "I",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 110,
    EmpName: "J",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 456,
  });

  employees.push({
    EmpNo: 111,
    EmpName: "K",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 9088,
  });
  employees.push({
    EmpNo: 112,
    EmpName: "L",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 8088,
  });
  employees.push({
    EmpNo: 113,
    EmpName: "M",
    DeptName: "Teaching",
    Designation: "Trainer",
    Salary: 8088,
  });
  employees.push({
    EmpNo: 114,
    EmpName: "N",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 808,
  });
  employees.push({
    EmpNo: 115,
    EmpName: "O",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 116,
    EmpName: "P",
    DeptName: "Teaching",
    Designation: "Trainer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 117,
    EmpName: "Q",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 118,
    EmpName: "R",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 119,
    EmpName: "S",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 120,
    EmpName: "T",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 456,
  });
  employees.push({
    EmpNo: 121,
    EmpName: "U",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 9088,
  });
  employees.push({
    EmpNo: 122,
    EmpName: "V",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 8088,
  });
  employees.push({
    EmpNo: 123,
    EmpName: "W",
    DeptName: "Teaching",
    Designation: "Trainer",
    Salary: 8088,
  });
  employees.push({
    EmpNo: 124,
    EmpName: "X",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 808,
  });
  employees.push({
    EmpNo: 125,
    EmpName: "Y",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 126,
    EmpName: "Z",
    DeptName: "Teaching",
    Designation: "Trainer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 127,
    EmpName: "AA",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 128,
    EmpName: "BB",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 129,
    EmpName: "CC",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 130,
    EmpName: "DD",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 456,
  });
  employees.push({
    EmpNo: 131,
    EmpName: "EE",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 9088,
  });
  employees.push({
    EmpNo: 132,
    EmpName: "FF",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 8088,
  });
  employees.push({
    EmpNo: 133,
    EmpName: "GG",
    DeptName: "Teaching",
    Designation: "Trainer",
    Salary: 8088,
  });
  employees.push({
    EmpNo: 134,
    EmpName: "HH",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 808,
  });
  employees.push({
    EmpNo: 135,
    EmpName: "II",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 136,
    EmpName: "JJ",
    DeptName: "Teaching",
    Designation: "Trainer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 137,
    EmpName: "KK",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 138,
    EmpName: "LL",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 139,
    EmpName: "MM",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 140,
    EmpName: "NN",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 456,
  });
  employees.push({
    EmpNo: 141,
    EmpName: "OO",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 9088,
  });
  employees.push({
    EmpNo: 142,
    EmpName: "PP",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 8088,
  });
  employees.push({
    EmpNo: 143,
    EmpName: "QQ",
    DeptName: "Teaching",
    Designation: "Trainer",
    Salary: 8088,
  });
  employees.push({
    EmpNo: 144,
    EmpName: "RR",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 808,
  });
  employees.push({
    EmpNo: 145,
    EmpName: "SS",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 146,
    EmpName: "TT",
    DeptName: "Teaching",
    Designation: "Trainer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 147,
    EmpName: "UU",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 148,
    EmpName: "VV",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 149,
    EmpName: "WW",
    DeptName: "Development",
    Designation: "Developer",
    Salary: 808,
  });
  employees.push({
    EmpNo: 150,
    EmpName: "XX",
    DeptName: "Finance",
    Designation: "Sales",
    Salary: 456,
  });
  var DeptName = ["Finance", "Development", "Teaching"];
  var Designation = ["Sales", "Developer", "Trainer"];

  // Pagination Logic starts here
  var currentPage = 1;
  //var itemsPerPage = 5;
  //total pages
  //var pages = numPages(cards)


  return {
    getEmployees: function () {
      return employees.slice(0,10);
    },
    getEmployeesByLimit: function (itemsPerPage,currentPage) {
      var sliceEmployees = employees.slice(itemsPerPage * (currentPage -1),itemsPerPage*currentPage);
      return sliceEmployees;
    },
    addEmployee: function (emp) {
      employees.push(emp);
      return employees;
    },
    deleteEmployee: function (item) {
      for (var index = 0; index < employees.length; index++) {
        console.log(
          "inised delete " + employees[index].EmpNo + " item " + item
        );
        if (employees[index].EmpNo == item) {
          console.log("hereeeeee");
          employees.splice(index, 1);
          return employees;
        }
      }
      return employees;
    },
    updateEmployee: function (emp) {
      for (var index = 0; index < employees.length; index++) {
        if (employees[index].EmpNo === emp.EmpNo) {
          employees[index]["EmpNo"] = emp.EmpNo;
          employees[index]["EmpName"] = emp.EmpName;
          employees[index]["DeptName"] = emp.DeptName;
          employees[index]["Designation"] = emp.Designation;
          employees[index]["Salary"] = emp.Salary;
          return employees;
        }
      }
    },
    getDeptname: function () {
      return DeptName;
    },
    getDesignationName: function () {
      return Designation;
    },
    getEmployeeById: function (id) {
      for (var i = 0; i < employees.length; i++) {
        console.log("here");
        if (employees[i].EmpNo == id) {
          return employees[i];
        }
      }
    },
  };
}
