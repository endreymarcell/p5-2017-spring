# Negyedik óra: rajzolás (VÁZLAT)

## Ismétlés
függvény mint olyan.  
setup és draw.  
boilerplate: createCanvas, background, allSprites.draw()  
template: http://jsbin.com/xitiwuf/edit  

## Vászon és rajz

Kiindulás: `setup()` és benne `createCanvas()`  

Konzolon:  
`background()`  
`circle()`  

Paint-alapelvek: van keretszín (stroke) és töltőszín (fill). A színt előre ki kell választani, és amíg nem választok újat, marad. Van továbbá keretvastagság.  
`fill()`  
`noFill()`  
`stroke()`  
`noStroke()`  
`strokeWeight()`  

Kipróbálósba: https://www.w3schools.com/cssref/css_colors.asp  
(A) színű háttérre (B) színű köröket (C) színű kerettel  

Négyzetek:  
`square()`  
`rectMode()`  

Egyebek:  
`point()`  
`line()`  

Szöveg:  
`text()`  
`textSize()`  
`textFont()`  
`textStyle()`  
`textAlign()`  

Kipróbálósba: http://www.cssfontstack.com/  
Felirat, aláhúzás, és két forma (kör vagy négyzet) valamilyen viszonyban elhelyezve.  

## Mozgás

* Növekvő kör (megjegyzés az angolról)  
* Mozgó négyzet  
* Egeret követő vonalak a sarokból  
* Egér alapján növekvő szöveg  
* Egér alapján változó méretű körök  

## Feladatok

Ezúttal is: Clone, File > Add description (még ha a kurzort rossz helyre teszi is)  

(1) Írj egy programot, amiben egymás mellett egy kör és egy négyzet látható. Mindkettő mérete 100 pixel legyen kezdetben, de a program futása alatt a kör folyamatosan nőjön, a négyzet pedig legyen egyre kisebb. (Mi történik, ha elérte a nullát?)  
(2) Írj egy programot, amiben egy vonal mindig összeköti az egér aktuális helyét a vászon közepével!  
(3\*) Írj egy programot egy körrel, ami a vászon közepén van, és mindig pont akkora az átmérője, hogy az egér hozzáérjen! Ez technikailag azt jelenti, hogy a kör átmérője a kör középpontja (egyik pont) és az egér helye (másik pont) közötti távolság duplája. Használhatod a p5 `dist()` függvényét, ami négy számot (két pár koordinátát) vár, és megadja az így meghatározott két pont távolságát.  
(4\*) Írj egy programot, ami eltünteti az egeret, helyette pedig a "ಠ_ಠ" szöveget írja ki mindig pont az egér helyére! Ha ez megvan, írd át úgy, hogy a szöveg eleve kis betűmérettel jelenjen meg, de a program futása alatt egyre nagyobb legyen!  
(5\*) Írj egy programot, ami kiírja a képernyő közepére az egér aktuális x koordinátáját!  

## Változó színek

### RGB(A) színek

