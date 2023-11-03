const email = document.getElementById('email');
const password = document.getElementById('password');
const text = document.getElementById('text');
const link = document.getElementById('link');
const btn = document.getElementById('btn');
const users = [
    { email: 'rexvero@gmail.com', password: '123456' }
]
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (email.value === "" && password.value === "") {
        text.innerText = "Please Enter Your Email & Password";
    } else if (password.value !== "") {
        text.innerText = "Please Enter Your Email";
    } else if (email.value !== "") {
        text.innerText = "Please Enter Your Password";
    }
    if (email.value !== "" && password.value !== "") {
        text.innerText = "Incrroct inputs!";
    }
    users.filter(item => {
        if (email.value === item.email && password.value === item.password) {
            window.location.replace("../index.html");
        }
    })
});