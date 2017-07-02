# Harmadik óra: p5 dinamika

## JSBin használat
__Fájlok:__ A programjainkat (pontosabban a weblapokat, amikbe a programjainkat írjuk) a HTML, a CSS és a JavaScript fájl tartalmazza. Ezek közül nekünk az esetek 99%-ában csak a JS fájllal kell törődünk.  
Minden, amit ezekbe a fájlokba írunk, megmarad. Ezzel szemben mindaz, amit a konzolon csinálunk, nem változtatja meg a programot, és nem is őrződik meg: amint újratöltjük az oldalt, elveszik az, amit a konzolon csináltunk.  

__Autosave:__ JSBinen nincs székség kézi mentésre, mert a rendszer pár másodpercenként automatikusan menti minden fájlunkat. (Viszont ha szeretnénk, tudunk a fájljainkról ún. Snaposhotot, tehát pillanatfelvételt készíteni: File > Save snapshot. Ilyenkor elmentődik a jelenlegi állapot egy külön verzióként, amihez később vissza tudunk térni.)  

__Név és megnyitás:__ Egy-egy program neve az URL-ben (tehát a weboldal címében, ami a böngészőben is látható) is szereplő hatbetűs, véletlenszerűen generált "szó". Ezt mi persze nem tudjuk megjegyezni, viszont adhatunk a programunknak leírást: File > Add description. Ide szóközöket, ékezeteket, különleges karaktereket is írhatunk. Célszerű minden program megírását azzal kezdeni, hogy leírást adunk neki, mert később ez alapján tudjuk majd beazonosítani.  
A már megírt programjainkat bejelentkezés után a File > My bins menüpont alatt találjuk meg. Megnyitni dupla kattintással tudjuk őket. Ha valamelyik programra már nincs szükségünk, a leírása mellett lévő Archive feliratra kattintva tudjuk a kukába helyezni.  

__Megosztás:__ Egy JSBinen írt programot úgy tudunk megosztani valakivel, hogy egyszerűen elküldjük neki az URL-t, ahol épp dolgozunk. (Ugyanez érhető el a Share menüpont alatt is.) Bárki, aki tudja ezt az URL-t, meg tudja nézni a program forráskódját (HTML + CSS + JS), tudja futtatni a programot és meg tudja nézni az outputját, illetve tudja használni a konzolt. A kódot _átírni_ azonban csak a program létrehozója tudja.  

__Klónozás:__ Leklónozni viszont bármelyik JSBin programot le tudjuk, akár a miénk a program, akár nem. A klónozás azt jelenti, hogy készítünk róla egy másolatot, ami már a miénk, így úgy írjuk át, ahogy akarjuk.  

## Code editor
A programokat ún. code editorba írjuk, ami egy speciális szövegszerkesztő. Nincs benne semmi szövegformázási lehetőség (betűméret, betűszín, betűtípus stb.), csak egyszerűen gépelni tudunk bele. A szerkesztő azonban a különböző programozási kulcsszavak különböző színnel való kiemelésével segíti a munkánkat. Például ha egy szót időzőjelek közé teszünk, tehát stringként kezeljük, az egész szót pirosra színezi, hogy első ránézésre is jól látható legyen: stringről van szó. Ez az úgynevezett syntax highlighting.  
A szerkesztő más módokon is segít, például:  
- valahányszor kinyitunk egy időzőjelet vagy bármilyen zárójelet, a szerkesztő automatikusan kirakja a bezáró párját  
- ha a kódot nem a szövegmező bal szélére, hanem beljebb húzva kell írni, ezt a behúzást magától megteszi (ilyenre az óra folyamán később lesz példa)  
- piros x jellel és hibaüzenettel jelzi, ha hibát lát a kódunkban, például ha kifelejtettünk egy vesszőt.  

