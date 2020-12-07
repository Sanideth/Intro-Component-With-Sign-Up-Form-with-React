// DOM elements
const inputElements = document.querySelectorAll('.main__form-input');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');
const buttonSubmit = document.getElementById('btn-submit');



inputElements.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value !== "") {
            input.classList.remove('error-border');
            input.nextElementSibling.classList.remove("error-insert");
            input.nextElementSibling.nextElementSibling.classList.remove("error-insert");
        }
    })
})


buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    inputElements.forEach(input => {
        if (input.value === "") {
            input.classList.add("error-border");
            input.nextElementSibling.classList.add("error-insert");
            input.nextElementSibling.nextElementSibling.classList.add("error-insert")
            
            
            
        } else {
            input.classList.remove('error-border');
            input.nextElementSibling.classList.remove("error-insert");
            input.nextElementSibling.nextElementSibling.classList.remove("error-insert");
            
        }

        

        
    });
    if (!email.value.includes("@") || !email.value.includes(".")) {
        email.classList.add("error-border");
        email.nextElementSibling.classList.add("error-insert");
        email.nextElementSibling.nextElementSibling.classList.add("error-insert")
    } else {
        email.classList.remove("error-border");
        email.nextElementSibling.classList.remove("error-insert");
        email.nextElementSibling.nextElementSibling.classList.remove("error-insert")
    }
})




