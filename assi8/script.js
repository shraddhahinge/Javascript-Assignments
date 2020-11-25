function showProgress(){
    let bar_width = document.getElementById('p_width');
    let inc_width = document.getElementById('p_inc_px');
    let time_interval = document.getElementById('p_time');
   
    let outer_bar = document.getElementById("progress_outer");
    let inner_bar = document.getElementById("progress_inner");

   
 let val = 0;
 outer_bar.style.width = "0px";
 inner_bar.style.width = "0px";

 let t = setInterval(() => {
   val = val + Number(inc_width.value)
   outer_bar.style.width = bar_width.value + "px"
   inner_bar.style.width = val + "px"
    let final = Math.floor((val/Number(bar_width.value))*100);
   document.getElementById('percentage').innerHTML = final + "% completed"
   console.log(val)
  
   if(val == Number(bar_width.value)){
     clearInterval(t)
    }
    if(final == 100){

      alert("Done")
    }

  }, time_interval.value);
  

  function change(){
    document.getElementById('percentage').innerHTML = 0
    clearInterval(t)
showProgress()
   
  }
  bar_width.addEventListener('change',change)
  inc_width.addEventListener('change', change);
  time_interval.addEventListener('change', change)
  
}

