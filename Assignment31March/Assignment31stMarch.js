//babel .\source\Assignment31stMarch.js -o .\transpile\Assignment31stMarch.build.js

//Assignment:

let Departments = ['Account','IT','Sales']
let Employees = [
    {EmpNo:101,EmpName:'John',DeptName:'Account',Designation:'Clerk'},
    {EmpNo:102,EmpName:'Jack',DeptName:'IT',Designation:'Manager'},
    {EmpNo:103,EmpName:'Mack',DeptName:'Sales',Designation:'Operator'},
    {EmpNo:104,EmpName:'Oliver',DeptName:'Sales',Designation:'Operator'},
    {EmpNo:104,EmpName:'Huma',DeptName:'IT',Designation:'Manager'},
    {EmpNo:106,EmpName:'Mon',DeptName:'Sales',Designation:'Operator'}
] 

let empByDept = {};
// Departments.forEach((dept)=>{
//     empByDept[dept] = Employees.filter((emp)=>{
//         return emp.DeptName === dept;
//     }).length;
// });
  empByDept = Employees.reduce((prevValue,currValue)=>{
    //console.log(`Prev Rec = ${JSON.stringify(prevValue)} and Cur Rec = ${JSON.stringify(currValue)}`);
     if(currValue.DeptName in prevValue){
        prevValue[currValue.DeptName]++;  //incr the count of frequency
    }else{
        prevValue[currValue.DeptName] = 1; //freq will be 1
    }
    return empByDept;
},{});
console.log(`Number of Employes group by dept no. ${JSON.stringify(empByDept)}`);

let frequency = Employees.reduce((prevValue,currValue)=>{
    if(currValue.Designation in prevValue){
        prevValue[currValue.Designation]++;
    }else{
        prevValue[currValue.Designation] = 1;
    }
    return prevValue;
},{});
console.log(`No. of Managers, Clerk and Operators: ${JSON.stringify(frequency)}`);


//Practicing reduce()

let result = Employees.reduce((groupByDept,e)=>{
  let deptName = e.DeptName;
  if(groupByDept[deptName]==null) groupByDept[deptName] = []
   groupByDept[deptName].push(e);
  return groupByDept;
},{});
console.log(`Names of Employees group by Department = ${JSON.stringify(result)}`);