var login_button = document.getElementById("btn");
login_button.addEventListener('click',log)


function log(event){
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#pwd").value;
    console.log(email);
    console.log(password);
}