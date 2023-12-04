const english = document.getElementById('english');
const persian = document.getElementById('persian');
const arrow = document.getElementById('arrow');
const arrow2 = document.getElementById('arrow2');
const del = document.getElementById('del');
const list = document.getElementById('list');
const show = document.getElementById('show');
const drop = document.getElementById('drop');
const brand = document.getElementById('brand');
const show2 = document.getElementById('show2');
const languages = document.getElementById('Languages');
const languages2 = document.getElementById('Languages2');
const error = document.getElementById('error');
const error2 = document.getElementById('error2');
const error3 = document.getElementById('error3');
const acc = document.getElementById('acc');
const acc2 = document.getElementById('acc2');
const sun = document.getElementById('sun');
const font = document.getElementById('font');
const moon = document.getElementById('moon');
const home = document.getElementById('home');
const html = document.getElementById('html');
const email = document.getElementById('email');
const dir = document.getElementById('dir');
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
const title = document.getElementById('title');
const menu = document.getElementById('menu3');
const cross = document.getElementById('cross');
const berserker = 'Struggler';
const users = [
    { email: '1rexvero1@gmail.com', password: 'Mnmn1382' }
];
let numbers = /[0-9]/g;
let letters = /[a-z]/g;
let lettersUp = /[A-Z]/g;
let forEmail = /[@]/g;
menu.addEventListener('click', () => {
    menu.style.display = 'none';
    cross.classList.remove('d-none');
});
cross.addEventListener('click', () => {
    menu.style.display = 'block';
    cross.classList.add('d-none');
});
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
    font.classList.add('LibreBaskerville');
    font.classList.remove('BMitraBd');
    emailLabel.setAttribute('dir', 'ltr');
    passwordLabel.setAttribute('dir', 'ltr');
    dir.setAttribute('dir', 'ltr');
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
    btn2.innerText = 'Login';
    title.innerText = 'Berserk-Account';
});
persian.addEventListener('click', () => {
    html.setAttribute('lang', 'fa');
    html.setAttribute('dir', 'rtl');
    emailLabel.setAttribute('dir', 'rtl');
    dir.setAttribute('dir', 'rtl');
    passwordLabel.setAttribute('dir', 'rtl');
    font.classList.add('BMitraBd');
    font.classList.remove('LibreBaskerville');
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
    btn2.innerText = 'ورود';
    title.innerText = 'برزرک-حساب کاربری';
});
sun.addEventListener('click', () => {
    english.classList.add('item2');
    english.classList.remove('item');
    persian.classList.add('item2');
    persian.classList.remove('item');
    list.classList.add('color2');
    list.classList.remove('color');
    drop.classList.add('menu2');
    drop.classList.remove('menu');
    sun.style.display = 'none';
    moon.style.display = 'block';
    moon.classList.add('hover');
    moon.classList.remove('hover2');
    arrow.classList.add('hover');
    arrow2.classList.add('hover');
    font.classList.add('guts');
    font.classList.remove('guts-2');
    btn2.classList.add('btn-3');
    btn2.classList.remove('btn-2');
    home.classList.add('hover');
    acc.classList.add('acc2');
    acc.classList.remove('acc');
    brand.classList.add("brand2");
    brand.classList.remove("brand");
});
moon.addEventListener('click', () => {
    english.classList.add('item');
    english.classList.remove('item2');
    persian.classList.add('item');
    persian.classList.remove('item2');
    list.classList.add('color');
    list.classList.remove('color2');
    drop.classList.add('menu');
    drop.classList.remove('menu2');
    moon.style.display = 'none';
    sun.style.display = 'block';
    moon.classList.add('hover2');
    moon.classList.remove('hover');
    arrow.classList.remove('hover');
    arrow2.classList.remove('hover');
    font.classList.add('guts-2');
    font.classList.remove('guts');
    btn2.classList.remove('btn-3');
    btn2.classList.add('btn-2');
    home.classList.remove('hover');
    acc.classList.add('acc');
    acc.classList.remove('acc2');
    brand.classList.add("brand");
    brand.classList.remove("brand2");
});
btn.addEventListener('click', (e) => {
    e.preventDefault();
    users.filter(item => {
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
        if (email.value === item.email && password.value === item.password) {
            btn.innerText = 'Create Account';
            password.classList.remove('good');
            password.classList.add('wrong');
            email.classList.add('wrong');
            email.classList.remove('good');
            text2.innerText = 'This Account Has Been Registered!';
        } else if (email.value !== "" && email.value.match(forEmail) && password.value !== "" && password.value.match(numbers) && password.value.match(letters) && password.value.match(lettersUp) && password.value.length >= 8) {
            btn.innerText = 'Done';
            del.style.display = 'none';
        }
    });
});
show.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        show.classList.add('bi-eye-slash');
        show.classList.remove('bi-eye');
    } else {
        password.type = 'password';
        show.classList.remove('bi-eye-slash');
        show.classList.add('bi-eye');
    }
});
show2.addEventListener('click', () => {
    if (password2.type === 'password') {
        password2.type = 'text';
        show2.classList.add('bi-eye-slash');
        show2.classList.remove('bi-eye');
    } else {
        password2.type = 'password';
        show2.classList.remove('bi-eye-slash');
        show2.classList.add('bi-eye');
    }
});
x.addEventListener('click', () => {
    email.value = "";
    password.value = "";
    btn.innerText = 'Create Account';
    email.classList.remove('wrong');
    email.classList.remove('good');
    password.classList.remove('good');
    password.classList.remove('wrong');
    show.classList.remove('bi-eye-slash');
    show.classList.add('bi-eye');
    password.type = 'password';
    text.innerText = '';
    text2.innerText = '';
});
btn2.addEventListener('click', (e) => {
    e.preventDefault();
    users.filter(item => {
        if (email2.value !== item.email) {
            error.innerText = 'Your Email Is Incorrect.';
            email2.classList.remove('good');
            email2.classList.add('wrong');
        } else if (email2.value === item.email) {
            error.innerText = '';
            email2.classList.add('good');
            email2.classList.remove('wrong');
        }
        if (password2.value !== item.email) {
            error2.innerText = 'Your Password Is Incorrect.';
        } else if (password2.value === item.email) {
            error2.innerText = '';
            password2.classList.add('good');
        }
        if (email2.value !== item.email || password2.value !== item.password) {
            email2.classList.add('wrong');
            password2.classList.add('wrong');
            error3.innerText = 'Forgot Your Password?';
            del.style.display = 'block';
        } else if (email2.value === item.email && password2.value === item.password) {
            window.location.href = "../index.html";
            localStorage.setItem('berserker', JSON.stringify(berserker));
        }
    });

});