# Harmadik óra: p5 dinamika (VÁZLAT)

## JSBin használat
__autosave__: Nem kell menteni, folyamatosan ment magától. (Viszont lehet snapshotokat menteni.)  
__név és megnyitás__: A neve a kiejthetőre generált string az url-ban. Beazonosítani a description alapján lehet (File > Add description).  
Létrehozottakat a My Bins alatt találjuk description szerint Duplakattra megnyílik.  
__archiválás__: Szükségtelenné vált bint vagy snapshotot archiválhatjuk.  
__megosztás__: Megosztás: az URl alapján bárki látja, illetve Share menüpont. Átírni azonban csak a tulaj tudja. (Figyelem: a konzol nem számít átírásnak.) Viszont le lehet klónozni. Amúgy sajátot is.  
Illetve van még az output megosztása.  

Code editor: nincs szövegformázás, illetve ami van, az syntax highlight.  
Olyan, mint a konzol, csak okosabb.  
Helpers:  
- automatikusan bezárja az idézőjelet/zárójelet  
- kifejezés köré rakja az idézőjelet/zárójelet  
- hibaüzenet: expressions (= vs ==, + vs +=), bezáratlan zárójelek, lefelejtett vesszők  

Példa:  
```
student = "Marca"  
grade = 5
alert(student)
```

`Cmd + Shift + L` --> autoformat (sietőskézírás-javító)  
(windowson `Ctrl + Shift + L`)  

__csillagos__  
- Cmd + Ctrl + fel/le nyíl --> sor mozgatása fel/le  
- Ctrl + Shift + fel/le nyíl --> kurzor többszörözése  
- Cmd + D --> szó kijelölése, ismétlődően  

### Játszótér
http://jsbin.com/ninanu/edit?js,output  
p5-öt ide nem tudunk írni, csak függvényeken belülre. Mit jelent ez?  

## Függvények definiálása

változók és függvények: létrehozás vs. használat  

saját függvény definíciója:  
```
function jump() {
	bob.position.x += 20
	bob.position.y += 20
}
```
használata:  `jump()`  

note: `{}` "blokk", benne indent  

kikommentelés  

## setup és draw

Eddig a függvényeket a p5 definiálta, mi csak használtuk. Most fordított: mi definiáljuk, ő fogja használni (meghívni).  

### setup

```
function setup() {
	bob = createSprite()
	bob.setSpeed(1, 0)
}
```

Hoppá, rögtön kiment a vászonról. Mekkora a vásznunk? `width` --> 100. Kínos.  
`createCanvas(400, 400)`  
és még jobb:  
`createCanvas(windowWidth, windowHeight)`  

Ez kész, a setupban gyakorlatilag mindig lesz egy ilyen sor.  
(Az eddigi programokban is benne volt, mert beleírtam, csak nem mutattam meg.)  

Akkor írjuk bele a setupba, amit már tudunk: `createSprite()`, `width`-`height`-`shapeColor`, `setSpeed()` és `friction`, `rotationSpeed`

## Feladatok:  
(Minden feladat klónozással és descrition-állítással kezdődjön.)  
(1) Írj egy programot, amiben három sprite van: az első kb. bal felülről indul és állandó sebességgel jobbra mozog, a második kb. jobb alulról mozog és állandó sebességgel balra halad, a harmadik pedig négyzet helyett hosszúkás, lapos, és csak egyhelyben áll a vászon közepén, vízszintesen.  
(2) Írj egy programot, amiben három sprite van sorban egymás mellett. Mindháromnak adj színt, balról jobbra egyre világosabbat; mindháromnak adj méretet, balról jobbra egyre kissebbet; és mindhárom forogjon, balról jobbra egyre gyorsabban.  

