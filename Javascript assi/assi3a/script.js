let inputValue = document.getElementById('type');

   inputValue.addEventListener("keypress", function(e){
      //this will only allow to enter numbers and no alphabets
      (e.keyCode > 47 && e.keyCode < 58)? inputValue.value = e.target.value : e.preventDefault()
   })

function display(){
  console.log(typeof inputValue.value)
   //check the value in the input and alert grade accordingly
   let value = Number(inputValue.value);
  
   (value == 0)?  alert("please enter score greater than 0") :
   (value <= 20)? alert("“Your exam grade is E”") :
   (value <= 35)? alert("“Your exam grade is -D”") :
   (value <= 45)? alert("“Your exam grade is +D”") :
   (value <= 60)? alert("“Your exam grade is -C”") :
   (value <= 70)?  alert("“Your exam grade is +C”") :
   (value <= 80)? alert("“Your exam grade is -B”") :
   (value <= 85)? alert("“Your exam grade is +B”") :
   (value <= 90)? alert("“Your exam grade is -A”") :
   alert("“Your exam grade is +A”");
}
