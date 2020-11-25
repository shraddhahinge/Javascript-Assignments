let form = document.getElementById('form');

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function dropDown(arr) {
    let output = "";

    for (let i = 1; i < arr.length - 2; i++) {
        output += `<div class="box">
         <label for="scores">Movement Score ${arr[i]}:</label>
        <select name="score" class="value" id="sel">
         <option value="0" selected>0</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
   <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
 <option value="10">10</option>
 </select >
       </div>`
    }
    document.getElementById('dropdown_form').innerHTML = output;

    let finalScore = document.getElementById('score_btn');

    finalScore.addEventListener('click', function (e) {
        e.preventDefault();
        totalScore()
    })
    let selected_values = []
    function totalScore() {
        let scores = document.querySelectorAll(".box");
        let _score = document.querySelectorAll("#sel");
        let select = document.querySelectorAll("option");
        for (let score of _score) {
            selected_values.push(score.value)

        }
        let final_sum = selected_values.map(Number)
        let b = 0;
        final_sum.map(function (a) {
            b += a;
        })
        document.getElementById('output').innerHTML = b;

        setTimeout(() => {
            if(b >= 20) {
                alert("No Movement")
            } else if (21 <= b <= 40) {
                alert("Movement is slow")
            } else if (41 <= b <= 60) {
                alert("Movement is moderate")
            } else if (61 <= b <= 80) {
                alert("Movement is good")
            } else return;
        }, 1000);

        for (let score of _score) {
            score.value = ""
        }
        selected_values = []
    }

}

dropDown(arr);























// const values = [];



// function Option1() {
//     selectElement =
//         document.querySelector('#one');

//     output = selectElement.value;

//     values.splice(0, 1, output)
//     console.log(values)
// }

// function Option2() {
//     selectElement =
//         document.querySelector('#two');

//     output = selectElement.value;

//     values.splice(1, 1, output)
//     console.log(values)
// }
// function Option3() {
//     selectElement =
//         document.querySelector('#three');
//     output = selectElement.value;
//     values.splice(2, 1, output)
// }
// function Option4() {
//     selectElement =
//         document.querySelector('#four');

//     output = selectElement.value;
//     values.splice(3, 1, output)
// }
// function Option5() {
//     selectElement =
//         document.querySelector('#five');

//     output = selectElement.value;

//     values.splice(4, 1, output)
// }
// function Option6() {
//     selectElement =
//         document.querySelector('#six');

//     output = selectElement.value;

//     values.splice(5, 1, output)
// }
// function Option7() {
//     selectElement =
//         document.querySelector('#seven');

//     output = selectElement.value;

//     values.splice(6, 1, output)
// }
// function Option8() {
//     selectElement =
//         document.querySelector('#eight');

//     output = selectElement.value;

//     values.splice(7, 1, output)
// }

