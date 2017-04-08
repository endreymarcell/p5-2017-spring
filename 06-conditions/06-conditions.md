# Hatodik óra: feltételek (if)

## Feltételes szerkezet

### Magyarázat

A program futása során vannak olyan parancsok, amiket csak bizonyos esetben akarunk lefuttatni. Ilyenre már láttunk példát akkor, mikor a `mouseClicked()` vagy a `keyPressed()` függvénybe gyűjtöttük azokat a parancsokat, amiket egérkattintáskor vagy billentyűlenyomáskor akartunk futtatni. Ez azonban csak két nagyon konkrét eset. Ennél sokkal több helyen, általánosabban lehet feltételeket szabni egy program futásának. Az is fontos különbség, hogy ez a két függvény konkrétan a p5 saját megoldása, és azért működnek, mert a p5 a háttérben működteti őket. Általában vett feltételes szerkezet avagy elágazás azonban nem csak p5-ben van, hanem magában a JavaScriptben, illetve bármelyik másik nyelvben is. Az is gyakori, hogy az egérkattintás után még további feltételeket akarunk szabni: például ha a programunk közepén van egy gomb, akkor nem csak arra vagyunk kíváncsiak, hogy a felhasználó kattintott-e, hanem arra is, hogy _a gombra_ kattintott-e, vagy csak akárhova a képernyőn. Vagy ha egy programban kattintással lehet fel-le kapcsolni a lámpát, akkor az egérkattintás után arra vagyunk kíváncsiak, hogy éppen fel vagy le van kapcsolva a lámpa stb.  

Feltételes szerkezetet tehát akkor használunk, ha bizonyos parancsok lefutását feltételhez szeretnénk kötni. A feltételes szerkezetnek ennek megfelelően két része van: a feltétel, illetve a parancslista. Ha a feltétel igaz, a parancsok végrehajtódnak; ha nem, a program végrehajtás nélkül átugorja őket.  

### Feltételek

A feltételek olyan kifejezések, amik vagy igazak, vagy hamisak. Ezt úgy tudjuk kipróbálni, hogy a kifejezést beírjuk a konzolba és entert nyomunk. Ha a konzol a `true` vagy a `false` szóval válaszol, akkor a kifejezésünk használható feltételnek.  

__FELTÉTELEK TÍPUSAI:__  
__Egyenlőség:__ valami megegyezik valami mással. Általában szám vagy szöveg típusú változók értékét vizsgáljuk így.  
Például az első órán a `stars` változóban tároltuk, hány csillagos a kávézónk; ha tudni akarjuk, öt-e a csillagok száma, az ezt vizsgáló feltétel a `stars == 5`. (Figyelem: fontos a két egyenlőségjel! Ha egy változónak _értéket akarunk adni_, akkor _egy egyenlőséget_ használunk. Ha egy változót nem akarunk módosítani, csak kíváncsiak vagyunk rá, hogy _mennyi jelenleg_ a benne tárolt érték, akkor _két egyenlőségjelet_ használunk.)  
Ha kávézónk nevét a `company` változóban tároljuk, arra hasonlóképpen tudunk tesztelni: a `company == "Startbucks"` feltétel azt vizsgálja, "Starbucks"-e a kávézónk neve.  
További példák:  
- `mouseX == 200` --> az egér x koordinátája megegyezik 200-zal?  
- `bob.width == 100` --> száz képpont széles a bob nevű sprite-om?  
- `alice.position.x == width / 2` --> az alice nevű sprite a vászon felénél van vízszintesen?  

__Egyenlőtlenség:__ valami kisebb vagy nagyobb mint valami más. Szám típusú változókkal szoktuk használni. Összehasonlításhoz a kisebb (`<`), nagyobb (`>`), kisebb vagy egyenlő (`<=`), nagyobb vagy egyenlő (`>=`) operátorokat használhatjuk.  
Példák:  
- `mouseX > 200` --> az egér x koordinátája nagyobb, mint 200?  
- `mouseX > width / 2` --> az egér x koordinátája nagyobb, mint a vászon szélességének fele? tehát: az egér a vászon jobb oldalán tartózkodik?  
- `bob.friction < 1` --> bob csúszóssága kisebb egynél? tehát: bob súrlódik?  
- `bob.position.x < mouseX` --> bob x koordinátája kisebb az egér x koordinátájánál? tehát: bob balrább van, mint az egér?  
- `bob.height > alice.height` --> magasabb bob alice-nál?  