RGB: red-green-blue, mindhárom 0-255 között. Additív.  
Google "color picker"  
Pl. `background(66, 134, 244)`  
(Csillagos: hexben is működik, stringként kell átadni: `background("#4286f4")`  
Példa: az egyik színkomponens növekvő változóra van kötve  
A színbeállítás toleráns, a határokat korrigálja  

RGBA (A: 0 átlátszó, 255 átlátszatlan)  
folyamatosan eltűnő vagy megjelenő rajz (LoD a semmiből)  
egértől függő rajz  

## Random színek

kössünk be randomot az RGB(A) számok helyére  
megjegyzés a végtelen számú zárójelről.  
példa: random színes körök/négyzetek. egy szín fixálása még szebb eredményt adhat.  

## Feladatok

(6) Írj egy programot, aminek a háttere induláskor fehér, de folyamatosan befeketedik! Használj RGBA színt, ahol a szín mindvégig fekete, csak az alpha csatorna változik.  
(7) Írj egy programot, ami a kettes feladathoz hasonlóan folyamatosan vonalakat húz a képernyő közepétől, de ezúttal mindig véletlenszerű legyen a vonal színe!  
(8\*) Írj egy programot, ami vízszintes színátmenetet rajzol! Indíts annyival, hogy a `draw()` minden lefutáskor húz egy függőleges vonalat a vászon tetejétől az aljáig, viszont az x koordináta egy változó legyen, amit `setup()`-ban nulláról indítasz, és a `draw()` minden lefutásakor eggyel megnövelsz. Így a program folyamatosan, balról jobbra haladva fogja beszínezni a vásznat. Ha ez megvan, írj egy `stroke()` utasítást a vonal megrajzolása elé, ahol az alpha csatornaként is ugyanazt a változót használód - így átlátszóból egyre erősebb lesz a szín is, és létrejön a színátmenet.  
(9\*) Ha szeretnéd, hogy valami ne csak egy irányba változzon (pl. eleve látszik, aztán lassan eltűnik, vagy éppen fordítva), hanem oda-vissza, használhatod a szinusz-függvényt. Ha van egy változód, például `num`, amit mindig megnövelsz egy kicsivel, akkor a `sin(num) * 125 + 125` kifejezés 0 és 250 között fog oda-vissza ingadozni, úgyhogy jól lehet példa alphaként használni. (Arra figyelj, hogy a `num` változót csak nagyon kicsivel növeld, mondjuk 0.1-gyel.) Így írhatsz például olyan programot, aminek a "veszély!" felirat villog vörösen.  
(10\*) Hasonlóképpen írhatsz olyan programot is, amiben a dolgok mérete változik ciklikusan. Legyen például egy kör mérete `sin(num) * 100 + 150`, és a kör kövesse az egeret!  

## Képek

`loadimage()`  
(Példák magamnak:  
spy https://d30y9cdsu7xlg0.cloudfront.net/png/34712-200.png  
airplane http://png.bychuhe.com/wp-content/uploads/2014/08/airplane-png-image-2-300x230.jpg  
hedgehog http://pngimg.com/uploads/hedgehog/hedgehog_PNG10.png  
ink splat https://s-media-cache-ak0.pinimg.com/originals/67/e7/03/67e70318f01d1369c32a35f47e1473e3.png)  
`image()`  
`imageMode()`  
(Megjegyzés: .png)  
(Megjegyzés: figyeljünk a képek méretére.)  

Kipróbálósba.  

`sprite.addImage()`  
`rotationSpeed`  

Konzol helyett programban:
`preload() { ... }`  

## Feladatok  

(11) Írj egy programot, amiben Batman (vagy a kedvenc szuperhősöd) logója jelenik meg a vásznon, mindig pont ott, ahol épp az egér van! Ezt a feladatot meg lehet írni sprite nélkül (egyszerűen `image()` hívásokkal), vagy sprite-tal is (sprite-nak `addImage()` és utána a sprite-ot teszed az egér helyére. Az előbbi kicsit egyszerűbb, de mindkettő helyes.)  
(12) Írd át az előző programot úgy, hogy a logo nem "tűnik el" onnan, ahol eddig volt, hanem folyamatosan "csíkot húz" maga után!  
(13) Írj egy programot, amiben egy focilabda pattog egy vízszintes felületen! A feladat gyakorlatilag megegyezik a harmadik óra hatos feladatával, csak egy képet kell hozzáadni. Emlékeztetőül itt az említett feladat szövege: "Hozz létre egy lapos, széles sprite-ot a vászon alján, ami mozdíthatatlan, és lepattan róla a "labda"-sprite. A labdának ne felejts el `addSpeed()`-del gravitációt adni a `draw()`-ban!"  
(14\*) Írj egy programot, amiben két sprite van, az első mindig követi az egeret, és találkozáskor eltolja a helyéről a másikat. Ha ez megvan, állíts be nekik képeket: az első sprite legyen a mókus a Jégkorszakból, a második egy mogyoró.  
(15\*) Egészítsd ki a harmadik óra 10. (vagy bármelyik az utáni) feladatát úgy, hogy a középső sprite-nak hold, a körülötti keringő(k)nek műhold-képet állítasz be!  
