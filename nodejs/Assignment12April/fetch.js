function getData() {
    let response = fetch("", {
      method: "GET",
      headers:{
          "Content-Type":"application/json",
          "id":"0"
      }
    });
    return response;
  }
  let result = getData();
  result
    .then((resp) => resp.json())
    .then((data) => console.log(JSON.stringify(data)))
    .catch((error) => console.log(error));
  
  //POST DATA TO SERVER
  function postData() {
    let prod = {
      "productId": "Prod-122",
      "productName": "Electirc Chair",
      "categoryName": "Electronics",
      "manufacturer": "TATA",
      "description": "NICE",
      "basePrice": 90000,
    };
    let response = fetch("http://localhost:8889/products",{
      method:"POST",
      body:JSON.stringify(prod),
      headers:{
          "Content-Type":"application/json"
      }
    });
    return response;
  }
  let result1 = postData();
  result1
    .then((resp) => resp.json())
    .then((data) => console.log("After Posting Data "+JSON.stringify(data)))
    .catch((error) => console.log(error));
  
  //UPDATE DATA ON SERVER
  function putData() {
      let prod = {"productRowId":47,"productId":"Prod-122","productName":"Electirc Chair","categoryName":"Electronics","manufacturer":"TATA","description":"NICE","basePrice":90000};
      let response = fetch("http://localhost:8889/product/10",{
        method:"PUT",
        body:JSON.stringify(prod),
        headers:{
            "Content-Type":"application/json"
        }
      });
      return response;
    }
    let result2 = putData();
    result2
      .then((resp) => resp.json())
      .then((data) => console.log("After Updating Data "+JSON.stringify(data)))
      .catch((error) => console.log(error));
  
  
  //DELETE DATA ON SERVER
  function deleteData() {
      let prod ={"productRowId":20,"productId":"Prd-044","productName":"Charger","categoryName":"Food","manufacturer":"TATA","description":"NICE","basePrice":8004};
      let response = fetch("http://localhost:8889/product/10",{
        method:"DELETE",
        body:JSON.stringify(prod),
        headers:{
            "Content-Type":"application/json"
        }
      });
      return response;
    }
    let result3 = deleteData();
    result3
      .then((resp) => resp.json())
      .then((data) => console.log("After Deleting Data "+JSON.stringify(data)))
      .catch((error) => console.log(error));    
    