__Igaz/hamis függvények:__ vannak olyan függvények, amik meghíváskor `true` vagy `false` értékkel válaszolnak. Ilyen például a sprite-ok `overlap()` függvénye, ami paraméterként egy másik sprite-ot vár, és megmondja, hogy a két sprite fedi-e egymást, rálóg-e egymásra. Pl. `bob.overlap(alice)` --> bob és alice fedésben vannak éppen?  
Figyelem: az eddigi sprite-függvények tipikusan nem vizsgáltak, hanem csináltak valamit. A `setSpeed()`, a `bounce()`, az `attractionPoint()` egyike sem jó feltételnek, mert nem az a dolgok, hogy megvizsgáljanak valamit, és igazzal vagy hamissal válaszoljanak, hanem az, hogy konkrétan csináljanak valamit a sprite-tal. Ezzel szemben az `overlap()` függvény nem módosítja a sprite-ot: nem mozgatja, nem forgatja, nem állít át rajta semmit. Az `overlap()` nem olyan, mint egy utasítás, amit végre kell hajtani, inkább olyan, mint egy kérdés. A kérdésre pedig `true` vagy `false` választ fog adni, tehát használható feltételnek.  

__Igaz/hamis változók:__ olyan változók, amik eleve `true` vagy `false` értéket tárolnak. Szemben a fent ismertetett változókkal, amik számokat vagy szöveget tároltak, és ezért érdemes volt összehasonlítani őket valamivel (kisebb? nagyobb? megegyezik?), az igaz/hamis változók nems számot vagy szöveget, hanem eleve egy igaz vagy hamis (`true`, illetve `false`) értéket tárolnak el. Ilyen például a sprite-ok `immovable` változója. Ez a változó vagy `true`, vagy `false`, tehát önmagában is jó feltételnek, nem kell mással összehasonlítani.  
Ezzel szemben például a sprite-ok `mass` (tömeg) változója egy számot tárol, tehát lehet máshoz hasonlítani. Például ez egy helyes feltétel lenne: `bob.mass == 100` (--> "bob tömege 100?"). Az `immovable` azonban nem számot tárol, hanem eleve `true` vagy `false` értéket, tehát ez a változó önmagában tud feltétel lenni: `bob.immovable` (--> bob mozdíthatatlan?)  

__Csillagos__  
Több feltételt is össze tudunk kapcsolni a logikai ÉS, illetve VAGY operátorokkal. Az előbbi jele `&&`, az utóbbié `||`. Feltételeket negálni is lehet egy eléjük írt felkiáltójellel. Például a "`mouseX` nagyobb száznál és nincs lenyomva billentyű" feltételt így írhatjuk feltételes szerkezetbe: `if (mouseX > 100 && !keyIsPressed) { ... }`  

### Szintaxis és példák

A feltételes szerkezet felépítése a következő: 
```
if («condiditon») {
	// commands
}
```
Ahol a `«condiditon»` helyére egy feltételt kell írni, a `// commands` helyére pedig a feltétel igazsága esetén végrehajtandó parancsokat.  
Tehát először kiírjuk az `if` kulcsszót, utána _zárójelet nyitunk_, és a zárójelek közé írjuk a feltételeket (ld. a fenti példák bármelyikét). A zárójel lezárása után _kapcsos zárójelet_ nyitunk, és új sorba kezdjük el írni a parancsot vagy parancsokat, amiket a feltétel igazsága esetén végre szeretnénk hajtani. A függvényekhez hasonlóan a kapcsos zárójel itt is arra szolgál, hogy összefogja, csoportosítsa az utasításokat, és itt is beljebb kezdődnek a kapcsos zárójelek közötti sorok, hogy vizuálisan is jelezzék a program szerkezetét.  

Példa egyenlőséggel:  
"Ha az egér x koordinátája pont 200, akkor színezzük kékre a vásznat."  
```
if (mouseX == 200) {
	background("blue")
}
```

Példa egyenlőtlenséggel:  
"Ha bob x koordinátája nagyobb a vászon felénél, akkor kezdjen el forogni."  
```
if (bob.position.x > width / 2) {
	bob.rotationSpeed = 1
}
```

Példa igaz/hamis függvénnyel:  
"Ha bob fedésben van alice-szel, akkor bob induljon el jobbra, alice pedig balra."  
```
if (bob.overlap(alice)) {
	bob.setSpeed(2, 0)
	alice.setSpeed(2, 180)
}
```

