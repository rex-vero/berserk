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
const english = document.getElementById('english');
const persian = document.getElementById('persian');
const manga = document.getElementById('manga');
const mangas = [
    { title: 'Berserk Vol.1', prise: "14.99", src: "../assets/images/vol. 1.jpg" }
];
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
    home.innerText = 'Home';
    languages.innerText = 'Languages';
    languages2.innerText = 'Languages';
    persian.innerText = 'Persian';
    english.innerText = 'English';
});
persian.addEventListener('click', () => {
    html.setAttribute('lang', 'fa');
    html.setAttribute('dir', 'rtl');
    font.classList.add('BMitraBd');
    font.classList.remove('LibreBaskerville');
    arrow.style.display = 'block';
    arrow2.style.display = 'none';
    home.innerText = 'خانه';
    languages.innerText = 'زبان ها';
    languages2.innerText = 'زبان ها';
    persian.innerText = 'فارسی';
    english.innerText = 'انگلیسی';
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
});
mangas.map(item => {
    const cards = document.createElement('div');
    cards.classList.add('row');
    cards.classList.add('mt-4');
    cards.innerHTML = `
        <div dir="ltr" class="d-flex flex-lg-row flex-column">
        <img src="${item.src}" class=" img-fluid hog col-xs-8 align-self-sm-center">
        <p dir="auto" class="fs-5 align-self-center ms-4 mt-2 red">${item.prise}</p>
        <p dir="auto" class="fs-5 align-self-center ms-4 mt-2 red">${item.title}</p>
    </div>`;
    manga.appendChild(cards);
});