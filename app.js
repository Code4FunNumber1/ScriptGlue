let name = prompt("What is your name?");

if(name === null){
    name = "anonymous";
}else if(name.trim() === ""){
    name = "nanonymous";
}else{
    name = name.trim()
}

const nameSpan = document.getElementById("studentName");
nameSpan.innerText = name;

let luckyInput = prompt("Pick a lucky number. (1-100)")
let luckyNumber = +luckyInput;

const luckyNumberSpan = document.getElementById("luckyNumber");
luckyNumberSpan.innerText = luckyNumber.toString();