Példa igaz/hamis változóval:  
"Ha bob mozdíthatatlan, akkor színezzük őt pirosra."  
```
if (bob.immovable) {
	bob.shapeColor = "red"
}
```

### oneway, twoway

Implementáljuk az előző órán megismert `oneway()` és `twoway()` segédfüggvényeket `if` segítségével!  

__oneway__  
`bob.position.x = oneway(200, 400)`  
Magyarázat: bob vízszintesen induljon 200 pixeltől, haladjon fokozatosan 400-ig, oda érve pedig ugorjon vissza 200-ra és induljon előről. Ha nem adunk meg harmadik paramétert a függvénynek, akkor a haladás sebessége automatikusan 1 lesz.  
Ugyanez `if`-fel (feltételezve, hogy bob már eleve 200-on áll):  
```
bob.setSpeed(1, 0)
if (bob.position.x == 400) {
	bob.position.x = 200
}
```
Magyarázat: bob haladjon jobbra 1-es sebességgel. Ha x koordinátája eléri a 400-at, tegyük őt vissza 200-ra.  
Megjegyzés: a fenti kódrészletben jól megfigyelhető az összehasonlítás (`==`) és az értékadás (`=`) különbsége.  

__twoway__  
`bob.position.x = twoway(200, 400, 2)`  
Magyarázat: bob vízszintesen induljon 200 pixeltől, haladjon 2-es sebességgel fokozatosan 400-ig. Ha elért 400-ig, induljon el az ellenkező irányba, és haladjon vissza egészen 200-ig. 200-nál megint forduljon meg, és így tovább.  
Ugyanez `if`-fel (feltételezve, hogy bob már eleve 200-on áll):  
```
bob.setSpeed(2, 0)
if (bob.position.x == 400) {
	bob.setSpeed(2, 180)
}
if (bob.positon.x == 200) {
	bob.setSpeed(2, 0)
}
```
Magyarázat: bob haladjon jobbra 2-es sebességgel. Ha x koordinátája eléri a 400-at, forduljon meg, tehát haladjon balra (180-as irányba) 2-es sebességgel. Ha visszaért 200-hoz, ismét forduljon meg, haladjon megint jobbra.  

Figyelem: ha egy sprite-nak sebességet adunk, majd a koordinátáit viszgáljuk, akkor figyelnünk kell arra a hibalehetőségre, hogy a sprite pont "átugorja" azt az adott koordinátát. Ugyanis ha egy sprite-ot mondjuk 3-as sebességgel indítunk el vízszintesen, az azt jelenti, hogy a `draw()` függvény minden lefutásakor 3-mal nő az x koordinátája. Ha 0-tól indult, akkor először 3-ra nő, majd 6-ra, 9-re, 12-re stb. És ha mi például arra szeretnénk tesztelni, hogy 100-nál van-e épp (`if (bob.position.x == 100)`), akkor azt tapasztaljuk, hogy a feltétel sosem fog teljesülni, hiszen a 100 nem osztható 3-mal, a sprite tehát át fogja ugrani ezt a koordinátát. Ilyenkor praktikusabb egyenlőség helyett egyenlőtlenséggel vizsgálni: az `if (bib.position.x > 100)` már működni fog.  


### "különben"-ág

Az `if` szerkezetnek van még egy, opcionális része, amit eddig elhagytunk. Ez az úgynevezett "különben"-ág.  
Vegyük a következő példát: olyan programot akarunk írni, ami kékre színezi a vásznat, ha az egeret a vászon bal oldalán tartjuk, és pirosra, ha a vászon jobb oldalán. Így nézhetne ki a `draw()` függvényünk:  
```
function draw() {
	if (mouseX < width / 2) {
		background("blue")
	}
	if (mouseX > width / 2) {
		background("red")
	}
}
```
Magyarázat: "_ha_ az egér a vászon bal oldalán van, _akkor_ színezd a vásznat kékre. _Ha_ az egér a vászon jobb oldalán van, akkor színezd a vásznat pirosra."  
Észrevehetjük, hogy a fenti két feltételt igazából össze tudjuk vonni egybe: "_ha_ az egér a vászon bal oldalán van, _akkor_ színezd a vásznat kékre, _különben_ színezd a vásznat pirosra."  
Tehát nem kell külön feltételt írnunk arra, hogy az egér a vászon jobb oldalan van. Egyszer már megvizsgáltuk, hogy a bal oldalon van-e, ha pedig nem ott van, akkor csak a jobb oldalon lehet... Tehát a jobb oldalra már nem kell külön vizsgálat, elég beleírnunk a bal oldalas feltétel "különben" ágába.  
Ezt a "különben" ágat JavaScriptben az `else` kulcsszó jelöli. Az `else`-et a záró kapcsos zárójel után kell kiírni, utána újabb kapcsos zárójelet nyitni, és ide írni az utasításokat, amiket akkor akarunk lefuttatni, ha a feltétel hamisnak bizonyul.  
Jelen esetben tehát a fenti programot így alakíthatjuk át rövidebbre:  
```
function draw() {
	if (mouseX < width / 2) {
		background("blue")
	} else {
		background("red")
	}
}
```
Magyarázat: "_ha_ az egér a vászon bal oldalán van, _akkor_ színezd a vásznat kékre, _különben_ színezd a vásznat pirosra."  

