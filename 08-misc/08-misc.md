# Nyolcadik óra: hangok, mobil

## Hangok

__Megjegyzés:__ a hanglejátszás nem minden gépen és minden böngészőben működik jól. Ajánlott friss Chrome-mal próbálkozni.  

Ha a p5-höz hozzátesszük a p5.sound nevű plugint, hangok lejátszására is használható lesz. Itt egy template, amibe a p5.sound is importálva van, ezt lehet kiindulásként használni (klónozni stb): http://jsbin.com/lupinu/edit?html,console  
(Ha megnyitod a HTML oldalt, láthatod, hogy importálva van a "p5.sound.min.js" nevű fájl is. A korábbi programjainkban ez nem volt benne, ezért azokban nem működne a hanglejátszás.)  
Hangokat a képekhez hasonlóan a preload függvényben kell változóba tölteni az erre szolgáló `loadsound()` függvénnyel:  
```
function preload() {
    carSound = loadsound("http://endreymarcell.hu/p5v2/sounds/car.wav")
}
```
Figyelem: a `playsound()` mellett a `loadsound()` a másik olyan függvény, aminek kivételesen nem "camelCase" módon, hanem csupa kisbetűvel írjuk a nevét.  

Betöltés után a hangot a `playSound()` függvénnyel tudjuk elindítani, mely paraméterként a hangot tartalmazó változót várja:  
```
function keyPressed() {
    playSound(carSound)
}
```
Ha pedig erre volna szükségünk, a `stopSound()` függvénnyel meg tudjuk állítani: `stopSound(carSound)`.  
Sajnos direkt linkelhető hangokat sokkal nehezebb találni az interneten, mint képeket, ezért ebből a gyűjteményből fogunk dolgozni:  
https://github.com/endreymarcell/p5-2017-spring/blob/master/08-misc/08-sounds-pics.md  
Illetve azért, hogy kevesebb idő menjen el a megfelelő képek kikeresésével, ezen az órán próbaképpen a képeket is a gyűjteményből lehet választani.

