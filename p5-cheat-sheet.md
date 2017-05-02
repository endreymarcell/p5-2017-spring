# p5 / p5.play kisokos WIP

## p5 program felépítése

`preload() { ... }`  
A program indulásakor ez a függvény fut le legelőször. Arra használjuk, hogy képeket (hangokat, egyéb fájlokat) töltsünk be vele.  

`setup() { ... }`  
A program indulásakor egyszer fut le. Ebbe tesszük azokat a parancsokat, beállításokat, amiknek csak egyszer kell lefutniuk.  

`draw() { ... }`  
A program indulása után folyamatosan újra és újra lefut, másodpercenként akár harmincszor. Változáshoz, interakcióhoz kapcsolódó logikát írunk bele.  

`mousePressed() { ... }`  
Akkor fut le, ha kattintunk az egérrel (az egérkattintás hosszától függetlenül mindig csak egyszer, közvetlenül az egérgomb lenyomása után).  

`mouseReleased() { ... }` vagy `mouseClicked() { ... }`  
Akkor fut le, ha kattintunk az egérrel (az egérkattintás hosszától függetlenül mindig csak egyszer, közvetlenül az egérgomb felengedése után).  
`mouseMoved() { ... }`  
Akkor fut le, ha felengedett egérgomb mellett mozgatjuk az egeret.  

`mouseDragged() { ... }`  
Akkor fut le, ha lenyomott egérgomb mellett mozgatjuk az egeret.  

`keyPressed() { ... }`  vagy `keyTyped() { ... }`  
Akkor fut le, ha lenyomunk egy billentyűt (a lenyomás hosszától függetlenül mindig csak egyszer, közvetlenül a billentyű lenyomása után).  

`keyReleased() { ... }`  
Akkor fut le, ha lenyomunk egy billentyűt (a lenyomás hosszától függetlenül mindig csak egyszer, közvetlenül a billentyű felengedése után).  

## read-only p5 változók

__Ezeket a változókat csak használjuk, kiolvassuk a tartalmukat, de nem állítjuk át őket.__  

`windowWidth` - a rendelkezésünkre álló böngészőablak szélessége (szám). Tipikusan a `createCanvas()` paramétereként használjuk a `setup()` függvényben.  

`windowHeight` - a rendelkezésünkre álló böngészőablak magassága (szám). Tipikusan a `createCanvas()` paramétereként használjuk a `setup()` függvényben.  

`width` - a létrehozott vászon szélessége (szám). Csak akkor elérhető, ha már meghívtuk a `createCanvas()` függvényt.  

`height` - a létrehozott vászon magassága (szám). Csak akkor elérhető, ha már meghívtuk a `createCanvas()` függvényt.  

`mouseIsPressed` - megadja, hogy le van-e épp nyomva az egér gombja (igaz/hamis). Tipikusan a `draw()`-ban használjuk.  

`keyIsPressed` - megadja, hogy van-e épp billentyű lenyomva (igaz/hamis). Tipikusan a `draw()`-ban használjuk.  

`key` - megadja a legutoljára lenyomott billentyűt (betű). Általában a `keyPressed()`-ben használjuk.  

`keyCode` - megadja a legutoljára lenyomott speciális billentyű kódját (szám). Általában a `keyPressed()`-ben használjuk.  

`frameCount` - megadja, hogy a program indulása óta hányszor futott le a `draw()` függvény (szám). Tipikusan a `draw()`-ban használjuk.  

`mouseX` - megadja az egér aktuális helyének x koordinátáját a vásznon (szám). `setup()`-ban _nem_ szoktuk használni, bárhol máshol igen.  

`mouseY` - megadja az egér aktuális helyének y koordinátáját a vásznon (szám). `setup()`-ban _nem_ szoktuk használni, bárhol máshol igen.  

## p5 függvények

`createCanvas(w, h)` - létrehoz egy `w` szélességű és `h` magasságú vásznat. A `setup()`-ban használjuk.  

