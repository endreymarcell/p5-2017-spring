# Kilencedik: saját képernyőkímélő

## Visszajelzés a félévről  
https://goo.gl/forms/oc8y9pZ6hOG5Nwoj2  

## Öt okosság
https://prezi.com/view/J9TvUrBKaHyxsHr28sBE/  

### 1. background

A félév során írt programokban a `background()` függvényt látszólag önkényesen hol a setup-ba, hol a draw-ba raktam. Valójában a program működését jelentős részben meghatározza, hogy hol van vagy nincs `background()` (vagyis az egész vászon letörlése). Tisztázzuk tehát. Példaként egy egyszerű rajzoló programot használunk, ami mindig egy teli, fekete kört rajzol oda, ahol az egér van.

#### background a setup-ban
```
function setup() {
    createCanvas(windowWidth, windowHeight)
    fill("black")
    background("white")
}

function draw() {
    circle(mouseX, mouseY, 100)
}
```
Eredmény: a vásznat csak egyetlenegyszer, a program elején festjük fehérre, utána pedig folyamatosan fekete köröket rajzolunk rá. Tehát az összes kör megmarad, és az egér "csíkot húz" maga után.  

#### background a draw-ban
```
function setup() {
    createCanvas(windowWidth, windowHeight)
    fill("black")
}

function draw() {
    background("white")
    circle(mouseX, mouseY, 100)
}
```
Eredmény: a vásznat minden kör megrajzolása előtt fehérre festjük, tehát mindig letöröljük a korábbi kört, és csak az aktuális fog látszani. Az egér nem húz csíkot maga után.  

#### background hibásan a draw-ban
```
function setup() {
    createCanvas(windowWidth, windowHeight)
    fill("black")
}

function draw() {
    circle(mouseX, mouseY, 100)
    background("white")
}
```
Eredmény: a vásznat minden kör megrajzolása _után_ azonnal fehérre festjük, tehát végeredményben nem fogunk látni egy kört sem.  

#### background tévedésből a draw-ban, circle a mouseClicked-ben
```
function setup() {
    createCanvas(windowWidth, windowHeight)
    fill("black")
}

function draw() {
    background("white")
}

function mouseClicked() {
    circle(mouseX, mouseY, 100)
}
```
Eredmény: az előző esethez hasonlóan nem látunk semmit, mert a köröket megrajzolás után azonnal le is festjük fehérre.  

#### background a setupban, circle a mouseClicked-ben
```
function setup() {
    createCanvas(windowWidth, windowHeight)
    fill("black")
    background("white")
}

function draw() {
}

function mouseClicked() {
    circle(mouseX, mouseY, 100)
}
```
Eredmény: a kattintások helyén megjelenik egy-egy kör.  

#### Csillagos: halványító background a draw-ban
```
function setup() {
    createCanvas(windowWidth, windowHeight)
    fill("black")
}

function draw() {
    background(255, 255, 255, 50)
    circle(mouseX, mouseY, 100)
}
```
Eredmény: a vásznat minden kör előtt fehérre festjük, de a fehér szín RGB kódja (255, 255, 255) után megadunk egy átlászóságot is (50). Így a fehér "festék" nem fogja teljesen elfedni a korábbi köröket, csak elhalványítani. Az egér egyre halványuló csíkot fog maga után húzni.  

#### Csillagos: egyenletesen halvány background a draw-ban
```
function setup() {
    createCanvas(windowWidth, windowHeight)
    fill("black")
}

function draw() {
    background(255, 255, 255)
    circle(mouseX, mouseY, 100)
    background(255, 255, 255, 50)
}
```
Eredmény: a vásznat minden kör előtt teljesen fehérre (255, 255, 255) festjük, ezzel mindent kitörölve. Megrajzoljuk a fekete kört, majd ennek a tetejére festünk megint fehérrel, de csak egy félig átlászó fehérrel. Így a kör nem fog még halványuló csíkot sem húzni maga után, hiszen a vásznat minden kör elején töröljük, viszont végeredményben a kör mégis kicsit halványan fog megjelenni, mert mindig ráfestünk egy félig átlátszó fehérrel.  

### 2. mouse

