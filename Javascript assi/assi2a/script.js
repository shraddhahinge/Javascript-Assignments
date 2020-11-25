//selecting each select element 
let score1 = document.getElementById('Score1');
let score2 = document.getElementById('Score2');
let score3 = document.getElementById('Score3');
let score4 = document.getElementById('Score4');
let score5 = document.getElementById('Score5');
let score6 = document.getElementById('Score6');
let score7 = document.getElementById('Score7');
let score8 = document.getElementById('Score8');
let total = [0,0,0,0,0,0,0,0]

//1
score1.addEventListener('change', function(){
    let val = Number(score1.value)
  total.splice(0,1,val)

  let sum = total.reduce((a,b) => {
     return a + b
  })

 document.getElementById('total').innerHTML = sum

 setTimeout(() => {
     if(sum <= 20){
     alert("No Movement")
 }else if(sum <= 40){
     alert("Movement is slow")
 }else if(sum <= 60){
     alert("Movement is moderate")
 }else if(sum <= 80){
     alert("Movement is good")
 }
 }, 1000);
 
})

//2
score2.addEventListener('change', function(){
    let val = Number(score2.value)

  total.splice(1,1,val)

   let sum = total.reduce((a,b) => {
     return a + b
  })
 document.getElementById('total').innerHTML = sum

  setTimeout(() => {
     if(sum <= 20){
     alert("No Movement")
 }else if(sum <= 40){
     alert("Movement is slow")
 }else if(sum <= 60){
     alert("Movement is moderate")
 }else if(sum <= 80){
     alert("Movement is good")
 }
 }, 1000);
})

//3
score3.addEventListener('change', function(){
    
    let val = Number(score3.value)
    
  total.splice(2,1,val)
     let sum = total.reduce((a,b) => {
     return a + b
  })
 document.getElementById('total').innerHTML = sum

  setTimeout(() => {
     if(sum <= 20){
     alert("No Movement")
 }else if(sum <= 40){
     alert("Movement is slow")
 }else if(sum <= 60){
     alert("Movement is moderate")
 }else if(sum <= 80){
     alert("Movement is good")
 }
 }, 1000);
})

//4
score4.addEventListener('change', function(){
    let val = Number(score4.value)

  total.splice(3,1,val)

  let sum = total.reduce((a,b) => {
     return a + b
  })

 document.getElementById('total').innerHTML = sum

  setTimeout(() => {
     if(sum <= 20){
     alert("No Movement")
 }else if(sum <= 40){
     alert("Movement is slow")
 }else if(sum <= 60){
     alert("Movement is moderate")
 }else if(sum <= 80){
     alert("Movement is good")
 }
 }, 1000);
})

//5
score5.addEventListener('change', function(){
    let val = Number(score5.value)

  total.splice(4,1,val)
    let sum = total.reduce((a,b) => {
     return a + b
  })

 document.getElementById('total').innerHTML = sum

  setTimeout(() => {
     if(sum <= 20){
     alert("No Movement")
 }else if(sum <= 40){
     alert("Movement is slow")
 }else if(sum <= 60){
     alert("Movement is moderate")
 }else if(sum <= 80){
     alert("Movement is good")
 }
 }, 1000);
})

//6
score6.addEventListener('change', function(){
    let val = Number(score6.value)

  total.splice(5,1,val)

    let sum = total.reduce((a,b) => {
     return a + b
  })
 document.getElementById('total').innerHTML = sum

  setTimeout(() => {
     if(sum <= 20){
     alert("No Movement")
 }else if(sum <= 40){
     alert("Movement is slow")
 }else if(sum <= 60){
     alert("Movement is moderate")
 }else if(sum <= 80){
     alert("Movement is good")
 }
 }, 1000);
})

//7
score7.addEventListener('change', function(){
    let val = Number(score7.value)

  total.splice(6,1,val)
   let sum = total.reduce((a,b) => {
     return a + b
  })

 document.getElementById('total').innerHTML = sum

  setTimeout(() => {
     if(sum <= 20){
     alert("No Movement")
 }else if(sum <= 40){
     alert("Movement is slow")
 }else if(sum <= 60){
     alert("Movement is moderate")
 }else if(sum <= 80){
     alert("Movement is good")
 }
 }, 1000);
})

//8
score8.addEventListener('change', function(){
    let val = Number(score8.value)
  total.splice(7,1,val)
   let sum = total.reduce((a,b) => {
     return a + b
  })
 document.getElementById('total').innerHTML = sum

  setTimeout(() => {
     if(sum <= 20){
     alert("No Movement")
 }else if(sum <= 40){
     alert("Movement is slow")
 }else if(sum <= 60){
     alert("Movement is moderate")
 }else if(sum <= 80){
     alert("Movement is good")
 }
 }, 1000);
})
