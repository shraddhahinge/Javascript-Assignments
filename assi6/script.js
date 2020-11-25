function clock(){
let date = new Date();
let hours = date.getHours();
let mins =  date.getMinutes();
let secs =  date.getSeconds();

let time = `${hours}:${mins}:${secs}`;

document.getElementById('time').innerHTML = time
}

function show(){
    let interval_value = document.getElementById('interval');
    let val = interval_value.value;
    console.log(val)
let t = setInterval(clock, val);
setTimeout(() => {
    clearInterval(t);
}, 30000);
}