A félév során írt programokban az egérkattintást látszólag önkényesen hol `mousClicked()` függvénnyel, hol a `mouseIsPressed` változóval teszteltük. Valójában a program működését jelentős részben meghatározza, hogy melyik megoldást használjuk.  

#### mouseIsPressed

A `mouseIsPressed` változót a draw-ban használjuk egy `if` feltételeként. Az `if`-be írt parancsok újra meg újra lefutnak, mindaddig, amíg nyomva tartjuk az egér gombját. Az akkor hasznos, ha valami időben elnyúló, folyamatos dolog függ az egérgomb lenyomásától. Például: csak akkor akarunk csíkot húzni az egérrel, ha le van nyomva az egérgomb. Vagy: amíg le van nyomva az egérgomb, addig tartsa nyitva a száját az alligátor alakú sprite, különben viszont csukja be. Ha ezekben a programokban `mouseClicked()`-et használnánk `mouseIsPressed` helyett, akkor az egér csík húzása helyett egyetlen kört rajzolna; az alligátor folyamatos szájtátás helyett csak egy gyorsat csattintana az állkapcsával.  

#### mouseClicked()

A `mouseClicked()` egy külön függvény a `setup()` és a `draw()` után. A bele írt parancsok akkor futnak le, ha kattintunk az egérrel, de akkor csak pontosan egyszer. (Egész pontosan az egérgomb felengedésekor.) Ez akkor hasznos, ha valaminek csak egyszer kell megtörténnie: például a kattintás helyén létrehozunk egy süni alakú sprite-ot, kattintásra le- vagy felkapcsolunk egy lámpát, vagy elindítunk egy hangot. Ha ezekben a programokban draw-n belüli `mouseIsPressed`-et használnánk, minden többször történne meg: a kattintás helyén több süni jönne létre, a lámpa többször fel- és lekapcsolódni egyetlen kattintás alatt, és a hang többször is elindulna. (Jó, oké, ez a legutolsó nem igaz, de csak az én segédfüggvényem megvéd ettől. Alapesetben igaz lenne.)  

#### if vagy nem if

A `mouseIsPressed` változó vizsgálata a draw-ban történik. A draw mindig újra meg újra lefut, egérgombtól függetlenül. Ezért kell az egérgomb lenyomásához kapcsolódó parancsainkat `if`-be tenni: hogy csak akkor történjenek meg, ha az egérgomb le van nyomva.  
A `mouseClicked()` viszont eleve csak akkor fut le, ha megnyomjuk az egeret, tehát ebben a függvényben már nem kell megvizsgálnunk, hogy le van-e nyomva az egérgomb. (Ha mégis megpróbáljuk, akkor még csak működni sem fog a programunk, mivel a `mouseClicked()` - a `mouseReleased()` aliasaként - pontosan az egérgomb _felengedésekor_ fut le, tehát mire a program futása az `if`-hez ér, addigra már pont nincs lenyomva az egérgomb.)  
Egyszóval: `mouseClicked()`-en belül már __nem írunk__ `if (mouseIsPressed)` feltételt.  

### 3. if

Az `if` feltételeivel kapcsolatban két probléma szokott felmerülni. Ebből az egyik komoly hiba; a másik csak felesleges túlbonyolítás, bár hibát nem okoz.  

#### = vagy ==

A szimpla egyenlőségjel _értékadásra_ használatos: egy változóba belerakunk egy értéket (a bob-ba a sprite-ot, a bob.position.x-be a 100-at, a bob.immovable-be a true-t).  
A dupla egyenlőségjel _számok és stringek vizsgálatára_ használatos: megkérdezzük, hogy a változó értéke éppen megegyezik-e valami mással (a bob.position.x a 100-zal, a lamp az "off"-fal).  
A különbség létfontosságú. A lényeg: __if-en belül mindig dupla egyenlőségjelet használunk, sosem szimplát.__  
Ha mégis elgépeltük volna a programot, a JSBin egy nagy piros x-szel hívja fel a figyelmet a hibánkra. Hibaüzenetet is ad: "Expected a conditional expression and instead saw an assignment." Magyarul: feltételes kifejezést (összehasonlítást) vártam, és helyette egy értékadást kaptam.  
Megjegyzés: ha mégis benne hagyjuk a szimpla egyenlőségjelet a feltételben, a program le fog futni (és a konzolon sem látunk majd hibaüzenetet), de nem úgy fog viselkedeni, ahogy szeretnénk.  