__csillagos__  
(3\*) Írj egy programot, amiben két sprite van. Mindkettőnek legyen véletlenszerű a helye (a teljes vásznon), a mérete (értelmes keretek között), mindkettőnek adj véletlen nagyságú és véletlen irányú sebességet, és véletlen nagságú forgási sebességet is. (Ne felejtsd el a forgatási sebességhez használt véletlenszám alsó határt negatívra állítani, hogy mindkét irányba tudjon forogni.)  
(4\*) Ha ez megvan, tedd a programot kicsit rendezettebbé: az első sprite mindig a képernyő bal oldalán jelenjen meg (továbbra is véletlenszerűen, de sosem jobbrább a kép közepénél) és mindig jobbra forogjon. A második sprite mindig a kép jobb oldalán jelenjen meg, és mindig balra forogjon. A sebességük irányát úgy állítsd be, hogy a jobb oldalt lévő sprite mindig alapvetően balra induljon el - mindig kicsit másfele, de sosem jobbra -, a bal oldali pedig mindig jobbra. (Ez a legutolsó kicsit trükkös.)  

### draw, setup vs draw

`print("hali")`  a `setup`-ban, aztán a `draw`-ban  
még látványosabb: `print(counter)`   
`noLoop()` és `loop()`  

A sprite-ok viszont nem jelennek meg.  
`bob.draw()` működik, de ha több sprite-om van, kényelmetlen.  
Helyette: `drawSprites()`  
Továbbá: `background()`  

Ez is kész, megvan a boilerplate. Mentsük el template-ként.  

## draw ötletek

Lezuhanó sprite:  
`addSpeed(1, 90)`  
(csillagos: `limitSpeed()`)  

Bepörgő sprite:  
`rotationSpeed += 1`  

Interaktív, egeret követő sprite:
`positon.x = mouseX`  

## sprite interakciók
(Előző, ereget követő sketchepet használva, konzolon bemutatva:)  
Egy sprite tudja, hogy rálóg-e egy másikra: `overlap()`  

És reagálni is tud a rálógásra:  
`collide()` ("nekimegy")  
`displace()` ("eltol")  

Egérrel mozgatás helyett írjuk bele a programba.  

Pattanás:  
`bounce()`  
`mass`  
`immovable`  
`restitution` (0-nál tökéletesen rugalmatlan, mint a collide; alapértelmezett 1-nél tökéletesen rugalmas; felette hiperrugalmas)  

## Feladatok:
(5) Írj egy programot, amiben egy labda pattog két fal között. Hozz létre kettő magas, vékony sprite-ot a vászon bal és jobb oldalán, középen pedig egy harmadikat. A falként funkcionáló sprite-okat tedd mozdíthatatlanná, a labdának pedig adj valamilyen kezdősebességet, és állítsd be, hogy lepattanjon a falakról.  
(6) Írj egy programot, amiben egy labda pattog a padlón. Hozz létre egy lapos, széles sprite-ot a vászon alján, ami mozdíthatatlan, és lepattan róla a "labda"-sprite. A labdának ne felejts el `addSpeed()`-del gravitációt adni a `draw()`-ban!  
(7) Írj egy programot, amiben két sprite van. Az első az "ember", ez a sprite mindig kövesse az egér mozgását. A másik a "doboz", ezt pedig az ember el tudja tolni, ha nekimegy.  

Randommal:  
(8) Egészítsd ki úgy az előző programot, hogy legyen egy harmadik sprite is, ez lesz a "cél". A program indulásakor mind a doboz, mind a cél véletlenszerű helyen jelenjen meg. Adj a sprite-jaidnak valamilyen megkülönböztető színt vagy méretet is, hogy tudd, melyik melyik. Ha ez megvan, hozzáadhatsz még egy-két akadályt is: olyan sprite-okat, amik mozdíthatatlanok.  
(9) Írj egy programot, amiben két sprite van a képernyő két oldalán. A bal oldali sprite jobbra induljon el, de véletlen nagyságú sebességgel, a jobb oldali pedig balra, szintén véletlen tempóban. Állítsd be őket úgy, hogy lepattanjanak egymásról. Ha ez megvan, egészítsd ki a programot úgy, hogy a tömegük is véletlenszerű (értelmes keretek között).  

### csillagos
`attractionPoint`  
`rotateToDirection`  
groups  

## Referencia
https://p5js.org/reference/#/p5/  
http://p5play.molleindustria.org/docs/index.html  

## TODO érdekes lehet még
- kommentezés  
- `allSprites`  