`background(c)` - az egész vásznat `c` színűre színezi, ezzel elfed (letöröl) mindent, ami eddig a vásznon volt. Ha a `setup()`-ban hívjuk meg, a vászonnak csak kezdőszíne lesz, és innentől minden rárajzolt grafika rajta is marad (csíkot húz maga után). Ha a `draw()` elején hívjuk meg, a vászon minden pillanatban letörlődik, a megrajzolt dolgok tehát nem húznak csíkot maguk után.  
A fenti változatban a `c` egy string, ami egy színt jelöl. RGB(A) színkód esetén a függvényt meghívhatjuk `background(r, g, b)` illetve `background(r, g, b, a)` formában is.  

`fill(c)` - kitöltőszínt választ ki a későbbi rajzoló függvényekhez. Ez a függvény önmagában nem rajzol semmit.  
A fenti változatban a `c` egy string, ami egy színt jelöl. RGB(A) színkód esetén a függvényt meghívhatjuk `background(r, g, b)` illetve `background(r, g, b, a)` formában is.  

`noFill()` - átlászóra kapcsolja a kitöltést a későbbi rajzoló függvényekhez. Ez a függvény önmagában nem rajzol semmit.  

`stroke(c)` - keretszínt választ ki a későbbi rajzoló függvényekhez. Ez a függvény önmagában nem rajzol semmit.  
A fenti változatban a `c` egy string, ami egy színt jelöl. RGB(A) színkód esetén a függvényt meghívhatjuk `background(r, g, b)` illetve `background(r, g, b, a)` formában is.  

`noStroke()` - kikapcsolja a keretet a későbbi rajzoló függvényekhez. Ez a függvény önmagában nem rajzol semmit.  

`strokeWeight(n)` - keretvastagságot választ a későbbi rajzoló függvényekhez. Ez a függvény önmagában nem rajzol semmit.  

`point(x, y)` - rajzol egy pontot a megadott koordinátákra. A pont méretét a korábban kiadott `strokeWeight()`, színét a `stroke()` határozza meg.  

`line(x1, y1, x2, y2)` - rajzol egy vonalat az (x1, y1) koordinátákkal megadott első ponttól az (x2, y2) koordinátákkal megadott második pontig. A pont méretét a korábban kiadott `strokeWeight()`, színét a `stroke()` határozza meg.  

`circle(x, y, d)` - rajzol egy kört, aminek az (x, y) pont lesz a középpontja és `d` az átmérője.  

`ellipse(x, y, w, h)` - rajzol egy ellipszist, aminek az (x, y) pont lesz a középpontja, `w` a szélessége és `h` a magassága. (Ha `w` és `h` megegyezik, kört kapsz.)  

`square(x, y, a)` - rajzol egy négyzetet, aminek az (x, y) pont lesz a bal felső sarka és `a` az oldalhosszúsága. Ha korábban kiadtuk a `rectMode("center")` utasítást, az (x, y) pont nem bal felső sarkot, hanem középpontot fog jelenteni.  

`rect(x, y, w, h)` - rajzol egy téglalapot, aminek az (x, y) pont lesz a bal felső sarka, `w` a szélessége és `h` a magassága. (Ha `w` és `h` megegyezik, négyzetet kapsz.) Ha korábban kiadtuk a `rectMode("center")` utasítást, az (x, y) pont nem bal felső sarkot, hanem középpontot fog jelenteni.  

`rectMode(m)` - beállítja, hogy az ez után rajzolt körök és téglalapok esetében az x és y koordináta a bal felső sarkot (`"corner"`) vagy a középpontot jelentse (`"center"`). Ez a függvény önmagában nem rajzol semmit.  

`text(t, x, y)` - kiírja a `t` szöveget (x, y) pontba. Alapesetben a pont a szöveg bal felső sarkát jelöli, ezt a `textAlign()` függvénnyel tudjuk átállítani.  

`textSize(n)` - beállítja a kiírandó szöveg méretét. Ez a függvény önmagában nem rajzol semmit.  

`textFont(s)` - beállítja a kiírnadó szöveg betűtípusát. Ez a függvény önmagábannem rajzol semmit.  

`textAlign(s)` - beállítja, hogy a szöveg kiírásánál a megadott koordináták mit jelentsenek. Középre igazításhoz: `"center"`.  Ez a függvény önmagában nem rajzol semmit.  

`textStyle(s)` - dőlt (`"italic"`) vagy félkövér (`"bold"`) betűstílust állíthatunk be vele az ez után következő szövegkiírásokhoz.  Ez a függvény önmagában nem rajzol semmit.  