#### if (bob.touching.bottom) { ... }

Háromféle változót ismerünk: szám, szöveg (string), igaz/hamis. Mikor if-ben vizsgáljuk őket, különböző lehetőségeink vannak a különböző típusoknál:  
* számokat tudunk egyenlőség szerint összehasonlítani (==) vagy egyenlőtlenség szerint (<, >, <=, >=)  
* szövegeket tudunk egyenlőség szerint összehasonlítani (==), de "kisebb" vagy "nagyobb" operátort nyilván nem tudunk rájuk alkalmazni  
* igaz/hamis változókat pedig __semmivel sem kell összehasonlítanunk__, mert __önmagukban is elegendőek feltételnek.__  

Táblázattal:  

| változó típusa | operátorok az if-ben       |
|----------------|----------------------------|
| szám           | `==`, `<`, `>`, `<=`, `>=` |
| string         | `==`                       |
| igaz/hamis     | __nincs operátor__         |

Tehát írhatjuk pl. azt, hogy `if (mouseIsPressed)`, vagy `if (bob.touching.bottom)`, és __nem kell__ azt írnunk, hogy `if (mouseIsPressed == true)`, vagy `if (bob.touching.bottom == true)`. Nem fog hibát okozni, ha ezt írjuk, és a programunk helyesen is fog működni... éppen csak teljesen felesleges ez az összehasonlítás.  

Csillagos magyarázat:  
Ennek az oka az, hogy a JavaScript valójában minden feltételt `true` vagy `false` kifejezéssé alakít magában. Tehát az `if` valójában csak két esetet ismer: `if (true)` és `if (false)`.  
Mikor a program futás közben változókkal találkozik, azokat lefordítja az értékükre. Ha például van egy `mouseX`, egy `lamp` és egy `mouseIsPressed` változónk, futás közben a `mouseX` helyén például 655, a `lamp` helyén például `"on"`, a `mouseIsPressed` helyén például `true` szerepel.  
Ha ezeket a változókat beleírjuk egy if-be, a következő történik: az `if (mouseX)` kifejezés lefordul `if 655)`-re, ennek viszont nincs értelme: mint írtam, az `if` csakis a `true` és a `false` feltételeket érti. Ugyanebből az okból kifolyólag értelmetlen az `if (lamp)` kifejezés is: ez úgy fordul le, hogy `if ("on")`, ami még mindig sem nem `true`, sem nem `false`. A fentiekkel szemben azonban a `mouseIsPressed` egy igaz/hamis típusú változó, ezért az `if (mouseIsPressed)` kifejezés így fordul le: `if (true)`. Ezt pedig a gép már érti és végre tudja hajtani. Tehát az igaz/hamis típusú változókat önmagukban is bele lehet írni if-be, nem kell őket semmivel összehasonlítani.  
Ahhoz, hogy a `mouseX`-ből és értelmes feltétel legyen, össze kell valamivel hasonlítani. Például azzal, hogy nagyobb-e 500-nál. Az `if (mouseX)` kifejezés ugye csak arra fordul le, hogy `if (655)`, és ennek nincs értelme. De az `if (mouseX > 500)` lefordulás utána `if (655 > 500)`-zá alakul, ami pedig átmegy még egy fordítási lépésen: mivel a 655 valóban nagyobb 500-nál, a `655 > 500` kifejezés átalakul `true`-vá, ezzel pedig az egész feltétel elnyeri az `if (true)` alakot. Ami pedig, mint láttuk, már tökéletesen érthető a program számára is.  
Ugyanez a helyzet a string típusú `lamp` változóval: az `if (lamp)` kifejezés az értelmetlen `if ("on")`-ra fordul, viszont az `if (lamp == "on")` arra, hogy `if ("on" == "on")`, ez pedig még egy lépéssel tovább arra, hogy `if (true)` - és kész is a feltétel.  

### 4. random

A `random()` függvényt eddig csak arra használtuk, hogy véletlenszámokat generáljuk vele. A függvénynek azonban van egy másik használati módja is: mikor egy listából akarunk véletlenszerűen választani. 

#### random tömbökön

