/* =====================================================
   1. CONFIG - ITT KELL SZERKESZTENI (képek + szövegek)
   =====================================================
   Képek: tedd a fotókat az index.html melletti "img" mappába,
   majd írd be az útvonalat, pl. "img/elso.jpg".
   Üresen hagyott ("") kép = marad a színes sablon-helyőrző.
   Ajánlott: .jpg/.webp, max ~300 KB/kép, a nagyobbat előbb méretezd le.
   ===================================================== */
var CONFIG = {

  // Kezdőlap háttérkép (fekvő, ~1600px széles)
  hero: "hero.jpg",                       // pl. "img/hero.jpg"

  // "Így kezdődött" szekció: két polaroid
  story: ["img/elso_1.jpg", "img/elso_2.jpg"],                // pl. ["img/elso1.jpg", "img/elso2.jpg"]

  // Záró szekció: szív alakú kép (négyzet alakú legyen)
  finalPhoto: "img/3.png",                 // pl. "img/vege.jpg"

  // Pillanatok rács ÉS az "Emlékezz erre" galéria (ugyanabból az 1 listából)
  //   d: dátum | t: cím | x: üzenet | img: kép (nem kötelező)
 moments: [
  { d: "2025. 12. 31.", t: "Az első közös vonatozásunk", x: "Együtt utaztunk Budapestre, hogy a tesódéknál töltsük a szilvesztert. Egy újabb közös élmény, sok várakozás és egy különleges évbúcsúztató, ami még szebbé tette a közös történetünket. ❤️", img: "img/1.png" },
  { d: "2026. 05. 28.", t: "Az első közös mozizásunk", x: "Együtt ültünk be a Backroomsra, és egy újabb közös élménnyel gazdagodtunk. Talán csak egy film volt a sok közül, de nekem azért lett különleges, mert veled élhettem át. ❤️",             img: "img/2.png" },
  { d: "2026. 01. 01.", t: "Az év első közös emléke", x: "Éjfél után alig fél órával, a Hősök teréről hazafelé tartva, a közös tűzijátéknézés után. Egy új év kezdődött, és én örültem, hogy veled élhetem át ezeket a pillanatokat. ❤️", img: "img/vege.jpg" },
  { d: "2026. 10. 23.", t: "Naplemente és egy kis boldogság", x: "Egy kellemes séta a Bujtosi-tónál, gyönyörű naplemente és egy finom mekis fagyi. Néha a legegyszerűbb pillanatok a legkülönlegesebbek, főleg, ha veled élhetem át őket. ❤️", img: "img/3.png" },
  { d: "2026. 08. 28.", t: "Krakkói kalandjaink", x: "Egy padon ülve, a Planty Krakowskie parkban kóstoltuk meg először a zabkás hot dogot. Egy kis pihenés, valami új kipróbálása és egy közös emlék Krakkóból, ami mindig eszembe juttatja, milyen jó veled felfedezni a világot. ❤️", img: "img/4.jpg" },
  { d: "2026. 10. 05.", t: "Az első közös botanikus kertünk", x: "Együtt fedeztük fel a debreceni botanikus kert szépségeit. Zöldellő növények, nyugodt pillanatok és egy újabb közös élmény, ami még különlegesebbé tette a történetünket. ❤️", img: "img/5.jpg" },
  { d: "2026. 01. 16.", t: "Az első közös arcmaszkozásunk", x: "Még a régi albérletedben, arcmaszkban, az Agymenők nézése közben. Egy nyugodt, kuckózós este, tele nevetéssel és apró közös pillanatokkal. Mert néha a legegyszerűbb estékből lesznek a legkedvesebb emlékek. ❤️", img: "img/6.jpg" },
  { d: "2026. 02. 13.", t: "Valentin-nap az állatkertben", x: "Az első közös állatkerti élményünk a Nyíregyházi Állatparkban, Valentin-nap alkalmából. Egy nap, amit különlegesebbé tett a sok aranyos állat, a közös felfedezés és az, hogy együtt tölthettük. ❤️", img: "img/7.jpg" },
],

  // A 12 ok (pontosan 12 sor)
  reasons: [
    "Mert már attól jobb napom lesz, hogy veled lehetek.",
    "Mert melletted a legegyszerűbb pillanatok is különleges emlékekké válnak.",
    "Mert imádom, amikor együtt nevetünk valamin, amin talán más nem is nevetne.",
    "Mert veled még egy vonatozás, egy séta vagy egy mekis fagyi is kaland.",
    "Mert szeretek veled új helyeket felfedezni, legyen az Krakkó vagy egy park a közelben.",
    "Mert jó érzés hozzád bújni, és egy kicsit megfeledkezni a világ minden más dolgáról.",
    "Mert imádom a közös kis szokásainkat, még az olyan egyszerűeket is, mint az együtt sorozatozás.",
    "Mert veled nem kell mindig valami különlegeset csinálnunk ahhoz, hogy jól érezzem magam.",
    "Mert minden közös élményünkkel egyre több olyan emlékünk lesz, amire később mosolyogva gondolhatunk vissza.",
    "Mert melletted egy hétköznapi napból is lehet olyan nap, amire sokáig emlékezni fogok.",
    "Mert amikor a jövőnkre gondolok, még rengeteg közös kalandot, nevetést és naplementét szeretnék veled átélni.",
    "Mert nemcsak a különleges pillanatokban szeretlek, hanem azokban az apró, hétköznapi percekben is, amelyekből végül a mi történetünk áll össze. És mert te vagy az, akivel mindezt át szeretném élni. ❤️"
  ]
};

