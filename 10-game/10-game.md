# Tizedik óra: saját játék

Visszajelzés: https://goo.gl/forms/oc8y9pZ6hOG5Nwoj2

## Hogyan tovább?

### Processing, p5, p5.play

[Processing tutorialok](https://processing.org/tutorials/)  
[p5.js tutorialok](https://p5js.org/tutorials/)  
[p5.play](http://p5play.molleindustria.org/)  

[openprocessing.org](https://www.openprocessing.org/) - sok p5-ös / Processinges program forráskóddal együtt. Regisztráció után írhatsz ide sajátot is, amihez képeket és hangokat is fel tudsz ide tölteni, nem kell az internetről linkelni.  
[Daniel Shiffman p5.js oktatói videói](https://www.youtube.com/user/shiffman/playlists?sort=dd&view=50&shelf_id=14)  

### JavaScript, webfejlesztés

[w3schools.com/js](https://www.w3schools.com/js/default.asp) - JavaScript tutorial  
[w3schools.com/html](https://www.w3schools.com/html/default.asp) - HTML tutorial  
[w3schools.com/css](https://www.w3schools.com/css/default.asp) - CSS tutorial  

[HTML és CSS tutorial videó](https://www.youtube.com/playlist?list=PLzmyR17f55-J7oZew4QxQ7cfw7d3__ZZs)  
[HTML és CSS interaktív tutorial](https://www.codecademy.com/learn/learn-html-css)  

## Python

[Processing.py](http://py.processing.org/tutorials/) - Processing Python nyelven  
[Learn Python the Hard Way](https://learnpythonthehardway.org/book) - egy nagyon jó könyv a Python nyelvről  
[Ingyenes Udamy kurzusok](https://www.udemy.com/courses/search/?q=python&src=ukw&lang=en&price=price-free)  
[EdX MIT kurzus](https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-10)  
[Pylvax](https://www.facebook.com/groups/pylvax/) - Python programozói közösség  

## Játékok

### Angry birds
Minimálos angry birds.  
(Ez a program indokolatlanul bonyolult és idegesítő, úgyhogy mindenkinek ajánlom.)  

A legnagyobb trükk a madár kilövése, úgyhogy indítsunk ezzel. A félév során általában a `setSpeed()` függvénnyel adtunk sebességet a sprite-oknak, de ezt úgy is meg lehet tenni, hogy konkrét számokra állítjuk be a sprite `velocity.x` és `velocity.y` változóit. Képzeljük azt, hogy az egérrel való kattintáskor kijelölünk egy kezdőpontot, az egér felengedésekor pedig egy végpontot. A két pont közötti vízszintes távolság lesz a sprite-nak adandó vízszintes sebesség, a két pont közti függőleges távolság a függőleges sebesség.  
A kezdőpont kijelölését úgy tudod megoldani, hogy létrehozol egy sprite-ot, láthatatlanná teszed, és az egérgomb lenyomásakor beállítod, hogy helyeződjön pont az egér helyére. Hozz létre egy madár-sprite-ot is, és az egérgomb felengedésekor állítsd be a vízszintes sebességét a kezdőpont-sprite x koordinátájának és az egér jelenlegi x koordinátájának különbségére. Pontosabban a különbség egytizedére, különben túl nagy lesz a sebesség. Függőlegessel ugyanígy. Ha ez működik, akkor a nagyja még hátravan, de a neheze már nincs.  

Csinálj mozdíthatatlan padló- és rúd-sprite-ot, a madarat pedig tedd pont a rúd tetejére. Csinálj a program elején egy programállapot-változót, amiben azt tárolod, hogy a madár épp üldögél vagy repül. A program elején ez nyilván üldögélésre van állítva. A madárnak a setup-ban adj egy nagyon kis súrlódást és viszonylag nagy rugalmatlanságot, a draw-ban epdig állítsd be, hogy ha épp repülés van, akkor hasson rá gravitáció. Azt is tedd hozzá, hogy pattanjon vissza a padlóról.

Adj hozzá egy-két malac-sprite-ot, és add hozzá őket egy malac-csoporthoz. A draw-ban for ciklussal menj végig az összes malacon, vizsgáld meg, hogy fedésben vannak-e éppen a madárral, és ha igen, akkor töröld ki az aktuális malacot.  

Kiegészítésként megírhatod, hogy billentyűnyomásra a madár visszakerüljön a rúd tetejére, illetve hogy ha le van nyomva az egérgomb, akkor rajzolódjon vonal a kezdőpont és az egér jelenlegi helye közé, hogy látszódjon, mekkora lesz a lövés.  

### Flappy bird  
Sima Flappy Bird. Aki ezt az ötödik órán már félig megírta, az legyen szíves másik feladatot választani.  
(Ez a program közepesen nem túl nehéz.)  

__Alap:__ legyen madár, legyenek oszlopok, lehessen ugrálni és meghalni   
Kell egy madár-sprite (kezdésnek jó lesz neki a sima négyzet-alak, nem kell képet betölteni). Kell egy felső és egy alsó oszloprész, ha ezeket a (width, 0) és (width, height) helyre hozod létre és `height - 300` magasra állítod őket, akkor egy egészséges, 300 pixel magas rés lesz közöttük. Kell továbbá egy padló és egy plafon, és őket az oszlopokkal együtt érdemes hozzáadni egy "halálos" csoporthoz, a draw-ba pedig beleírni, hogy ha a madár fedésbe kerül bármelyik halálos sprite-tal, akkor álljon le a program futása (erre van parancs, lásd a kisokost).  
Az oszlopok haladjanak folyamatosan balra, és ha bal oldalt kiértek a vászonról, jöjjenek be újból jobbról. A madárra hasson gravitáció, billentyűnyomásra pedig kapjon némi sebességet felfelé.  

__Közép:__ vászon, oszlopok  
Ahhoz, hogy az oszlopok közötti rés ne mindig középen legyen, mind létrehozáskor, mind az vászon jobb szélére való helyezésükkor randomot kell rakni az y-koordinátájukba. Figyelem, nem lehet egyszerűen meghívni a random-ot mind az alsó, mind a felső oszlop y koordinátájára, mert akkor külön-külön mozognának véletlenül, márpedig nekünk az kell, hogy a kettő oszlop ugyanazon véletlenszám szerint csússzon fel vagy le. Hozz tehát létre egy változót, ebbe tegyél egy véletlenszámot (ez nálam plusz-mínusz 150), és az előző blokkban megadott y-koordinátájához ezt add hozzá. Mint láttuk, az eredeti kód szerint az oszlopok pont középen hagynak rést; ha a véletlenszám például -20 lesz, az azt jelenti, hogy most mindkét oszlop húsz pixellel feljebb lesz az eredeti helyénél, ha mondjuk 120, akkor százhússzal lejjebb.  
Mivel a flappy bird alapvetően magas, keskeny kijelzőre lett kitalálva, a megszokott `createCanvas()` utasítást módosítsd úgy, hogy a vászon ne foglalja el az ablak teljes szélességét, hanem a szélessége legyen kb. a magasságának a 0.7-szerese.  
Ha ez megvan és működik, akkor a játék alapvetően kész.  

__Extra:__ madár-alak  
Adj a madár-sprite-nak madár-alakot. Tudom ajánlani [ezt a képet](http://endreymarcell.hu/p5v2/Flappy_Bird.png).  
Írd bele azt is, hogy a madár a haladási iránya felé forogjon. A teljesen logikusnak tűnű `rotateToDirection` itt sajnos nem fog jól működni - jópont, ha meg tudod magyarázni, miért nem. Helyette állítsd a draw-ban a madár aktuális fordulatát a függőleges sebességének kétszeresére, ez egészen jól működik.  

__Extra:__ indítható és újraindítható játék  
Kicsit para, hogy amint a program elindul, a madár már zuhan is. Írd meg úgy a programot, hogy van benne egy állapotot tároló változó. Ebbe indításkor mentsd el, hogy a játék éppen nem fut. Ezen felül a program futását is állítsd meg a setup végén (erre van parancs, lásd a kisokost).  A `keyPressed()` függvényt pedig írd át úgy, hogy csak akkor ugrassa meg a madarat, ha a program (az állapotot tároló változó tartalma szerint) éppen fut; ellenkező esetben írja át a változót és indítsa el a program futását.  
Még jobb, ha ezen a ponton azt is megírod, hogy a madár és az oszlopok kerüljenek alapállapotba, a halálkor pedig beállítod a programállapot-változót nem futóra. Így az esetleges halál után a programot nem kell újra futtatni, csak megnyomni egy billentyűt, és újraindul.  

__Extra:__ pontszám  
Csinálj egy változót, amit nulláról indítasz, és minden oszloppár után megnöveled az értékét. Ha halál van, írd ki ezt a pontszámot a vászon közepére.  

__Nagyon extra:__ collider  
A madár láthatólag akkor is meg tud halni, ha nem is ért hozzá az oszlopokhoz. Ez azért van, mert a p5.play az érintkezést az egyes sprite-ok "ütközője", úgynevezett _collider_ alapján vizsgálja, a madár téglalap alakú collidere pedig nem forog el a madárral együtt, hanem megnő, hogy az elforgatott madár is beleférjen. Ezt láthatod, ha a program elején `true`-ra állítod a madár-sprite `debug` nevű változóját.  
Hogy ezt orvosold, adj a madárnak egy kör alakú collidert a [referencia alapján](http://p5play.molleindustria.org/docs/classes/Sprite.html#method-setCollider).  

### The bird is the word
Gépelésgyakorlás.  
(Ebben a programban csak egy újdonság van, a többi elég standard cucc.)  

Tudjuk, hogy a sprite-oknak vannak változóik, és azt is tanultuk, hogyan tudunk saját változókat létrehozni. A kettőt kombinálni is lehet: egy sprite-nak csinálhatunk egy új, saját változót, amit mi hozunk létre. Tehát pl. minden sprite-nak automatikusan van egy `mass` változója, de ha azt mondjuk, hogy `bob.mood = "happy"`, akkor onnantól `mood` változója is lesz bobnak.  
Csinálj egy sprite-ot, és adj hozzá egy változót, amiben beállítod, hogy ő milyen betű lesz. Kezdetben ez lehet pl. "X", majd módosítjuk. A sprite helyén majd mindig ennek a betűnek kellene látszódnia, de ezt most nem úgy oldjuk meg, hogy saját draw függvényt adunk a sprite-nek, csak simán állítsd őt láthatatlanra, a draw-ban pedig a `text()` függvénnyel írd ki a betűjét oda, ahol a sprite éppen van. A sprite haladjon a vászon tetejétől lefelé, és ha kiért a vászon alján, induljon megint felülről.  

Csinálj egy sáv-sprite-ot, a vászon aljafelé, a vászon teljes szélességében. Oldd meg, hogy ne takarja el a betűket (tedd félig áttetszővé, vagy rajzold ki előbb ezt, utána írd ki a betűket). Írj egy `keyPressed()` függvényt, amiben megvizsgálod, hogy a lenyomott billentyű megegyezik-e a betű-sprite betű-változójával és hogy fedésben vannak-e éppen (feltételek ÉS-eléséhez használd a `&&` jelet az if-ben). Ha mindkettő igaz, akkor a betű-sprite ugorjon a vászon tetejére.  

Írd meg, hogy a betű-sprite véletlenszerű betűvel induljon. A következő tömbből válassz véletlenszerűen:  
```
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```
Mikor a betű-sprite a vászon tetejére ugrik (akár eltalálás után, akár mert kiment a vászon alján), megint adj neki véletlen betűt.  

Ha mindez megvan, csinálj több betűt: tedd for-ciklusba mind a betűk létrehozását a setup-ban, mind a kirajolásukat a draw-ban, mind a tesztelésüket a `keyPressed()`-ben. A helyüket is tedd véletlenszerűvé: vízszintesen a vászon teljes szélességében, függőlegesen pedig a vászon tetejétől még fel negatívba, hogy ne egyszerre jöjjenek be.  

Extraként számolhatod a találatok és a tévesztések számát egy-egy változóban, és kiírhatod őket a vászonra, illetve mondjuk 20 betű után a programot megállítva adhatsz statisztikát.  

### Zenegép  
Dobgép összerakása.  
(Ez a program nem túl bonyolult, de legalább hangos.)  

A következő hangfájlokat használhatod: [lábdob](http://endreymarcell.hu/p5v2/sounds/drumkit_bass.wav), [pergő](http://endreymarcell.hu/p5v2/sounds/drumkit_snare.mp3), [tam](http://endreymarcell.hu/p5v2/sounds/drumkit_tom.wav), [cintányér](http://endreymarcell.hu/p5v2/sounds/drumkit_cymbal.mp3), [lábcin](http://endreymarcell.hu/p5v2/sounds/drumkit_hihat.wav).  

Csinálj először egy sprite-ot a ládbobnak. Csinálj egy hang-csoportot, írd meg, hogy kattintásra létrejöjjön egy hang és hozzáadódjon a csoporthoz, illetve adj neki sebességet is balra. A draw-ban írd meg, hogy ha a hang-csoport bármelyik tagja fedésbe kerül a lábdob-sprite-tal, akkor lejátszódjon a lábdob hangja. (Azt ajánlom, hogy a korábbi `playSound(sound)` helyett most inkább hívd meg a hangot tartalmazó változó saját `.play()` függvényét.)  
Egy for ciklussal haladj végig a hang-csoport tagjain, vizsgáld meg, hogy aktuális sprite épp fedésben van-e bárkivel, és ha igen, tedd a vászon jobb szélére.  
Ha ez megvan, már csak a maradék négy dobfajtát kell hozzáadnod.  

Kiegészítésképpen megírhatod, hogy a hangok ne fix sebességgel haladjanak, hanem egy sebesség-változó tartalmával csökkentgeted az x koordinátájukat a draw-ban, ennek a változónak az értéket pedig növeled/csökkented a felfelé-lefelé gombok megnyomásával.  

Másik kiegészítés: csinálj egy programállapot-változót, amiben azt tárolod, hogy fut-e éppen a program. Alapból állítsd be úgy, hogy nem fut; ha megnyomod a szóközt, akkor állítódjon át a jelenlegi állapot ellenkezőjére; a hangok pedig csak akkor haladjanak, ha a program éppen fut.  

Harmadik kiegészítés: a sprite-ok ne a vászon jobb szélére kerüljenek vissza, hanem egy határ-sprite helyére, akit a jobbra-balra nyilakkal lehet mozgatni.  


### Színes
Rajzolósdi.  
(Ez egy igen visszafogott program.)  

Egyik újdonság: a félév során általában a `setSpeed()` függvénnyel adtunk sebességet a sprite-oknak, de ezt úgy is meg lehet tenni, hogy konkrét számokra állítjuk be a sprite `velocity.x` és `velocity.y` változóit.  
Másik újdonság: a félév során sokat használtuk a `mouseX` és `mouseY` változókat, ezeken kívül azonban létezik egy másik páros is, a `pmouseX` és `pmouseY`, amik az egér _előző pillanatban_ elfoglalt helyét tárolják (ahol az előző pillanat a draw függvény előző lefutását jelenti).  
Ötlet a két újdonságból: ha az egér húzásával el akarunk "hajítani" egy sprite-ot, akkor a sprite sebességének a vízszintes komponensét állítsuk az egér jelenlegi x koordinátájának és az előző pillanatbeli x koordinátájának a különbségére, illetve függőlegessel ugyanez.  

Először is kell egy program, amiben a vászonnak mind a négy szélén mozdíthatatlan falak vannak. Hogy ezzel nem menjen az idő, ezt [innen](https://gist.github.com/endreymarcell/734cbb3874923c69bc723de02a1b9c36) ki tudod másolni. Csinálj továbbá egy csoportot a majdani pontoknak.  
Az egér lenyomott egérgomb mellett való húzásakor meghívódó függvénybe (ld. kisokos) írd bele, hogy jöjjön létre egy kis sprite, amit hozzá is adsz a csoporthoz, közepesen rugalmatlanná teszel, illetve a fent leírt módszerrel "elhajítasz". A draw-ban pedig for ciklussal menj végig a csoport tagjain, és mindenkinek adj gravitáció. Ezen felül állíts be halványító feketét, hogy a pontok csíkot húzzanak maguk után. Azt is állítsd be, hogy a pontok mindenkiről lepattanjanak.  

Ha a pont-sprite-ok örök életűek, egy idő után rengeteg lesz belőlük, ami lassítja a programot. Érdemes még kitalálni valamit arra, hogy egy idő után eltűnjenek a színről. Ez lehet például az, hogy mindig teszteled a draw-ban lévő for ciklusban, hogy kb. megállt-e a sprite (elég kicsi-e a velocity-jének az abszolút értéke), vagy hozzáadsz a sprite-okhoz egy számláló-változót (saját sprite-változókról ld. a "bird is the word" programot), amit növelgetsz, és egy bizonyos pont után törlöd a sprite-ot, de további megoldások is működhetnek.  

Kiegészítés: puszta kihívásként átírhatod úgy a programot, mintha nem lenne `pmouseX` és `pmouseY`. Hozz létre saját magad két változót erre a feladatra, és mentsd el bele az egér helyet te magad.  

### Vonzás és taszítás
Írj egy programot, amiben vonzó és taszító pontokkal lehet befolyásolni sok részecske mozgását.  
(Ebben a programban van pár újdonság, de nem vészes.)  

Először is kell egy program, amiben a vászonnak mind a négy szélén mozdíthatatlan falak vannak. Hogy ezzel nem menjen az idő, ezt [innen](https://gist.github.com/endreymarcell/734cbb3874923c69bc723de02a1b9c36) ki tudod másolni.  
Utána egy for ciklussal adj hozzá a programohoz 50 részecske-sprite-ot véletlen helyre, kis méretben, random irányú kezdeti sebességgel. Add mindet hozzá egy csoporthoz, és a draw-ban állítsd be, hogy pattanjanak le a falakról.  
Csinálj egy csoportot a vonzó sprite-oknak is, és írd meg, hogy egérkattintásra létrejöjjön egy sprite az egér helyén, ami hozzáadódik a csoporthoz.  
Most jön a trükkös rész: a részecskéket vonzani kéne a vonzópontokhoz (`attractionPoint()`). Ha egy részecske és egy vonzópont lenne, akkor ezt csak egy függvényhívás lenne. Ha sok részecske (csoportban) és egy vonzópont, akkor egy for ciklussal kéne végigmenni a részecskéken. Mivel most sok részecske (csoportban) és potenciálisan sok vonzópont (szintén csoportban) van, azért két, egymásba illesztett for ciklusra van szükség. Tehát írj egy for ciklust, és annak a belsejébe még egy for ciklust. A külső a részecskéken menjen végig, a belső a vonzópontokon. Figyelj arra, hogy a for ciklusban a felső határt ne fixen beírt számmal add meg, hanem mindig az adott csoportban lévő elemek számával. Arra is figyelj, hogy a belső csoport számláló változója nem lehet `i` (mert azt a külső for már használja), az tehát legyen `j`. Az `attractionPoint()` helyes meghívása sem egyszerű, az i-edik részecskét kell a j-edig ponthoz vonzani. A vonzás lehet kicsi, akár csak 0.1-es.  
Csillagos kiegészítés: taszítópontok. A vonzókhoz hasonlóan csinálj nekik egy csoportot, csak itt egérkattintás helyett billentyűnyomásra szülessenek az új sprite-ok. A draw-ban a részecskéken végighaladó for-ba a vonzópontos for mellé írj egy újabb for ciklust, ezúttal a taszítópontoknak. Arra is figyelj, hogy mivel a taszítópont (`repulsionPoint()`) függvény nem eredeti p5.play-es tartozék, hanem az én saját csinálmányom, ezért máshogy kell hívni, mint az `attractionPoint()`-ot: `sprite.attractionPoint(magnitude, x, y)` helyett `repulsionPoint(sprite, magnitude, x, y)`.  
A vonzó- és taszítópontoknak a sima, négyzetes sprite-alak helyett megadhatsz tetszőleges képet is, hogy a vonzás és a taszítás értelmesebb legyen.  