Általánosan:  
```
if («condiditon») {
	// do this, if the condition is true
} else {
	// do this, if the condition is false
}
```

## Felhasználási módok

### Rajzolás
p5-ben van egy változó, aminek a neve `mouseIsPressed`, az értéke pedig mindig igaz vagy hamis (`true` vagy `false`), attól függően, hogy épp lenyomva tartjuk-e az egérgombot. Ezt a változót tipikusan a `draw()` függvényen belül használjuk. Itt van például egy példaprogram, ami narancssárgára színezi a vásznat, ha épp lenyomjuk az egérgombot, különben viszont feketére:  
```
function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	if (mouseIsPressed) {
		background("orange")
	} else {
		background("black")
	}
}
```
Figyeljük meg, hogy a `mouseIsPressed` változót nem kell semmivel összehasonlítani, a változó egymagában szolgál feltételként.  

A következő program a Paint egy kezdetleges változata lehetne: vonalat tudunk benne húzni az egérrel, ha lenyomjuk az egérgombot.  
```
function setup() {
	createCanvas(windowWidth, windowHeight)
	background("white")
	noStroke()
	fill("blue")
}

function draw() {
	if (mouseIsPressed) {
		circle(mouseX, mouseY, 10)
	}
}
```
Magyarázat: a `draw()`, mint tudjuk, újra meg újra lefut, akár 30-szor is egy másodperc alatt. Minden futáskor megvizsgáljuk, hogy le van-e épp nyomva az egér gombja. Ha úgy találjuk, hogy le van nyomva, akkor teszünk egy "pöttyöt" (egy tíz pixel átmérőjű kört) a kattintás helyére. Ha fokozatosan nyomva tartjuk az egeret, akkor sok-sok pötty kerül egymás mellé, és folyamatos vonallá állnak össze.  

Figyelem: bár korábban tanultunk egy hasonló elemet, ami szintén az egérgomb lenyomására figyelt - ez volt a `mouseClicked()` függvény -, a kettő között fontos különbségek vannak. Az egyik persze az, hogy a `mouseIsPressed` egy változó, amit a p5 hoz létre és mi használunk, a `mouseClicked()` pedig egy függvény, amit mi hozunk létre, és a p5 fogja meghívni. Azonban nem csak a formájuk, a használatuk is különböző. A `mouseClicked()` függvény minden kattintásnál egyetlen egyszer fut le. Olyan esetekben használjuk, mint például egy gomb megnyomása, egy sprite létrehozása, vagy egy kép rajzolása a vászonra. A `mouseIsPressed` ellenben a `draw()` függvény belsejében használatos, és nem egyszer lesz igaz, hanem mindaddig, amíg nyomva tartjuk az egérgombot. Tehát ha egyszer, hosszan lenyomjuk az eger gombját, akkor a `mouseClicked()` egyszer fog lefutni, a `mouseIsPressed` viszont sokszor lesz egymás után igaz.  
Ha tehát az előző, rajzolós programunkat úgy írtuk volna meg, hogy `if (mouseIsPressed)` helyett egy külön `mouseClicked()` függvénybe tesszük a `circle()` parancsot, akkor nem tudnánk vele vonalat húzni, mert minden egyes kattintás csak egyetlen kört szülne.  

