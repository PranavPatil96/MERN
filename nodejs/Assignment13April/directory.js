
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";


// // 1. Read the Server Path
// let __fileName = fileURLToPath(import.meta.url);
// console.log(`File Name = ${__fileName}`);
// // 2. Combine this with the actual Resource Path
// let dirPath = path.join(__fileName, "./../../filesNew");

// // create a directory
// fs.mkdir(dirPath,(error)=>{
//     if(error){
//         console.log(`Directory Creation Failed ${error.message}`);
//         return;
//     }
//     console.log(`Successful Directory Creation`);
// }); 

// let dirPathToRead = path.join(__fileName, "./../../files");

// // CallBack has two parameters
// // 1. Error
// // 2. Contents of the Directory (File, SubDirectories,... etc.)
// fs.readdir(dirPathToRead, (error,dirContents)=>{
//     if(error){
//         console.log(`Directory Read Failed ${error.message}`);
//         return;
//     }
//     // Iterate over the directory Contents
//     dirContents.forEach((content)=>{
//         // Start reading directory contents
//         // stat: is a content inside the directory 
//         fs.stat(`${dirPathToRead}/${content}`, (err,stat)=>{
//             if(err){
//                 console.log(`Content Read Failed ${err.message}`);
//                 return;
//             }
//             // if the curent content is file read it, but if it is directory then 
//             // read files in directory (YOUR HEADACHE, YOU NEED TO DO IT)
//             if(stat.isFile()){
//                 console.log(`Current File Name = ${content}`);
//                 // read file contents
//                 let data = fs.readFileSync(`${dirPathToRead}/${content}`, {encoding:'utf8'});
//                 console.log(`File Contents are = ${data}`);    
//             }if(stat.isDirectory()){
               
//                // get the sub directory name
//                let data = fs.readdirSync(`${dirPathToRead}/${content}`,{encoding:'utf8'});
//                console.log(`Files  are: ${data}`);
//                data.forEach((val)=>{
//                    console.log(val);
                   
                    
                   
//                 });
//                 let data1 = fs.readFileSync(`${dirPathToRead}/${content}`, {encoding:'utf8'});
//                 console.log(`File Contents are = ${data1}`);           
               
//             }

//         });
//     });
// });

//READ DIRECOTY

// import fs from "fs";

// import path from "path";

// import { fileURLToPath } from "url";


//create an empty array of files
let Files = [];



function ReadDirectory(Directory) {
  //contents of the directory
  fs.readdirSync(Directory).forEach(File => {
    //get the absolute path by combining them with actual resource path
    const Absolute = path.join(Directory, File);

    // console.log("abs",Absolute);

    if (fs.statSync(Absolute).isDirectory()) return ReadDirectory(Absolute);

    else {

      fs.readFile(Absolute, { encoding: "utf8" }, (error, fileContent) => {

        if (error) {

          console.log(`Some Error Occurred ${error.message}`);

          return;

        }

        console.log(`Async Data Read Data = ${fileContent}`);

      });

      Files.push(Absolute);

    }



  });

 // console.log("filess",Files);

}




ReadDirectory("D:/MERN Training/nodejs/files");

//ThroughDirectory("../../Desktop/blazeclan_training/ass-13-april/");
//READ DIRECTORY - node .\fsmodule\directory.js

