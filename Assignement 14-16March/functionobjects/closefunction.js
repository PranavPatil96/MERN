// Create a CLose FUnction or a function object that will return the Literal with public members in it

function Logic(){
    var employees = [];
    employees.push({EmpNo:101, EmpName:'A', DeptName:'Finance', Designation:'Sales', Salary:9088});
    employees.push({EmpNo:102, EmpName:'B', DeptName:'Development', Designation:'Developer', Salary:8088});
     var DeptName = ['Finance','Development','Teaching'];
     var Designation = ['Sales','Developer','Trainer'];
    return {
        getEmployees:function(){
            return employees;
        },
        addEmployee:function(emp){
            employees.push(emp);
            return employees;
        },
        deleteEmployee:function(emp){
            for (var index = 0; index < employees.length; index++) {
               if(employees[index].EmpNo===emp.EmpNo){
                   employees.splice(index,1);
                   return employees;
               }                
            }
            return employees;
        },
        updateEmployee:function(emp){
            for (var index = 0; index < employees.length; index++) {
               if(employees[index].EmpNo===emp.EmpNo){
                   employees[index]['EmpNo'] = emp.EmpNo;
                   employees[index]['EmpName'] = emp.EmpName;
                   employees[index]['DeptName'] = emp.DeptName;
                   employees[index]['Designation'] = emp.Designation;
                   employees[index]['Salary'] = emp.Salary;
                   return employees;
               }                
            }
        },
        getDeptname:function(){
            return DeptName;
        },
        getDesignationName:function(){
            return Designation;
        }
    };
}