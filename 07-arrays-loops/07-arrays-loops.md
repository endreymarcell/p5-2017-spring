# Hetedik óra: csoportok és ciklusok (for) (VÁZLAT)

## Csoportok

### allSprites csoport  

`allSprites`  
`typeof(allSprites)`  
`allSprites.length`  

`bob = createSprite`  
`allSprites.length`  

`alice = createSprite`  
`charlie = createSprite`  
`allSprites.length`  

Mit tud? draw-t láttuk, ezen felül van neki pl. bounce.  
Két fal között pattogó labda, vagy akár négy fal között.  
Figyelem: nem azért van neki bounce, mert sprite-ok vannak benne, hanem csak.  

konkrét sprite-ok:  
allSprites[0], 1, 2  
ugyanaz, mint ha bobot mondanék  
illetve lehet referencia nélküli sprite-ot is utólag irányítani  
--> gondolatok arról, hogy ha nem akarunk később bob-ként hivatkozni valakire, akkor felesleges bobnak nevezni  
illetve hogy a bob csak egy változó, ami bármelyik sprite-ra mutathat, nem pedig a sprite része, mint mondjuk a színe vagy a helye  
meditáció arról, hogy ha csak egyszer akarok utasításokat adni egy sprite-nak, utána hagyom, hadd menjen dolgára, akkor nyugodtan adhatom egymás után több sprite-nak ugyanazt a nevet  

__Feladat:__  
(1) Írj egy programot, amiben van legalább három random helyen létrehozott sprite, meg egy, ami követi az egeret. Írd bele, hogy az egért követő sprite találkozás esetén eltolja (displace) az összes többi sprite-ot. Használd az `allSprites` csoportot.  
(2\*) Egészítsd ki a programot úgy, hogy csak lenyomott egérgomb mellett tudja eltolni az egeret követő sprite a többit. Ellenkező esetben ütközzön nekik (collide).  

### Saját csoportok  

`dogs = createGroup()`  
`dogs.length`  
`dogs.add(bob)`  

__Feladatok:__  
(3) Írj egy programot, amiben van 2-3 kutya és 2-3 macska alakú sprite. Csinálj egy `dogs` és egy `cats` csoportot, és a létrehozott sprite-okat rakd beléjük. Legyen még egy sprite ezeken kívül, aminek csont alakja van, és mindig az egér helyén jelenik meg. Írd meg, hogy a csont el tudja tolni (displace) a kutyákat, de nekiütközzön (collide) a macskáknak.  
(4) Írj egy programot négy fal-sprite-tal: két lapos, vékony vízszintessel és két keskeny, magas függőlegessel. (Nem kell, hogy a vászon szélén legyenek.) Add őket hozzá egy `walls` nevű csoporthoz. Csinálj még egy sprite-ot az így létrehozott doboz közepén, adj neki véletlen irányú kezdősebességet, és állítsd be, hogy lepattanjon a falakról.  
(5\*) Írj egy programot kék háttérrel és benne három polip alakú sprite-tal. Mindhárom lebegjen függőlegesen fel-le a pulse függvénnyel. Ha ez megvan, a program elején hozz létre nekik egy csoportot; írd meg, hogy ha rákattintasz valamelyikre, az adódjon hozzá a csoporthoz; és írd át úgy a draw-t, hogy csak azok a polipok lebegjenek, amik részei a csoportnak (`if (group.contains(sprite))`).  
(6\*) Egészítsd ki az előző programot úgy, hogy ha egy épp lebegő polipra kattintasz, az kikerüljön a csoportból.  

## for ciklus  

Akarok egy random kört a vászonra? Oké. Akarok hármat? Oké. Akarok százat? Nana. Na jó.  
Oké, most legyen mindegyik kicsit nagyobb. Na ne már.  
--> for ciklus  

hogy számol egy számítógép? csinál egy változót, növelgeti, és mindig megnézi, elérte-e már a felső határt.  
biztosan lesz benne `i = 0`  
lesz benne `i < 3`  
és lesz benne `i += 1`  
lesz benne egy adag parancs, amit ismételni kell  

gyakorlatban:  
```
for (i = 0; i < 3; i += 1) {
	// do something
}
```

Példa: akarok öt random kört rajzolni a setup-ban  
```
function setup() {
	createCanvas(windowWidth, windowHeight)
	background("white")
	fill(30, 80, 230, 120)
	noStroke()
	
	for (i = 0; i < 5; i += 1) {
		circle(random(0, width), random(0, height), 100)
	}	
}
```

gotcha: i += 1 nélkül lefagy a böngésző  

Példa: kattintásra három sprite induljon el az egértől random irányokba  
```
function mouseClicked() {
	for (i = 0; i < 3; i += 1) {
		bird = createSprite(mouseX, mouseY)
		bird.setSpeed(5, random(0, 360))
	}
}
```

Példa: sok sprite-ot csinálunk, és csoporthoz adjuk őket.  
```
stars = createGroup()
for (i = 0; i < 10; i += 1) {
	star = createSprite()
	stars.add(star)
}
```

## for ciklus: ciklusváltozó

Az `i` változónkat fel tudjuk használni a cikluson belül.  
`print(i)`  
Esetleg x legyen `i * 100`  
Példa ciklusváltozós rajzolásra  