/* =====================================================
   2. SEGÉDFÜGGVÉNYEK
   ===================================================== */
function $(id) { return document.getElementById(id); }

function setImg(el, src) {
  if (!src) return;
  var t = new Image();
  t.onload  = function () { el.style.backgroundImage = "url('" + src + "')"; el.classList.add("has-img"); };
  t.onerror = function () { console.warn("Nem található a kép:", src); };
  t.src = src;
}

/* =====================================================
   3. KÉPEK BEÁLLÍTÁSA (hero, polaroidok, záró kép)
   ===================================================== */
if (CONFIG.hero) {
  var h = new Image();
  h.onload  = function () { $("kezdolap").style.setProperty("--hero-img", "url('" + CONFIG.hero + "')"); };
  h.onerror = function () { console.warn("Nem található a kép:", CONFIG.hero); };
  h.src = CONFIG.hero;
}
setImg($("storyA"), CONFIG.story[0]);
setImg($("storyB"), CONFIG.story[1]);
setImg($("finalPhoto"), CONFIG.finalPhoto);

/* =====================================================
   4. PILLANATOK RÁCS + FELUGRÓ ABLAK
   ===================================================== */
function openModal(m) {
  $("mdate").textContent = m.d;
  $("mtitle").textContent = m.t;
  $("mtext").textContent = m.x;
  $("mph").style.backgroundImage = "";
  $("mph").classList.remove("has-img");
  setImg($("mph"), m.img);
  $("modal").classList.add("on");
}

CONFIG.moments.forEach(function (m) {
  var b = document.createElement("button");
  b.className = "tile";
  b.innerHTML = '<div class="ph">♡</div><b>' + m.d + "</b><small>" + m.t + "</small>";
  setImg(b.firstChild, m.img);
  b.onclick = function () { openModal(m); };
  $("grid").appendChild(b);
});

$("mclose").onclick = function () { $("modal").classList.remove("on"); };
$("modal").onclick = function (e) { if (e.target === $("modal")) $("modal").classList.remove("on"); };

/* =====================================================
   5. 12 OK
   ===================================================== */
CONFIG.reasons.forEach(function (r, i) {
  var d = document.createElement("div");
  d.innerHTML = "<i><span>" + (i + 1) + "</span></i><span>" + r + "</span>";
  $("reasons").appendChild(d);
});

/* =====================================================
   6. "EMLÉKEZZ ERRE" GALÉRIA (léptetős)
   ===================================================== */
var cur = 0;
function showSlide() {
  var m = CONFIG.moments[cur];
  $("cdate").textContent = m.d;
  $("ctitle").textContent = m.t;
  $("ctext").textContent = m.x;
  $("cnt").textContent = (cur + 1) + " / " + CONFIG.moments.length;
  $("cph").style.backgroundImage = "";
  $("cph").classList.remove("has-img");
  setImg($("cph"), m.img);
}
$("prev").onclick = function () { cur = (cur + CONFIG.moments.length - 1) % CONFIG.moments.length; showSlide(); };
$("next").onclick = function () { cur = (cur + 1) % CONFIG.moments.length; showSlide(); };
showSlide();

/* =====================================================
   7. LEBEGŐ SZÍVEK + "NYOMD MEG" GOMB
   ===================================================== */
function heart(big) {
  var s = document.createElement("span");
  s.className = "fh";
  s.textContent = Math.random() < .5 ? "♥" : "♡";
  s.style.left = Math.random() * 100 + "vw";
  s.style.fontSize = (big ? 18 + Math.random() * 34 : 10 + Math.random() * 16) + "px";
  s.style.color = Math.random() < .5 ? "#b4505e" : "#e9b9b6";
  s.style.animationDuration = (big ? 3 + Math.random() * 3 : 9 + Math.random() * 8) + "s";
  document.body.appendChild(s);
  setTimeout(function () { s.remove(); }, 17000);
}
function burst() { for (var i = 0; i < 40; i++) setTimeout(function () { heart(true); }, i * 60); }

setInterval(heart, 1800);          // folyamatos háttér-szívek
$("burst").onclick = burst;

/* =====================================================
   8. NYITÓKÉPERNYŐ
   ===================================================== */
document.body.style.overflow = "hidden";   // amíg a nyitóképernyő látszik, nem görget
$("go").onclick = function () {
  $("intro").classList.add("off");
  document.body.style.overflow = "";
  burst();
};

/* =====================================================
   9. BELEBEGŐ ELEMEK GÖRGETÉSKOR
   ===================================================== */
var els = document.querySelectorAll("section h2,.sub,.story>*,.tile,.reasons>div,.car,.cards>div,#utolso>*");
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: .12 });
  els.forEach(function (e, i) {
    e.classList.add("rv");
    e.style.transitionDelay = (i % 4) * 90 + "ms";
    io.observe(e);
  });
}
