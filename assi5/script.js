let date = new Date();
let current_month = date.toLocaleString('default', {month: 'long'});
document.getElementById('head').innerHTML = current_month;

let current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
document.getElementById('time').innerHTML = current_time;

let present_year = date.getFullYear();
document.getElementById('year').innerHTML = present_year;

let first_day = new Date(date.getFullYear(), date.getMonth(),1).getDay();
console.log(first_day)

let last_date = new Date(date.getFullYear(), date.getMonth() + 1,0).getDate();
// console.log(last_day);

let present_day = date.getDate();
console.log(present_day)

let day = 1;
let output = `<tr>
<td>Sun</td>
<td>Mon</td>
<td>Tue</td>
<td>Wed</td>
<td>Thu</td>
<td>Fri</td>
<td>Sat</td>
`
for(let i = 0; i < 35; i++){
    if(i%7 == 0){
        output += "</tr><tr>"
    }
    if((i >= first_day) && (day <= last_date)){
        if(day == present_day){
            output += `<td id="present" style="background-color: gray">${day}</td>`
        }else{
           output += `<td id="present">${day}</td>` 
        }
        
        
        day = day + 1
    }else {
        output += `<td></td>`
    }
}
output += "</tr>";
document.getElementById('calender_table').innerHTML = output;


