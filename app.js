var textinp=document.querySelector("#inp");
var translatebtn=document.querySelector("#btn");
var output=document.querySelector("#op");

function clickHandler(){
 output.innerText="wabalabadubdub" + textinp.value;
}

translatebtn.addEventListener("click" , clickHandler);