<hr>

`random(a, b)` - visszaad egy véletlenszámot `a` és `b` között.  

`round(n)` - visszaadja `n` egész számra kerekített értékét.  

`loadimage(url)` - az `url` alapján betölt és visszaad egy képet, amit változóban tudunk eltárolni, és később kirajzolni (`image()`) vagy sprite-nak alakul adni (`sprite.addImage()`). A `preload()` függvényben használjuk.  

`image(img, x, y)` - kirajzolja az `img` változóba korábban `loadimage()`-dzsel beletöltött képet (x, y) pontba. Alapesetben ez a kép bal felső sarkát fogja jelenteni, ezt az `imageMode()` függvénnyel módosíthatjuk.  

`imageMode(m)` - beállítja, hogy az `image()` függvénynél megadott koordináták a kép melyik pontját jelentsék. Középre igazításhoz: `imageMode("center")`  

`tint()` - beállítja, hogy az ez után rajzolt képek milyen színűre legyenek színezve. Átlátszóság állításához: `tint(255, 255, 255, a)` ahol `a` az átlátszóság.  

`image.resize(w, h)` - képek átméretezésére használjuk. Olyan változókon lehet meghívni, amikbe korábban `loadimage()`-dzsel beletöltöttünk egy képet. Szélességet és magasságot vár paraméterként, de ha a kettő közül valamelyiknek csak 0-t írunk be, akkor arányosan kicsinyít a másik paraméter alapján. A `setup()` függvényben használjuk.  

`noCursor()` - eltüntetni az egeret a vásznon.  

`cursor()` - megjeleníti az egeret a vásznon.  

`print(s)` - kiírja `s` szöveget a konzolra.  

`noLoop()` - leállítja a `draw()` függvény folyamatos meghívását.  

`loop()` - újraindítja a `draw()` függvény folyamatos meghívását.  

## p5.play változók és függvények

`createSprite(x, y, w, h)` - létrehoz és visszaad egy sprite-ot, amit változóba tudunk menteni. Ha négy számot adunk neki, azok a sprite középpontjának x és y koordinátájaként, a sprite szélességeként és magasságaként értelmeződnek. Ha csak két számot adunk meg, a sprite automatikusan 100\*100-as méretű lesz. Ha nem adunk meg neki számot, a sprite 100\*100-as méretű lesz és a (0, 0) pontban jön létre. A `setup()` függvényben hívjuk meg, ha a program futása alatt mindig ugyanazokkal a sprite-okkal fogunk dolgozni. Ha a program futása alatt új sprite-ok is születhetnek, akkor lehet a `draw()`, `mouseClicked()`, `keyPressed()` függvényben is hívhatjuk.  

`sprite.remove()` - eltávolít egy sprite-ot a programból.  

`sprite.position.x` - megadja vagy beállítja a sprite (középpontjának) x koordinátáját (szám).  

`sprite.position.y` - megadja vagy beállítja a sprite (középpontjának) y koordinátáját (szám).  

`sprite.setSpeed(v, d)` - `v` nagyságú sebességet ad egy sprite-nak `d` irányba. A sprite esetleges korábbis sebessége törlődik.  

`sprite.addSpeed(v, d)` - `v` nagyságú sebességet ad hozzá egy sprite eddigi sebességéhez `d` irányba. A sprite esetleges korábbi sebessége megőrződik és összeadódik a most megadottal.  

`sprite.rotation` - megadja vagy beállítja a sprite forgásirányát (szám). Alapesetben: 0 (a sprite jobbra néz).  

`sprite.rotationSpeed` - megadja vagy beállítja a sprite folyamatos forgásának sebességét (szám). Alapesetben: 0 (a sprite nem forog).  

`sprite.addImage(img)` - a sprite-nak alakul ad egy képet, amit korábban `loadimage()`-dzsel beletöltöttünk az `img` változóba.  

`sprite.mass` - a sprite tömege (szám). Akkor van jelentősége, ha sprite-ok találkozáskor lepattannak egymásról (`bounce()`), ilyenkor a nagyobb tömegű sprite jobban elmozdítja a kisebb tömegűt. Alapesetben 1.  

