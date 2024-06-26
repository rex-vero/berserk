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
const english = document.getElementById('english');
const persian = document.getElementById('persian');
const list = document.getElementById('list');
const drop = document.getElementById('drop');
const guts = document.getElementById('guts');
const guts2 = document.getElementById('guts2');
const guts3 = document.getElementById('guts3');
const hog = document.getElementById('hog');
const title = document.getElementById('title');
const card = document.getElementById('card');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const griffith = document.getElementById('griffith');
const casca = document.getElementById('casca');
const who = document.getElementById('who');
const who2 = document.getElementById('who2');
const who3 = document.getElementById('who3');
const manga = document.getElementById('manga');
const title2 = document.getElementById('title2');
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
const toast = document.getElementById('toast');
const welcome = document.getElementById('welcome');
const brand2 = document.getElementById('brand2');
const logout = document.getElementById('logout');
const menu = document.getElementById('menu3');
const cross = document.getElementById('cross');
const go = document.getElementById('go');
const stay = document.getElementById('stay');
const out = document.getElementById('out');
const modalImg = document.getElementById('modal-img');
const modalLabel = document.getElementById('staticBackdropLabel');
const border = document.getElementById('border');
const search = document.getElementById('search');
const btn = document.getElementById('btn');
const bar = document.getElementById('bar');
const user = JSON.parse(localStorage.getItem('berserker'));
const mangas = [
    { title: 'Berserk Vol 1', prise: "14.99", link: './pages/vol-1.html', src: "assets/images/vol. 1.jpg" }, { title: "Berserk Vol 13", prise: '11.50', link: './pages/vol-13.html', src: "assets/images/vol.13.jpg" }, { title: "Berserk Vol 18", prise: '12.95', link: './pages/vol-18.html', src: "assets/images/vol.18.jpg" }, { title: "Berserk Vol 23", prise: '14.99', link: './pages/vol-23.html', src: "assets/images/vol.23.jpg" }, { title: "Berserk Vol 28", prise: '10.71', link: './pages/vol-28.html', src: "assets/images/vol.28.jpg" }, { title: "Berserk Vol 32", prise: '7.24', link: './pages/vol-32.html', src: "assets/images/vol.32.jpg" }
];
menu.addEventListener('click', () => {
    menu.style.display = 'none';
    cross.classList.remove('d-none');
});
cross.addEventListener('click', () => {
    menu.style.display = 'block';
    cross.classList.add('d-none');
});
go.addEventListener('click', () => {
    localStorage.clear();
    window.location.replace("./pages/account.html");
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
    search.setAttribute('dir', 'ltr');
    font.classList.add('LibreBaskerville');
    font.classList.remove('BMitraBd');
    arrow.style.display = 'block';
    arrow2.style.display = 'none';
    home.innerText = 'Account';
    logout.innerText = 'Log Out';
    languages.innerText = 'Languages';
    languages2.innerText = 'Languages';
    persian.innerText = 'Persian';
    english.innerText = 'English';
    guts.innerText = 'Black Sowrdsman';
    guts2.innerText = 'A Man Who Worse Than A Monster.';
    hog.innerText = 'In This World Is The Destiny Of Mankind Controlled By Some Trascendental Entity Or Law? Is It Like Hand Of God Hovering Above? At Least It Is True That Man Has No Control; Even Over His Own Will...';
    title.innerText = 'Berserk';
    guts3.innerText = 'Guts';
    griffith.innerText = 'Griffith';
    casca.innerText = 'Casca';
    who.innerText = 'Guts, renowned as the "Black Swordsman" is a former mercenary and branded wanderer who travels the world in a constant internal struggle between pursuing his own ends and upholding his attachments to those dear to him.';
    who2.innerText = 'Griffith is the current leader of the reborn Band of the Falcon and supreme commander of the Midland Regular Army. Having been at the fore of many battles, he has amassed a reputation as a savior across the continent, and is revered as the "Falcon of Light".';
    who3.innerText = "Casca is a former unit commander of the Band of the Falcon and an estranged companion of Guts. Following Guts departure and Griffith's subsequent imprisonment, she is forced to assume the position of the band's leader.";
    footer.classList.remove('text-lg-end');
    footer.classList.add('text-lg-start');
    about.innerText = 'About Me';
    owner.innerText = "Website Owner: Mohamad Amin Ahmadi";
    me.innerText = "Contact With Me";
    rip.innerText = 'RIP Kentaro Miura';
    welcome.innerText = 'Welcome, Struggler...';
    modalLabel.innerText = 'Berserk';
    go.innerText = 'Yes';
    stay.innerText = 'No';
    out.innerText = 'Are You Sure About Logging Out?';
});
persian.addEventListener('click', () => {
    html.setAttribute('lang', 'fa');
    html.setAttribute('dir', 'rtl');
    search.setAttribute('dir', 'rtl');
    font.classList.add('BMitraBd');
    font.classList.remove('LibreBaskerville');
    arrow.style.display = 'block';
    arrow2.style.display = 'none';
    home.innerText = 'حساب کاربری';
    logout.innerText = 'خروج از حساب';
    languages.innerText = 'زبان ها';
    languages2.innerText = 'زبان ها';
    persian.innerText = 'فارسی';
    english.innerText = 'انگلیسی';
    guts.innerText = 'شمشیرزن سیاهپوش';
    guts2.innerText = 'یک انسان که از هیولا بدتر است.';
    hog.innerText = 'در این جهان آیا سرنوشت انسان توسط نیرو یا موجوداتی ماورایی کنترل میشود؟ آیا چیزی شبیه دست خدا درمیان است؟ حداقل این درست است که انسان هیچ کنترلی بر خود ندارد; حتی برروی سرنوشت خود...';
    title.innerText = 'برزرک';
    guts3.innerText = 'گاتس';
    griffith.innerText = 'گریفیث';
    casca.innerText = 'کاسکا';
    who.innerText = 'گاتس، معروف به "شمشیرزن سیاه" مزدور سابق و سرگردانی است که در یک کشمکش درونی دائمی بین دنبال کردن اهداف خود و حفظ وابستگی هایش به کسانی که برایش عزیز هستند، به جهان سفر می کند.';
    who2.innerText = 'گریفیث رهبر فعلی گروه دوباره متولد شده فالکون و فرمانده عالی ارتش منظم میدلند است. او که در نبردهای زیادی پیشتاز بود، به عنوان یک ناجی در سراسر قاره شهرت پیدا کرد و به عنوان "شاهین نور" مورد احترام است.';
    who3.innerText = 'کاسکا یکی از فرماندهان سابق گروه فالکون و یکی از همراهان جدا شده گاتس است. پس از خروج گاتس و زندانی شدن گریفیث، او مجبور می‌شود تا مقام رهبری گروه را به عهده بگیرد.';
    footer.classList.add('text-lg-end');
    footer.classList.remove('text-lg-start');
    about.innerText = 'درباره من';
    owner.innerText = "مدیر وبسایت: محمدامین احمدی";
    me.innerText = "ارتباط با من";
    rip.innerText = 'مرحوم کنتارو میورا';
    welcome.innerText = 'خوش اومدی, تقلاکننده...';
    modalLabel.innerText = 'برزرک';
    go.innerText = 'بله';
    stay.innerText = 'خیر';
    out.innerText = 'آیا میخواهید از حساب کاربری خارج شوید؟';
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
    logout.classList.add('hover');
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
    card.classList.add("white");
    card.classList.remove("red");
    card2.classList.add("white");
    card2.classList.remove("red");
    card3.classList.add("white");
    card3.classList.remove("red");
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
    welcome.classList.add("white");
    welcome.classList.remove("red");
    brand2.classList.add("brand2");
    brand2.classList.remove("brand");
    modalLabel.classList.add("white");
    modalLabel.classList.remove("red");
    out.classList.add("white");
    out.classList.remove("red");
    modalImg.classList.add("brand2");
    modalImg.classList.remove("brand");
    arrow.style.display = 'block';
    arrow2.style.display = 'none';
    border.classList.add("search-div2");
    border.classList.remove("search-div");
    btn.classList.add("search2");
    btn.classList.remove("search");
    search.classList.add("search-input2");
    search.classList.remove("search-input");
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
    logout.classList.remove('hover');
    brand.classList.add("brand");
    brand.classList.remove("brand2");
    guts.classList.add("red");
    guts2.classList.add("red");
    guts.classList.remove("white");
    guts2.classList.remove("white");
    hog.classList.remove("white");
    hog.classList.add("red");
    card.classList.remove("white");
    card.classList.add("red");
    card2.classList.remove("white");
    card2.classList.add("red");
    card3.classList.remove("white");
    card3.classList.add("red");
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
    welcome.classList.remove("white");
    welcome.classList.add("red");
    brand2.classList.add("brand");
    brand2.classList.remove("brand2");
    modalLabel.classList.remove("white");
    modalLabel.classList.add("red");
    out.classList.remove("white");
    out.classList.add("red");
    modalImg.classList.add("brand");
    modalImg.classList.remove("brand2");
    arrow.style.display = 'block';
    arrow2.style.display = 'none';
    border.classList.add("search-div");
    border.classList.remove("search-div2");
    btn.classList.add("search");
    btn.classList.remove("search2");
    search.classList.add("search-input");
    search.classList.remove("search-input2");
});

