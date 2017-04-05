# Hatodik óra: programállapot és elágazás (if)

## Feltételes szerkezet

Először konzolon, utána programban.  
Feltétel: ha az egér nagyon elmegy jobbra, színezzük kékre a vásznat.  
```
if (mouseX > 300) {
	background("blue")
}
```

Feltételes szerkezet:  
```
if («condiditon») {
	// commands
}
```
Ahol a `«condiditon»` helyére egy feltételt kell írni, a `// commands` helyére pedig a feltétel igazsága esetén végrehajtandó parancsokat.  

Feltétel lehet (konzolon kipróbálva):  
- egyenlőség (`bob.position.x == 200`, NB. `==`, nem pedig `=`)  
- egyenlőtlenség (`mouseX > 300`)  
- olyan függvények, amik igazzal/hamissal felelnek (`bob.overlap(alice)`)  
- olyan változók, amik igaz/hamis értéket tárolnak (`bob.immovable`)  

Példa: sprite halad jobbra, egy bizonyos távolságnál forogni kezd  
Példa: sprite halad jobbra, egy bizonyos távolságnál megáll, esetleg elindul visszafelé  
Gotcha: átugorhatja a konkrét pixelt  

Írjuk meg a onewayt, twowayt (koordinátára)  

__Csillagos__: írd meg a pulse-t. Itt nem a távolság végére kell tesztelni, hanem a közepére, és addSpeed-del korrigálni hol az egyik, hol a másik irányba. Tehát ha jobbra-balra leng egy sprite, akkor ha megtette már a táv felét, akkor balra kell addSpeed-et hívni, ha nem, akkor jobbra.  

Példa: kezedeti kékre színezős, előbb két iffel, aztán else-ággal  

## Felhasználási módok

__Rajzolás__  
`mouseIsPressed` és rajzolósdi. (szivárvánnyal még jobb.)  
különbség a mouseClicked-hez képest.  

__sprite-ok__  
bizonyos távolság után eltűnő sprite  
`overlap(otherSprite)` then `shapeColor`  
`mouseActive = true` után `mouseIsOver`, `mouseIsPressed` (NB. != global)  

__Késleltetés__  
`frameCount` bemutatása  
egyik sprite később indul, mint a másik  

__Programállapot__  
kattintásra felkapcsolódó lámpa  

__keyCode és billentyűkkel irányítás__  
BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW  
jobbra-balra-fel-le lépkedő sakkbábu  
forgó-haladó rakéta  
sőt, olyan, amivel lőni is lehet  
megjegyzés: key és nagybetű  

__flappy bird közösen__  

__Csillagos__  
Több feltételt is össze tudunk kapcsolni a logikai ÉS, illetve VAGY operátorokkal. Az előbbi jele `&&`, az utóbbié `||`. Feltételeket negálni is lehet egy eléjük írt felkiáltójellel. Például a "`mouseX` nagyobb száznál és nincs lenyomva billentyű" feltételt így írhatjuk feltételes szerkezetbe: `if (mouseX > 100 && !keyIsPressed) { ... }`  

## Feladatok  

__Clone, description!__  

(1) Írj egy programot, amiben az óraihoz hasonlóan egy kutya követi az egeret, de nem úgy, hogy mindig pontosan ott van, ahol az egér, hanem úgy, hogy elindul az egér irányába. Tehát ha az egér balrább van a kutyánál, akkor induljon el balra, ha jobbrább, akkor jobbra.  
(2) Egészítsd ki az előző programot úgy, hogy a kutya mindig arra is fordul, amerre épp halad. Ehhez a sprite `mirrorX()` függvényét tudod használni. A függvény egy számot vár: ha a szám 1, akkor sprite vízszintes tükrözés nélkül, eredeti képpel fog megjelenni; ha egy, akkor vízszintesen tükrözve.  
(3) Írj egy programot, amiben két sprite van. Az egyik legyen mindig a vászon közepén, és legyen szomorú Cookie Monster alakja. A másik mindig kövesse az egeret, és legyen cookie alakja. Írd bele a programba, hogy ha Cookie Monster fölé viszed a sütit, akkor vidám lesz.  
(4) Írj programot, amiben az egér vonalat húz (gyakorlatban: köröket rajzol) maga után, de csak ha lenyomod az egérbombot. Egészítsd ki úgy, hogy billentyűnyomáskor is történjen valami: ha a space billentyűt nyomod meg, törlődjön ki az egész rajz, ha bármi mást, akkor válassz új random színt a rajzoláshoz.  
(5\*) Írj egy programot, amiben van három különböző színű, jobbra forgó sprite. Írd bele, hogy bármelyikre kattintasz a háromból, a háttér olyan színű lesz, mint az adott sprite. (Nem elég a kattintáskor `background()`-ot hívni, a kiválasztott színt el kell tárolni egy változóba, és abból a változóból kell mindig a hátteret állítani a `draw()`-ban.)  
(6\*) Írj egy programot, amiben egy hal menekül az egér elől. Legyen kék a háttér, legyen rajta egy hal alakú (képű) sprite, ami kap némi sebességet egy random irányba, ha fölé viszed az egeret. Erre a sprite-ok `overlapPoint()` függvényét tudod használni. Ahhoz, hogy a kis kezdeti sebesség után azért meg is álljon, állítsd be neki súrlódást. - Ez a program még nem fog jól működni, mert a hal hiába indul el valamelyik irányba, a következő pillanatban megint igaz lesz, hogy rajta van az egér, tehát új random irányt fog választani magának, aztán megint, szóval nem fog szépen elúszni egy megadott irányba, hanem "rázkódni" fog az egér alatt. Gondolkodj el rajta, hogy lehetne ezt kiküszöbölni, és próbálj leprogramozni egy megoldást. (Összetett feltételekről lásd a fenti "csillagos" szakaszt.)  