### Sprite-ok
Korábban már említettük a sprite-ok `overlap()` függvényét.  
Itt van egy példaprogram, amiben két sprite van. Az egyik, bob, az egeret követi, és ha fedésbe kerül a másikkal, alice-szel, akkor az eredeti kék színe helyett pirosra változik.  
```
function setup() {
	createCanvas(windowWidth, windowHeight)
	bob = createSprite()
	bob.shapeColor = "blue"
	alice = createSprite(width / 2, height / 2)
}

function draw() {
	background("white")
	allSprites.draw()

	bob.position.x = mouseX
	bob.position.y = mouseY

	if (bob.overlap(alice)) {
		bob.shapeColor = "red"
	}
}
```

A fenti verzióban ha bob egyszer pirosra változott, örökre úgy is marad. Ha azt szeretnénk, hogy visszaváltozzon kékre, "különben"-ágat kell hozzátennünk a feltételhez:  
```
if (bob.overlap(alice)) {
	bob.shapeColor = "red"
} else {
	bob.shapeColor = "blue"
}
```

Sprite-ok persze nem csak egymásra tudnak rálógni, gyakran az is érdekel minket, hogy hol állnak az egérhez képest. A sprite-ok `mouseIsOver` változója megmondja, hogy a sprite felett van-e éppen az egér; a `mouseIsPressed` változója azt, hogy felette van-e és meg van-e nyomva.  
(Csillagos megjegyzés: az `if (bob.mouseIsPressed)` feltétel gyakorlatilag megegyezik azzal, hogy `if (mouseIsPressed && bob.mouseIsOver)`.) Ezeket a változókat azonban csak akkor tudjuk használni, ha előtte a sprite-ok `mouseActive` változóját igazra állítottuk.  

Figyelem: az egyes sprite-ok `mouseIsPressed` változója nem keverendő össze az egész vászonra vonatkozó, globális `mouseIsPressed` változóval. Az `if (mouseIsPressed)` akkor lesz igaz, ha bárhol a vásznon lenyomjuk az egérgombot; az `if (bob.mouseIsPressed)` csak akkor, ha konkrétan bobra kattintunk rá.  

Ebben a példaprogramban bob elindul jobbra, ha rávisszük az egeret:  
```
function setup() {
	createCanvas(windowWidth, windowHeight)
	bob = createSprite()
	bob.friction = 0.9
	bob.mouseActive = true
}

function draw() {
	background("white")
	allSprites.draw()

	if (bob.mouseIsOver) {
		bob.setSpeed(5, 0)
	}
}
```

### Programállapot
Gyakori, hogy a programban számon akarunk tartani valamilyen állapotot, és a program futását ennek megfelelően módosítani. Például: ha fel van kapcsolva a lámpa, akkor látszanak a dolgok, ha le van kapcsolva, akkor semmi sem látszik. Vagy: ha be van kapcsolva a ventillátor, akkor forogjon a lapátja, ha ki van kapcsolva, akkor ne. Vagy: egy sprite kattintásra "radírként" kezd működni, és találkozás esetén eltávolítja a másik sprite-ot, de egy újabb kattintással ezt a "radírozást" ki lehet kapcsolni. Ezekben a programokban célszerű a program legelején, a `setup()`-ban létrehozni egy saját változót, amiben számontartjuk a programunk aktuális állapotát. A `draw()` függvényben tipikusan van ilyenkor egy `if`, ami ezt a programállapot-változót vizsgálja. A megfelelő helyekre pedig az állapot változásait kell leírni.  

__Példa: lámpakapcsolás.__  
Ebben a programban fel-le lehet kapcsolni a lámpát. Van benne továbbá egy kutya alakú srite, ami vízszintesen mindig követi az egeret. Ha a lámpa fel van kapcsolva, akkor a háttér fehér és látjuk a kutyát; ha a lámpa le van kapcsolva, akkor a háttér fekete, és nem látjuk a kutyát. (A kutya-sprite láthatóságára használhatjuk a sprite `visible` nevű változóját.) Ha kattintunk az egérrel, akkor átkapcsoljuk a lámpát: tehát _ha_ eddig be volt kapcsolva, _akkor_ kikapcsoljuk, _különben_ bekapcsoljuk.  
```
function preload() {
    dogImage = loadimage("http://pngimg.com/uploads/dog/dog_PNG2422.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    dog = createSprite(200, 300)
    dog.addImage(dogImage)

    // eleve legyen felkapcsolva a lámpa
    lamp = "on"
}

function draw() {
	// ha a lámpa fel van kapcsolva, fehér háttér és látható kutya
	// különben fekete háttér és nem látható kutya
    if (lamp == "on") {
        background("white")
        dog.visible = true
    } else {
        background("black")
        dog.visible = false
    }

    // a kutya kövesse az egeret
    dog.position.x = mouseX

    allSprites.draw()
}

function mouseClicked() {
	// kattintásra: ha a lámpa fel van kapcsolva, akkor lekapcsoljuk, különben felkapcsoljuk
    if (lamp == "on") {
        lamp = "off"
    } else {
        lamp = "on"
    }
}
```

