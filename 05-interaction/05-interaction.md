# Ötödik óra: egér és billentyűzet

## Apróságok

- Hibakeresés konzollal: ha a program nem fut le, lehet, hogy hibaüzenetet ír a konzolra, ami segít megtalálni a hibát. Nyissük meg a konzolt, és futtassuk újra a programot.  
- A `loadimage()` függvény neve kivételesen nem camelCase, hanem csupa kisbetű, az image i-jét beleértve.  
- A programjainkat praktikus szempontok miatt írjuk JSBinen, ez nem jelenti azt, hogy csak JSBinen futhatnak JavaScript, illetve p5 programok. File > Download alatt le is tudjuk tölteni a programot egy .html fájlként, és a saját gépről is bármikor meg tudjuk nyitni böngészővel.  
- Bin megosztásakor a Share menüből nem a Snapshot, hanem a Latest opciót érdemes választani, mert az így kapott link az elmentett verzióktól függetlenül mindig a legfrisseb változatot fogja megnyitni. Ha a program forráskódját nem, csak a kimenetét szeretnénk megosztani, akkor pedig az Output only opció a barátunk.  
- Ha [ezt a bin-t](http://jsbin.com/lavuxi/edit?css,js,output) elmentjük sablonként a File > Save as template opcióval, akkor onnantól minden File > New után olyan bint kapunk, amiben már minden p5-ös hivatkozás elő van készítve, illetve van egy minimális `setup()` és `draw()` alap is.  
- Igyekezzünk megtanulni a referencia használatát: [p5 referencia](https://p5js.org/reference/), [p5.play Sprite referencia](http://p5play.molleindustria.org/docs/classes/Sprite.html). Ezekben ellenőrizhetjük, hogy kell egyes függvényeket és változókat használni.  
- A mai óra feladataiban több helyen is előforduló `attractionPoint()` függvényről bővebb magyarázatot találunk a [3. órai jegyzet végén](https://github.com/endreymarcell/p5-2017-spring/blob/master/03-dynamics/03-dynamics.md#feladatok-1), illetve a [p5.play referenciában](http://p5play.molleindustria.org/docs/classes/Sprite.html#method-attractionPoint), itt pedig a használatát láthatuk egy programban: http://jsbin.com/hutarah/edit?js,output  

## Még pár vizuális eszköz

### Áttetszőség  

- Hogyan lehet Sprite-okat áttetszővé tenni?  

Eddig sprite-ok színét a `shapeColor` változójukkal állítottuk be:  
`bob.shapeColor = "white"`  
Illetve azt tanultuk, hogy ha egy színt áttetszővé szeretnénk tenni, azt RGBA színkóddal tudjuk megtenni, például `fill("white")` helyett `fill(255, 255, 255, 100)`. (Az első három szám az RGB színkód, mely ez esetben fehéret jelöl, a negyedik pedig a "láthatóság".)  
A `shapeColor` esetében a `color()` függvénnyel tudunk RGBA színkódot használni:  
`bob.shapeColor = color(255, 255, 255, 100)`  


- Hogyan lehet `image()` függvénnyel megrajzolt képeket áttetszővé tenni?

Az `image()` függvény előtt kiadott `tint()` paranccsal meg tudjuk színezni a képet. Ha színt nem, csak áttetszőséget akarunk a képnek adni, használjunk RGBA színkódot és fehér színt:  
`tint(255, 255, 255, 100)`  
`image(imageVariable, 100, 200)`  


- (csillagos) Hogyan lehet Sprite-hoz `addImage()`-dzsel hozzáadott képet áttetszővé tenni?  

Magyarázat a jegyzet alján.  
Megoldás:  
```
function setup() {
	bob = createSprite()
	bob.addImage(imageVariable)
}
```
helyett
```
function myDraw() {
	tint(255, 255, 255, 100)
	image(imageVariable, 100, 200)
}

function setup() {
	bob = createSprite()
	bob.draw = myDraw
}
```

### Mozgás  

Segédfüggvények mozgó sketchekhez:  
`oneway(from, to, speed)`  
`twoway(from, to, speed)`  
`pulse(from, to, speed)`  

Ezeket a függvényeket olyan helyeken tudjuk használni, ahova alapvetően számot írnánk: sprite helyénél, forgásánál, alakzat méreténél, színeknél, színek áttetszőségénél...  

Például ha azt akarjuk, hogy a `guard` nevű sprite folyamatosan átmenjen vízszintesen a vászon bal szélétől a jobb széléig, itt visszaugorjon a bal szélre és újra elinduljon jobbra stb., akkor a `draw()` függvényben használhatjuk a `oneway()` függvényt:  
`guard.position.x = oneway(0, width)`  
Megjegyzés: a harmadik paraméter, ami a sebességet adja meg, opcionális. Ha nem adunk meg harmadik paramétert, az alapértelmezett sebesség 1 lesz.  
Figyelem: mivel ezzel a függvénnyel közvetlenül állítgatjuk a sprite x koordinátáját, ezért ilyenkor nem kell a sprite-na sebességet adnunk, tehát nem használunk `setSpeed()` vagy `addSpeed()` függvényt.  

Megnövő-lecsökkenő méretű kör `twoway()` függvénnyel:  
`circle(width / 2, height / 2, twoway(100, 300, 3))`  

Ide-oda forgó sprite `pulse()` függvénnyel:  
`bob.rotation = pulse(0, 180)`  
Figyelem: a helyzet ugyanaz, mint fent az x koordináta és a sebesség viszonyával, tehát ha a forgást (`rotation` változó) közvetlenül megadjuk, akkor forgási sebességet (`rotationSpeed`) nem használunk.  

Példaprogram egy irányba mozgó négyzettel, megnövő-lecsökkenő méretű körrel és pulzáló forgású sprite-tal:  
```
function setup() {
	createCanvas(windowWidth, windowHeight)
	bob = createSprite(width / 2, height / 2)
}

function draw() {
	background("white")
	
	// 50 méretű, a vászon bal szélétől a jobb szélig mozgó négyzet
	square(oneway(0, width), 100, 50)

	// lassan megnövő-lecsökkenő kör
	circle(300, 200, twoway(50, 150, 0.5))

	// ide-oda forgó sprite
	bob.rotation = pulse(0, 180)

	allSprites.draw()
}
```

Példaprogram pulzáló átlátszóságú képpel (ld. az előző elfejezetben a képek átlátszóságát):  
```
function preload() {
	ghostImage = loadimage("http://static.wixstatic.com/media/5b670a_9eea3aee729e4c2f897c27bd2bdc5fa5.png_256")
}

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	background("black")
	tint(255, 255, 255, pulse(0, 255))
	image(ghostImage, width / 2, height / 2)
}
```
## Nagy feladat: képernyőkímélő

Írj egy képernyőkímélőt, ami szép és mozog!  
Ötletek:  
(1/a) DVD-logó  
A megoldás valahogy így nézne ki: https://www.youtube.com/watch?v=x949Kl3k5Do (csak a színváltások nélkül)  
Kell négy sprite a vászon négy szélére, ezek lehetnek akár 1 pixel vastagságúak is. Kell továbbá egy sprite, ami kap alakul egy ilyen DVD-képet, és bounce-ol mind a négy falról.  

(1/b) Nyan  
Csinálj egy sprite-ot, ami a vászon bal szélénél még kicsit balrábbról (negatív x koordináta) halad a vászon jobb szélén még valamivel túlra. Adj neki alakként egy nyancat-képet. Ha ez megvan, csinálj még párat belőle.  

(1/c) Villogó DANGER! felirat  
Írd ki a feketére festett vászonra nagy, piros betűkkel a "DANGER!" feliratot. A felirat ne fixen piros legyen, hanem villogjon (tehát pulzáljon piros és átlátszó között). Ha ez megvan, írd át a programot úgy, hogy minden egyes betű más ritmusban villog. (Ehhez a betűket egyenként kell kiírnod, és mindegyik előtt át kell állítanod a színt.)  

(1/d) Műholdak (ha az eddigi órákon még nem írtad meg ezt a feladatot)  
A sprite-oknak létezik egy `attractionPoint()` függvénye is, amivel "vonzási pontot" adhatunk a sprite-hoz. A függvény három számot vár: a vonzás erejét, illetve két koordinátát. Ha ezt a parancsot a draw-ban meghívod egy sprite-ra, akkor a megadott erővel elkezd vonzódni a megadott pont felé. Írj egy programot, amiben egy sprite kering a vászon közepe körül! A feketére festett vászon közepére tegyél egy képet, ami a holdat ábrázolja, a keringő sprite-nak pedig adj műhold-alakot. Azt, hogy a sprite rendesen pályára álljon a középpont körül, ne csak oda-vissza lendüljön egy vonalon, úgy érheted el, ha a setup-ban adsz neki egy sebességet, amivel "kilököd" az egyenes pályáról. Nem baj, ha a pálya nem tökéletes kör, csak legalább elliptikus legyen.  

(1/e) Pendulum  
A feladat erre emlékeztet: https://www.youtube.com/watch?v=yVkdfJ9PkRQ  
Helyezz el öt-hat sprite-ot függőlegesen egymás alatt, a vászon középvonalán. "Lengesd" mindegyiket vízszintesen jobbra-balra az x koordinátájuk pulzáltatásával. Még jobb, ha ezüstgolyó-képet is adsz nekik.  

(1/f) Versenyző vízcseppek  
Indíts el egy vízcsepp-képű sprite-ot a vászon tetejéről lefelé, és a `draw()`-ban mindig adj a neki valamennyi sebességet lefelé `addSpeed()`-del. A hozzáadott sebesség mértékét randommal hozd létre, negatív alsó határral, hogy ne csak gyorsulni, de lassulni is tudjon. Ha ez megvan, csinálj még több vízcseppet, amik aztán egymással versenyeznek.  

(1/g) Szivárvány-nyolcasok  
Razolj a képre egy kört, aminek mind az x, mind az y koordinátája pulzál, de az egyik kétszer olyan gyorsan, mint a másik! Ha jól csináltad, a kör nyolcasokat fog leírni. Írd meg a programot úgy, hogy csíkot húzzon maga után (ne legyen `background()`), és minden pillanatban véletlen legyen a kitöltőszíne, kerete pedig ne legyen!  

(1/h) Egymásnak hajtó autók  
Csinálj két sprite-ot, amik a vászon bal és jobb széléről indulva vízszintesen egymás felé haladnak, de pont az összeütközés előtt visszaugranak a kiindulópontjukra, és indulnak megint. A sprite-oknak adj autó-képet. Ha ketten már vannak, adj hozzá még párat, amik ferdén, mondjuk a bal felső vagy a jobb alsó sarokból hajtanak közép felé. Ügyelj rá, hogy minden autó arra nézzen, amirre halad (`rotation`).  

## Egér és billentyűzet

További speciális függvények a `preload()`, a `setup()` és a `draw()` után:  
`mouseClicked()` --> amit ebbe írunk, akkor fut le, ha kattintunk az egérrel.  
Figyelem: `mouseClick`**`ed`**`()`, nem pedig `mouseClick()`  

`keyPressed()` --> amit ebbe írunk, akkor fut le, ha megnyomjuk bármelyik billentyűt.  
Figyelem: a program csak onnantól érzékeli a billentyűk lenyomását, hogy a Run with JS gomb után a vászonra kattintunk.  

Példák:  
Egy sprite igyekszik a képernyő bel szélétől a jobb szél felé, de egérkattintásra visszaugrik a bal szélre:  
```
function setup() {
	createCanvas(windowWidth, windowHeight)
	bob = createSprite(0, height / 2)
	bob.setSpeed(1, 0)
}

function draw() {
	background("white")
	allSprites.draw()
}

function mouseClicked() {
	bob.position.x = 0
}
```

Piros kör kerül a kattintás helyére:  
```
function setup() {
	createCanvas(windowWidth, windowHeight)
	background("white")
	fill("red")
	noStroke()
}

function draw() {}

function mouseClicked() {
	circle(mouseX, mouseY, 75)
}
```

A sprite-om minden billentyű lenyomásakor elfordul egy kicsit jobbra:  
```
function setup() {
	createCanvas(windowWidth, windowHeight)
	bob = createSprite(width / 2, height / 2)
}

function draw() {
	background("white")
	allSprites.draw()
}

function keyPressed() {
	bob.rotation += 10
}
```

### Feladatok:  

(2) Írj "nyomdázós" programot: ha kattintasz valahol, oda kerüljön egy bajusz!  
(3) Írj programot, amiben egy sprite forog a képernyő közepén, és ha kattintasz, oda ugrik, ahol az egér van!  
(4) Írj programot ugráló sprite-tal! Legyen egy mozdíthatatlan "talaj", legyen egy sprite, amire gravitáció hat (`addSpeed()` lefelé a `draw()`-ban), és ha lenyomsz egy billentyűt, ugrik egy nagyot felfelé (`addSpeed()` felfelé)!  
(5\*) Írj egy programot, amiben egy macska alakú sprite jön létre a vászon közepén, és elindul egy véletlenszerű irányba. Ha lenyomod bármelyik billentyűt, váltson irányt, ezúttal is teljesen véletlenszerűen. Próbáld meg a macskát mindig bent tartani a vásznon! Még izgalmasabb, ha sebességet is véletlenül választ magának, nem csak irányt.  
(6\*) Egészítsd ki az ötös programot úgy, hogy egy egér is legyen a vásznon, ami pont ugyanúgy viselkedik, mint a macska, csak ő nem a billentyűnyomásra, hanem az egérkattintásra változtat irányt!  

## Nagy feladat: játék  

Írj egy játékot vagy egyéb interaktív programot, ami reagál az egérre vagy a billentyűzetre!  
Ötletek:  
(7/a) Flappy Bird - béta verzió  
Csinálj egy sprite-ot, adj neki flappy bird-alakot, és gravitációs vonzást (kicsi `addSpeed()` lefelé a `draw()`-ban). Írd meg, hogy ha kattintasz az egérrel, a sprite ugrik egyet felfelé (nagy `addSpeed()` felfelé). Ha ez megvan, csinálj egy "fal"-sprite-ot, ami a Flappy Bird alsó oszlopához hasonló, és folyamatosan halad a vászon jobb szélétől balra, majd visszaugrik jobbra (`oneway()`).  
(Ezt pár óra múlva ki tudjuk majd egészíteni egy teljes Flappy Birddé.)  

(7/b) Halley-üstökös  
Írj egy programot, amiben mindig egy kört rajzolsz oda, ahol épp az egér van. Ha ez megvan, a kör belsejét színezd világos narancssárgára, a hátteret pedig kicsit áttetsző feketére, hogy az üstökös csíkot húzzon maga után.  

(7/c) Invázió  
Védd meg a Földet a rakétától! Módosítsd az (1/d) (vagy bármelyik korábbi, annak alapjául szolgáló) feladatot úgy, hogy a vászon közepén a Föld legyen, a körülötte az általa vonzott (`attractionPoint`) sprite-nak pedig rakéta-alakja. (Ne felejtsd el a rakéta-sprite `rotateToDirection`-jét `true`-ra állítani.) Ha ez megvan, csinálj egy sprite-ot, ami mindig követi az egeret, és lepattan róla a rakéta (`bounce()`).  

(7/d) Straight lines  
Írj egy programot, amivel vonalakat lehet rajzolni: ha kattintasz bárhova, egy vastag, véletlens színű vonallal összeköti a kattintásod helyét az előző kattintás helyével. (Ehhez a kattintás helyét el kell mentened változókba, hogy a következő kattintásnál tudd, mivel kell összekötni az egér mostani helyét.)  

(7/e) Süngyár  
Írj egy programot, ami minden kattintáskor létrehoz egy sprite-ot a kattintás helyén, és ad neki némi sebességet véletlenszerű irányba. A sprite-nak legyen sün-alakja, és forgasd is be a mozgása irányába (`rotateToDirection`).  
Ha ez megvan, írd át a programot úgy, hogy a sprite-oknak súrlódást adsz (`friction`), hogy ne hagyják el a képernyőt, és beállítod, hogy lepattanjanak egymásról (azt azzal a trükkel tudod elérni, hogy az újonnan létrehozott sprite-on meghívod a `bounce()` függvényt, és nem egy konkrét sprite-ot adsz meg paraméternek, hanem az összeset: `allSprites`).  

(7/f) Fogócska  
Írj egy programot, amiben egy sprite el akarja kapni az egeredet. Ne közvetlenül kövesse, csak `attractionPoint`-ként. A játék lényege, hogy ne tudja elkapni az egeredet. Adj hozzá a programhoz egy kicsi falat is, ami fölé be tudsz bújni az egérrel, és amiről lepattan a sprite! A "fogó" sprite-nak adj valami jó kis képet alakként.  

(7/g) Szivárványfestés  
Írj egy programot, ami folyamatosan kört rajzol az egér helyére! `background()` ne legyen benne, így a kör csíkot fog húzni. Ha ez megvan, írd át úgy, hogy a kör kitöltőszínének mindhárom komponense mozogjon (akár oneway, akár twoway, akár pulse) 0 és 255 között.  

(7/h) Dobogó szív  
Keress egy képet egy szívről, és pulzáltasd a méretét (`sprite.scale`). Írd meg úgy a programot, hogy valahányszor kattintasz, a szív elkezd egy kicsit gyorsabban dobogni.  

(7/i) Windows  
Írj egy programot, ami eltüntetni az eredeti egeret (`noCursor()`), és csinálj egy egér-alakú sprite-ot, ami mindig valamennyi késéssel követi az igazi, de láthatatlan egeret (`attractionPoint`). Használd a `limitSpeed()` függvényt a `draw()`-ban, hogy az egér-sprite ne tudjon nagyon felgyorsulni.  

(7/j) Pingpong  
Csinálj egy labda alakú sprite-ot, amire hat a gravitáció (kis `addSpeed()` lefelé a `draw()`-ban), és egy "ütőt", egy lapos, széles sprite-ot, amiről visszapattan a labda. A labda a vászon tetején, középen legyen, az ütő pedig a vászon alján, középen. Ha ez eddig megvan, írd át úgy, hogy az ütő mindig lent maradjon, de vízszintesen jobbra-balra kövesse az egér helyét, és adj hozzá még két labda-sprite-ot. A sprite-oknak randommal adj egy kis kezdősebességet felfelé vagy lefelé, hogy véletlenszerűen kezdjenek el leesni. A játék lényege, hogy az ütővel minden labdát a levegőben tartsd, egyiket se engedd "kiesni" a vászonról.  

## Csillagos: saját sprite-alak

Eddig kétféle sprite-ot tudtuk csinálni: az alapértelmezett színes négyzetet, meg olyat, aminek egy képet adunk meg alakként. Valójában bármilyen p5-ös rajzot meg tudunk adni egy sprite alakjaként: négyzetet, kört, vonalat, szöveget, bármilyen kombinációját... (Így készült például az első órán a Bob nevű robot: ő egy sprite volt, akinek saját alakot írtam p5-ös alakzatokból.)  
Tegyük fel, hogy a "Catch me, if you can!" feliratot szeretnénk egy sprite alakjává tenni. Ehhez először írjunk egy saját függvényt, melynek a neve bármi lehet:  
```
function catchme() {
	text("Catch me if you can!", 0, 0)
}
```
(Megjegyzés: ne felejtsük el a `setup()`-ban beállítani a szöveg középre igazítását `textAlign("center", "center")`-rel.)  
Ez után meg tudjuk adni, hogy az adott sprite a kirajzolásakor ezt a függvényt futtassa:  
```
bob = createSprite(width / 2, height / 2)
bob.draw = catchme
```
Figyelem: a `catchme` után itt nincs nyitó-csukó zárójel! (Ez azért van, mert a függvényt itt nem _meghívni_ akarjuk, csak hivatkozunk rá.)  
Ezután valahányszor bob megrajzolódik, a helyén nem a színes négyzet, hanem a feliratunk jelenik meg. A saját rajzoló függvényünkben nem kell a `bob.position.x` illetve `y` változókra hivatkozni: a függvényen belül a (0, 0) pont jelenti majd a sprite középpontját.  
