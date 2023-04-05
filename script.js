const   submitButton = document.querySelector(".submitButton"),
        password = document.querySelector("#password"),
        passwordConfirm =document.querySelector("#passwordAgain"),
        first_name = document.querySelector("#first_name"),
        last_name = document.querySelector("#last_name"),
        email = document.querySelector("#user_email"),
        phone = document.querySelector("#phone"),
        errorBoxes = document.querySelectorAll(".error"),
        inputs = document.querySelectorAll(".inputs"),
        formBox = document.querySelector(".formBox"),
        outro = document.querySelector(".account_created")


/* Adding event listeners */
password.addEventListener("change", validatePassword);
passwordConfirm.addEventListener("keyup", validatePassword);
submitButton.addEventListener("click", (e) => {
    var i = 0;
    inputs.forEach(input =>{
        input.required = true;
        if(input.checkValidity() == false){
            errorBoxes[i].innerHTML="<sub>*<sub>Fill this correctly";
        }
        if(input.checkValidity() == true){
            errorBoxes[i].innerHTML="";
        }
        i++;
    });
    i = 0;
    errorBoxes.forEach(error => {
        if(error.innerHTML==""){
            i++;
        }
    });
    if(i=6){
        formBox.style.display="none";
        outro.classList.remove("disabled");
    }
});

/* To only be able to type letters */
function alphaOnly(event) {
    var key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8);
  };


/* Validate both passwords */
function validatePassword(){
    if(password.value != passwordConfirm.value){
        passwordConfirm.setCustomValidity("Passwords doesn't match");
        errorBoxes[5].innerHTML="<sub>*<sub>Passwords doesn't match";
    }
    else{
        passwordConfirm.setCustomValidity("");
        errorBoxes[5].innerHTML="";
    }
}

