const english = document.getElementById('english');
const persian = document.getElementById('persian');
const arrow = document.getElementById('arrow');
const arrow2 = document.getElementById('arrow2');
const del = document.getElementById('del');
const languages = document.getElementById('Languages');
const languages2 = document.getElementById('Languages2');
const acc = document.getElementById('acc');
const acc2 = document.getElementById('acc2');
const sun = document.getElementById('sun');
const font = document.getElementById('font');
const moon = document.getElementById('moon');
const home = document.getElementById('home');
const html = document.getElementById('html');
const email = document.getElementById('email');
const password = document.getElementById('password');
const email2 = document.getElementById('email2');
const password2 = document.getElementById('password2');
const emailLabel = document.getElementById('label-e');
const passwordLabel = document.getElementById('label-p');
const emailLabel2 = document.getElementById('label-1');
const passwordLabel2 = document.getElementById('label-2');
const text = document.getElementById('text');
const modalLable = document.getElementById('staticBackdropLabel');
const btn = document.getElementById('btn');
const text2 = document.getElementById('text-2');
const btn2 = document.getElementById('btn-2');
const x = document.getElementById('close');
const users = [
    { email: '1rexvero1@gmail.com', password: 'Mnmn1382' }
];
let numbers = /[0-9]/g;
let letters = /[a-z]/g;
let lettersUp = /[A-Z]/g;
let forEmail = /[@]/g;
arrow.addEventListener('click', () => {
    arrow.style.display = 'none';
    arrow2.style.display = 'block';
});
arrow2.addEventListener('click', () => {
    arrow.style.display = 'block';
    arrow2.style.display = 'none';
});
english.addEventListener('click', () => {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    font.setAttribute('class', 'LibreBaskerville');
    emailLabel.setAttribute('dir', 'ltr');
    passwordLabel.setAttribute('dir', 'ltr');
    arrow.style.display = 'block';
    arrow2.style.display = 'none';
    home.innerText = 'Home';
    languages.innerText = 'Languages';
    languages2.innerText = 'Languages';
    acc.innerText = 'Create Your Account Now!';
    acc2.innerText = "You Don't Have Account?";
    modalLable.innerText = 'Create Account';
    persian.innerText = 'Persian';
    english.innerText = 'English';
    passwordLabel.innerText = 'Your Password';
    emailLabel.innerText = 'Your Email';
    passwordLabel2.innerText = 'Password';
    emailLabel2.innerText = 'Email';

});
persian.addEventListener('click', () => {
    html.setAttribute('lang', 'fa');
    html.setAttribute('dir', 'rtl');
    emailLabel.setAttribute('dir', 'rtl');
    passwordLabel.setAttribute('dir', 'rtl');
    font.setAttribute('class', 'BMitraBd');
    arrow.style.display = 'block';
    arrow2.style.display = 'none';
    home.innerText = 'خانه';
    languages.innerText = 'زبان ها';
    languages2.innerText = 'زبان ها';
    acc.innerText = 'همین الان اکانت خودت را بساز!';
    acc2.innerText = 'اکانت ندارید؟';
    modalLable.innerText = 'ساختن اکانت';
    persian.innerText = 'فارسی';
    english.innerText = 'انگلیسی';
    passwordLabel.innerText = 'رمزعبور شما';
    emailLabel.innerText = 'ایمیل شما';
    passwordLabel2.innerText = 'رمزعبور';
    emailLabel2.innerText = 'ایمیل';
});
sun.addEventListener('click', () => {
    sun.style.display = 'none';
    moon.style.display = 'block';
})
moon.addEventListener('click', () => {
    moon.style.display = 'none';
    sun.style.display = 'block';
})
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (email.value === "") {
        text.innerText = "Enter The Correct Email Format.";
        email.classList.add('wrong');
        email.classList.remove('good');
    } else if (email.value !== "" && email.value.match(forEmail)) {
        text.innerText = "";
        email.classList.remove('wrong');
        email.classList.add('good');
    } else {
        text.innerText = "You Forgot '@' For Your Email Address.";
        email.classList.add('wrong');
        email.classList.remove('good');
    }
    if (password.value !== "" && password.value.match(numbers) && password.value.match(letters) && password.value.match(lettersUp) && password.value.length >= 8) {
        text2.innerText = ''
        password.classList.add('good');
        password.classList.remove('wrong');
    } else {
        text2.innerText = 'Your Password Must Contain A Number, An Uppecace, Lowercase Letter And At Least 8 Characters!'
        password.classList.remove('good');
        password.classList.add('wrong');
    }
    if (email.value !== "" && email.value.match(forEmail) && password.value !== "" && password.value.match(numbers) && password.value.match(letters) && password.value.match(lettersUp) && password.value.length >= 8) {
        btn.innerText = 'Done';
        del.style.display = 'none';
    } else {
        btn.innerText = 'Create Account';
    }
});
x.addEventListener('click', () => {
    email.value = "";
    password.value = "";
    btn.innerText = 'Create Account';
})
btn2.addEventListener('click', (e) => {
    e.preventDefault();
    users.filter(item => {
        if (email2.value !== item.email && password2.value !== item.password) {
        } else {
            window.location.replace("../index.html");
        }
    });
});