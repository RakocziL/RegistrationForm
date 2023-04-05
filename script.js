const   submitButton = document.querySelector(".submitButton"),
        password = document.querySelector("#password"),
        passwordConfirm =document.querySelector("#passworAgain"),
        first_name = document.querySelector("#first_name"),
        last_name = document.querySelector("#last_name"),
        email = document.querySelector("#user_email"),
        phone = document.querySelector("#phone"),
        errorBoxes = document.querySelectorAll(".error"),
        inputs = document.querySelectorAll(".inputs")


inputs.forEach(input => {
    input.addEventListener("keyup", (e) => {
        console.log("Say My name!");
    } );
})


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
})


