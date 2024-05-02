function getvalue() {
    var text = document.getElementById("item").value;
    console.log(text);
}

function submitform() {
    let form = document.getElementById("mainform");
    let values = form.querySelectorAll("input[type=text][name=num1]");
    for (let i = 0; i < values.length; i++) {
        console.log(values[i].value);
    }

    let radvalues = form.querySelector("input[type=radio]:checked");
    console.log(radvalues ? radvalues.value : "No value in radio");

    let checkvalues = form.querySelectorAll("input[type=checkbox]:checked");
    for (let i = 0; i < checkvalues.length; i++) {
        console.log(checkvalues[i].value);
        
    }
}

function getsum() {
    let num1 = document.getElementById("numa").value;
    let num2 = document.getElementById("numb").value;

    let sum = parseInt(num1) + parseInt(num2);

    let answer = document.getElementById("answervalue");
    answer.innerHTML = "Your answer is\t" + sum;
    answer.style.border = "1px solid";
}

function textcount() {
    let text = document.getElementById("inputcount").value;
    let element = document.getElementById("countletter");
    element.innerHTML = text.length;
    
}

function selectinput() {
    let select = document.getElementById("selection");
    let element = document.getElementById("selectout");
    element.innerHTML = select.value;
    console.log(select.value);
}

let changewebbutton = document.getElementById("changewindows");
changewebbutton.addEventListener("click", changewindow);
let circleclick = document.getElementById("circle");
circleclick.addEventListener("click",changewindow)

function changewindow() {
    window.location.href = "http://127.0.0.1:5500/new.html";
}

function checkemail() {
    let inp = document.getElementById("email").value;
    let test = inp.toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if (!test) {
        document.getElementById("errormail").innerHTML = "Enter Valid Email";
    }
    else{
        document.getElementById("errormail").innerHTML = "";
    }
}

function checkphone() {
    let inp = document.getElementById("phonenum").value;
    let test = inp.match(/^(\d{5}|[a-zA-Z]{3})$/);
    if (!test) {
        document.getElementById("phoneerror").innerHTML = "Enter Valid Phonenum";
    }
    else{
        document.getElementById("phoneerror").innerHTML = "";
    }
}

function givedate() {
    let date = new Date();
    document.getElementById("dateobj").innerHTML = date.get.toString();
}

function getdatediffer() {
    let date1 = new Date(document.getElementById("date1").value);
    let date2 = new Date(document.getElementById("date2").value);
    let difference = Math.abs(date1.getDate() - date2.getDate());
    console.log(difference);
}