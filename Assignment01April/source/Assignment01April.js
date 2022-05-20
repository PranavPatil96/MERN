window.onload = function () {
  var btnSave = document.getElementById("btnSave");
  btnSave.addEventListener("click", addProduct, false);
  //Create two arrays
  var Categories = ["Electrical", "Mobile", "Electronics"];
  var Manufacturers = ["TATA", "LG", "Samsung"];

  //
  var lstCat = document.getElementById("lstCat");
  var option = "";
  //generate dynamic UI
  for (var i = 0; i < Categories.length; i++) {
    option += `<option value=${Categories[i]}>${Categories[i]}</option>`;
  }
  lstCat.innerHTML = option;

  var lstMan = document.getElementById("lstMan");
  var option = "";
  //generate dynamic UI
  for (var i = 0; i < Manufacturers.length; i++) {
    option += `<option value=${Manufacturers[i]}>${Manufacturers[i]}</option>`;
  }
  lstMan.innerHTML = option;
};

let pId = 01;
let ProductMap = new Map();
let CategoryMap = new Map();
let ManufacturerMap = new Map();
function addProduct() {
  let product = {
    productId: `Prd-${pId}`,
    productName: document.getElementById("txtproductName").value,
    catgoryname: document.getElementById("lstCat").value,
    manufacturerName: document.getElementById("lstMan").value,
    price: parseInt(document.getElementById("txtproductPrice").value),
  };
  console.log(`values ${JSON.stringify(product)}`);


  ProductMap.set(`Prd-${pId}`, product);
  console.log("Product Map");
  console.log(ProductMap);
  //generating table using
  generateTable(ProductMap, product);
  //getting catogory by map
  generateCatByMap(product);
  console.log("Category map");
  console.log(CategoryMap);
  //getting manufacturer by map
  generateManByMap(product);
  console.log("Manufacturer map");
  console.log(ManufacturerMap);
  pId++;
}
function generateCatByMap(product) {
  // If category map contains any category
  if (CategoryMap.has(product.catgoryname)) {
    CategoryMap.set(product.catgoryname, [
      ...CategoryMap.get(product.catgoryname),
      product,
    ]);
  } else {
    CategoryMap.set(product.catgoryname, [product]);
  }
}
function generateManByMap(product) {
  // If man map contains any category
  console.log(`product.manufacturerName ${product.manufacturerName}`);
  if (ManufacturerMap.has(product.manufacturerName)) {
    ManufacturerMap.set(product.manufacturerName, [
      ...ManufacturerMap.get(product.manufacturerName),
      product,
    ]);
  } else {
    ManufacturerMap.set(product.manufacturerName, [product]);
  }
}
function generateTable(ProductMap, product) {
  var table = document.getElementById("table");
  var theadid = document.getElementById("theadid");
  var tbodyid = document.getElementById("tbodyid");

  var heading = [];
  console.log("my data----" + Object.keys(product));
  var p = Object.keys(product);
  console.log("my data" + p.values());
  for (var i = 0; i < p.length; i++) {
    heading += "<th>" + p[i] + "</th>";
  }

  for (let keys of ProductMap.keys()) {
    console.log(`Keys ${keys}`);
  }
  for (let val of ProductMap.values()) {
    console.log(`Values ${JSON.stringify(val)}`);
  }
  for (let entry of ProductMap.entries()) {
    console.log(`${entry[0]} -> ${JSON.stringify(entry[1])}`);
  }
  var tabledata = [];
  ProductMap.forEach((element) => {
    tabledata += "<tr>";
    for (var j in element) {
      tabledata += "<td>" + element[j] + "</td>";
    }
    tabledata += "</tr>";
  });
  tbodyid.innerHTML = tabledata;
  theadid.innerHTML = heading;
}
