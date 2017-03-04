# Harmadik óra: p5 dinamika (VÁZLAT)

## JSBin használat
Autosave (snapshots).  
Description (ill. név), open, archive.  
(Save as template, new.)  
Share, clone (sajátot is).  

Code editor, syntax highlight, helpers.  
- autoclose braces  
- show errors: pure expressions (= vs ==, + vs +=), unclosed parens, forgotten commas  

```
student = "Marca"  
grade = 5
alert(student)
```

`Cmd + Shift + L` --> autoformat (sietőskézírás-javító)  
(windowson `Ctrl + Shift + L`)
(csillagos: sublime hotkeys)  

Játszótér: http://jsbin.com/ninanu/edit?js,output
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
használata:  
`jump()`  

note: {} "blokk", benne indent  

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

Feladatok: TODO  

### draw, setup vs draw

`print("hali")`  a `setup`-ban, aztán a `draw`-ban  
mét látványosabb: `print(counter)`   
`noLoop()` és `loop()`  

## draw ötletek

Lezuhanó sprite:  
`addSpeed(1, 90)`  
(csillagos: `limitSpeed()`)  

Bepörgő sprite:  
`rotationSpeed += 1`  

Interaktív, egeret követő sprite:
`positon.x = mouseX`  

## sprite interakciók
(Előző sketchep használva, konzolon:)  
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
- Két fal között pattogó sprite  
- Sík felületen pattogó sprite  
- Egeret követő sprite lepattan az egyikről, eltolja a másikat

Randommal:  
- Két sprite egymásnak fut, és lepattannak, tömegük és sebességük random  
- Egy sprite random helyen, az a cél, egy másik sprite-tal oda kell eltolni egy random helyen lévő harmadikat  

### csillagos
`attractionPoint`  
`rotateToDirection`  
groups  

## Referencia
https://p5js.org/reference/#/p5/  
http://p5play.molleindustria.org/docs/index.html  
