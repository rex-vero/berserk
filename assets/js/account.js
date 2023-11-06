const email = document.getElementById('email');
const password = document.getElementById('password');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const text2 = document.getElementById('text-2');
const btn2 = document.getElementById('btn-2');
const users = [
    { email: localStorage.getItem("email"), password: localStorage.getItem("pass") },
];
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (email.value === "" && password.value === "") {
        text.innerText = "Please Enter Your Email";
        text2.innerText = "Please Enter Your Password";
    } else if (password.value !== "") {
        text.innerText = "Please Enter Your Email";
        text2.innerText = "";
    } else if (email.value !== "") {
        text.innerText = "";
        text2.innerText = "Please Enter Your Password";
    }
    if (email.value !== "" && password.value !== "") {
        text.innerText = "";
        text2.innerText = "";
        btn.innerText = "Done";
        localStorage.setItem("email", email.value);
        localStorage.setItem("pass", password.value);
    }
});
btn2.addEventListener('click', (e) => {
    e.preventDefault();
    users.filter(item => {
        if (email.value === item.email && password.value === item.password) {
            window.location.replace("../index.html");
        }
    })
});