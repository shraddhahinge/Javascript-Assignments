
let alphabets = document.getElementById('alphabets');
let number = document.getElementById('numbers');
let mix1 = document.getElementById('mix1');
let mix2 = document.getElementById('mix2')



alphabets.addEventListener('keypress', function(event){
    if((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123)){
        alphabets.value = event.target.value
    }else{
        event.preventDefault()
    }
})



number.addEventListener('keypress', function(event){
    if((event.keyCode > 47 && event.keyCode < 58)){
        number.value = event.target.value;
        
}else{
        event.preventDefault()
    }
})





mix1.addEventListener('keypress', function(event){
    if((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123)){
        mix1.value = event.target.value;
        
}else{
        event.preventDefault()
    }
})


mix2.addEventListener('keypress', function(event){
    if((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123)){
        mix2.value = event.target.value;
        
}else{
        event.preventDefault()
    }
})


number.focus()

function movetoNext(current, nextFieldID) {
if (current.value.length >= current.maxLength) {
document.getElementById(nextFieldID).focus();
}
}

function validate(){
    
let valid = false
let num = /^[0-9]+$/;
let letters = /^[A-Za-z]+$/;
       if((number.value.length + mix1.value.length + mix2.value.length + alphabets.value.length) < 16){
alert("“Invalid key code. Please enter again”")
       }else if(number.value == "" || mix1.value == "" || mix2.value == "" || alphabets.value == ""){
           alert("“Invalid key code. Please enter again”")
       }else {

for(let i = 0; i < 4; i++){
   if(number.value[i] == number.value[i+1] || number.value[i] == number.value[i+2] || number.value[i] == number.value[i+3] || number.value[i] == number.value[i-1] || number.value[i] == number.value[i-2] || number.value[i] == number.value[i-3]){
      valid = false
   }else if(alphabets.value[i] == alphabets.value[i+1] || alphabets.value[i] == alphabets.value[i+2] || alphabets.value[i] == alphabets.value[i+3] || alphabets.value[i] == alphabets.value[i-1] || alphabets.value[i] == alphabets.value[i-2] || alphabets.value[i] == alphabets.value[i-3]){
       valid = false
   }else if(mix1.value[i] == mix1.value[i+1] || mix1.value[i] == mix1.value[i+2] || mix1.value[i] == mix1.value[i+3] || mix1.value[i] == mix1.value[i-1] || mix1.value[i] == mix1.value[i-2] || mix1.value[i] == mix1.value[i-3]){
      valid = false;
   }else if(mix2.value[i] == mix2.value[i+1] || mix2.value[i] == mix2.value[i+2] || mix2.value[i] == mix2.value[i+3] || mix2.value[i] == mix2.value[i-1] || mix2.value[i] == mix2.value[i-2] || mix2.value[i] == mix2.value[i-3]){
      valid = false;
   }else{
       valid = true;
   }
}
if(mix1.value.match(num) || mix1.value.match(letters)){
valid = false;
}else{
    valid = true;
}

if(valid){
     alert("“This is a valid key code for Installation”")
}else{
    alert("“Invalid key code. Please enter unique code")
}
//    alert("“This is a valid key code for Installation”")
       } 
}

//alert("“Invalid key code. Please enter unique code")