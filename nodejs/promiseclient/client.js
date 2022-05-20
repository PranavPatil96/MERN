import DataAccess from './restaccess.js';
import http from 'http';
let obj = new DataAccess();

// define server parameters

const serverOptions = {
    host: 'localhost',
    port: 7011,
    path: '/api/employees',
    method: 'GET'
};

//now let us do the post operation
var emp1 = {
    empno: 30,
    empname: "huma",
    designation: "IT",
    salary:30,
    deptno:3,
};
const serverPostOptions = {
    host: 'localhost',
    port: 7011,
    path: '/api/employees',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
};

obj.postData(serverPostOptions).then((response)=>{
    console.log(`Received Response = ${response}`);
}).catch((error)=>{
    console.log(`Error Occurred ${error}`);
});

// receive the promise and handle it
obj.getData(serverOptions).then((response)=>{
    console.log(`Received Response = ${response}`);
}).catch((error)=>{
    console.log(`Error Occurred ${error}`);
});



//
var reqPost = http.request(serverPostOptions, function (res) {
    console.log("response statusCode: ", res.statusCode);
    res.on('data', function (data) {
        console.log('Posting Result:\n');
        process.stdout.write(data);
        console.log('\n\nPOST Operation Completed');
    });
});
 
// 7
reqPost.write(emp1);
reqPost.end();
reqPost.on('error', function (e) {
    console.error(e);
});
 
//get();