let setValues = new Set();
//add data
setValues.add(10);
setValues.add(20);
setValues.add(30);
setValues.add(40);
setValues.add(50);
setValues.add(10); // duplicate

//lets print the size of sets

console.log(`Records in sets are = ${setValues.size}`);

//print all data from sets

for(let rec of setValues.entries()){
    console.log(`Records Key =  ${rec[0]} and value= ${rec[1]}`);
}

//Does the record exist
console.log(`Does = ${setValues.has(20)}`);
console.log(`Does = ${setValues.has(204)}`);

//print keys and values
for(let key of setValues.keys()){
    console.log(`keys are = ${key}`);
}
for(let val of setValues.values()){
    console.log(`values are = ${val}`);
}