Ha számok helyett egy listát (tömböt) adunk át a randomnak, akkor visszaadja a tömb egy véletlenszerűen kiválasztott elemét. Tömböt úgy tudunk csinálni, hogy szögletes zárójelek között felsoroljuk az elemeit, vesszővel elválasztva. Például: `random([1, 2, 3])` - ez a kifejezés visszaadja az 1, 2 vagy 3 számot. Vagy: `random(["egyik", "másik"])` - ez vagy azt adja vissza, hogy "egyik", vagy azt, hogy "másik".  
Használhatjuk például arra, hogy véletlenszerűen adjunk alakot egy sprite-nak több betöltött kép közül:  
```
function preload() {
    catImg = loadimage(...)
    dogImg = loadimage(...)
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    animal = createSprite()
    animal.addImage([catImg, dogImg])
}
```
Ebben a programban az `animal` nevű sprite-nak 50% valószínűséggel kutya, 50%-kal macska alakja lesz.  

Esetleg arra, hogy valaki véletlenszerűen induljon el a négy irány körül valamerre:  
`bob.setSpeed(5, random([0, 90, 180, 270]))`  

#### random groupokon

A csoportok tanulásakor említettük, hogy a "csoport" típus valójában egy felokosított tömb. Ez azt jelenti, hogy mindent, amit egy tömb tud, azt tudja a csoport is. Tehát akkor a random-nak is lehet tömb helyett csoportot átadni. Ez a kifejezés például véletlenszerűen mozdítja meg valamelyik sprite-ot:  
`random(allSprites).position.x += 100`  
Vagy ha például van egy `stars` csoportunk, és valamelyiket el akarjuk belőle venni:  
`random(stars).remove()`  

#### random egész számok

Még egy trükk: a random függvény eleve törtszámot generál, ami nem mindig felel meg a céljainknak. Ha egész számot szeretnénk, használjuk a `round()` függvényt:  
`grade = round(random(1, 5))`  
Ez a sor mindig egész számot fog visszaadni egy és öt között.  

### 5. helpers