search.addEventListener('input', () => {
    bar.innerHTML = '';
    mangas.map(item => {
        const cards = document.createElement('div');
        if (item.title.toLowerCase().includes(search.value.toLowerCase())) {
            cards.classList.add('d-flex');
            cards.classList.add('bg');
            bar.classList.remove('d-none');
            cards.innerHTML = `<a class="d-flex text-decoration-none" href="${item.link}">
                <img src="${item.src}" class="img-fluid col-2">
                <p class="align-self-center text-white ms-1">${item.title}</p>
                </a>`;
            bar.appendChild(cards);
        }
        if (search.value === '') {
            bar.classList.add('d-none');
        }
    });
});
mangas.map(item => {
    const cards = document.createElement('div');
    cards.classList.add('card');
    cards.classList.add('bg');
    cards.classList.add('m-1');
    cards.classList.add('my-4');
    cards.classList.add('hover3');
    if (user) {
        home.classList.add('d-none');
        logout.classList.remove('d-none');
        toast.classList.add('d-block');
        setTimeout(() => {
            toast.classList.remove('d-block');
        }, 3000);
        cards.innerHTML = `
    <a href="${item.link}"
    class="text-decoration-none white">
    <img src="${item.src}" class="img-fluid card-img-top">
    <div class="card-body text-center">
            <h4 class="card-title">${item.title}</h4>
    </div>
    <div class="card-footer">
        <small class="text-body-secondary">Buy Now $${item.prise} </small>
    </div>
    </a>`;
        manga.appendChild(cards);
    } else {
        home.classList.remove('d-none');
        logout.classList.add('d-none');
        cards.innerHTML = `
    <a href="./pages/account.html"
    class="text-decoration-none white">
    <img src="${item.src}" class="img-fluid card-img-top">
    <div class="card-body text-center">
            <h4 class="card-title">${item.title}</h4>
    </div>
    <div class="card-footer">
        <small class="text-body-secondary">Buy Now ${item.prise}$ </small>
    </div>
    </a>`;
        manga.appendChild(cards);
    };
});