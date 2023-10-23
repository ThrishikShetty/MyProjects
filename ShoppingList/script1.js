
const itemname = localStorage.getItem('item-name');
const itemweight = localStorage.getItem('item-weight');
const boxcolor = localStorage.getItem('box-color');
const shippingcountry = localStorage.getItem('shippingcountry');


    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4= row.insertCell(3);
    cell1.innerHTML = itemname;
    cell2.innerHTML = itemweight;
    cell3.style.backgroundColor  = boxcolor;
    cell4.innerHTML = shippingcountry;

    // localStorage.clear();
    

    event.preventDefault();