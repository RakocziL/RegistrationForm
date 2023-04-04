const   submitButton = document.querySelector(".submitButton"),
        password = document.querySelector("#password"),
        passwordConfirm =document.querySelector("#passworAgain"),
        first_name = document.querySelector("#first_name"),
        last_name = document.querySelector("#last_name"),
        email = document.querySelector("#user_email"),
        phone = document.querySelector("#phone"),
        errorBoxes = document.querySelectorAll(".error"),
        inputs = document.querySelectorAll(".inputs")



submitButton.addEventListener("click", (e) => {
    errorBoxes.forEach(error =>{
        error.innerHTML="* fill this";
    });
    inputs.forEach(input =>{
        input.required = true;
    })

})


