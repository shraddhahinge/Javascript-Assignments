let first = document.getElementById('first');
let second = document.getElementById('second');

let submit = document.getElementById('submit');
let cancel = document.getElementById('cancel');

let rows = document.querySelectorAll("#table_1 tbody tr")
let customer_names = document.querySelectorAll("#name")
let select_item = document.querySelectorAll('select')
let quantity = document.querySelectorAll("input[type=number]")
let dates = document.querySelectorAll("#date")

let dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;

for(let customer_name of customer_names){
    customer_name.addEventListener('keypress', function(e){
        ((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 96 && e.keyCode < 123))?
            customer_name.value = e.target.value : e.preventDefault();
        })
}

for(let date of dates){
    date.addEventListener('keypress', function(e){
        ((e.keyCode > 47 && e.keyCode < 58) || (e.keyCode == 45 || e.keyCode == 47))?
            date.value = e.target.value : e.preventDefault();
        })
}

submit.addEventListener('click', function(){
    
let output = ""
let check = false
    for(let i = 0; i < rows.length; i++){
        if(customer_names[i].value == "" &&
         select_item[i].value == "" && quantity[i].value == "" && (dates[i].value == "" && dates[i].value.match(dateformat))){
           
            check = true;
        }else{
               if(customer_names[i].value !== "" && quantity[i].value !== "" && (dates[i].value !== "" && dates[i].value.match(dateformat))){
               output += `<tr>
            <td>${customer_names[i].value}</td>
            <td>${select_item[i].value}</td>
            <td>${quantity[i].value}</td>
            <td>${dates[i].value}</td>
            </tr>
            `
            check = true;
        } 
// else{
//  check = false;
//         }
      
        }

       
    }
    if(check){
first.style.display = "none";
    second.style.display = "block"
    submit.style.display = "none";
    cancel.style.display = "none"
    document.getElementById('body_2').innerHTML = output
    }

    if(!check){
        alert("Invalid date or input")
    }
   
})




//1st filled
//if else -> 1st 
//if else ->2nd
//name 