

function addRow(){
    
    let body = document.getElementById('body');
    
    let rowCount = body.rows.length;
   let row = body.insertRow(rowCount);
   let colCount = body.rows[0].cells.length;
 
//    console.log(colCount)
  for(let i = 0; i < colCount; i++){
      let newRow = row.insertCell(i);
    //   console.log(newRow)
      newRow.innerHTML = body.rows[0].cells[i].innerHTML;
      newRow.childNodes[0].value = "";

  }
}

function inputValue(){
  let rows = document.querySelectorAll("table tbody tr");
  // let inputs = document.querySelectorAll("input")
let firstname = document.querySelectorAll("table tbody tr td #firstname")
let lastname = document.querySelectorAll("table tbody tr td #lastname")
let salary = document.querySelectorAll("table tbody tr td #salary")
let date = document.querySelectorAll("table tbody tr td #date")

let letters = /^[A-Za-z]+$/;
let numbers = /^[0-9]+$/;
let dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
let valid = false;
let i = 0;
for(i; i < rows.length; i++){
  
if(firstname[i].value == "" || lastname[i].value == "" || salary[i].value == "" || date[i].value == "" && (date[i].value.match(dateformat))){
 valid = false;    
}else if(!date[i].value.match(dateformat)){
 valid = false;
}else if(firstname[i].value.match(letters) && lastname[i].value.match(letters) && salary[i].value.match(numbers)){
   valid = true;
}else{
  valid = false;
}
// console.log(rows.length)
// if(rows[i].children[i].children[0].value == ""){
//   valid = false;
// }else{
//   valid = true;
// }
}
if(valid){
  addRow();
}else{
  alert("Invalid input or invalid date")
}
}