`sprite.immovable` - beállítja, hogy egy sprite mozdíthatatlan-e (igaz/hamis). __Elég egyszer beállítani, ezt tipikusan a `setup()`-ban tesszük meg (vagy akkor, amikor a sprite létrejön).__ Csak más sprite-okkal való találkozásokra érvényes (`displace()`, `bounce()`)! Ettől mi még tudjuk mozgatni a sprite-ot a koordinátáinak megváltoztatásával, vagy azzal, hogy sebességet adunk neki.  

`sprite.width` - megadja vagy beállítja a sprite szélességét (szám).  

`sprite.height` - megadja vagy beállítja a sprite magasságát (szám).  

`sprite.shapeColor` - beállítja a sprite színét (szín). Átadhatunk neki szöveget (`sprite.shapeColor = "blue"`) vagy RGB színkódot a `color()` függvény használatával (`sprite.shapeColor = color(123, 65, 210, 150)`).  

`sprite.visible` -  megadja vagy beállítja, hogy a sprite látható-e (igaz/hamis). Alapesetben: `true`.  

`sprite.mouseActive` - beállítja, hogy a sprite figyelje az egér helyzetét (igaz/hamis). Alapesetbe: `false`. Ha szeretnénk használni a sprite `mouseIsOver` vagy `mouseIsPressed` változóját, előbb ezt igazra kell állítanunk. Ezt elég egyszer megtenni, tipikusan a `setup()`-ban tesszük meg (vagy akkor, amikor a sprite létrejön).  

`sprite.mouseIsOver` - megmondja, hogy az egér éppen a sprite fölött van-e (igaz/hamis, read only). Csak akkor működik, ha korábban a sprite `mouseActive` változóját igazra állítottuk!  

`sprite.mouseIsPressed` - megmondja, hogy az egér le van-e éppen nyomva a sprite fölött (igaz/hamis, read only). Csak akkor működik, ha korábban a sprite `mouseActive` változóját igazra állítottuk!  

`sprite.overlap(other)` - megmondja, hogy a sprite fedésben van-e épp az `other`-rel, ami lehet sprite vagy group (igaz/hamis).  

`sprite.collide(other)` - nekiütközteti a sprite-ot `other`-nek, ami lehet sprite vagy group. Ez azt jelenti, hogy ha `sprite` és `other` találkoznak, akkor `sprite` megáll, nem tud tovább menni. __A `draw()` függvényben használjuk.__  

`sprite.displace(other)` - `sprite` eltolja `other`-t, ami lehet sprite vagy group. Ez azt jelenti, hogy ha `sprite` és `other` találkoznak, `sprite` változtatás nélkül halad tovább, `other`-t pedig eltolja az útjából. __A `draw()` függvényben használjuk.__  

`sprite.bounce(other)` - `sprite` lepattan `other`-ről, ami lehet sprite vagy group. A pattanás pontos lefolyását befolyásolja a sprite-ok tömege (`mass`), esetleges mozdíthatatlansága (`immovable`) és rugalmassága (`restitution`). __A `draw()` függvényben használjuk.__  

`sprite.attractionPoint(f, x, y)` - `f` méretű vonzást ad sprite-nak az (x, y) pont felé. (Olyan, mint ha `addSpeed()`-et használnánk, csak az `addSpeed()` irányt vár, az `attractionPoint()` pedig egy pont koordinátáit.) __A `draw()` függvényben használjuk.__  

`sprite.rotateToDirection` - beállítja, hogy a sprite mindig arra forduljon (`rotation`), amerre épp halad (igaz/hamis). Alapesetben: `false`. __Elég egyszer beállítani, ezt tipikusan a `setup()`-ban tesszük meg (vagy akkor, amikor a sprite létrejön).__  

`sprite.friction` - a sprite "csúszóssága" (szám). Ha 1, akkor a sprite egyenletes sebességgel halad. Ha kisebb egynél, mozgás közben veszít a sebességéből (súrlódik). Ha egynél nagyobb, mozgás közben sebességet nyer és egyre gyorsul (fizikai képtelenség, ellenjavallott). Alapesetben: 1. __Elég egyszer beállítani, ezt tipikusan a `setup()`-ban tesszük meg (vagy akkor, amikor a sprite létrejön).__  

