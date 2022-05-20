// the Constructor function accepts a dataSource
// this will be a collection 
var UIGenerator = function(dataSource){
    // this function wil be used to generate a
    // HTML <select> element
    console.log("here"+dataSource);
    this.select = function(){
        
        // check if the data is passed to generate the UI
        if(dataSource === undefined || dataSource.length === 0){
            return 'No Data So No UI will be generated'    
        } else {
            var select = '<select>';
            // iterate over the dataSource and Generate a UI
            for(var i=0;i<dataSource.length;i++){
                if(dataSource[i]==10){
                    select+= '<option value="'+ dataSource[i] +'" selected>'+ dataSource[i] + '</options>';
                }else{
                 select+= '<option value="'+ dataSource[i] +'" >'+ dataSource[i] + '</options>';}   
            }  
            select += '</select>';
            return select;
        }
    };

    // this.table = function(){ 
        
    //     if(dataSource === undefined || dataSource.length === 0){
    //         return 'No Data So No UI will be generated'    
    //     } else{
    //         var k =0;
    //         var table = '<table class="table table-bordered table-striped" border="1" ><thead><tr><th>EmpNo</th><th>EmpName</th><th>DeptName</th><th>Designation</th><th>Salary</th></tr></thead><tbody>';
    //        //for(j of dataSource){
    //         for(var i=0;i<dataSource.length;i++){
    //            // console.log("here 3"+dataSource[i]['EmpNo']);
    //             table+= '<tr><td>'+dataSource[i]['EmpNo']+'</td><td>'+dataSource[i]['EmpName']+'</td><td>'+dataSource[i]['DeptName']+'</td><td>'+dataSource[i]['Designation']+'</td><td>'+dataSource[i]['Salary']+'</td></tr>';
    //         }
    //         table +='</tbody></table>';
    //         return table;
    //     }//}
    // };

    this.table = function(){ 
        
        if(dataSource === undefined || dataSource.length === 0){
            return 'No Data So No UI will be generated'    
        } else{
            var k =0;
            var table = '<table class="table table-bordered table-striped" border="1" ><thead><tr><th>EmpNo</th><th>EmpName</th><th>DeptName</th><th>Designation</th><th>Salary</th></tr></thead><tbody>';
           //for(j of dataSource){
            for(var i=0;i<dataSource.length;i++){
               // console.log("here 3"+dataSource[i]['EmpNo']);
                table+= '<tr><td>'+dataSource[i]['EmpNo']+'</td><td>'+dataSource[i]['EmpName']+'</td><td>'+dataSource[i]['DeptName']+'</td><td>'+dataSource[i]['Designation']+'</td><td>'+dataSource[i]['Salary']+'</td></tr>';
            }
            table +='</tbody></table>';          
            return table;
        }//}
    };
    //Dynamic Pagination links
    this.pagination = function(){
        if(dataSource === undefined || dataSource.length === 0){
            return 'No Data So No UI will be generated'    
        }else{
            var records = 50;
            console.log("I am here"+dataSource);
            var ul = '<ul class="pagination pagination-lg justify-content-center">';
            ul += '<li class="page-item"> <a class="page-link" href="#" id="button_prev" disabled>Previous</a></li>';
            for(var i =1;i<=records/dataSource;i++){
                ul += '<li class="page-item"> <a class="page-link" href="#" id="pagepage">'+i+'</a></li>'
            }
            ul += '<li class="page-item"> <a class="page-link" href="#" id="button_next">Next</a></li>';
            ul += '</ul>';
            return ul;
        }
    };
}