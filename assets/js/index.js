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
const user = JSON.parse(localStorage.getItem('berserker'));
const mangas = [
    { title: 'Berserk Vol.1', prise: "14.99", link: 'https://www.amazon.com/Berserk-Vol-1-Kentaro-Miura/dp/1593070209', src: "assets/images/vol. 1.jpg" }, { title: "Berserk Vol.13", prise: '11.50', link: 'https://www.amazon.com/Berserk-Vol-13-Kentaro-Miura/dp/1593075006', src: "assets/images/vol.13.jpg" }, { title: "Berserk Vol.18", prise: '12.95', link: 'https://www.amazon.com/Berserk-Vol-18-Kentaro-Miura/dp/1593077432/ref=d_pd_sbs_sccl_2_10/135-4750351-1027145?pd_rd_w=pqmxq&content-id=amzn1.sym.3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=CW80B4NF42BRZGJGQ939&pd_rd_wg=8sq1i&pd_rd_r=64f51b5e-626f-46e6-ba4c-da76a1011ce0&pd_rd_i=1593077432&psc=1', src: "assets/images/vol.18.jpg" }, { title: "Berserk Vol.23", prise: '14.99', link: 'https://www.amazon.com/Berserk-Vol-23-Kentaro-Miura/dp/1593078641', src: "assets/images/vol.23.jpg" }, { title: "Berserk Vol.28", prise: '10.71', link: 'https://www.amazon.com/Berserk-Vol-28-Kentaro-Miura/dp/1595822097/ref=d_pd_sbs_sccl_2_6/135-4750351-1027145?pd_rd_w=pqmxq&content-id=amzn1.sym.3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=CW80B4NF42BRZGJGQ939&pd_rd_wg=8sq1i&pd_rd_r=64f51b5e-626f-46e6-ba4c-da76a1011ce0&pd_rd_i=1595822097&psc=1', src: "assets/images/vol.28.jpg" }, { title: "Berserk Vol.32", prise: '7.24', link: 'https://www.amazon.com/Berserk-Vol-32-Kentaro-Miura/dp/1595823670/ref=d_pd_sbs_sccl_2_6/135-4750351-1027145?pd_rd_w=6ryEg&content-id=amzn1.sym.3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=MAMF3EJ64FSRFP4P7XS5&pd_rd_wg=0DYCm&pd_rd_r=24a47dff-b2dd-4bee-9303-550e42245b6a&pd_rd_i=1595823670&psc=1', src: "assets/images/vol.32.jpg" }
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
    home.innerText = 'Account';
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
    hog.innerText = 'در این جهان آیا سرنوشت انسان توسط نیرو یا موجوداتی ماورایی کنترل میشود؟ آیا چیزی شبیه دست خدا درمیان است؟ حداقل این درست است که انسان هیچ کنترلی بر خود ندارد; حتی برروی سرنوشت خود...';
    title.innerText = 'برزرک';
    guts3.innerText = 'گاتس';
    griffith.innerText = 'گریفیث';
    casca.innerText = 'کاسکا';
    who.innerText = 'گاتس، معروف به "شمشیرزن سیاه" مزدور سابق و سرگردانی است که در یک کشمکش درونی دائمی بین دنبال کردن اهداف خود و حفظ وابستگی هایش به کسانی که برایش عزیز هستند، به جهان سفر می کند.';
    who2.innerText = 'گریفیث رهبر فعلی گروه دوباره متولد شده فالکون و فرمانده عالی ارتش منظم میدلند است. او که در نبردهای زیادی پیشتاز بود، به عنوان یک ناجی در سراسر قاره شهرت پیدا کرد و به عنوان "شاهین نور" مورد احترام است.';
    who3.innerText = 'کاسکا یکی از فرماندهان سابق گروه فالکون و یکی از همراهان جدا شده گاتس است. پس از خروج گاتس و زندانی شدن گریفیث، او مجبور می‌شود تا مقام رهبری گروه را به عهده بگیرد.';
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
    card.classList.add("white");
    card.classList.remove("red");
    card2.classList.add("white");
    card2.classList.remove("red");
    card3.classList.add("white");
    card3.classList.remove("red");
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
    card.classList.remove("white");
    card.classList.add("red");
    card2.classList.remove("white");
    card2.classList.add("red");
    card3.classList.remove("white");
    card3.classList.add("red");
});
mangas.map(item => {
    const cards = document.createElement('div');
    cards.classList.add('card');
    cards.classList.add('bg');
    cards.classList.add('m-1');
    cards.classList.add('my-4');
    cards.classList.add('hover3');
    if (user) {
        cards.innerHTML = `
    <a href="${item.link}"
    class="text-decoration-none" target="_blank">
    <img src="${item.src}" class="img-fluid card-img-top">
    <div class="card-body">
            <h4 class="card-title">${item.title}</h4>
    </div>
    <div class="card-footer">
        <small class="text-body-secondary">Buy Now $${item.prise} </small>
    </div>
    </a>`;
        manga.appendChild(cards);
    } else {
        cards.innerHTML = `
    <a href="./pages/account.html"
    class="text-decoration-none">
    <img src="${item.src}" class="img-fluid card-img-top">
    <div class="card-body">
            <h4 class="card-title">${item.title}</h4>
    </div>
    <div class="card-footer">
        <small class="text-body-secondary">Buy Now ${item.prise}$ </small>
    </div>
    </a>`;
        manga.appendChild(cards);
    };
});