__Példa: ventillátor__
A ventillátor eleve ki van kapcsolva. Ha megnyomunk egy billentyűt, bekapcsolódik. Ebben a programban a `draw()` függvénybe nem kell `if`-et rakni, mert ha egyszer megadtuk a propellernek a `rotationSpeed`-et, az magától fog forogni. Itt az az érdekes rész, amikor ki-be kapcsoljuk a ventillátort: itt nem csak az állapotváltozót állítjuk át, de magát a forgási sebességet is itt adjuk meg.  
```
function preload() {
	propellerImage = loadimage("https://d30y9cdsu7xlg0.cloudfront.net/png/35991-200.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
	propeller = createSprite(width / 2, height / 2)
	propeller.addImage(propellerImage)
	state = "off"
}

function draw() {
    background("white")
	allSprites.draw()
}

function keyPressed() {
	if (state == "off") {
		state = "on"
		propeller.rotationSpeed = 15
	} else {
		state = "off"
		propeller.rotationSpeed = 0
	}
}
```

_Csillagos:_ valószerűbb, fokozatosan be- és kikapcsolódó propeller fokozatosan csökkentett-növelt `rotationSpeed`-del:  
```
// a preload és a setup változatlan

function draw() {
    background("white")
	allSprites.draw()
	if (state == "on" && propeller.rotationSpeed < 15) {
		propeller.rotationSpeed += 0.1
	}
	if (state == "off" && propeller.rotationSpeed > 0) {
		propeller.rotationSpeed -= 0.05
	}
}

function keyPressed() {
	if (state == "off") {
		state = "on"
	} else {
		state = "off"
	}
}
```

__Példa: radír__  
Ebben a programban a radír-sprite-nak radír-alakja van, követi az egerünket és ha találkozik a másik sprite-tal, kitörli azt (`remove()`). Ha kattintunk, ez a radír-viselkedés kikapcsolódik, és a radír-alak is átváltozik egy másik alakra.  
Egyelőre írjuk meg csak az alakváltozást:  
```
function preload() {
    eraserImage = loadimage("http://icons.iconarchive.com/icons/icons8/windows-8/128/Editing-Eraser-icon.png")
    toolImage = loadimage("http://pngimages.net/sites/default/files/tool-png-image-17840.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    other = createSprite(random(0, width), random(0, height))
    eraser = createSprite()
    mode = "eraser"
}

function draw() {
    background("white")
    allSprites.draw()
    eraser.position.x = mouseX
    eraser.position.y = mouseY

    if (mode == "eraser") {
        eraser.addImage(eraserImage)
    } else {
        eraser.addImage(toolImage)
    }
}

function mouseClicked() {
    if (mode == "eraser") {
        mode = "no-eraser"
    } else {
        mode = "eraser"
    }
}
```
Ezt szeretnénk kiegészíteni a radír-viselkedéssel. Ez csak akkor játszik, amikor a program radír-módba van kapcsolva, de azon belül is csak akkor, ha a sprite-ok fedésbe kerülnek, tehát itt két feltételnül lesz egymásba illesztve:  
```
function draw() {
    background("white")
    allSprites.draw()
    eraser.position.x = mouseX
    eraser.position.y = mouseY

    if (mode == "eraser") {
        eraser.addImage(eraserImage)
        if (eraser.overlap(other)) {
            other.remove()
        }
    } else {
        eraser.addImage(toolImage)
    }
}
```
Magyarázat: _ha_ a radír-mód aktív, _akkor_ egyrészt legyen a sprite-nak radír-alakja, másrészt pedig _ha_ fedik egymást a sprite-ok, _akkor_ töröljük ki az `other`-t. _Különben_ (tehát ha nem a radír-mód aktív) legyen a sprite-nak eszköz-alakja.  


