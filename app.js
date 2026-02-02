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

function fixNaN(){
    if (isNaN(parseInt(luckyInput))){
        return "Not A Number";
    }else{
        return parseInt(luckyInput);
    }
}

let luckyNumber = fixNaN(luckyInput);

const luckyNumberSpan = document.getElementById("luckyNumber");
luckyNumberSpan.innerText = luckyNumber.toString();

const facts = [name, luckyNumber]

// new child
const ulElement = document.createElement("ul");

const liElement0 = document.createElement("li");
liElement0.innerText = name
const liElement1 = document.createElement("li");
liElement1.innerText = luckyNumber;
ulElement.appendChild(liElement0);
ulElement.appendChild(liElement1);

for (const fact of facts){
    const liElement = document.createElement("li");
    liElement.innerText = fact.toString();
    ulElement.appendChild(liElement);
}

// parent
const body = document.getElementById("content");

// last child
const my_script = document.getElementById("my_script");

body.insertBefore(ulElement, my_script);
