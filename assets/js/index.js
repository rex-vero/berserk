const arrow = document.getElementById('arrow');
const arrow2 = document.getElementById('arrow2');
const sun = document.getElementById('sun');
const font = document.getElementById('font');
const moon = document.getElementById('moon');
const home = document.getElementById('home');
const html = document.getElementById('html');
const brand = document.getElementById('brand');
const languages = document.getElementById('Languages');
const languages2 = document.getElementById('Languages2');
const list = document.getElementById('list');
const drop = document.getElementById('drop');
const guts = document.getElementById('guts');
const guts2 = document.getElementById('guts2');
const hog = document.getElementById('hog');
const title = document.getElementById('title');
const user = JSON.parse(localStorage.getItem('berserker'));
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
    arrow.style.display = 'block';
    arrow2.style.display = 'none';
    home.innerText = 'Account';
    languages.innerText = 'Languages';
    languages2.innerText = 'Languages';
    persian.innerText = 'Persian';
    english.innerText = 'English';
    guts.innerText = 'Black Sowrdsman';
    guts2.innerText = 'A Man Who Worse Than A Monster.';
    hog.innerText = 'In This World Is The Destiny Of Mankind Controlled By Some Trascendental Entity Or Law? Is It Like Hand Of God Hovering Above? At Least It Is True That Man Has No Control; Even Over His Own Will...';
    title.innerText='Berserk';
});
persian.addEventListener('click', () => {
    html.setAttribute('lang', 'fa');
    html.setAttribute('dir', 'rtl');
    font.classList.add('BMitraBd');
    font.classList.remove('LibreBaskerville');
    arrow.style.display = 'block';
    arrow2.style.display = 'none';
    home.innerText = 'حساب کاربری';
    languages.innerText = 'زبان ها';
    languages2.innerText = 'زبان ها';
    persian.innerText = 'فارسی';
    english.innerText = 'انگلیسی';
    guts.innerText = 'شمشیرزن سیاهپوش';
    guts2.innerText = 'یک انسان که از هیولا بدتر است.';
    hog.innerText='در این جهان آیا سرنوشت انسان توسط نیرو یا موجوداتی ماورایی کنترل میشود؟ آیا چیزی شبیه دست خدا درمیان است؟ حداقل این درست است که انسان هیچ کنترلی بر خود ندارد; حتی برروی سرنوشت خود...';
    title.innerText='برزرک';
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
    font.classList.add('background2');
    font.classList.remove('background');
    sun.style.display = 'none';
    moon.style.display = 'block';
    moon.classList.add('hover');
    moon.classList.remove('hover2');
    home.classList.add('hover');
    arrow.classList.add('hover');
    arrow2.classList.add('hover');
    brand.classList.add("brand2");
    brand.classList.remove("brand");
    guts.classList.remove("red");
    guts2.classList.remove("red");
    guts.classList.add("white");
    guts2.classList.add("white");
    hog.classList.add("white");
    hog.classList.remove("red");
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
    font.classList.add('background');
    font.classList.remove('background2');
    moon.style.display = 'none';
    sun.style.display = 'block';
    moon.classList.add('hover2');
    moon.classList.remove('hover');
    arrow.classList.remove('hover');
    arrow2.classList.remove('hover');
    home.classList.remove('hover');
    brand.classList.add("brand");
    brand.classList.remove("brand2");
    guts.classList.add("red");
    guts2.classList.add("red");
    guts.classList.remove("white");
    guts2.classList.remove("white");
    hog.classList.remove("white");
    hog.classList.add("red");
});
if (user) {
    console.log('ok');
} else {
    console.log('no');
}