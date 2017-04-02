# Hatodik óra: programállapot és elágazás (if)

## Feltételes szerkezet

Feltétel: ha az egér nagyon elmegy jobbra, színezzük kékre a vásznat.  

Feltételes szerkezet:  
```
if («condiditon») {
	// commands
}
```
Ahol a `«condiditon»` helyére egy feltételt kell írni, a `// commands` helyére pedig a feltétel igazsága esetén végrehajtandó parancsokat.  

Feltétel lehet (konzolon kipróbálva):  
- egyenlőség  
- egyenlőtlenség  
- olyan függvények, amik igazzal/hamissal felelnek  
- olyan változók, amik igaz/hamis értéket tárolnak  

Példa: sprite halad jobbra, egy bizonyos távolságnál forogni kezd  
Példa: sprite halad jobbra, egy bizonyos távolságnál megáll  
Példa: sprite halad jobbra, egy bizonyos távolságnál elindul visszafelé  
Példa: sprite halad jobbra, sprite vagy egér van jobbrább? --> else-ág  

## Felhasználási módok

Késleltetés:  
`frameCount` bemutatása  
egyik sprite később indul, mint a másik  

`mouseIsPressed` és rajzolósdi. (szivárvánnyal még jobb.)  
különbség a mouseClicked-hez képest.  

sprite-ok:  
bizonyos sebesség felett eltűnő sprite (bob.velocity.x)  
`mouseActive` és `mouseIsOver`, `mouseIsPressed` (NB. != global)  
`overlap(otherSprite)`  

`visible` és else-ág  

Programállapot:  
kattintásra felkapcsolódó lámpa  
TODO

keyCode és billentyűkkel irányítás  
BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW  
jobbra-balra-fel-le lépkedő sakkbábu  
forgó-haladó rakéta  
sőt, olyan, amivel lőni is lehet  
megjegyzés: key és nagybetű  

flappy bird közösen  

Csillagos:  
Több feltételt is össze tudunk kapcsolni a logikai ÉS, illetve VAGY operátorokkal. Az előbbi jele `&&`, az utóbbié `||`. Feltételeket negálni is lehet egy eléjük írt felkiáltójellel. Például a "`mouseX` nagyobb száznál és nincs lenyomva billentyű" feltételt így írhatjuk feltételes szerkezetbe: `if (mouseX > 100 && !keyIsPressed) { ... }`  

## Feladatok  

TODO





~~Csillagos: hangok~~  
~~p5-ben hangokat is tudunk használni, nagyon hasonlóan a képekhez. Sajnos direkt linkelhető hangfájlokat sokkal nehezebb találni az interneten, mint képeket, de ezen a weboldalon pl. vannak: http://www.freesoundeffects.com/ (Itt bal oldalt a Free sound effect alatt kell kategóriát választani. A kiválasztott hang Download in MP3 gombjára jobb klikkelve tudjuk kimásolni a linket.)~~  

~~loadsound, playSound, stopSound~~  