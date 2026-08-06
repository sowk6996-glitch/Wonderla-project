// Wonderla Frontend Script

document.addEventListener("DOMContentLoaded", function () {

    console.log("Wonderla Website Loaded Successfully");

    // Button Animation
    const buttons = document.querySelectorAll("button");

    buttons.forEach(function(button){

        button.addEventListener("mouseover", function(){
            button.style.transform = "scale(1.05)";
        });

        button.addEventListener("mouseout", function(){
            button.style.transform = "scale(1)";
        });

    });

    // Registration Form Validation
    const form = document.querySelector("form");

    if(form){
        form.addEventListener("submit", function(event){

            const name = document.querySelector('input[type="text"]');
            const email = document.querySelector('input[type="email"]');
            const phone = document.querySelector('input[type="tel"]');
            const ticket = document.querySelector("select");

            if(
                name.value.trim()==="" ||
                email.value.trim()==="" ||
                phone.value.trim()==="" ||
                ticket.value===""){
                alert("Please fill all fields.");
                event.preventDefault();
            }else{
                alert("Registration Successful!");
            }

        });
    }

});