# Ötödik óra: egér és billentyűzet (VÁZLAT)

## Apróságok

- debugging with the console
- cmd shift L
- loadimage
- show it in local
- latest version when sharing
- js src fájlok megmutatása, miért is kell mindig az enyémből klónozni
- save as template

## Még pár vizuális eszköz

Tudok sprite-okat is áttetszővé tenni? Igen:  
`bob.shapeColor = "white"`  
helyett  
`bob.shapeColor = color(255, 255, 255, 100)`  

Tudok képeket is áttetszővé tenni? Igen:  
`image()` előtt `tint(255, 255, 255, 100)`  
`noTint()` kikapcsolja  

Segédfüggvények mozgó sketchekhez:  
`oneway(from, to, speed)`  
`twoway(from, to, speed)`  
`pulse(from, to, speed)`  

Rá lehet kötni dolgok  
- helyére: `square(oneway(...), 100, 100)`  
- méretére: `circle(width / 2, height / 2, twoway(...))  
- forgására:  `bob.rotation = pulse(...)`
- színére: `background(twoway(...))`  
- átlátszóságára: `fill(pulse(...))`  
stb. Mindehova, ahova számot lehet írni.  


## Nagy feladat: képernyőkímélő

Írj egy képernyőkímélőt, ami szép és mozog!  
Ötletek:  
(1/a) DVD-logó pattog a falakon belül  
(1/b) Holdas-műholdas feladat fekete háttérrel, lepattanó sprite-okkal  
(1/c) Villogó DANGER! felirat  
(1/d) Pulzáló falevelek  
(1/e) Lengő golyók  
(1/f) Versenyző vízcseppek  
(1/g) Foucalt-inga  
(1/h) Egymásnak hajtó autók  
(1/i) Nyan-invázió  
(1/j) Falevelek  

«szünet»  

## Egér és billentyűzet

További speciális függvények a `preload()`, a `setup()` és a `draw()` után:  
`mouseClicked()` --> amit ebbe írsz, akkor fut le, ha kattintasz az egérrel.  
`keyPressed()` --> amit ebbe írsz, akkor fut le, ha megnyomod bármelyik billentyűt.  

### Feladatok:  

(2) Írj "nyomdázós" programot: ha kattintasz valahol, oda kerüljön egy bajusz!  
(3) Írj programot, amiben egy sprite forog a képernyő közepén, és ha kattintasz, oda ugrik, ahol az egér van!  
(4) Írj programot ugráló sprite-tal! Legyen egy mozdíthatatlan "talaj", legyen egy sprite, amire gravitáció hat (`addSpeed()` lefelé a `draw()`-ban), és ha lenyomsz egy billentyűt, ugrik egy nagyot felfelé (`addSpeed()` felfelé)!  
(5*) 
(6*) 

«szünet»  

## Nagy feladat: játék  

Írj egy játékot vagy egyéb interaktív programot, ami reagál az egérre vagy a billentyűzetre!  
Ötletek:  
(7/a) Lebutított Flappy Bird: a fal-sprite mindig ugyanolyan magasságban van. de azért a madár ugrálhat. Ezt később esetleg fel lehet okosítani teljes értékű játékká.  
(7/b) üstökös csóvával: nem teljesen fekete background  
(7/c) anyabolygót megvédeni: lepattinta a belecsapódni akaró rakétát  
(7/d) vonalakat összekötős rajzolós  
(7/e) ahova kattintasz, ott jöjjön létre egy sprite és induljon el a nagyvilágba (rotateToDirection süni/űrhajó/valami). ja, és pattanjanak le egymásról - groups!  
(7/f) menekülős, fal mögé kell menni  
(7/g) szivárványt rajzolós pulzáló színekkkel  
(7/h) szív, ami minden rákattintás után egyre gyorsabban dobog  
(7/i) egér helyett egér-sprite követi az egér helyét  
(7/j) három, különböző random sebességgel leeső pinponglabdát visszaütögetni

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


## Érdekes lehet még

collider