__Feladatok:__  
(7) Írj egy statikus (tehát nem kell `draw()`, csak `setup()`) programot, ami futtatáskor világoskék háttérre kirakja egy hópehely képét. (Nem kell sprite, elég az `image()` függvény.) A hópehely kerüljön véletlen helyre a vásznon. - Ha ez megvan, írd át úgy a programot, hogy egy helyett száz hópelyhet csináljon.  
(8) Írj egy statikus programot, ami egy véletlenszerű oszlopdiagramot generál. Először írj meg csak egy oszlopot, ami a vászon bal szélétől indul, 50 pixel széles, és a vászon aljától felmegy egészen a vászon teteje és a vászon fele között egy random magasságig. Ha ez megvan, tedd bele egy for ciklusba, ami 10 oszlopot generál. Az `i` ciklusváltozót fel kell használnod, amikor az oszlop bal szélének x koordinátáját számolod: az eredeti 0-hoz hozzá kell adnod annyiszor 50-et, ahányadik ismétlésnél tart a ciklus (`i`). - Ha még szebbre akarod megírni, állítsd be azt is, hogy az oszlopoknak mind random színe legyen, és a szélességük ne 50 legyen, hanem annyi, hogy pont kitöltsék a vásznat vízszintesen - tehát ha tíz oszlopod van, akkor egy oszlop szélessége legyen a vászon szélességének (`width`) pont egytized része.
(9\*) Írd át az előző programot úgy, hogy ne fixen 10 oszlop jöjjön létre, hanem véletlen számú oszlop 10 és 20 között. Ehhez először generáld le randommal az oszlopok számát egy változóba (figyelem: a `random()` tört számot ad vissza, ezt a `round()`-dal tudod kerekíteni), ezt használd fel a for ciklusban felső határként, és mikor az oszlopok szélességét adod meg, akkor is ezzel a változóval oszd el a vászon szélességét.  
(10\*) Írj egy programot, amiben kattintásra létrejön egy mosolygó smiley a kattintás helyén, és elindul random irányba. Ha ez megvan, írd át úgy, hogy ne egy, hanem három smiley jöjjön létre, és úgy induljanak el, hogy egyenletesen osztják három részre a 360 fokot. (Ehhez először generálj egy véletlen irányt egy változóba, ezt a változót add meg irányként az első smiley-nak, és ennek a 120, illetve 240 fokkal megnövelt változatát a másodiknak, illetve harmadiknak.) Rendezd a smiley-létrehozást for-ciklusba, a 120 fokok hozzáadása az `i` ciklusváltozó segítségével történjen. - Ha ez is megvan, írd át a programot úgy, hogy kattintáskor nem fixen három, hanem három és hat közötti, véletlen számú smiley jöjjön létre (ld. az előző feladatot.) Ehhez először generáld le randommal a smiley-k számát egy változóba (figyelem: a `random()` tört számot ad vissza, ezt a `round()`-dal tudod kerekíteni), ezt használd fel a for ciklusban felső határként, és a 120 helyett a megfelelő hozzáadandó fokot számold ki úgy, hogy a 360 fokot elosztod a smiley-k számával.  

## for ciklus groupokon  

Hogy tudunk utasítást adni egy csoport minden tagjának?  
Három sprite-nál:  
```
allSprites[0].position.x += 10
allSprites[1].position.x += 10
allSprites[2].position.x += 10
```

for ciklussal, három sprite-nál:  
```
for (i = 0; i < 3; i += 1) {
	allSprites[i].position.x += 10
}
```

Általánosan: 
```
for (i = 0; i < allSprites.length; i += 1) {
	allSprites[i].position.x += 10
}
```

Feladatok:  
(11) Írd át az előző órai propelleres feladatot úgy, hogy ne csak egy propeller legyen, hanem három, és a megfelelő billentyűk lenyomására mindháromnak megfelelő irányba változzon a forgási sebesség.  
(12) Írj egy programot, ami a setup-ban random helyen létrehoz egy sprite-ot. A sprite legyen nagyon kicsi, és a draw-ban fekete háttérre rajzold fehér színnel, de pulzáló átlátszósággal. Ez lesz az első pislákoló csillag. Ha ez megvan, írd át a programot úgy, hogy a setup egy for ciklussal legalább 15 csillagot hozzon létre, és a draw egy for ciklussal végighaladva rajtuk mindegyiknek megfelelően állítsa be a színét.  
(13) Egészítsd ki az előző feladatot úgy, hogy a vászon alján legyen még egy sprite, akinek filozófus alakja van (a csillagokat bámuló Milétoszi Thalész tiszteletére). Innentől nem használhatod az allSprites csoportot, hiszen akkor a filozófus is pislákolna a csillagokkal együtt. Ehelyett hozz létre egy csoportot a csillagoknak, a létrehozott csillag-sprite-okat tedd bele a csoportba a setup-ban, és a draw-ban ne az allSprites csoporton, hanem a csillagok csoportján menj végig a for ciklussal.  
(14\*) Egészítsd ki az előző programot úgy, hogy ha kattintasz, a filozófus elindul a kép közepe felé. Adj neki súrlódást, és kattintásra setSpeed-et. A sebesség mértéke legyen random, az iránya pedig a vászon közepe felé mutasson: tehát ha a filozófus a vászon bal oldalán áll, akkor jobbra induljon, ha a jobb oldalán, akkor balra. (Egy if-fel vizsgáld meg, hogy viszonyul a filozófus helye a vászon feléhez, és az if-en belül add ki a megfelelő setSpeed utasítást.)  
(15\*) Írd át a 6-os feladatot úgy, hogy a polipokon nem egyenként mész végig (rákattintás vizsgálatánál, illetve a pulzálásnál), hanem ciklussal. Ha ez megvan, egészítsd ki a programot a fentiekhez hasonlóan: legyen belőlük véletlen számú mondjuk 1 és 10 között.    