`sprite.restitution` - a sprite rugalmassága (szám). A pattanásoknál (`bounce()`) van jelentősége. Ha 1, a sprite tökéletesen rugalmas, például egy földön pattogó sprite minden alkalommal ugyanolyan magasra pattan. Ha kisebb egynél, a sprite nem teljesen rugalmas, veszít a sebességéből pattanáskor, például egy földön pattogó sprite mindig kicsit kevésbé magasra pattan fel. Ha nagyobb egynél, a sprite hiperrugalmas, pattanáskor sebességet nyer, például egy földön pattogó sprite mindig egyre magasabbra pattan fel (fizikai képtelenség, ellenjavallott). __Elég egyszer beállítani, ezt tipikusan a `setup()`-ban tesszük meg (vagy akkor, amikor a sprite létrejön).__ Alapesetben: 1. Megjegyzés: a p5.play hibája miatt valójában az 1-es rugalmasságú sprite-ok is hiperrugalmasak, ezért egy állandó magasságra felpattanó sprite-nak egynél kicsit kisebb rugalmasságot kell adni (kb. 0.98).  

`sprite.limitSpeed(v)` - maximum `v` nagyságúra limitálja a sprite sebességét, tehát ha a sebesség kisebb vagy egyenlő, mint `v`, akkor nem csinál semmit, ha nagyobb, akkor `v`-re csökkenti a nagyságát, de nem változtat az irányán. __A `draw()` függvényben használjuk.__  

`sprite.mirrorX(m)` - beállítja a sprite alakjának esetleges vízszintes tükrözését. Ha `m` 1, akkor a sprite nincs tüközve, ha -1, akkor tükrözve van.  

`sprite.mirrorY(m)` - beállítja a sprite alakjának esetleges függőleges tükrözését. Ha `m` 1, akkor a sprite nincs tüközve, ha -1, akkor tükrözve van.  

`sprite.getDirection()` - megadja a sprite jelenlegi sebességének irányát.  

`sprite.scale` - megadja vagy beállítja a sprite "nagyítását". Ha 1, a sprite pont akkora, amekkoraként létrehoztuk; egynél kisebb vagy nagyobb számnál a sprite arányosan csökken vagy növekszik. Alapesetben: 1.  

`sprite.velocity.x` - megadja vagy beállítja a sprite vízszintes sebességkomponensét (szám).  

`sprite.velocity.y` - megadja vagy beállítja a sprite függőleges sebességkomponensét (szám).  

`sprite.touching.top` - megadja, hogy a sprite teteje épp érintkezik-e másik sprite-tal (igaz/hamis).  

`sprite.touching.bottom` - megadja, hogy a sprite alja épp érintkezik-e másik sprite-tal (igaz/hamis).  

`sprite.touching.left` - megadja, hogy a sprite bal oldala épp érintkezik-e másik sprite-tal (igaz/hamis).  

`sprite.touching.right` - megadja, hogy a sprite jobb oldala épp érintkezik-e másik sprite-tal (igaz/hamis).  

<hr>

`allSprites` - automatikus csoport, melybe létrehozásakor minden sprite belekerül.  

`createGroup()` - létrehoz és visszaad egy csoportot, amibe aztán beletehetünk vagy amiből kivehetünk sprite-okat.  

`group.add(sprite)` - hozzáadja `sprite`-ot a csoporthoz.  

`group.remove(sprite)` - kiveszi `sprite`-ot a csoportból.  

`group.contains(sprite)` - megmondja, hogy `sprite` tagja-e a csoportnak (igaz/hamis).  

`group.draw()` - megrajzolja az összes sprite-ot a csoportban. Tipikusan a `draw()` függvényben használjuk, az esetleges `background()` után.  

`group.overlap(other)` - megmondja, hogy a csoport (bármelyik tagja) fedésben van-e `other`-rel (ami lehet sprite vagy csoport).  

`group.collide(other)` - ütközteti a csoport összes tagját `other`-rel (ami lehet sprite vagy csoport). __A `draw()` függvényben használjuk.__  

`group.displace(other)` - a csoport összes/bármelyik tagja eltolja `other`-t (ami lehet sprite vagy csoport). __A `draw()` függvényben használjuk.__  

`group.bounce(other)` - a csoport összes/bármelyik tagja lepattan `other`-ről (ami lehet sprite vagy csoport). __A `draw()` függvényben használjuk.__  
