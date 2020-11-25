//data created in json format
let obj_data = {
     "data": [
        {
            "name": "a",
            "year": 2001,
            "item": "item1",
            "count": "103"
        },
        {
            "name": "b",
            "year": 2002,
            "item": "item2",
            "count": "105"
        },
        {
            "name": "c",
            "year": 2003,
            "item": "item3",
            "count": "4"
        },
        {
            "name": "d",
            "year": 2004,
            "item": "item4",
            "count": "85"
        },
        {
            "name": "e",
            "year": 2005,
            "item": "item5",
            "count": "223"
        },
        {
            "name": "f",
            "year": 2006,
            "item": "item6",
            "count": "522"
        },
        {
            "name": "g",
            "year": 2007,
            "item": "item7",
            "count": "122"
        },
        {
            "name": "h",
            "year": 2008,
            "item": "item8",
            "count": "45"
        },
        {
            "name": "i",
            "year": 2009,
            "item": "item9",
            "count": "118"
        },
        {
            "name": "j",
            "year": 2010,
            "item": "item10",
            "count": "22"
        },
        {
            "name": "k",
            "year": 2011,
            "item": "item11",
            "count": "100"
        },
        {
            "name": "l",
            "year": 2012,
            "item": "item12",
            "count": "73"
        },
        {
            "name": "m",
            "year": 2013,
            "item": "item13",
            "count": "125"
        }
    ] 
}

console.log(obj_data)

//selecting the elements
let btn = document.getElementById('create');
let table = document.getElementById('table')

//on click of button dynamically generate HTML table
if (btn) {
    btn.addEventListener('click', function () {
        btn.style.display = "none";
        table.style.display = "block"
    })
}

//retreiving data from json file
// async function retreive() {
//     let url = "data.json";
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(result.data.length)
//     tableDisplay(result)
// }


function tableDisplay(obj_data) {
    let output = "";

    //mapping the data in obj_data  
for(let j = 0; j < obj_data.data.length; j++){
  
    //applying condition for bg-color if value is less than 100
    if(obj_data.data[j].count < 100){
output += `<tr id="row" style = "background-color: #FBB36B">
        <td id="data">${obj_data.data[j].name}</td>
        <td id="data">${obj_data.data[j].year}</td>
        <td id="data">${obj_data.data[j].item}</td>
      <td id="data">${obj_data.data[j].count}</td>
           </tr>`
    }

    //applying bg-color for even rows
    else if(j % 2 == 0){
 output += `<tr id="row" style = "background-color: #A89166">
        <td id="data">${obj_data.data[j].name}</td>
        <td id="data">${obj_data.data[j].year}</td>
        <td id="data">${obj_data.data[j].item}</td>
      <td id="data">${obj_data.data[j].count}</td>
           </tr>`
    }
    
    //applying bg-color for odd rows
    else{
        output += `<tr id="row" style = "background-color: #F9F9F9">
        <td id="data">${obj_data.data[j].name}</td>
        <td id="data">${obj_data.data[j].year}</td>
        <td id="data">${obj_data.data[j].item}</td>
      <td id="data">${obj_data.data[j].count}</td>
           </tr>`
    }
    
}
    document.getElementById('body').innerHTML = output;
}
tableDisplay(obj_data);
