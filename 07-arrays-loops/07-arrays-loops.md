# Hetedik óra: csoportok és ciklusok (for)

## Csoportok

p5.playben a sprite-okat csoportokba lehet rendezni. Ez olyankor hasznos, mikor több sprite-nak hasonló viselkedést szeretnénk adni.  
Megjegyzés: a p5.play csoportokok keresztül az ún. _tömbök_ használatát tanuljuk meg a programozásban. A csoport valójában egy kiterjesztett, "felokosított" tömb.  

### allSprites csoport  

#### A csoport és függvényei

Az `allSprites` egy olyan csoport, amit a p5 automatikusan létrehoz, és automatikusan hozzá is ad minden sprite-ot. Azt, hogy hány sprite van egy csoportban, a csoport `length` változója tárolja: a program legelején az `allSprites.length` eredménye 0 lesz, a `bob = createSprite()` utasítás után már 1.  

Az eddigi programjainkban is szereplő `allSprites.draw()`-ból látjuk, hogy a csoportoknak van egy `draw()` függvénye - ez megrajzolja az összes sprite-ot a csoportban. Van ezen kívül `overlap()`, `collide()`, `displace()` és `bounce()` is - ilyenkor az adott utasítás a csoport összes sprite-jára vonatkozik.  

Például [ebben a programban](http://jsbin.com/xibucuc/edit?js,output) három labda pattog egy vízszintes sprite-on. Azt, hogy a labdák mind visszapattanjanak a földről, úgy érjük el, hogy mindhárom labdára meghívjuk a `bounce()` függvényt:  
```
ball1.bounce(ground)
ball2.bounce(ground)
ball3.bounce(ground)
```
Ha még több labdánk lenne, még többször kéne ezt a sort ismételni.  
Viszont ki tudjuk használni azt, hogy a labdák mind (automatikusan) részei az `allSprites` csoportnak, és a csoportoknak is van `bounce()` függvénye, így írhatjuk ezt is:  
```
allSprites.bounce(ground)
```
Vagyis: minden sprite pattanjon vissza a földről.

Figyelem: a csoportoknak nem azért van `bounce()` függvénye, mert sprite-okat tartalmaz, és a sprite-oknak van `bounce()` függvénye. Ez a két tény független egymástól. A sprite-oknak például van `setSpeed()` függvénye is, a csoportoknak nincs.  

A `bounce()` függvénynek paraméterként is meg tudunk adni csoportokat. Például [ebben a programban](http://jsbin.com/yozexe/edit?js,output) egy labdának mind a négy falról le kell pattannia, amit ezekkel a sorokkal érünk el:  
```
ball.bounce(leftWallt)
ball.bounce(rightWall)
ball.bounce(topWall)
ball.bounce(bottomWall)
```
Helyette azonban írhatnánk egyszerűen ezt is:  
```
ball.bounce(allSprites)
```
Vagyis: a labda pattanjon le minden sprite-ról.  

Láttuk tehát, hogy az általános `sprite.bounce(otherSprite)` függvényben mind a `sprite`-ot, mind az `otherSprite`-ot lecserélhetjük sprite helyett csoportra. A kettőt amúgy egyszerre is megtehetjük: `allSprites.bounce(allSprites)` - mindenki pattanjon le mindenkiről.  

#### A csoport elemei

A csoport nem csak arra jó, hogy kollektíve utasításokat adjunk neki: a csoport egyes tagjait külön-külön is el lehet érni. Ezt a csoport nevével és az adott sprite sorszámával tehetjük meg. A sprite-ok sorszáma attól függ, milyen sorrendben kerültek bele a csoportba. Tehát ha létrehozunk három sprite-ot:  
```
apple = createSprite()
orange = createSprite()
excavator = createSprite()
```
Akkor az `allSprites` csoport első tagja az `apple` lesz, a második az `orange`, a harmadik az `excavator`.  
Ehhez még hozzá kell tennünk, hogy programozásban a dolgokat 1 helyett mindig 0-tól kezdjük el számolni. Tehát a _három elemű_ `allSprites` csoportnak valójában _nulladik_, _első_ és _második_ eleme van.  
Az elemeket úgy érhetjük el, ha a csoport neve mögé szögletes zárójelekben odaírjuk a sorszámukat:  tehát az `allSprites[0]` azt jelenti, hogy az `allSprites` csoport nulladik eleme - tehát a legelsőként létrehozott sprite.  
Ez a jelölés pontosan ugyanúgy használható, mint a sprite neve. Tehát egy olyan programban, ami a `bob = createSprite()` paranccsal kezdődik, mindenhova, ahova ezután `bob`-ot írunk, írhatunk `allSprites[0]`-t:  
`bob.setSpeed(10, 0)` helyett `allSprites[0].setSpeed(10, 0)`,  
`bob.position.x = 100` helyett `allSprites[0].position.x = 100`  
stb.

(Ebből az is látszik, hogy egy-egy sprite neve (bob, apple, ball, wall, propeller stb.) valójában nem szerves része a sprite-nak úgy, ahogy mondjuk a sprite színe, mérete, sebessége vagy pozíciója. Az utóbbiak mind elválaszthatatlanul hozzátartoznak a sprite-hoz, míg a név éppen csak "rámutat", megcímezi őt. Egy sprite-nak minden csak egy sebessége lehet, de neve - mint láttuk - már kezdettől több van: a `bob`-on keresztül ugyanazt a sprite-ot érjük el, mint az `allSprites[0]` kifejezéssel.)  

__Feladat:__  
(1) Írj egy programot, amiben van legalább három random helyen létrehozott sprite, meg egy, ami követi az egeret. Írd bele, hogy az egért követő sprite találkozás esetén eltolja (displace) az összes többi sprite-ot. Használd az `allSprites` csoportot.  
(2\*) Egészítsd ki a programot úgy, hogy csak lenyomott egérgomb mellett tudja eltolni az egeret követő sprite a többit. Ellenkező esetben ütközzön nekik (collide).  

### Saját csoportok  

Az `allSprites` csoport automatikusan jön létre, és minden létrehozott sprite rögtön bele is kerül. De természetesen mi magunk is tudunk saját csoportokat csinálni, amikről már mi dönthetjük el, kit teszünk bele és mikor. Így hozunk létre új csoportot:  
`dogs = createGroup()`  
Ez után a `dogs.length` 0 lesz. Az `allSprites` csoporttal ellentétben ehhez a csoporthoz nem adódnak hozzá automatikusan a létrehozott sprite-ok, hanem nekünk kell őket hozzáadni:  
```
corgi = createSprite()
dogs.add(corgi)
```

Megjegyzés: mindegy, hogy a sprite-ot hozzuk előbb létre, vagy a csoportot. A sprite hozzáadása a csoporthoz (`add()`) azonban természetesen csak akkor végezhető el, ha már mind a sprite, mind a csoport létezik.  

__Feladatok:__  
(3) Írj egy programot, amiben van 2-3 kutya és 2-3 macska alakú sprite. Csinálj egy `dogs` és egy `cats` csoportot, és a létrehozott sprite-okat rakd beléjük. Legyen még egy sprite ezeken kívül, aminek csont alakja van, és mindig az egér helyén jelenik meg. Írd meg, hogy a csont el tudja tolni (displace) a kutyákat, de nekiütközzön (collide) a macskáknak.  
(4) Írj egy programot négy fal-sprite-tal: két lapos, vékony vízszintessel és két keskeny, magas függőlegessel. (Nem kell, hogy a vászon szélén legyenek.) Add őket hozzá egy `walls` nevű csoporthoz. Csinálj még egy sprite-ot az így létrehozott doboz közepén, adj neki véletlen irányú kezdősebességet, és állítsd be, hogy lepattanjon a falakról.  
(5\*) Írj egy programot kék háttérrel és benne három polip alakú sprite-tal. Mindhárom lebegjen függőlegesen fel-le a pulse függvénnyel. Ha ez megvan, a program elején hozz létre nekik egy csoportot; írd meg, hogy ha rákattintasz valamelyikre, az adódjon hozzá a csoporthoz; és írd át úgy a draw-t, hogy csak azok a polipok lebegjenek, amik részei a csoportnak (`if (group.contains(sprite))`).  
(6\*) Egészítsd ki az előző programot úgy, hogy ha egy épp lebegő polipra kattintasz, az kikerüljön a csoportból.  

## for ciklus  

### Szintaxis, használat

Programozásban gyakran előfordul, hogy egy (vagy több) parancsot sokszor egymás után meg akarunk ismételni. Erre eddig nem volt jobb módunk, mint megismételni a parancsot. Tehát ha egy random kört a `circle(random(0, width), random(0, height), 100)` paranccsal tudunk rajzolni, akkor öt random körhöz a következő programot kell megírnunk:  
```
circle(random(0, width), random(0, height), 100)
circle(random(0, width), random(0, height), 100)
circle(random(0, width), random(0, height), 100)
circle(random(0, width), random(0, height), 100)
circle(random(0, width), random(0, height), 100)
```
Ha pedig ötnél is több kört akarunk, további ismétlésekre lesz szükségünk. Ez nyilván nem praktikus, hiszen a körök számát csak sorok törlésével-hozzáadásával tudjuk szabályozni. Ráadásul ha utólag úgy döntünk, 100 helyett mégis inkább 150 átmérőjű köröket szeretnénk, akkor az összes parancsot át kell írnunk.  

Természetesen van egy egyszerűbb megoldás a parancsok sokszori kiadására: az úgynevezett ciklusok. Ezek közül most a "for" ciklust tanuljuk meg.  
A for ciklus lényege, hogy létrehozunk egy "számláló" változót - ezen fogjuk számolni, hogy hol tartunk; meghatározunk neki egy felső határt az alapján, hogy hányszor szeretnénk futtatni az adott parancsot; és a parancs minden végrehajtása után megnöveljük a számláló változónkat.  
A szintaxis a következő:  
```
for (i = 0; i < 3; i += 1) {
	// do something
}
```
A `for` kulcsszó jelöli, hogy for ciklust kezdünk. A zárójelben szerepel a fent leírt három lépés: egy `i` nevű változó létrehozása, amit a számoláshoz fogunk használni; a felső határ vizsgálata (jelen esetben három ismétlést szeretnénk); és a számláló változó megnövelése. Utána pedig, pont mint a függvényeknél és az `if`-nél, kapcsos zárójelek között, beljebb húzva szerepel(nek) a parancs(ok).  

Tehát a fenti, öt kört megrajzoló kódrészlet így is leírható:  
```
for (i = 0; i < 5; i += 1) {
	circle(random(0, width), random(0, height), 100)
}
```

Ha öt helyett tíz kört szeretnénk, csak át kell írnunk az ötös számot tízre. Ha 100 helyett 150-es átmérőt szeretnénk, szintén egyetlen helyen kell módosítanunk.  

További példák:  
Kattintásra három sprite induljon el az egértől random irányokba:  
```
function mouseClicked() {
	for (i = 0; i < 3; i += 1) {
		bird = createSprite(mouseX, mouseY)
		bird.setSpeed(5, random(0, 360))
	}
}
```

Hozzunk létre 10 sprite-ot véletlenszerű helyen:  
```
for (i = 0; i < 10; i += 1) {
	createSprite(random(0, width), random(0, height))
}
```

Hozzunk létre 10 sprite-ot, és rögtön adjuk is őket hozzá egy csoporthoz:  
```
stars = createGroup()
for (i = 0; i < 10; i += 1) {
	star = createSprite(random(0, width), random(0, height))
	stars.add(star)
}
```
Figyelem: a `stars.add(star)` parancsnak is a for cilkus kapcsos zárójelein belül kell szerepelnie, különben a létrehozott sprite-ot nem adódnak hozzá a csoporthoz.  

### Ciklusváltozó

Láttuk, hogy a for ciklusban létrehoztunk egy `i` nevű változót, amit a számoláshoz használtunk. Ezt a változót azonban nyugodtan fel tudjuk használni más célokra is. Például ki tudjuk írni a konzolra:  
```
for (i = 0; i < 5; i += 1) {
	print(i)
}
```
Ennek a programnak a kimenete:  
```
0
1
2
3
4
```

Az `i` változót persze nem csak kiírni tudjuk, hanem felhasználni is. Vegyük újra elő a köröket rajzoló példánkat:  
```
for (i = 0; i < 5; i += 1) {
	circle(random(0, width), random(0, height), 100)
}
```
Erről azt mondtuk, hogy a következőt jelenti:  
```
circle(random(0, width), random(0, height), 100)
circle(random(0, width), random(0, height), 100)
circle(random(0, width), random(0, height), 100)
circle(random(0, width), random(0, height), 100)
circle(random(0, width), random(0, height), 100)
```
Ennél azonban valójában kicsit többet jelent: annyival, hogy közben van egy `i` nevű változónk, ami mindig mutatja, hogy épp hányadik kört rajzoljuk, valahogy így:  
```
circle(random(0, width), random(0, height), 100) // és az i változó értéke 0
circle(random(0, width), random(0, height), 100) // és az i változó értéke 1
circle(random(0, width), random(0, height), 100) // és az i változó értéke 2
circle(random(0, width), random(0, height), 100) // és az i változó értéke 3
circle(random(0, width), random(0, height), 100) // és az i változó értéke 4
```

Tegyük fel, hogy nem véletlenszerű helyre akarjuk rajzolni a köröket, hanem sorban egymás mellé, balról jobbra, valahogy így:  
```
circle(0, height / 2, 100)
circle(100, height / 2, 100)
circle(200, height / 2, 100)
circle(300, height / 2, 100)
circle(400, height / 2, 100)
```
Ezt a programot úgy tudjuk for ciklussá alakítani, hogy a körök x koordinátáját az `i` változó segítségével számoljuk ki. Vegyük észre, hogy az x koordináta mindig a kör sorszámának 100-szorosa: a nulladik körnél nulla, az elsőnél száz, a másodiknál kétszáz stb. Tehát a `circle()` parancsot beletehetjük a for ciklusba, az x koordinátát pedig úgy tudjuk kiszámolni, hogy az `i` számlálót megszorozzuk százzal:  
```
for (i = 0; i < 5; i += 1) {
	circle(i * 100, height / 2, 100)
}
```

Itt egy másik példa, amiben hét sprite-ot hozunk létre, és egyre nagyobb sebességgel indítjuk el őket:  
```
car = createSprite(100, 100)
car.setSpeed(1, 0)
car = createSprite(100, 100)
car.setSpeed(2, 0)
car = createSprite(100, 100)
car.setSpeed(3, 0)
car = createSprite(100, 100)
car.setSpeed(4, 0)
car = createSprite(100, 100)
car.setSpeed(5, 0)
car = createSprite(100, 100)
car.setSpeed(6, 0)
car = createSprite(100, 100)
car.setSpeed(7, 0)
```
Ugyanez for ciklussal (ne felejtsük el, hogy a számlálás 0-tól kezdődik, a sebességeket viszont 1-től szeretnénk indítani, ezért az `i`-nél mindig _eggyel nagyobb_ sebességet akarunk beállítani):  
```
for (i = 0; i < 7; i += 1) {
	car = createSprite(100, 100)
	car.setSpeed(i + 1, 0)
}
```
Ugyanez [teljes példaprogramban](http://jsbin.com/kilitu/edit?js,output).  

__Feladatok:__  
(7) Írj egy statikus (tehát nem kell `draw()`, csak `setup()`) programot, ami futtatáskor világoskék háttérre kirakja egy hópehely képét. (Nem kell sprite, elég az `image()` függvény.) A hópehely kerüljön véletlen helyre a vásznon. - Ha ez megvan, írd át úgy a programot, hogy egy helyett száz hópelyhet csináljon.  
(8) Írj egy statikus programot, ami egy véletlenszerű oszlopdiagramot generál. Először írj meg csak egy oszlopot, ami a vászon bal szélétől indul, 100 pixel széles, és a vászon tetejétől lemegy egészen a vászon fele és a vászon alja között egy random mélységig. (Nem kell sprite, használd a `rect()` függvényt, ami négy számot vár: az első kettő a rajzolandó téglalap bal felső sarkának x és y koordinátája, a harmadik a téglalap szélesssége, a negyedik a magassága.) Ne zavarjon, hogy az oszlopdiagram így fejjel lefelé fog állni, egyelőre jó lesz így.  
Ha ez megvan, tedd bele egy for ciklusba, ami 10 oszlopot generál. Az `i` ciklusváltozót fel kell használnod, amikor az oszlop bal szélének x koordinátáját számolod: az eredeti 0-hoz hozzá kell adnod annyiszor 100-et, ahányadik ismétlésnél tart a ciklus (`i`).  
Ha még szebbre akarod megírni, állítsd be azt is, hogy az oszlopoknak mind random színe legyen, és a szélességük ne 100 legyen, hanem annyi, hogy pont kitöltsék a vásznat vízszintesen - tehát ha tíz oszlopod van, akkor egy oszlop szélessége legyen a vászon szélességének (`width`) pont egytized része.  
Illetve elgondolkodhatsz azon is, mit kéne módosítani a programon, hogy a diagram ne fejjel lefelé legyen, tehát hogy a vászon aljától induljanak az oszlopok felfelé.  
(9\*) Írd át az előző programot úgy, hogy ne fixen 10 oszlop jöjjön létre, hanem véletlen számú oszlop 10 és 20 között. Ehhez először generáld le randommal az oszlopok számát egy változóba (figyelem: a `random()` tört számot ad vissza, ezt a `round()`-dal tudod kerekíteni), ezt használd fel a for ciklusban felső határként, és mikor az oszlopok szélességét adod meg, akkor is ezzel a változóval oszd el a vászon szélességét.  
(10\*) Írj egy programot, amiben kattintásra létrejön egy mosolygó smiley a kattintás helyén, és elindul random irányba. Ha ez megvan, írd át úgy, hogy ne egy, hanem három smiley jöjjön létre, és úgy induljanak el, hogy egyenletesen osztják három részre a 360 fokot. (Ehhez először generálj egy véletlen irányt egy változóba, ezt a változót add meg irányként az első smiley-nak, és ennek a 120, illetve 240 fokkal megnövelt változatát a másodiknak, illetve harmadiknak.) Rendezd a smiley-létrehozást for-ciklusba, a 120 fokok hozzáadása az `i` ciklusváltozó segítségével történjen.  
Ha ez is megvan, írd át a programot úgy, hogy kattintáskor nem fixen három, hanem három és hat közötti, véletlen számú smiley jöjjön létre (ld. az előző feladatot.) Ehhez először generáld le randommal a smiley-k számát egy változóba (figyelem: a `random()` tört számot ad vissza, ezt a `round()`-dal tudod kerekíteni), ezt használd fel a for ciklusban felső határként, és a 120 helyett a megfelelő hozzáadandó fokot számold ki úgy, hogy a 360 fokot elosztod a smiley-k számával.  


## for ciklus groupokon  

Korábban említettük, hogy a csoportoknak nincs `setSpeed()` függvényük, `position.x` változójuk stb. Hogyan tudunk akkor egy csoport minden sprite-jának ugyanolyan utasítást adni? Úgy, hogy a csoport minden tagjának kiadjuk az utasítást. Tehát ha három sprite-unk van az egész programban, és mindegyik sprite-ot 20 pixellel jobbrább akarunk rakni, azt így tehetjük meg:  
```
allSprites[0].position.x += 20
allSprites[1].position.x += 20
allSprites[2].position.x += 20
```
Ez viszont megint egy gyakorlatilag változatlan parancs ismételgetése, amit tökéletesen be tudunk helyettesíteni egy for ciklussal. Vegyük észre, hogy a fenti három parancsban egyetlen dolog változik: az a sorzsám, hogy az `allSprites` csoportnak éppen hányadik tagját utasítjuk. Ez viszont tökéletesen behelyettesíthető egy for ciklus `i` számlálójával:  
```
for (i = 0; i < 3; i += 1) {
	allSprites[i].position.x += 20
}
```

Ezzel még van annyi probléma, hogy ha esetleg létrehozunk egy negyedik sprite-ot is, akkor a ciklusban is meg kell növelnünk a felső határt 3-ról 4-re. Jobb lenne, ha a ciklusunk rugalmas lenne annyira, hogy mindig az összes sprite-ot megy végig, akárhány sprite-ról is van szó éppen. Ha visszaemlékszünk rá, hogy minden csoport a `length` változójában tárolja, hogy hány sprite van épp benne, már tudjuk is, hogyan lehet ezt a rugalmasságot megoldani:
```
for (i = 0; i < allSprites.length; i += 1) {
	allSprites[i].position.x += 20
}
```
Tehát: az `allSprites.length` változót használjuk a ciklus felső határaként. Ha a setup-ban három sprite-ot hoztunk létre, az `allSprites.length` változó értéke pont három lesz, tehát a ciklusunk háromszor fog ismétlődni. Öt sprite-nál öt lesz az `allSprites.length`, és a ciklus ötszor fog lefutni stb.  

Itt van egy [teljes példaprogram](http://jsbin.com/kahimuf/edit?js,output), amiben először ciklust használunk arra, hogy 10 sprite-ot hozzunk létre véletlenszerű helyen, majd kattintásra for ciklusban mindet véletlenszerű irányba indítjuk el:  
```
function setup() {
    createCanvas(windowWidth, windowHeight)
	for (i = 0; i < 10; i += 1) {
		createSprite(random(0, width), random(0, height), 20, 20)
	}
}

function draw() {
    background("white")
	allSprites.draw()
}

function mouseClicked() {
	for (i = 0; i < allSprites.length; i += 1) {
		allSprites[i].setSpeed(5, random(0, 360))
	}
}
```

__Feladatok:__  
(11) Írd át az előző órai propelleres feladatot úgy, hogy ne csak egy propeller legyen, hanem három, és a megfelelő billentyűk lenyomására mindháromnak megfelelő irányba változzon a forgási sebesség.  
(12) Írj egy programot, ami a setup-ban random helyen létrehoz egy sprite-ot. A sprite legyen nagyon kicsi, és a draw-ban fekete háttérre rajzold fehér színnel, de pulzáló átlátszósággal. Ez lesz az első pislákoló csillag. Ha ez megvan, írd át a programot úgy, hogy a setup egy for ciklussal legalább 15 csillagot hozzon létre, és a draw egy for ciklussal végighaladva rajtuk mindegyiknek megfelelően állítsa be a színét.  
(13) Egészítsd ki az előző feladatot úgy, hogy a vászon alján legyen még egy sprite, akinek filozófus alakja van (a csillagokat bámuló Milétoszi Thalész tiszteletére). Innentől nem használhatod az allSprites csoportot, hiszen akkor a filozófus is pislákolna a csillagokkal együtt. Ehelyett hozz létre egy csoportot a csillagoknak, a létrehozott csillag-sprite-okat tedd bele a csoportba a setup-ban, és a draw-ban ne az allSprites csoporton, hanem a csillagok csoportján menj végig a for ciklussal.  
(14\*) Egészítsd ki az előző programot úgy, hogy ha kattintasz, a filozófus elindul a kép közepe felé. Adj neki súrlódást, és kattintásra setSpeed-et. A sebesség mértéke legyen random, az iránya pedig a vászon közepe felé mutasson: tehát ha a filozófus a vászon bal oldalán áll, akkor jobbra induljon, ha a jobb oldalán, akkor balra. (Egy if-fel vizsgáld meg, hogy viszonyul a filozófus helye a vászon feléhez, és az if-en belül add ki a megfelelő setSpeed utasítást.)  
(15\*) Írd át a 6-os feladatot úgy, hogy a polipokon nem egyenként mész végig (rákattintás vizsgálatánál, illetve a pulzálásnál), hanem ciklussal. Ha ez megvan, egészítsd ki a programot a fentiekhez hasonlóan: legyen belőlük véletlen számú mondjuk 1 és 10 között.    
