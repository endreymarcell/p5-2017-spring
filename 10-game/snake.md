# Snake egymásra épülő lépésekben

Az alapötlet az, hogy a kígyó négyzet alakú darabokból áll, és minden darab egy külön sprite. A kígyó mozgását úgy oldjuk meg, hogy mindig a leghátulsó darabot tesszük át a kígyó legelejére.

__MVP:__  
1. Mozgó kígyó három darabból
Setup: Hozz létre egy változót, ami a rács méretét fogja megadni, és három sprite-ot ekkora oldalhosszúsággval. A sprite-ok sorakozzanak egymás mellett, balról jobbra. Csinálj nekik csoportot is, és tedd bele mindet. Állíts be jó alacsony programsebességet, hogy ne rohanjon a kígyó (`frameRate()` függvény).  
Mivel most a legutolsó sprite - a kígyó farka - van a kígyó legjobbszélén, és őt fogjuk a bal oldalra áttenni, ezért a kígyó alapesetben balra halad.
Draw: tedd bele egy változóba a kígyó farkát, vagyis a kígyó-csoport legutolsó tagját. (Ne a "harmadikat", hanem a mindenkori utolsót, hogy ha nőni fog a kígyó, akkor is működjön a program.) Tedd át ezt a sprite-ot pontosan oda, ahol most a legelső kígyó-darab, vagyis a kígyó-csoport legelső tagja van. Utána még módosítsd a helyét úgy, hogy egy rácsméretnyivel balrább menjen.  
Ha most futtatod a programot, azt találod, hogy a kígyó feje leválik és elmegy. Ez azért van, mert mikor a kígyó farkát áthelyeztük az elejére, csak _vizuálisan_ cseréltük fel a kígyódarabok sorrendjét, a csoportban viszont még mindig ugyanolyan sorrendben vannak. Tehát mikor megint megpróbáljuk kivenni a csoportból a legutolsó darabot, ugyanazt a sprite-ot találjuk meg, mint az előbb - éppen csak most már helyileg nem ő lesz a kígyó végén. Arra volna szükségünk, hogy mikor a kígyó farkát a feje elé tesszük, a sprite-ok sorrendje is cserélődjön a csoportban. Erre írtam egy segédfüggvényt: a `shift(group)` pont ezt fogja tenni, tehát a neki átadott csoportot átrendezi úgy, hogy a legutolsó elem az elejére kerüljön. Ha még ezt is meghívod a draw-ban, már jól fog haladni a kígyód.  

2. Irányváltás  
Kell egy változó, amibe beleteszed az irányt, ezt kezdetben állítsd "left"-re. A `keyPressed()`-ben a lenyomott billentyűtől függően állítgatod a megfelelő irányra, a draw-ban pedig a hátulról előre átpakolt sprite helyét ennek a változónak az értékétől függően kell manipulálni.  

__Nice to have:__  
3. Csak legális irányváltások  
Ha a kígyó épp balra halad, akkor nem fordulhat jobbra. Tehát a `keyPressed()` if-jeiben nem csak azt kell vizsgálni, hogy melyik gombot nyomta le a felhasználó, hanem azt is, hogy merre halad épp a sprite. Emlékeztetőül: az if zárójelében a feltételeket ÉS (`&&`), illetve VAGY (`||`) feltételekkel lehet összekapcsolni, az egyes feltételeket pedig egy előjük írt felkiáltójellel lehet negálni.  

4. Szabályos rács + alma  
Ha be akarjuk rakni az almát, amit a kígyó megehet, jön a következő gond: a random helyre létrehozott sprite nem lesz abban a szabályos "rácsban", ahol a kígyó mozog. Arra volna szükségünk, hogy amikor az alma létrejön, akkor a koordinátái a rács méretének egész számú többszörősei lehetnek. Ehhez adok egy segédfüggvényt: a `roundTo(num, to)` függvény két számot vár, és az elsőt a legközelebbi másikra kerekíti. Tehát `random(19.1, 1) == 19`, viszont `random(19.1, 10) == 20`, és `random(19.1, 100) == 0`. Figyelj arra, hogy mind a kígyó, mind az alma ennek segítségével helyesen, jó helyen jöjjön létre.  

5. Az alma megevése  
Ha az alma fedésbe kerül a kígyóval, kerüljön új, random helyre (most is a rácsra). Az erre szolgáló if-et a kígyó mozgása utáni részre érdemes helyezni.  
Sajnos a p5-ös `overlap()` függvény nem tökéletes, néha már akkor is fedést jelez, amikor még csak a négyzetek széle érintkezik. Ezt pl. úgy lehet megoldani, hogy az almát létrehozáskor a rács méreténél pont pár pixellel kisebbre állítod.  

6. A kígyó növekedése az alma megevésekor  
Ehhez csak csinálni kell egy új sprite-ot ott, ahol most a kígyó legutolsó darabja van, és hozzáadni a kígyó-csoporthoz.  

7. Kígyóhalál  
Ha a kígyó rámegy a saját farkára, legyen vége a játéknak. Itt is belefutunk az `overlap()` túlkapásaiva, ezért érdemes a kígyó darabjait is a rácsméretnél picit kisebbként létrehozni.  
Ha a kígyó ráment a saját farkára, írd ki a képre, hogy "GAME OVER", és állítsd meg a program futását.  

__Extrák:__  
8. Pontszám  
A program elején hozz létre egy változót, amiben számolni fogod, hány almát sikerült megenni. Ezt a pontszámot mindig írd ki a program bal felső sarkába, és minden megevett alma után növeld meg.  

9. Vászon széle  
A klasszikus snake-ben ha a kígyó elhagyta a pályát, akkor újra bejött a szemközti oldalon. Egészítsd ki a draw-t úgy, hogy mikor a kígyó farka előre ugrik a kígyó elejére, nézd meg, hogy nem hagyta-e el a vásznat. Ha kiment a szélen, akkor tedd át a szemközti szélre (nem feledkezz meg a rácsra kerekítésről).  
