const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    const userInfo = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim()
    };
    
    if (userInfo.email === "" || userInfo.password === "") {
        return alert("All form fields must be filled in");
    }

    console.log(userInfo);
    userForm.reset();
})


