// var btnGetData = document.getElementById('#btnGetData');
// btnGetData.addEventListener('click',getData,false);
function getData() {
  console.log("I am here");
    return new Promise((resolve, reject) => {
      // define an AJAX Object for HTTP Request
      let http = new XMLHttpRequest();
  
      // Subscribe to the Response received from the External Service
  
      http.onload = function () {
        console.log("in onload");
        resolve(http.response);
      };
  
      http.onerror = function (error) {
        console.log("in error");
        reject(`Error Occurred ${error}`);
      };
  
      // initiate a HTTP Request
      // by default the open() method will execute asynchronously
      // to run it synchronously pass the third parameter as 'false'
  
      http.open("GET", "http://127.0.0.1:100/");
      //add header
     http.setRequestHeader("Content-Type", "application/json");
     http.setRequestHeader('Accept','*/*')
     http.setRequestHeader( 'Access-Control-Allow-Origin', 'http://127.0.0.1:5500/');
      http.setRequestHeader('id',0);
      http.setRequestHeader('huma','1234');
      http.setRequestHeader('Access-Control-Allow-Headers','Origin,Content-Type,Accept')
      // send the request
     http.send();
      console.log("Request send and now existing from the method");
    });
  }
  //Post data
  function postData(prod) {
    return new Promise((resolve, reject) => {
      // define an AJAX Object for HTTP Request
      let http = new XMLHttpRequest();
  
      // Subscribe to the Response received from the External Service
  
      http.onload = function () {
        resolve(http.response);
      };
  
      http.onerror = function (error) {
        reject(`Error Occurred ${error}`);
      };
  
      // initiate a HTTP Request
      // by default the open() method will execute asynchronously
      // to run it synchronously pass the third parameter as 'false'
  
      http.open("POST", "http://127.0.0.1:100/");
      http.setRequestHeader("Content-Type", "application/json");
      // send the request
      http.send(JSON.stringify(prod));
      console.log("Request send and now existing from the method");
    });
  }
  //update data
  function putData(prod, id) {
    return new Promise((resolve, reject) => {
      // define an AJAX Object for HTTP Request
      let http = new XMLHttpRequest();
  
      // Subscribe to the Response received from the External Service
  
      http.onload = function () {
        resolve(http.response);
      };
  
      http.onerror = function (error) {
        reject(`Error Occurred ${error}`);
      };
  
      // initiate a HTTP Request
      // by default the open() method will execute asynchronously
      // to run it synchronously pass the third parameter as 'false'
      var url = `http://127.0.0.1:100/${id}`;
      http.open("PUT", "http://127.0.0.1:100/" + id);
      http.setRequestHeader("Content-Type", "application/json");
      // send the request
      http.send(JSON.stringify(prod));
      console.log("Request send and now existing from the method");
    });
  }
  function deleteData(id, prod) {
    return new Promise((resolve, reject) => {
      let http = new XMLHttpRequest();
  
      // Subscribe to the Response received from the External Service
  
      http.onload = function () {
        resolve(http.response);
      };
  
      http.onerror = function (error) {
        reject(`Error Occurred ${error}`);
      };
      http.open("DELETE", "http://127.0.0.1:100/" + id);
      http.setRequestHeader("Content-Type", "application/json");
      // send the request
      http.send(JSON.stringify(prod));
      console.log("Request send and now existing from the method");
    });
  }
  