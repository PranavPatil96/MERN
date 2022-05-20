import chai from 'chai';
import { response } from 'express';
// import request
import request from 'request';
// import instance from service
import instance from '../apiorm.js';

// define instance of expect object
let expect = chai.expect;
const testdata =  {"deptno":2,"deptname":"Sales4","location":"Mumbai","capacity":70};

// test suite
describe('The Test Suit for the Node.,js REST API Tests',()=>{
    
   
    // the test for the department object return from the REST API
    it('the api must return department object', (done)=>{
       
        request("http://localhost:7011/api/departments/2",(error, response,body)=>{
           let data = JSON.stringify((JSON.parse(body)).data);
            expect(data).to.equal(JSON.stringify(testdata));
            done(); 
        })
    });
     // the test for 500
     it('the api must return status code as 500 when is = 0', (done)=>{
        let id = 0;
         request(`http://localhost:7011/api/employees/${id}`,(error, response,body)=>{
         
             expect(response.statusCode).to.equal(500);
             done(); 
         })
     });
 
    //  the test for post request
      it('the collection have a new record after the post request', (done)=>{
         let record = { "deptno":41536,"deptname":"Account","location":"Pune","capacity":10 }  
         request.post(`http://localhost:7011/api/departments`,{
              headers:{
                  'Content-Type': 'application/json'   
              },
              body:JSON.stringify(record)
          },(error, response,body)=>{
           
              let data = (JSON.stringify(JSON.parse(body).data));
                console.log(`data  = ${data} and record = ${JSON.stringify(record)}`);
            
              expect(data).to.equal(JSON.stringify(record));
              done(); 
          })
      });
      // the test for put request
       it('the collection have a update record after the put request', (done)=>{
        let record = {"deptno":3,"deptname":"Electrical","location":"Jalgaon","capacity":20}  
        request.put(`http://localhost:7011/api/departments/3`,{
             headers:{
                 'Content-Type': 'application/json'   
             },
             body:JSON.stringify(record)
         },(error, response,body)=>{
          
             let data = (JSON.stringify(JSON.parse(body).data));
              
           
             expect(data).to.equal("[1]");
             done(); 
         })
     });
     // the test for delete request
     it('the collection must not have a record after the delete request', (done)=>{
       // let record = {"deptno":3,"deptname":"Electrical","location":"Jalgaon","capacity":20}  
        request.delete(`http://localhost:7011/api/departments/4`,(error, response,body)=>{
            let data = JSON.stringify((JSON.parse(body)).data);
            console.log(`data = ${data}`);
            expect(data).to.equal(JSON.stringify(testdata));
            done(); 
         })
     });
});
