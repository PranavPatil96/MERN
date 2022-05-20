//read csv
import XLSX from 'xlsx';

var workbook = XLSX.readFile('C:/Users/huma.khan/Downloads/file_example_XLS_10.xls');

var sheet_name_list = workbook.SheetNames;

var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

console.log(xlData);


//Install
//npm install read-excel-file --save