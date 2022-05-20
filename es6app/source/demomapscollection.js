let myMap = new Map();

//add key value
myMap.set(1, {EmpNo:101,EmpName:'ABC'});
myMap.set(2, {EmpNo:102,EmpName:'P'});
myMap.set(3, {EmpNo:103,EmpName:'Y'});
myMap.set(4, {EmpNo:104,EmpName:'N'});
myMap.set(5, {EmpNo:105,EmpName:'A'});
myMap.set(5, {EmpNo:106,EmpName:'Q'});

//print size of map
console.log(`Size of map ${myMap.size}`);

//lets print data
for(let rec of myMap.entries()){
    console.log(`Records Key = ${rec[0]} and Values = ${JSON.stringify(rec[1])}`);
}

//lets delete a record
myMap.delete(5);
for(let rec of myMap.entries()){
    console.log(`Records Key = ${rec[0]} and Values = ${JSON.stringify(rec[1])}`);
}