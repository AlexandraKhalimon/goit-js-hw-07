const userForm = document.querySelector("form");

userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    const userInfo = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim()
    };
    console.log(userInfo);
    if (userInfo.email === "" || userInfo.password === "") {
        return alert("All form fields must be filled in");
    }
    userForm.reset();
})


