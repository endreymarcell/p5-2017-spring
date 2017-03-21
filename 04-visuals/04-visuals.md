# Negyedik óra: rajzolás

## Ismétlés
függvény mint olyan. setup és draw. boilerplate: createCanvas, background, allSprites.draw()

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
(3*) Írj egy programot egy körrel, ami a vászon közepén van, és mindig pont akkora az átmérője, hogy az egér hozzáérjen! Ez technikailag azt jelenti, hogy a kör átmérője a kör középpontja (egyik pont) és az egér helye (másik pont) közötti távolság duplája. Használhatod a p5 `dist()` függvényét, ami négy számot (két pár koordinátát) vár, és megadja az így meghatározott két pont távolságát.  
(4*) Írj egy programot, ami eltünteti az egeret, helyette pedig a "ಠ_ಠ" szöveget írja ki mindig pont az egér helyére! Ha ez megvan, írd át úgy, hogy a szöveg eleve kis betűmérettel jelenjen meg, de a program futása alatt egyre nagyobb legyen!  
(5*) Írj egy programot, ami kiírja a képernyő közepére az egér aktuális x koordinátáját!  

## Változó színek

### RGB(A) színek

RGB  
RGBA (A: 0 átlátszó, 255 átlátszatlan)  
folyamatosan eltűnő vagy megjelenő rajz (LoD a semmiből)  
egértől függő rajz  

## Random színek

random RGB(A)  
megjegyzés a végtelen számú zárójelről.  
példa: random színes körök/négyzetek. egy szín fixálása még szebb eredményt adhat.  

## Feladatok

(6) 

sin

## Képek

`loadimage()`  
`image()`  
(megjegyzés: .png)  

Feladat:  TODO  

`sprite.addImage()`  
`rotationSpeed`  

Konzol helyett programban:
`preload() { ... }`  

## Feladatok  

Hold körül keringő műhód (rotate-tel)  
Egeret követő batman  