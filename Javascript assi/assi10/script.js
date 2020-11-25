let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4')



num1.addEventListener('keypress', function(event){
   if((event.keyCode > 47 && event.keyCode < 58)){
        num1.value = event.target.value
       
    }else{
        event.preventDefault()
    }
})



num2.addEventListener('keypress', function(event){
    if((event.keyCode > 47 && event.keyCode < 58)){
        num2.value = event.target.value;
         
}else{
        event.preventDefault()
    }
})


num3.addEventListener('keypress', function(event){
   if((event.keyCode > 47 && event.keyCode < 58)){
        num3.value = event.target.value;
        
}else{
        event.preventDefault()
    }
})


num4.addEventListener('keypress', function(event){
    if((event.keyCode > 47 && event.keyCode < 58)){
        num4.value = event.target.value;
        
}else{
        event.preventDefault()
    }
})


num1.focus()

function movetoNext(current, nextFieldID) {
if (current.value.length >= current.maxLength) {
document.getElementById(nextFieldID).focus();
}
}

function validateCard(){

if((num1.value.length < num1.maxLength) || (num2.value.length < num2.maxLength) || (num3.value.length < num3.maxLength) || (num4.value.length < num4.maxLength)){
    alert("Invalid!!! please enter 4 digit number")
    num1.value = "";
   num2.value = "";
    num3.value = "";
   num4.value = "";
   num1.focus();
}else{

    let final_num = "";
  final_num += num1.value;
  final_num += num2.value;
   final_num += num3.value;
  final_num += num4.value;

  let num_arr = []

  for (let i = 0, len = final_num.length; i < len; i += 1) { 
                // num_arr.push(+final_num.charAt(i));
                if(i % 2 == 0){
                     num_arr.push(+final_num.charAt(i)*2);
                }else{
                     num_arr.push(+final_num.charAt(i));
                }

                if(num_arr[i] % 10 !== num_arr[i]){
                    let a = num_arr[i] % 10;
                    let b = num_arr[i] / 10
                    num_arr[i] = Math.floor(a+b);
                }
        }
    let reverse = num_arr.reverse();
    let total_sum = reverse.reduce((a,b) => {
        return a + b;
    })

console.log(total_sum)

    if(total_sum % 10 == 0){
        alert("“Valid Credit Card no.”")
    }else{
        alert("“Invalid Credit Card no.”")
    }

     num1.value = "";
   num2.value = "";
    num3.value = "";
   num4.value = "";
   num1.focus();
}
}