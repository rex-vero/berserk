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
const add = document.getElementById('add');
const remove = document.getElementById('remove');
const product = document.getElementById('product');
const total = document.getElementById('total');
const num = document.getElementById('num');
const tot = document.getElementById('tot');
const cart = document.getElementById('cart');
const title = document.getElementById('title');
const footer = document.getElementById('footer');
const tel = document.getElementById('tel');
const insta = document.getElementById('insta');
const git = document.getElementById('git');
const email = document.getElementById('email');
const rip = document.getElementById('rip');
const berserk = document.getElementById('berserk');
const about = document.getElementById('about');
const owner = document.getElementById('owner');
const me = document.getElementById('me');
const mangas = [
    { title: 'Berserk Vol.28', prise: "10.71", src: "../assets/images/vol.28.jpg" }
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
    num.innerText = 'Number:';
    tot.innerText = 'Total: $';
    title.innerText = 'Berserk-Vol.28';
    footer.classList.remove('text-lg-end');
    footer.classList.add('text-lg-start');
    about.innerText = 'About Me';
    owner.innerText = "Website Owner: Mohamad Amin Ahmadi";
    me.innerText = "Contact With Me";
    rip.innerText = 'RIP Kentaro Miura';
    add.innerText = 'Add';
    remove.innerText = 'Remove';
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
    num.innerText = 'تعداد:';
    tot.innerText = 'مجموع: $';
    title.innerText = 'برزرک-جلد.28';
    footer.classList.add('text-lg-end');
    footer.classList.remove('text-lg-start');
    about.innerText = 'درباره من';
    owner.innerText = "مدیر وبسایت: محمدامین احمدی";
    me.innerText = "ارتباط با من";
    rip.innerText = 'مرحوم کنتارو میورا';
    add.innerText = 'اضافه کردن';
    remove.innerText = 'حذف';
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
    footer.classList.add("white");
    footer.classList.remove("red");
    tel.classList.add("white");
    tel.classList.remove("red");
    insta.classList.add("white");
    insta.classList.remove("red");
    git.classList.add("white");
    git.classList.remove("red");
    email.classList.add("white");
    email.classList.remove("red");
    rip.classList.add("white");
    rip.classList.remove("red");
    berserk.classList.add("berserk2");
    berserk.classList.remove("berserk");
    cart.classList.add("cart2");
    cart.classList.remove("cart");
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
    footer.classList.remove("white");
    footer.classList.add("red");
    tel.classList.remove("white");
    tel.classList.add("red");
    insta.classList.remove("white");
    insta.classList.add("red");
    git.classList.remove("white");
    git.classList.add("red");
    email.classList.remove("white");
    email.classList.add("red");
    rip.classList.remove("white");
    rip.classList.add("red");
    berserk.classList.remove("berserk2");
    berserk.classList.add("berserk");
    cart.classList.remove("cart2");
    cart.classList.add("cart");
});
mangas.map(item => {
    const cards = document.createElement('div');
    cards.classList.add('row');
    cards.classList.add('mt-4');
    cards.innerHTML = `
        <div dir="ltr" class="d-flex flex-column">
        <img src="${item.src}" class=" img-fluid col-8 col-sm-3 align-self-center">
        <h1 dir="auto" class="align-self-center mt-2 white">${item.title}</h1>
        <h2 dir="auto" class="align-self-center mt-2 white">$${item.prise}</h2>
    </div>`;
    manga.appendChild(cards);
});
add.addEventListener('click', () => {
    product.innerText++;
    remove.classList.remove('d-none');
    remove.classList.add('d-block');
    cart.classList.remove('d-none');
    cart.classList.add('d-block');
    mangas.map(item => {
        total.innerText = (item.prise * product.innerText).toFixed(2);
    })
});

remove.addEventListener('click', () => {
    if (+product.innerText === 1) {
        remove.classList.add('d-none');
        remove.classList.remove('d-block');
        cart.classList.add('d-none');
        cart.classList.remove('d-block');
        product.innerText = 0;
        total.innerText = 0;

    } else {
        product.innerText--;
        mangas.map(item => {
            total.innerText = (item.prise * product.innerText).toFixed(2);
        })
    }
});
cart.addEventListener('click', () => {
    remove.classList.add('d-none');
    remove.classList.remove('d-block');
    cart.classList.add('d-none');
    cart.classList.remove('d-block');
    product.innerText = 0;
    total.innerText = 0;
});