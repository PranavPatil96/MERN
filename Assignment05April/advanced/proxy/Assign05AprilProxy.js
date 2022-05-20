//Target Objects
class ProductInfo {
    ProductId = "123";
    ProductName = 'Iron';
    CategoryName = "Electrical";
    Description = "Nice";
    Manufacturer = "_Philips";
    Price = 9000;
}
   // define a handler
   // lets trap incoming requests
   const handler = {
     // target is the object being proxied
     // prop is the Property  from the target object to be proxied
     get(Target, prop) {
       if (prop.startsWith("_")) {
         throw new Error("Access is denied");
       } else {
         // Provide access
         let val = Target[prop];
         return val;
       }
     },
     // Trap for Write
     // target is the object being proxied
     // prop is the Property  from the target object to be proxied
     // val is value to be written into the Property
     set(Target, prop, val) {
       if (prop === "Price") {
           throw new Error("Access is denied, this property cannot be written");
       } else {
           // allow property write
           Target[prop] = val;
           return true;
       }
     },
     // Trap the request for reading all property names from the target object
     ownKeys(Target) {
         // print only properties those are not started from '_'
         let keys = Object.keys(Target);
         let props = keys.filter((p,i)=>{
             return p[0]!== '_';
         }); 
         return props;
     },
     ownValues(Target,prop){
         let val = Target[prop];
         return val;
     }
   };
 
 const tgt = new ProductInfo();
 // define a Proxy
 const client1 = new Proxy(tgt, handler);
 const client2 = new Proxy(tgt, handler);
 
 // Consumer that wants to read property values
 function consumerRead() {
   // lets use the proxyObject to access properties
 
   console.log(`ProductId  = ${client1.ProductId}`);
   console.log(`ProductName  = ${client1.ProductName}`);
   console.log(`CategoryName  = ${client1.CategoryName}`);
   console.log(`Description  = ${client1.Description}`);
   console.log(`Manufacturer  = ${client1.Manufacturer}`);
   console.log(`Price  = ${client1.Price}`);
   // Deny the Read doe SecretCode
 }
 
  consumerRead();
 
 // Consumer that wants to write the property value
 function consumerWrite() {
     // - ProductId, Must start from CLT1--[JS Random-Number]
     // - CategoryName will always be Either Electrical or Electronics
   if(client1.CategoryName!='Electrical' ||client1.CategoryName!='Electronics')
   {
       alert("CategoryName must be Electronics or Electrical")
   }
   if(!client1.ProductId.startsWith('CLT1--')){
    client1.ProductId= 'CLT1--'+client1.ProductId;
   console.log("product_id",  client1.ProductId);
 
  }
  
 }
 
  consumerWrite();
 
 function readProps(){
     let keys = Object.keys(client1);
     console.log(keys);
     var vals = Object.values(client1);
     console.log(vals);
 
 }
 
 readProps();


 //babel .\advanced\proxy\Assign05AprilProxy.js -o .\transpile\Assign05AprilProxy.build.js