function getData() {
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
  
      http.open("GET", "/api/employees");
      //add header
     //http.setRequestHeader("Content-Type", "application/json");
     //http.setRequestHeader('Accept','*/*')
     // http.setRequestHeader('id',0);
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
  
      http.open("POST", "http://localhost:8889/products");
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
      var url = `http://localhost:8889/product/${id}`;
      http.open("PUT", "http://localhost:8889/product/" + id);
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
      http.open("DELETE", "http://localhost:8889/product/" + id);
      http.setRequestHeader("Content-Type", "application/json");
      // send the request
      http.send(JSON.stringify(prod));
      console.log("Request send and now existing from the method");
    });
  }
  