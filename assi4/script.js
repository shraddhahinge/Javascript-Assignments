let arr = [1, 2, 3, 4, 5]
function dataAdd(arr) {
    let output = "";

    arr.map(a => {
        output += `<tr id="row_body">
      <td>Record:${a}<input  type="text" id="name_val"/></td>
      <td><select name="items" id="items">
  <option value="Item1">Item1</option>
  <option value="Item2">Item2</option>
  <option value="Item3">Item3</option>
  <option value="Item4">Item4</option>
  <option value="Item5">Item5</option>
</select></td>
      <td><input type="number" id="quantity"/></td>
      <td><input type="date" id="date"/></td>
      </tr>
      `
    })


    document.getElementById("data_body").innerHTML = output;


    let submit = document.getElementById('submit_btn');
    submit.addEventListener('click', function (e) {
        e.preventDefault();
         
        document.getElementById('head').innerText = "Order Details"
        display()
        document.getElementById('form_table').style.display = "none"
        document.getElementById('list_details').style.display = "block"

    })


    let cancel = document.getElementById('reset_btn');
    cancel.addEventListener('click', function (e) {
        // e.preventDefault();
        clear()
    })


    function display() {
        let names = document.querySelectorAll('#name_val');
        let selects = document.querySelectorAll('#items');
        let quantitys = document.querySelectorAll('#quantity');
        let pick_date = document.querySelectorAll('#date');

        let final = ""
        let arr1 = [0, 1, 2, 3, 4]
        arr1.map(a => {

            final += `<tr>
             <td>${names[a].value}</td>
            <td>${selects[a].value}</td>
            <td>${quantitys[a].value}</td>
            <td>${pick_date[a].valueAsDate}</td>
             </tr>`
        })

        document.getElementById('list_body').innerHTML = final
    }


    function clear() {
        let names = document.querySelectorAll('#name_val');
        let selects = document.querySelectorAll('#items');
        let quantitys = document.querySelectorAll('#quantity');
        let pick_date = document.querySelectorAll('#date');

        for (const name of names) {
            name.value = ""
        }
        for (const select of selects) {
            select.value = "Item 1"
        }
        for (const quantity of quantitys) {
            quantity.value = ""
        }
        for (const date of pick_date) {
            date.value = ""
        }

    }
}


dataAdd(arr);




