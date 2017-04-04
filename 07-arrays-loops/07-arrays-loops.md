# Hetedik óra: tömbök és ciklusok (for)

Ma sok új speciális karakter lesz. [Ajánlom a táblázatot](https://github.com/endreymarcell/p5-2017-spring/#speciális-karakterek).  

## Csoportok

### allSprites csoport  

allSprites  
allSprites.length  

bob = createSprite  
allSprites.length  

alice, charlie  
allSprites.length  

Mit tud? draw-t láttuk, ezen felül van neki pl. bounce.  
Két fal között pattogó labda, vagy akár négy fal között.  
Figyelem: nem azért van neki bounce, mert sprite-ok vannak benne, hanem csak.  

konkrét sprite-ok:  
allSprites[0], 1, 2  
ugyanaz, mint ha bobot mondanék  
illetve lehet referencia nélküli sprite-ot is utólag irányítani  
--> gondolatok arról, hogy ha nem akarunk később bob-ként hivatkozni valakire, akkor felesleges bobnak nevezni  
illetve hogy a bob csak egy változó, ami bármelyik sprite-ra mutathat, nem pedig a sprite része, mint mondjuk a színe vagy a helye  

Feladat:  
(1) Írj egy programot, amiben van legalább három random helyen létrehozott sprite, meg egy, ami követi az egeret. Írd bele, hogy az egért követő sprite találkozás esetén eltolja (displace) az összes többi sprite-ot. Használd az `allSprites` csoportot.  
(2\*) Egészítsd ki a programot úgy, hogy csak lenyomott egérgomb mellett tudja eltolni az egeret követő sprite a többit. Ellenkező esetben ütközzön nekik (collide).  

### Saját csoportok  

dogs = new Group()  
(új szintaxis, nem véletlenül nem hasonlít az eddigi dolgokra)  
(dogs.length)  
dogs.add(bob)  

Feladat:  
(3) Írj egy programot, amiben van 2-3 kutya és 2-3 macska alakú sprite. Csinálj egy `dogs` és egy `cats` csoportot, és a létrehozott sprite-okat rakd beléjük. Legyen még egy sprite ezeken kívül, aminek csont alakja van, és követi az egeret. Írd meg, hogy a csont el tudja tolni (displace) a kutyákat, de nekiütközzön (collide) a macskáknak.  
(4) Írj egy programot négy fal-sprite-tal: két lapos, vékony vízszintessel és két keskeny, magas függőlegessel. (Nem kell, hogy a vászon szélén legyenek.) Add őket hozzá egy `walls` nevű csoporthoz. Csinálj még egy sprite-ot az így létrehozott doboz közepén, adj neki véletlen irányú kezdősebességet, és állítsd be, hogy lepattanjon a falakról.  
(5\*) TODO  

## for ciklus  

hogy számol egy számítógép? csinál egy változót, növelgeti, és mindig megnézi, elérte-e már a felső határt.  
kb valahogy így: (ez nem valódi kód!)  
i = 0  
// LOOP  
i < 3 ?  
doSomething()  
i += 1  
// go to LOOP  

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

Feladat:  
TODO  

## for ciklus groupokon  

Hogy tudunk utasítást adni egy csoport minden tagjának?  
Három sprite-nál:  
```
for (i = 0; i < 3; i += 1) {
	allSprites[0].position.x += 10
}
```
Általánosan: `i < allSprites.length`  

Illetve sok sprite létrehozása ciklusban:  
```
stars = new Group()
for (i = 0; i < 10; i += 1) {
	star = createSprite()
	stars.add(star)
}
```

Feladatok: TODO  
(6)  
(7)  
(8)  
(9)  
(10)  