__Feladatok:__  
(1) Egészítsd ki a hatos óra egyes feladatát (Cookie Monster), hogy ne csak látszólag örüljön a keksznek a Cookie Monster, de hangot is adjon, mikor fölé viszed. Használhatod [ezt a bint](http://jsbin.com/movaxa/edit?js,output) alapként, vagy a saját korábbi megoldásodat is, de akkor ne felejtsd el a HTML fájlhoz hozzáadni ezt a sort:  
`<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.8/addons/p5.sound.min.js"></script>`  
(2) Írj egy programot, amiben egy kosárlabda alakú sprite pattog a földön, és minden pattanásnál dobbanó hangot ad ki, mint egy igazi labda. A hang kiadását `if`-be kell majd tenned, a feltételnél vizsgáld azt, hogy a sprite alja érintkezik-e éppen másik sprite-tal (`sprite.touching.bottom`, ld. a [kisokost](https://github.com/endreymarcell/p5-2017-spring/blob/master/p5-cheat-sheet.md)).  
(3) Zenekar: írj egy programot, amiben három sprite van. Mindháromnak legyen hangszer-alakja, és bármelyikre kattintasz, az adjon ki a hangszerének megfelelő hangot.  
(4\*) Írj egy programot, amiben egy célkereszt-alakú sprite mindig ott van, ahol az egér, maga a kurzor pedig el van rejtve. Ha kattintasz az egérrel, dördüljön el egy lövés. Írj bele azt is, hogy a program indulásakor egy űrhajó alakú sprite induljon el a vászon közepéről véletlenszerű irányba, és írd bele, hogy ha kattintáskor a célkereszt és az űrhajó fedésben vannak, akkor hallatsszon robbanás is, és az űrhajó tűnjön el.  
(5\*) A `playSound()` függvényt valójában én írtam, az eredeti kicsit másképp néz ki. Írj egy programot, ami billentyűnyomásra hangot ad ki (kutyaugatás). Utána nyisd meg a [segédfüggvényeimet tartalmazó js fájlt](http://endreymarcell.hu/p5v2/marca-helpers.js), és próbáld meg kitalálni, mi volt az eredeti szintaxis a hangok lejátszására. Az én megoldásomba eleve bele van írva, hogy egy hang csak akkor induljon el, ha éppen nincs folyamatban (tehát hogy többször egyszerre ugyanaz a hang ne játszódhasson le, vagyis csak akkor kezdődhessen újra, ha már befejeződött). Írd át a programodat úgy, hogy az én `playSound()` függvényem helyett az eredeti alakot használod, és kihagyod belőle az újrajátszási feltételt - tehát többször is el lehet indítani a hangot párhuzamosan. Demonstráld az eredményt sok kutya ugatásával.  

## Mobil

__Megjegyzés:__ Mobilos programokat wifiről ajánlott futtatni, különösen, ha nagy kép- és hangfájlokat tartalmaznak.  
__Megjegyzés:__ A mobilos programok megbízhatósága teljesen mobilfüggő.  

### Érintések

A p5-ös programok nem csak gépen tudnak futni, hanem mobilon is. Az érintőképernyőnél egér helyett érintés van, így kicsit más függvényeket és változókat kell használnunk:  

| Egér             | Érintőképernyő    |
|------------------|-------------------|
| `mouseClicked()` | `touchEnded()`  |
| `mouseX`         | `touchX`          |
| `mouseY`         | `touchY`          |
| `mouseIsPressed` | `touchIsDown`     |

Képernyőre rajzolós [példaprogam](http://jsbin.com/kahacut/edit?js,output):  
```
function setup() {
    createCanvas(windowWidth, windowHeight)
    noStroke()
    fill("navy")
    background("white")
}

function draw() {
    allSprites.draw()
    if (touchIsDown) {
        circle(touchX, touchY, 50)
    }
}
```

(Megjegyzés: igazából a fenti táblázatból az utolsó sor kivételével minden egérhez használt megoldás egyben működik mobilon is. Tehát érintéskor meg fog hívódni a `mouseClicked()`, és a `mouseX`, illetve `mouseY` változók prímán megmondják majd az érintés helyét. Ez roppant kényelmes, mert így nem kell a gépre írt programunkat teljesen átírni ahhoz, hogy mobilon is működjön. Sajnos azonban ez nem mindig igaz: a `mouseIsPressed` nem fog igazzá változni az érintéstől, ott muszáj lesz a `touchIsDown`-t használni. Ha azt szeretnénk, hogy a programunk teljesen portábilis legyen, azaz gépen és mobilon ugyanúgy működjön, akkor az első három sorban lévő párokból bármelyiket használhatjuk, kattintás/érintés vizsgálatánál pedig használjuk a logikai VAGY kifejezést: `if (mouseClicked || touchIsDown)`.)  

Megjegyzés: mobilon a `touchIsDown` nem mindig szokott szuperül működni, mert a hosszú érintést a böngésző gyakran őhozzá intézett utasításként értelmezi, és megpróbálja kijelölni a weboldalt, vagy megnyitni a jobbklikk-menüt, vagy éppen újratölteni.  

Összefoglaló táblázat az egér és az érintés által meghívott függényekről:  

| Egér                                     | Érintőképernyő   | Meghívódik, ha...                                                                               |
|------------------------------------------|------------------|-------------------------------------------------------------------------------------------------|
| `mousePressed()`                         | `touchStarted()` | lenyomjuk az egérgombot vagy megérintjük a képernyőt.                                           |
| `mouseDragged()`                         | `touchMoved()`   | lenyomott egérgomb mellett húzzuk az egeret vagy folyamatos érintés mellett húzzuk az ujjunkat. |
| `mouseReleased()` avagy `mouseClicked()` | `touchEnded()`   | felengedtük az egérgombot vagy elengedtük a képernyőt.                                          |
| `mouseMoved()`                           | (nincs)          | felengedett egérgomb mellett mozgatjuk az egeret (érintőképernyőn nincs megfelelője).           |
| `mouseWheel()`                           | (nincs)          | görgetünk az egérgörgővel (érintőképernyőn nincs megfelelője).                                  |

__Feladatok:__  
(6) Írj egy programot, ami egy véletlen méretű, véletlen színű, de mindig valamennyire átlátszó kört rajzol az érintés helyére! (Megjegyzés: ha érintésenként két kör jön létre, az valószínűleg nem a programod hibája, hanem a p5-é.)  
(7) Írj egy programot, ami érintéskor az érintés helyén létrehoz egy sprite-ot, és elindítja véletlenszerű irányba. Ha ez megvan, írd át úgy, hogy ne egy, hanem öt sprite szülessen (for ciklussal). (Megjegyzés: ld. az előző feladat megjegyzését.)  
(8\*) Írj egy programot, ami egy kicsi kört rajzol a képernyőre ott, ahol megérinted, de mindaddig, amíg el nem emeled az ujjad, a kör egyre nőjön. Csinálj magadnak egy változót a setupban, amiben a kör átmérőjét fogod tárolni, indítsd nulláról, és akkor is nullázd le, ha épp befejeződik egy érintés. A draw-ban kell rajzolni a kört az érintés helyére és növelni az átmérőt, de persze mindkettőt csak akkor, ha épp van érintés. Letörölni nem kell a draw-ban, maradjon meg minden kör a vásznon. Írd bele azt is, hogy minden új kör új random színnel legyen kitöltve.  

### További események

A mobilnak szerencsére nem csak érintőképernyője van, hanem mozgásérzékelője is. Ennek segítségével nem csak az érintést vizsgálhatjuk a `touchStarted()` függvényben, de a mobil mozgatását is: a `deviceTurned()` függvény a mobil bármilyen tengelyen való elforgatását érzékeli, a `deviceShaken()` a rázást, a `deviceMoved()` pedig bármilyen mozgatást.  
A [következő program](http://jsbin.com/xedoxup/edit?js,output) például boldoggá teszi Bondot, ha rázzuk a martinijét, és idegessé, ha keverjük:  
```
function preload() {
    happy = loadimage("http://www.dailystreetview.com/images_maps_cache/3116-street-view-assoc-redim.jpg")
    angry = loadimage("http://g1.nh.ee/efe/400x400/DkfQuhTh4h_8KOLp4kNQ6a.jpg")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    background("black")
    imageMode("center")
}

function deviceTurned() {
    background("black")
    image(angry, width / 2, height / 2)
}

function deviceShaken() {
    background("black")
    image(happy, width / 2, height / 2)
}
```

__Feladatok:__  
(9) Írj programot, amiben egy ostor van a képernyőn, és ha megrázod a mobilt ("csattintasz" vele), akkor ostorcsattanás hallatszik.  
(10) Írj Game of Thrones "Shame" appot, ami kolompol, ha rázod a mobilt, és "Shame!"-et mond, ha megérinted a képernyőt.  
(11) Írj egy programot, amiben Pusheen elalszik, ha nem mozgatod a telefont egy ideig. A program indulásakor legyen ébren; pár másodperc után feküdjön le; még pár másodperc után aludjon el; a telefon mozgatására pedig ébredjen fel. Ezt a fokozatosságot úgy tudod elérni, hogy a setup-ban csinálsz magadnak egy változót, amit elindítasz nulláról, és a draw-ban mindig növeled. Ez méri, mennyi idő telt el. A draw-ba kell egy if, ami ezt a változót vizsgálja. Ha a változó már elég nagy (pl. nagyobb száznál), akkor jöhet a második (lefekvős) kép; ha nagyobb mondjuk kétszáznál is, akkor jöhet az elalvós; különben legyen az éber. És persze a `deviceMoved()`-ban le kell nullázni a számlálót.  
(12\*) Írj egy programot, amiben van egy kecske-sprite meg egy káposzta-sprite. Igen, elég fáradt vagyok. Véletlen helyen jöjjenek létre, és az a cél, hogy a kecskét megfogva rá kell húzni a káposztára. Hozz létre egy programállapot-változót, amiben azt tárolod, hogy épp visszük-e a kecskét - ez alapból nincs így. Az érintés kezdetekor meghívódó függvényben (`touchStarted()`) vizsgáld meg, hogy a kecskén van-e az ujj. Ha igen, állítsd a változódat úgy, hogy azt jelezze: épp visszük a kecskét, ellenkező esetben viszont kapcsold ezt ki. Az érintés mozgatásakor meghívódó függvényben írd meg, hogy a kecske kövesse az ujj helyét - de természetesen csak akkor, ha épp "cipelő" módban van a program. Az érintés befejeződésekor meghívódó függvényben pedig elég a kecske és a káposzta helyét vizsgálni. Ha fedik egymást, a káposzta tűnjön el.  
(13\*) A mobil giroszkópja nem csak a mozgást tudja mérni, hanem azt is, hogy épp merre van fordítva a mobil. A p5-ös `rotationX` változó jelzi, hogy mennyire van megunk felé van magunktól kifelé döntve a mobil; a `rotationY` azt, hogy mennyire döntjük jobbra vagy balra; a `rotationZ` pedig azt, hogy mennyire forgatjuk körbe (döntjük oldalra, állítjuk fejjel lefelé stb., miközben a képernyő végig felénk néz). [Itt egy sablon](http://jsbin.com/saraqed/edit?js,output), amiben a vászon mind a négy falán mozdíthatatlan van fal. Írj bele még egy sprite-ot, ez lesz a labda. Írd bele, hogy minden falról lepattanjon. És most jön a trükk: írd bele, hogy a labda guruljon arra, amerre a mobilt döntöd. Ezt nem `addSpeed()`-del tudod megoldani, hanem úgy, hogy a labda-sprite `velocity.x`, illetve `velocity.y` változóit módosítod a forgatás-változók alapján. Kicsit félrevezető módon az x irányú sebességhez kell majd az Y rotációt hozzáadni és fordítva. Arra is figyelj, hogy a forgatás fokokban számol, ekkora számokat viszont nagyon sok lenne a sebességhez hozzáadni, úgyhogy a rotációnak csak a századrészét add a sebességhez. - Ha ez megvan, berakhatsz még pár mozdíthatatlan falat a pályára, és esetleg egy célt is, amit el kell érni a telefon megfelelő döntögetésével.  