A kódszerkesztőben lehetőség van a kód úgynevezett "kikommentelésére". Egyes kódsorokat meg tudunk jelölni "kommentként", megjegyzésként. Ilyenkor ezeket a sorokat a gép meg sem próbálja lefuttatni. Ez egyrészt arra jó, hogy bizonyos parancsokat ideiglenesen "kikapcsoljunk", inaktívvá tegyünk, anélkül, hogy konkrétan ki kéne törölni őket a programból: később így könnyen újra "bekapcsolhatjuk" őket. A másik gyakori használat az, hogy a hosszúvá vagy bonyolulttá váló programba a programozó nem parancsokat, csupán önmagának szánt megjegyzéseket, emlékeztetőket ír.  
Egy sor kommentként való megjelöléséhez írjunk az elejére dupla perjelet (//). A kódszerkesztő színezéssel is jelzi, hogy a sorunk innentől nem lesz végrehajtva.  

A szerkesztő továbbá automatikusan szépre tudja formázni a kódunkat. Ez egy igen hasznos funkció, használjuk sűrűn! Az automatikus formázást a `Cmd + Shift + L` billentyűkombináció futtatja le (windowson `Ctrl + Shift + L`).  
(Megjegyzés: Safariban sajnos nem működik.)  

Megjegyzés: a kurzus weboldalán egy [táblázatban összefoglaltam](https://github.com/endreymarcell/p5-2017-spring#speciális-karakterek) a programozásban gyakran használatos speciális karaktereket, illetve hogy hol találjuk őket Apple billentyűzeteken.  

__csillagos__  
Pár további billentyűkombó érdeklődőknek:  
- Cmd + Ctrl + fel/le nyíl --> sor mozgatása fel/le  
- Cmd + D --> szó kijelölése, ismétlődően  

### Játszótér
http://jsbin.com/fobemit/edit?js,output  

Próbáljuk ki a fentieket az itt linkelt játszótéren az alábbi példaprogrammal, vagy hasonlóval:  
```
student = "Marca"  
grade = 5
alert(student)
```

Figyelem, p5-öt ide nem tudunk írni. Maradjunk egyelőre az `alert()` függvénynél illetve a változóknál, ezek sima JavaScript elemek, és nem p5-specifikusak.  

## Saját függvények definiálása

Mind a változóknak, mind a függvényeknek van egy "létrehozó" és egy "felhasználó" oldala: először létre kell őket hozni, hogy utóbb használhassuk őket. A változóknál már láttuk is mindkét oldalt: a `student = "Marca"` parancs létrehozza a változót, az `alert(student)` parancs pedig használja.  
Függvényeket azonban eddig még mindig csak használtunk, sosem hoztunk létre. Eddig.  

A függvény valójában nem más, mint néhány parancs egységbe kapcsolása. Ha például van két parancsunk, amiket szeretnénk mindig együtt, párosával meghívni, írhatunk egy függvényt, ami pont ezt teszi.  
Tegyük fel, hogy van egy bob nevű sprite-unk. Bobot gyakran szeretnénk ferdén jobbra le küldeni egy kicsivel. Nem azt szeretnénk, hogy folyamatosan csússzon oda (erre a `setSpeed()`) jó volna, hanem hogy ugorjon oda egy pillanat alatt. Ezt ezzel a két paranccsal érjük el:  
```	
bob.position.x += 20
bob.position.y += 20
```
Tehát kicsit jobbrább és lejjebb küldjük bobot. Igen ám, de szeretnénk, ha a jobbra és a lefelé való mozgás egyszerre történne, és mindaddig, amíg a konzolon vagyunk, csak egymás után tudjuk őket beírni, két külön parancsként.  
Megoldás: írjunk egy függvényt, ami pontosan ezt a két utasítást tartalmazza, és nevezzük mondjuk "jump"-nak:
```
function jump() {
	bob.position.x += 20
	bob.position.y += 20
}
```
Tehát: először kiírjuk a `function` szót, utána a függvényünk általunk választott nevét. A név után nyitó-záró zárójel, majd pedig nyitunk egy kapcsos zárójelet, és új sort kezdünk. Ekkor a kódszerkesztő automatikusan valamivel jobbrább teszi a kurzort, mint ahol eddig voltunk. Ez a behúzás jelzi, hogy mindazok a parancsok, amiket most írunk, a `jump()` függvényhez tartoznak. Mindaz, ami a nyitó és a záró kapcsos zárójel között van, a függvény tartalma.  
Ha megírtuk a fenti függvényt, a konzolon már meg is tudjuk hívni: `jump()`  

Az is lehet, hogy arra szeretnénk függvényt írni, hogy bob menjen a vászon közepére, és forogjon vissza 0 fokra. Ez három utasításból áll, amiket most egy `goToCenter()` nevű függvénybe írunk:  
```
function goToCenter() {
	bob.position.x = width / 2
	bob.position.y = height / 2
	bob.rotation = 0
}
```

A függvények létrehozásának általános mintázata tehát:  
```
function nameOfYourFunction() {
	// write your code here
}
```
Ebben természetesen át kell írni a nameOfYourFunction szót a kívánt függvénynévre, a középső sort pedig ki kell törölni, és a helyére beírni a szükséges utasításokat.  

Mindezt általános JavaScript illetve programozási koncepció, és nem csak a p5-re érvényes.  

## setup és draw

Most viszont olyan rész következik, ami kifejezetten a p5-ben (illetve az eredetijében, a Processingben) való programozásra jellemző.  
Említettük, hogy a függvényeknek van egy "létrehozó" és egy "felhasználó" oldala. A "felhasználó" oldal tipikusan mi vagyunk. Tehát ha van egy függvény, amit a p5 hozott nekünk létre (például a `setSpeed()`), azt mi használtuk, amikor meghívtuk a függvényt. Vagy ha volt egy függvény, amit mi magunk hoztunk létre (például fentebb a `jump()` vagy a `goToCenter()`).  
Most viszont az a szokatlan helyzet következik, hogy mi hozunk létre egy függvényt, viszont meghívni már nem mi fogjuk, hanem a p5 környezet. Ismétlem, ez nem szokványos: ez a p5 programokra jellemző speciális szerkezet.  

### setup

Az első ilyen függvény neve `setup()`. Amit ebben a függvénybe írunk, az a program elindulásakor (amikor rákattintunk a "Run with JS" gombra) le fog futni. Tehát ahhoz, hogy a programunk létrehozzon egy sprite-ot, és elindítsa jobbra, létre kell hoznunk egy `setup()` nevű függvényt, ami az ehhez szükséges parancsokat tartalmazza. Valahogy így:  
```
function setup() {
	bob = createSprite()
	bob.setSpeed(1, 0)
}
```

A fenti példánál azt tapasztaljuk, hogy bob alig indult el, máris kimegy a vászonról. Ennek az az oka, hogy az úgynevezett vásznat, amin a p5 programok minden grafikája történik, szintén létre kell hoznunk. Ha nem adunk ki erre utasítást, akkor is kapunk egy "alapértelmezett" vásznat, de annak a mérete csak 100*100 pixel. Ez kicsi lesz nekünk, csináljunk egy nagyobbat - erre a `createCanvas()` függvény használatos, ami két számot vár, a létrehozandó vászon szélességét és magasságát. Például:  
`createCanvas(400, 400)`  

Leggyakrabban azt szeretnénk, ha a vásznunk kitölteni a rendelkezésére áló ablakot. Ezt úgy tudjuk a legkönnyebb megtenni, hogy használjuk a p5 beépített `windowWidth` és `windowHeight` változóit, amik pont ezeket a méreteket adják meg:  
`createCanvas(windowWidth, windowHeight)`  
(Megjegyzés: ezen a ponton még nem tudjuk használni a `width` és a `height` változókat, mert azok nem az ablak, hanem a _vászon_ méreteit adják meg, mi pedig épp most szeretnénk létrehozni a vásznat.)  
(Megjegyzés: az eddigi órákon azért nem kellett vásznat létrehoznunk, mert olyan "játszótereket" adtam meg az órai munkához, ahol én ezt a háttérben, titokban megcsináltam.)  

Így néz ki tehát jelenleg a teljes programunk:  
```
function setup() {
	createCanvas(windowWidth, windowHeight)
	bob = createSprite()
	bob.setSpeed(1, 0)
}
```

## Feladatok:  

Minden feladatot úgy kezdj el, hogy leklónozod az addig megnyitott programot (akár a játszóteret, akár az előző feladatét), és mielőtt bármit írnál az újba, adsz neki egy leírást (File > Add description). Innen fogod utólag tudni, hogy melyik program melyik volt.  

(1) Írj egy programot, amiben három sprite van: az első kb. bal felülről indul és állandó sebességgel jobbra mozog, a második kb. jobb alulról mozog és állandó sebességgel balra halad, a harmadik pedig négyzet helyett hosszúkás, lapos, és csak egyhelyben áll a vászon közepén, vízszintesen.  
(2) Írj egy programot, amiben három sprite van sorban egymás mellett. Mindháromnak adj színt, balról jobbra egyre világosabbat; mindháromnak adj méretet, balról jobbra egyre kisebbet; és mindhárom forogjon, balról jobbra egyre gyorsabban.  

__csillagos__  
(3\*) Írj egy programot, amiben két sprite van. Mindkettőnek legyen véletlenszerű a helye (a teljes vásznon), a mérete (értelmes keretek között), mindkettőnek adj véletlen nagyságú és véletlen irányú sebességet, és véletlen nagságú forgási sebességet is. (Ne felejtsd el a forgatási sebességhez használt véletlenszám alsó határt negatívra állítani, hogy mindkét irányba tudjon forogni.)  
(4\*) Ha ez megvan, tedd a programot kicsit rendezettebbé: az első sprite mindig a képernyő bal oldalán jelenjen meg (továbbra is véletlenszerűen, de sosem jobbrább a kép közepénél) és mindig jobbra forogjon. A második sprite mindig a kép jobb oldalán jelenjen meg, és mindig balra forogjon. A sebességük irányát úgy állítsd be, hogy a jobb oldalt lévő sprite mindig alapvetően balra induljon el - mindig kicsit másfele, de sosem jobbra -, a bal oldali pedig mindig jobbra. (Ez a legutolsó kicsit trükkös.)  

### draw

A következő speciális nevű függvény a `draw()`. Ezt a függvényt akkor használjuk, ha változást, ill. interakciót szeretnénk írni a programunkba. Amit a `setup()`-ba írunk, az csak egyetlenegyszer fog lefutni, tehát a program indulásakor ki tudjuk adni a napiparancsot, onnantól viszont a program önállóan fut tovább, nem tudunk beleszólni, hogy mi történjen. Ezzel szemben a `draw()` függvény folyamatosan, újra meg újra meghívódik. Amit tehát ide írunk, az később is tud módosítani a program állapotán.  

A `setup()` és a `draw()` közti különbséget úgy tudjuk látványosan bemutatni, hogy előbb az egyikbe, után a másikba próbáljuk meg beleírni azt a parancsot, hogy `print("Hello!")`. Ez az utasítás a konzolra ír, úgyhogy futtatás előtt nyissuk meg a konzolt, hogy lássuk az eredményt. Azt tapasztaljuk, hogy a `setup()` csak egyetlenegyszer írja ki a "Hello!" üzenetet, a `draw()` viszont megállás nélkül, újra meg újra ezt teszi.  
Megjegyzés: a program futását (tehát a `draw()` ismétlődését) bármikor megállíthatjuk a konzolon a `noLoop()` paranccsal, illetve újra elindíthatjuk `loop()`-pal.  

### Sprite-ok megrajzolása

Jelenleg így nézhet ki a teljes programunk:  
```
function setup() {
	createCanvas(windowWidth, windowHeight)
	bob = createSprite()
	bob.setSpeed(1, 0)
}

function draw() {
	
}
```

Ezzel az a gond, hogy hiába hoztuk lére bobot, nem látjuk, hogy megjelenne. Ez azért van, mert valójában magától nem jelenik meg, csak akkor, ha ezt konkrétan utasításba adjuk neki. Írjuk bele a `draw()`-ba ezt: `allSprites.draw()`. Innentől kezdve a `draw()` függvény lefutásakor minden sprite megrajzolódik.  
(Megjegyzés: a vászon létrehozásához hasonlóan ez is olyan lépés, amire csak azért nem volt szükségünk a korábbi órák játszóterein, mert én ott ezt a parancsot titokban, a háttérben kiadtam.)  

Még egy utolsó problémával kell megküzdenünk: bob csíkot húz maga után. Ez azért van, mert a p5 magától nem "törli le" a vásznat futások között, csak újra meg újra rárajzol. A `draw()` függvény első lefutásakor tehát odarajzolja bobot a bal felső sarokba, aztán bob a `setSpeed()` miatt kicsit arrébbmegy, oda is kirajzolódik, kicsit arrébb megint... az előző példányokat azonban senki nem törli le, tehát nyomot hagy maga után. Ha szeretnénk a `draw()` függvény minden egyes lefutásakor "tiszta lappal indulni", márpedig általában ezt szeretnénk, akkor a sprite-ok kirajzolása előtt töröljük le a teljes vásznat a `background()` függvény használatával:  
`background("white")`  

Így néz ki tehát a teljes programunk, az első, amiben már mindent tényleg mi magunk csinálunk:  
```
function setup() {
	createCanvas(windowWidth, windowHeight)
	bob = createSprite()
	bob.setSpeed(1, 0)
}

function draw() {
	background("white")
	allSprites.draw()
}
```

## draw ötletek

Mire jó nekünk, hogy a draw függvény újra meg újra lefut? Arra, hogy a program futása közben is tudjunk hatni bobra.  
Például ha nem fix sebességgel szeretnénk elindítani bobot, és aztán csak nézni, amint egyenes vonalú, egyenletes mozgással kikúszik a képernyőből, hanem azt szeretnénk, hogy bob egyre gyorsabban haladjon, azt meg tudjuk tenni úgy, hogy a `draw()`-ban újra meg újra hozzáadunk valamennyit a sebességéhez az `addSpeed()` függvénnyel. Jó példa erre a lezuhanás, amikor bob újra meg újra kap egy kis extra sebességet lefelé:  
```
function draw() {
	bob.addSpeed(1, 90)
	background("white")
	allSprites.draw()
}
```

Vagy itt van egy sprite, ami egyre gyorsabban pörög:  
```
function draw() {
	bob.rotationSpeed += 1
	background("white")
	allSprites.draw()
}
```

Azt is meg tudjuk írni, hogy a sprite-unk állandóan kövesse az egerünket. Ehhez a sprite pozícióját minden pillanatban az egér helyére kell beállítani, amit a p5 a `mouseX` és a `mouseY` változókban bocsát rendelkezésünkre:  
Interaktív, egeret követő sprite:
```
function draw() {
	bob.positon.x = mouseX
	bob.positon.y = mouseY
	background("white")
	allSprites.draw()
}
```

## sprite interakciók
A sprite-ok alapesetben szépen átmennek egymáson. p5-ben azonban van arra lehetőség, hogy ennél izgalmasabb viselkedést adjunk meg nekik. Egy sprite például eltolhat a helyéről egy másikat, vagy ellenkezőleg, egy sprite viselkedhet "falként" egy másik számára.  

Indítsunk két sprite-tal, melyek közül az egyik elindul a másik felé:  
```
function setup() {
	createCanvas(windowWidth, windowHeight)
	bob = createSprite(50, 200)
	alice = createSprite(300, 200)
	bob.setSpeed(2, 0)
}

function draw() {
	background("white")
	drawSprites()
}
```
bob a képernyő bal széle felől halad alice felé. Ha semmi mást nem írunk a programba, egyszerűen át fog menni alice-en. Azonban a `collide()` függvénnyel megmondhatjuk neki, hogy "ütközzön" neki alice-nek. Ezt a parancsot a `draw()` függvényen belül kell kiadni, méghozzá bob saját `collide()` függvényét kell meghívni (tehát `bob.collide()`), argumentumnak pedig alice-t kell megadni:  
```
function draw() {
	bob.collide(alice)
	background("white")
	drawSprites()
}
```

Ha azt szeretnénk, hogy találkozáskor bob ne álljon meg egy helyben, hanem épp ellenkezőleg: tolja el a helyéről alice-t, arra a `displace()` függvényt használjuk:  
```
function draw() {
	bob.displace(alice)
	background("white")
	drawSprites()
}
```

Megjegyzés: a `collide()` és a `displace()` egymás ellentétei. Tehát ha azt a parancsot adjuk ki, hogy `bob.collide(alice)` azzal pont ugyanazt a hatást érjük el, mintha azt mondanánk, hogy `alice.displace(bob)`.  

Van egy harmadik függvényünk is, a `bounce()`, melynek segítségével a sprite-ok le tudnak pattanni egymásról:  
```
function draw() {
	bob.bounce(alice)
	background("white")
	drawSprites()
}
```
(Megjegyzés: a `bounce()` szimmetrikus, tehát a bob.bounce(alice) és az alice.bounce(bob) ugyanazt csinálja.)  

Ha azt szeretnénk szimulálni, hogy a két összeütköző sprite-nak nem azonos a tömege, akkor módosítsuk a sprite-ok `mass` változóját! Ennek az értéke alapesetben minden sprite-nál 1, de átírhatjuk kisebbre vagy nagyobbra, és ez hatással lesz arra, hogy hogyan pattannak le egymásról. Például ha alice tömegét sokkal nagyobbra állítjuk, mint bobét, akkor bob sokkal nagyobb sebességgel pattan vissza, mint amennyire alice-t ki tudja billenteni az álló helyzetéből. Példaprogram:  
```
function setup() {
	createCanvas(windowWidth, windowHeight)
	bob = createSprite(50, 200)
	alice = createSprite(300, 200)
	bob.mass = 0.5
	alice.mass = 3
	bob.setSpeed(2, 0)
}

function draw() {
	bob.bounce(alice)
	background("white")
	drawSprites()
}
```

Ennek az extrém esete, mikor azt szeretnénk, hogy alice egyáltalán ne mozduljon el, hanem amolyan "falként" viselkedjen bob számára. Ehhez állítsuk alice-t mozdíthatatlanná: `alice.immovable = true`  

Illetve lehet játszani a sprite-ok rugalmasságával is (`restitution`). Alapértelmezésben a sprite rugalmassága 1, ez pedig azt jelenti, hogy a sprite tökéletesen rugalmas, amolyan gumilabdaként viselkedik: lepattanáskor a sebessége változatlan marad, csak annak iránya változik meg. Tehát bob ugyanolyan gyorsan fog távolódni alice-tól az ütközés után, mint amilyen gyorsan közeledett felé, éppen csak az ellenkező irányba fog most már haladni.  
Ha a rugalmasságot 1-nél kisebb számra állítjuk, bob veszít a sebességéből: 0.5-nél például a lepattanás után bob feleolyan gyorsan fog csak távolódni alice-tól, mint ahogy közeledett felé. Nullára állított rugalmasságnál bob egyáltalán nem "pattan", csak nekimegy alice-nak is ottmarad, ilyenkor tehát a `bounce()` függvény gyakorlatilag megegyezik a `collide()`-dal.  
Ha pedig 1-nél nagyobbra állítjuk a rugalmasságot, az a helyzet áll elő, hogy ütközés után bob gyorsabban indul el az ellenkező irányba, mint ahogyan eddig közeledett. Ez fizikailag képtelenség, de programozásban persze lehetséges.  

## Feladatok:
(5) Írj egy programot, amiben egy labda pattog két fal között. Hozz létre kettő magas, vékony sprite-ot a vászon bal és jobb oldalán, középen pedig egy harmadikat. A falként funkcionáló sprite-okat tedd mozdíthatatlanná, a labdának pedig adj valamilyen kezdősebességet, és állítsd be, hogy lepattanjon a falakról.  
(6) Írj egy programot, amiben egy labda pattog a padlón. Hozz létre egy lapos, széles sprite-ot a vászon alján, ami mozdíthatatlan, és lepattan róla a "labda"-sprite. A labdának ne felejts el `addSpeed()`-del gravitációt adni a `draw()`-ban!  
(7) Írj egy programot, amiben két sprite van. Az első az "ember", ez a sprite mindig kövesse az egér mozgását. A másik a "doboz", ezt pedig az ember el tudja tolni, ha nekimegy.  

Randommal:  
(8) Egészítsd ki úgy az előző programot, hogy legyen egy harmadik sprite is, ez lesz a "cél". A program indulásakor mind a doboz, mind a cél véletlenszerű helyen jelenjen meg. Adj a sprite-jaidnak valamilyen megkülönböztető színt vagy méretet is, hogy tudd, melyik melyik. Ha ez megvan, hozzáadhatsz még egy-két akadályt is: olyan sprite-okat, amik mozdíthatatlanok.  
(9) Írj egy programot, amiben két sprite van a képernyő két oldalán. A bal oldali sprite jobbra induljon el, de véletlen nagyságú sebességgel, a jobb oldali pedig balra, szintén véletlen tempóban. Állítsd be őket úgy, hogy lepattanjanak egymásról. Ha ez megvan, egészítsd ki a programot úgy, hogy a tömegük is véletlenszerű (értelmes keretek között).  

__csillagos__  
(10\*) A sprite-oknak létezik egy `attractionPoint()` függvénye is, amivel "vonzási pontot" adhatunk a sprite-hoz. A függvény három számot vár: a vonzás erejét, illetve két koordinátát. Ha ezt a parancsot a draw-ban meghívod egy sprite-ra, akkor a megadott erővel elkezd vonzódni a megadott pont felé. Írj egy programot, amiben egy sprite kering a vászon közepe körül! A vászon közepére is tehetsz egy kisebb, mozdulatlan sprite-ot, csak hogy jobban látsszon a pont, ami körül a másik kering. Azt, hogy a sprite rendesen pályára álljon a középpont körül, ne csak oda-vissza lendüljön, úgy érheted el, ha a setup-ban adsz neki egy sebességet, amivel "kilököd" az egyenes pályáról. Például ha a két sprite vízszintesen egy vonalban van, akkor lefelé érdemes meglökni a keringőt.  
(11\*) Írd át a 10-es feladatot úgy, hogy a kettes számú sprite - és egyben a vonzási pont - ne fixen középen legyen, hanem mindig ott, ahol épp az egér van!  
(12\*) Írd át a 10-es feladatot úgy, két sprite keringjen, amik lepattannak egymásról!  
(13\*) Írd át a 10-es feladatot úgy, hogy a keringő sprite `rotateToDirection` változóját `true`-ra állítod!  

## Referencia
https://p5js.org/reference/#/p5/  
http://p5play.molleindustria.org/docs/index.html  

