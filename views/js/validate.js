const form=document.querySelector("form");
const email=document.querySelector("input[type=email]");
const password=document.querySelector("imput[type=password]");

form.addEventListener("submit",onSubmitFunction);
function onSubmitFunction(event){
if(email.value==="" ||password.value===""){
    event.preventDefault();
    alert("please enter a valid mail id");
    return false;
}
}
