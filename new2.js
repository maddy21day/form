function checker(reg, name) {
    return reg.test(name);
}

var finame = false;
var laname = false;
var maail = false;
var phn = false;

var reg4 = /^[a-zA-Z]{3,10}$/;
var reg1 = /^[a-zA-Z]{3,10}$/;
var reg2 = /^([0-9]{1}[1-9]{1}||[1-9]{1}[0-9]{1})([0-9]{8})$/;
var reg3 = /^([_\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z])/;

// 



function bPrint(event) {
    event.preventDefault();
    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('Lname').value;
    var email = document.getElementById('mail').value;
    var phon = document.getElementById('phone').value;


    finame = checker(reg4, firstname);
    laname = checker(reg1, lastname);
    phn = checker(reg2, phon);
    maail = checker(reg3, email);

    var arr = [finame,laname,maail,phn];
    // console.log(finame);
    // console.log(laname);
    // console.log(maail);
    // console.log(phn);
    for (let index = 0; index < arr.length; index++) {
        if (!arr[index]) {
            document.getElementById(`error${index}`).innerHTML = "* invalid input";
        } else {
            document.getElementById(`error${index}`).innerHTML = "";
        }
    }
    if (finame && laname && phn && maail) {


        var display = document.getElementById("table");
        var newRow = display.insertRow(-1);


        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = firstname;
        cell2.innerHTML = lastname;
        cell3.innerHTML = email;
        cell4.innerHTML = phon;
        document.getElementById("form").reset();
    }
}