__Irányítás billentyűkkel__  
A p5 mindig egy `key` nevű változóban tárolja, mi volt az a billentyű, amit utoljára lenyomtunk. Ezt a változót tipikusan a `keyPressed()` függvényben szoktuk használni, hiszen főleg billentyű lenyomásakor érdekel minket, hogy _melyik_ billentyűt nyomtuk le. (A `key` változó tartalma viszont mindaddig őrzi a legutoljára lenyomott billentyűt, amíg újat nem nyomunk.)  
Így például mindig ki tudjuk írni a konzolra, hogy melyik billentyűt nyomtuk le:  
```
function keyPressed() {
	print(key)
}
```
Gyakori, hogy különböző dolgokat akarunk csinálni különböző billentyűk lenyomásakor. Ilyenkor `if`-et használunk. Itt például a sprite csak akkor indul el jobbra, ha a "j" betűt nyomtuk meg:  
```
function keyPressed() {
	if (key == "J") {
		bob.setSpeed(5, 0)
	}
}
```
Figyelem: mindegy, hogy nyomunk-e shiftet a betű mellé, a programban mindig nagybetűre kell tesztelnünk ("J", nem pedig "j"). Ennek nincs különösebb logikus magyarázata, ez csak a rendszer sajátossága.  

Ha nem betűkre, hanem speciális billentyűkre szeretnénk tesztelni (enter, escape, nyilak stb.), akkor a `key` változó helyett a `keyCode` változót használjuk, és a lenyomott billentyű ún. ASCII kódját kell megadnunk. Ez a program például az Escape billentyűre tesztel, aminek a kódja 27:  
```
function keyPressed() {
	if (keyCode == 27) {
		// do stuff
	}
}
```
A speciális billentyűk kódját megtaláljuk bármelyik ASCII táblában, például [ebben](http://www.rapidtables.com/code/text/ascii-table.htm#ctrl). Nem kell azonban megjegyeznünk, vagy mindig táblázatból kikeresnünk őket: a p5 csupa nagybetűs változók formájában a rendelkezésünkre bocsátja ezeknek a billentyűknek a kódját. Tehát `if (keyCode == 27)` helyett tehát írhatjuk azt, hogy `if (keyCode == ESCASPE)`, ami sokkal barátságosabb. További speciális billentyűk: BACKSPACE, DELETE, ENTER, RETURN, TAB, SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.  

Például ebben a programban a sprite például jobbra-balra mozgatható a nyílbillentyűkkel:  
```
function keyPressed() {
	if (keyCode == LEFT_ARROW) {
		bob.position.x -= 20
	}
	if (keyCode == RIGHT_ARROW) {
		bob.position.x += 20
	}
}
```

Figyelem: a p5 számára a szóköz _nem_ speciális billentyű, hanem betű. Tehát tesztelése nem a `keyCode` változóval, hanem a `key` változóval történik, a következőképpen: `if (key == " ")`  

Példaprogram forgatható, előre haladó rakétával:  
```
function preload() {
	rocketImage = loadimage("https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/128/rocket.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
	rocket = createSprite(width / 2, height / 2)
	rocket.addImage(rocketImage)
	rocket.friction = 0.9
}

function draw() {
    background("white")
	allSprites.draw()
}

function keyPressed() {
	if (keyCode == LEFT_ARROW) {
        rocket.rotation -= 20
	}
	if (keyCode == RIGHT_ARROW) {
        rocket.rotation += 20
	}
	if (keyCode == UP_ARROW) {
		rocket.addSpeed(5, rocket.rotation - 90)
	}
}
```

## Feladatok  

__Clone, description!__  

(1) Írj egy programot, amiben két sprite van. Az egyik legyen mindig a vászon közepén, és legyen Cookie Monster alakja. A másik mindig kövesse az egeret, és legyen cookie alakja. Írd bele a programba, hogy ha Cookie Monster fölé viszed a sütit, akkor kap egy még vidámabb alakot.  
(2) Írj egy programot, aminek a közepén van egy nagy propeller alakú sprite. Írd bele, hogy ha megnyomod a felfelé billentyűt, akkor a sprite forgási sebessége növekszik, ha a lefelét, akkor csökken.  
(3) Írj egy programot, amiben az óraihoz hasonlóan egy kutya követi az egeret, de nem úgy, hogy mindig pontosan ott van, ahol az egér, hanem úgy, hogy elindul az egér irányába. Tehát ha az egér balrább van a kutyánál, akkor induljon el balra, ha jobbrább, akkor jobbra.  
(4) Egészítsd ki az előző programot úgy, hogy a kutya mindig arra is fordul, amerre épp halad. Ehhez a sprite `mirrorX()` függvényét tudod használni. A függvény egy számot vár: ha a szám 1, akkor sprite vízszintes tükrözés nélkül, eredeti képpel fog megjelenni; ha -1, akkor vízszintesen tükrözve.  
(5) Írj programot, amiben az egér vonalat húz maga után, de csak lenyomott egérfomb mellett. Egészítsd ki úgy, hogy billentyűnyomáskor is történjen valami: ha a space billentyűt nyomod meg, törlődjön ki az egész rajz, ha bármi mást, akkor válassz új random színt a rajzoláshoz.  
(6\*) Írj egy programot, amiben van három különböző színű, jobbra forgó sprite. Írd bele, hogy bármelyikre kattintasz a háromból, a háttér olyan színű lesz, mint az adott sprite. (Nem elég a kattintáskor `background()`-ot hívni, a kiválasztott színt el kell tárolni egy változóba, és abból a változóból kell mindig a hátteret állítani a `draw()`-ban.)  
(7\*) Írj egy programot, amiben egy hal menekül az egér elől. Legyen kék a háttér, legyen rajta egy hal alakú (képű) sprite, ami kap némi sebességet egy random irányba, ha fölé viszed az egeret. Erre a sprite-ok `mouseIsOver` változóját tudod használni, persze csak a kezdeti `mouseActive = true` után. Ahhoz, hogy a kis kezdeti sebesség után azért meg is álljon, állítsd be neki súrlódást. - Ez a program még nem fog jól működni, mert a hal hiába indul el valamelyik irányba, a következő pillanatban megint igaz lesz, hogy rajta van az egér, tehát új random irányt fog választani magának, aztán megint, szóval nem fog szépen elúszni egy megadott irányba, hanem "rázkódni" fog az egér alatt. Gondolkodj el rajta, hogy lehetne ezt kiküszöbölni, és próbálj leprogramozni egy megoldást. (Összetett feltételekről lásd a fenti "csillagos" szakaszt.)  

## Házi feladat

Válassz egy feladatot a három közül:  
(8a) Elektromágnes. Írj egy programot, amiben egy mágnes alakú sprite mindig követi az egeret. Legyen egy másik sprite is, aminek autó alakja van. Írd bele a programba, hogy ha le van nyomva az egérgomb, akkor a mágnes vonzza az autót (`attractionPoint()`, használatáról lásd az előző órai jegyzet elejét). Adj az autónak súrlódást, hogy vonzás nélkül ne csússzon a végtelenségig, hanem álljon meg.  
Csillagos kiegészítés: lenyomott egérgomb mellett a mágnes rezegjen is. Ezt például úgy tudod megoldani, hogy nagyon nagy sebességgel pulzáltatod a helyét az eredeti (`mouseX` és `mouseY`) és egy 1-2 pixellel arréb lévő pozíció között.  
(8b) Mario. Írj egy programot, amiben egy Mario alakú sprite jobbra vagy balra mozog, ha a megfelelő billentyűket nyomod, illetve fel is tud ugrani. A mozgást ne `keyPressed()` függvénybe írd, mert akkor nem lesz folyamatos, hanem használd a `mouseIsPressed`-hez hasonló `keyIsPressed` változót a `draw()`-ban. Mario talpa alatt legyen egy mozdíthatatlan talaj-sprite, Marionak pedig legyen gravitációja (`addSpeed()` lefelé).  
Csillagos kiegészítések: (1) Mario mindig arra nézzen, amerre éppen fut (`mirrorX(-1)` a tükrözéshez), (2) csak akkor tudjon felugrani, ha épp a földön van, és nem a levegőben, (3) lebegjen néhány pénzérme-sprite az útjában, és tűnjenek el, ha nekikmegy.  
(8c) Betűvihar. Írj egy programot, amit az egér és a billentyűzet együttes haszálatával kell működtetni: ha lenyomsz egy betűt, az a betű kirajzolódik a vászonra, oda, ahol épp az egér van. Használj jó nagy betűket, és mindig véletlenszerű színt. Ha ez megvan, írd át a programot úgy, hogy a betűméretet egy változóban tárolod, és a felfele-billentyű megnyomására növeled, a lefele billentyűre csökkented ezt a méretet.  
Csillagos kiegészítés: egérkattintásra a program kapcsoljon át olyan üzemmódra, hogy a betűk színe nem véletlenszerű, hanem mindig sötétkék. Újabb kattintásra legyenek megint random színűek a betűk. Az üzemmódot tartsd számon egy változóban.  
