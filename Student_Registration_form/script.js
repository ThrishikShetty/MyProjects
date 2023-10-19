var div = document.getElementById('main');
div.style.display='none';
var display=1;
function hideShow()
{
    if(display==1)
    {
        div.style.display='block';
        display=0;
    }
    else{
        div.style.display='none'
        display=1;
    }
}




//data
function Submit() {
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered);
    insert(readData)
}

// Retrieve data
function retrieveData() {
    var name1 = document.getElementById("name").value;
    var usn = document.getElementById("usn").value;
    var mail = document.getElementById("mail").value;
    var ph = document.getElementById("ph").value;
    var branch = document.getElementById("branch").value;
    var sem = document.getElementById("sem").value;


    var reg=/^[a-zA-Z]+$/
    var pattern1=/^[1-4][A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$/
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var phonepat=/^[1-9]+$/
    var pattern2=/^[1-8]$/
    if(!name1.match(reg))
    {
    alert("Invalid name...! Enter alphabets only")
    
    }else if(!usn.match(pattern1))
    {
        alert("Enter valid USN!")
    }
    else  if (!mail.match(validRegex))
    {
        alert("Enter valid Email!")
    }
    else if(!ph.match(phonepat)||ph.length!=10){
        alert("Enter valid phone number")
    }
    else if(!branch.match(reg))
    {
    alert("Enter alphabets only!")
    
    }
    else if(!sem.match(pattern2)||sem.length==0){
        alert("Enter valid semester!(1-8)")
    }
    else{
    var arr = [name1, usn, mail,ph,branch,sem];
    return arr
  }
}

  //Data in Local Storage
function readingDataFromLocalStorage(dataEntered) {
    // Storing data in local storage
    var n = localStorage.setItem("Name", dataEntered[0]);
    var u = localStorage.setItem("usn", dataEntered[1]);
    var m = localStorage.setItem("mail", dataEntered[2]);
    var p = localStorage.setItem("ph", dataEntered[3]);
    var b = localStorage.setItem("branch", dataEntered[4]);
    var s = localStorage.setItem("sem", dataEntered[5]);

    // Show data in table (Getting item from localStorage)
    var n1 = localStorage.getItem("Name", n);
    var u1 = localStorage.getItem("usn", u);
    var m1 = localStorage.getItem("mail", m);
    var p1 = localStorage.getItem("ph", p);
    var b1 = localStorage.getItem("branch", b);
    var s1 = localStorage.getItem("sem", s);
    var arr = [n1,u1,m1,p1,b1,s1];
  
    
        var arr = [n1,u1,m1,p1,b1,s1];
        return arr;
  
}




  function insert(readData){

    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4= row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    // row.insertCell(4).innerHTML = "JJJ"
    cell1.innerHTML = readData[0];
    cell2.innerHTML = readData[1];
    cell3.innerHTML = readData[2];
    cell4.innerHTML = readData[3];
    cell5.innerHTML = readData[4];
    cell6.innerHTML = readData[5];

    // var row = table.insertRow();
    // row.inertCell(0).innerHTML = readData[0];
    // row.inertCell(1).innerHTML = readData[1];
    // row.inertCell(2).innerHTML = readData[2];
    // row.inertCell(3).innerHTML = readData[3];
    // row.inertCell(4).innerHTML = readData[4];
    // row.inertCell(5).innerHTML = readData[5];
    
  }