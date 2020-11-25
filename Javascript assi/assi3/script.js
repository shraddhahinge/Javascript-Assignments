let inputValue = document.getElementById('type');

   inputValue.addEventListener("keypress", function(e){
      //this will only allow to enter numbers and no alphabets
      (e.keyCode > 47 && e.keyCode < 58)? inputValue.value = e.target.value : e.preventDefault()
   })

function display(){
  console.log(typeof inputValue.value)
   //check the value in the input and alert grade accordingly
   switch (true) {
      case (Number(inputValue.value) == 0):
         alert("please enter score greater than 0")
         break;
    case (Number(inputValue.value) <= 20):
         alert("“Your exam grade is E”")
         break;
         case (Number(inputValue.value) <= 35):
         alert("“Your exam grade is -D”")
         break;
         case (Number(inputValue.value) <= 45):
         alert("“Your exam grade is +D”")
         break;
         case (Number(inputValue.value) <= 60):
         alert("“Your exam grade is -C”")
         break;
         case (Number(inputValue.value) <= 70):
         alert("“Your exam grade is +C”")
         break;
         case (Number(inputValue.value) <= 80):
         alert("“Your exam grade is -B”")
         break;
         case (Number(inputValue.value) <= 85):
         alert("“Your exam grade is +B”")
         break;
         case (Number(inputValue.value) <= 90):
         alert("“Your exam grade is -A”")
         break;
         case (Number(inputValue.value) > 90):
         alert("“Your exam grade is +A”")
         break;
      default:
         break;
   }
}