A félév során minden programunk importált egy `marca-helpers.js` nevű fájlt. Ebben néhány általam írt segédfüggvény szerepelt. Aki kíváncsi ezekre, ~~hamar megöregszik~~ annak érdemes [belelesnie a fájlba](https://github.com/endreymarcell/p5-2017-spring/blob/master/etc/marca-helpers.js). Kiderülhet belőle többek között, hogy p5-ben nincs is `circle()` függvény.  

## Képernyőkímélő-ötletek

### Matrix rain
Írj egy programot, ami a mátrixos betűesőt rajzolja meg.  
(Ez a program elég rövid, de több olyan dolog is van benne, amit órán nem tanultunk.)  

Ebben a programban egy nagy trükk van: a sprite helyén nem színes négyzetet vagy betöltött képet kéne mutatni, hanem odaírni egy betűt (kezdésnek például mindig csak egy "M" betűt). Ennek a megvalósítását ld. az ötödik óra jegyzet végén.  
Ha megvan egy sprite-od, aminek betű-alakja van, állítsd a hátteret feketére, a betűt világoszöldre, és mozgasd felülről lefelé. Mivel a betűk nem folyamatosan haladnak, hanem soronként ugrálnak lefelé, ezért ehhez most nem `setSpeed()` kell, hanem neked kell kézzel mindig megnövelni az y-koordinátáját. Ha ez megvan, a `frameRate()` függvénnyel állítsd be a megfelelő sebességet, és a `background()` megfelelő használatával oldd meg a betű halványodását.  
Írd meg azt is, hogy a sprite a vászon tetejéről, random szélességről induljon, és azt is, hogy ha túlment a vászon alján, ugorjon megint a tetejére, de random szélességre.  
Ahhoz, hogy megkapd a mátrixos betűket, add hozzá [ezt a pár sort](https://gist.github.com/endreymarcell/64daa231b853cae5a164fa3fde9da2fa) a setup-hoz. Ennek eredményeképpen lesz egy `letters` nevű tömböd, amit át tudsz adni a `random()`-nak, hogy véletlen betűt válasszon belőle a betű kirajzolása előtt.  
Ha ez is kész, már csak sokszorozni kell. Csinálj egy helyett sok sprite-ot (for ciklus a setupban), és mindegyik viselkedjen ugyanúgy (for ciklus a draw-ban). Ahhoz, hogy ne egyszerre induljanak el a vászon tetejéről, létrehozáskor ne pont a vászon tetejére tedd őket, hanem random magasságba valamivel a vászon teteje fölött (negatív y-koordináta). Ugyanez történjen, mikor kimennek a vászon alján.  

### Akvárium

Írj egy programot, amiben halak úszkálnak és buborékok lebegnek egy akváriumban.  
(Ez a program elég hosszú, cserébe kevesebb újdonságot tartalmaz.)  

Csinálj egy hal-sprite-ot, ami a vászon egyik szélén kívül indul random magasságban, átúszik a túloldalra, és ha kiúszott a vászonról, ismét átkerül az előző szélre, random magasságba.  
Ha ez megvan, csinálj belőle többet (csoport és for ciklus a setupban) és állítsd be, hogy ugyanúgy viselkedjenek (for ciklus a draw-ban). A sprite-ok `scale` változójának random állításával elérheted, hogy különböző méretűek legyenek (ld. az online referenciát vagy a kisokost). Ne pont a vászon széléről indítsd őket, hanem random egy kicsit arrébbról, hogy különböző időben ússzanak be.  
Ha ez megvan, hasonló módon csináld meg a buborékokat is. A viselkedés gyakorlatilag megegyezik (csoport, for ciklus, beúszás, scale stb.) csak nem vízszintesen, hanem függőlegesen haladjanak.  
Extraként beleírhatod, hogy a halak ne egyenletes sebességgel ússzanak, hanem induljanak el, álljanak meg, álldogáljanak egy darabig, megint ússzanak előre egy kicsit stb. Ehhez az kell, hogy ne kapjanak sebességet létrejöttükkor, csak valamennyi súrlódást, és a draw-ban kapjanak néha sebességet - de csak néha. Egyrészt csak akkor, ha, teszemazt, épp hatost dobunk egy kockával (random és társai), továbbá csak akkor, ha a hal épp nem mozog. Gondolkodtatónak jó lesz.  

### Az éjszaka csodái

Írj egy programot éjszakai házakkal, pislákoló ablakokkal, átúszó felhőkkel, kutyaugatással, autókkal...  
(Ebben a programban kevés a sprite és sok a rajzolás.)  

Rajzolj sötétkék háttérre épületeket világító ablakkal. (Mindez mehet `fill()` és `rect()` megfelelő kombinációjával.) Az égen legyen hold (image), és ússzon át rajta felhő (sprite).  
Extrák (válogass közülük tetszés szerint):  
* A hold és a felhő legyenek félig átlátszóak (`tint()`).  
* A felhő, ha átért a vászon egyik oldaláról a másikra, induljon el újra az egyikről (if-fel teszteld, hogy kiment-e a vászonról, és állítsd vissza az x koordinátáját).  
* Időnként hallatsszon kutyaugatás. Az "időnként" részt úgy tudod megoldani, hogy a program indulásakor egy számlálót beállítasz egy nagy random számra (százas nagyságrend), a draw-ban mindig csökkented eggyel, és megnézed, elérte-e már a nullát. Ha elérte a nullát, játsszd le az ugatás-hangot (az előző órai gyűjteményben találsz hozzá hangfájlt), és állítsd a számlálót megint egy nagy véletlenszámra. (Ne felejtsd el, hogy a hangfájlok lejátszásához kelleni fog a p5.sound plugin importálása a HTML fájlban.)  
* Az egyik ablakban időnként kapcsolódjon fel és le a villany. Ez hasonlít a kutyaugatáshoz annyiban, hogy egy számlálóval érdemes visszaszámolni, és nullánál váltani. Viszont mivel itt nem mindig ugyanazt kell csinálni, mint a kutyaugatásnál, hanem felváltva le- és felkapcsolni a lámpát, kelleni fog még egy változó, amiben számon tartod, hogy épp fel vagy le van kapcsolva. A draw függvényben ennek az ablaknak a megrajzolása függjön ettől a változótól (if). Továbbá ha a számláló elérte a nullát (if), nézd meg, mi éppen a lámpa állapota (még egy if az előzőn belül), és ha fel van kapcsolva, kapcsold le, ellenkező esetben kapcsold fel. (Segítség: hasonló programot írtunk már, csak nem számlálóval, hanem egérkattintással.)  
* Időnként hajtson el egy autó a házak előtt. Ez is egy sprite, ami a felhőkhöz hasonlóan működik: ha átért a vásznon, vissza kell állítani az x koordinátáját. Hogy legyen némi idő az autó elhajtásai között, és ne folyamatosan hajtson át újra meg újra a vásznon, állítsd az x koordinátáját bőven a vásznon kívülre, hogy sokáig tartson, míg újra beér.  
* Ha a holdat és a felhőket korábban `tint()`-tel átlátszóvá tetted, akkor most az autó is átlátszó lesz - oldd meg, hogy ez ne legyen így. Ehhez csinálj egy csoportot, tedd bele az autó-sprite-ot, az összes sprite-ot megrajzoló parancs után add ki újra a `tint()` parancsot átlátszóság nélkül, és hívd meg a rajzolást az autós csoportra is.  
* Mikor az autó áthajt a vásznon, játssz le autóhangot.  


### Csápolás
Írj egy programot, ami látványos, színes Bezier-görbéket rajzol.  
(Ebben a programban sok a sprite és kevés a rajzolás.)  

Hozz létre négy sprite-ot random helyen. Rajzolj rájuk egy Bezier-görbét a `bezier()` függvénnyel, ami nyolc számot vár: konkrétan négy pont koordinátáit. Ebből már láthatod, hogy fog működni a program.  
A vonalvastagságot állítsd jó nagyra, a vonal színét pulzáltasd, hogy folyton változzon, és adj neki némi átlátszóságot. Adj hozzá a programhoz négy fal-sprite-ot a vászon négy szélén, tedd őket egy fal-csoportba. A négy pont-sprite-ot tedd láthatatlanná (`visible` változó), adj nekik random sebességet, és pattintsd le őket a falakról.
Ha minden szuper, csinálj még 8 sprite-ot, és belőlük még két csápot.  
Extra: a pont-sprite-ok mozgását ne csak a kezdeti random irányú sebesség döntse el, hanem menet közben is változtasd egy kicsit a mozgásukat. Ehhez tedd őket csoportban a setupban és manipuláld őket tetszőleges a draw-ban (véletlen sebesség hozzáadása, sebesség korlátozása, vonzáspoint stb.).  

### Pasziánsz
Írd meg a windowsos pasziánsz-program végén látható pattogó kártyás animációt.  
(Ez a program nem túl nehéz, cserébe nem is túl könnyű.)  

[Itt egy preload](https://gist.github.com/endreymarcell/bba7ff307d22d408e90962777bd431cf), hogy ne kelljen a képek keresésével időt tölteni. Az összes képet egy `images` nevű tömbbe töltöttem, amit ugyanúgy lehet indexelni, mint a csoportokat (tehát pl. `images[0]` az első kép).  
Két darab sprite-ra lesz szükséged, az egyik a padló, amiről vissza lehet pattanni, a másik a mindenkori aktuális kártya. Az utóbbinak add alakul az első kártya képét, és dobd el a képernyő tetejéről kicsit ferdén, illetve a draw-ban állítsd neki gravitációt és visszapattanást a földről. Hogy mindig kicsit kevésbé pattanjon vissza, állítsd be a setupban a rugalmasságát.  
Írd meg, hogy ha a kártya kipattogott a képből, akkor felveszi a második kártya-képet alakul, és újra elindul ugyanonnan, a vászon tetejéről. Az indulási sebessége legyen véletlenszerű, az iránya pedig random módon vagy 215, vagy 325. A kártyákon való végighaladást úgy célszerű csinálni, hogy a program elején csinálsz magadnak egy számolásra használatos változót, nulláról indítod, és mindig megnöveled, mikor a kártya-sprite elhagyta a vásznat. Ezt a változót utána használhatod indexként, mikor a képek tömbjéből beállítod a megfelelő képet a sprite-nak.  
Ha azt is szeretnéd, hogy a kártyát ne ugyanonnan induljanak, hanem négy pakliból, ahogy a játékban is, használd ezt a képletet a sprite induló x-koordinátájának kiszámolására: `width - 380 + (num % 4) * 100` (ahol `num` a számláló változó). A program indulása előtt rajzold is oda a négy királyt a négy pakli tetejére.  
