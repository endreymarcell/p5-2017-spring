# Első óra: a programozás alapfogalmai

Játszótér: http://jsbin.com/zobexeb/edit?console,output  
Használat közben a Console és az Output ablak legyen megnyitva, futtatáshoz "Run with JS" gomb.  

## Függvények, változók, objektumok 9 lépésben

### 1. Függvények
A programnak úgy lehet parancsot adni, hogy meghívjuk a program függvényeit. A "Játszótér" program `greet()` függvényét úgy tudjuk meghívni, hogy a konzolon (parancssoron) begépeljük a függvény nevét és mögé a nyitó-záró zárójeleket, majd Entert nyomunk. A program ekkor üdvözöl minket.  
Ha meg akarjuk ismételni a parancsot, nem kell újra begépelnünk: a konzolban a felfele billentyűvel be tudjuk tölteni a korábbi utasításokat.  
Kipróbálandó függvények:  
`greet()`  
`expect()`  
`cursor()`  
`noCursor()`  

#### Függvények argumentumokkal
Vannak függvények, amik bemeneti adatokat (ún. "argumentumokat" vagy "paramétereket") is várnak. Például a játszótér `nyan(num)` függvénye annyi macskát hoz létre, ahányat kérünk tőle. A függvény meghívásakor a macskák kívánt számát a zárójelek közé kell írni, például a `nyan(1)` parancs egy macskát fog csinálni, a `nyan(10)` tízet.  
Más függvények nem számot, hanem szöveget ("stringet") várnak argumentumként. Például az `alert(str)` függvény egy felugró üzenetben kiírja azt, amit kérünk tőle. A szöveget idézőjelek között kell megadni, például: `alert("midnight")` vagy `alert("Hello world!")` Figyelem, idézőjelek nélkül nem működik: az `alert(midnight)` hibát dob.  
Olyan függény is van, ami több argumentumot vár. Ilyenkor ezeket vesszővel választjuk el egymástól. A `balls(str, num)` például egy stringet és egy számot vár, ahol a string a megjelenítendő labdák színe (angolul, kisbetűvel), például: `balls("orange", 5)`. Figyelnünk kell az argumentumok sorrendjére: a függvény úgy van megírva, hogy első argumentumként várja a színt és másodiknak a számot, tehát ha felcseréljük őket, nem működne.  
Kipróbálandó függvények:  
`nyan(num)`  
`alert(str)`  
`balls(str, num)`  

#### Megjegyzések
- Ha egy argumentumot váró függvénynek nem adunk meg semmit, nem fog műküdni (és talán hibaüzenetet is kapunk). Viszont ha egy argumentumokat nem váró függvénynek megpróbálunk argumentumot adni (pl. `greet(1)`), nem lesz hibaüzenet, a program egyszerűen figyelmen kívül hagyja az argumentumot.  
- A függvények (és később a változók és objektumok) neve mindig egy szóba van írva. Ha a név több szót tartalmaz, akkor a szavakat nagybetűvel kezdjük, pl. `noCursor()` (nem pedig `no cursor()`). Ez a megkötés a stringek tartalmára nem vonatkozik: amit idézőjelek közé tettünk, oda már írhatunk szóközt, ékezetet stb.  

#### 2. Változók
A programban úgy lehet adatokat eltárolni, hogy változóba mentjük őket. A változó egy névből és egy értékből áll, pl. a "Játszótér" programban a `customers` nevű változó tárolja azt a számot, ahányan ma kávét vettek a kávézóban. (A program azt is feltünteti, hogy a változó `number` típusú, mert most éppen egy számot tárol.) A változó értékét bármikor módosíthatjuk. Például így lehet a vásárlók számát 12-re állítani:  
`customers = 12`  
Figyelem: az egyenlőségjel itt nem egyenlőséget, hanem értékadást jelöl. A `customers` értéke eddig akármi is volt, mostantól 12 lesz. Az egyenlőségjel helyére képzelhetünk egy balra mutató nyilat (`customers <-- 12`), hogy még látványosabb legyen: az egyenlőségjel fogja a jobb oldalán található értéket, és belerakja a bal oldalon álló változóba. Tehát például a `12 = customers` utasítás, bármilyen hasonló is az előzőhöz, valójában értelmetlen, és hibát dob.  
A programunkban a (szám típusú) `stars` és a (string típusú) `company` változók változatásakor rögtön változik a látható végeredmény is. Így tudjuk például a csillagok számát kettőre állítani:  
`stars = 2`  
vagy a kávózó nevét Carlos Caféra:  
`company = "Carlos Café"`  
Figyelem: a cég neve egy string, tehát itt is ki kell tennünk az idézőjeleket.  

Új változót ugyanúgy tudunk létrehozni, ahogy a meglévőeket módosítottuk, például ha el akarjuk menteni, hogy a mai vásárlók közül összesen hárman kértek pitét is a kávéjuk mellé, létrehozhatunk egy `pie` nevű változót, amibe beletesszük a hármas számot:  
`pie = 3`  
A `pie` változó eddig nem létezett, de ez a parancs létrehozza és beállítja 3-ra.  

Változók értékének megadásakor nem csak konkrét értékeket (pl. 3 vagy "Starbucks") adhatunk meg, hanem más változók értékét is felhasználhatjuk. Például ha be akarjuk állítani a `stars` változó értékét ugyanarra, mint amennyi épp a `customers` változó értéke:  
`stars = customers`  
Jusson eszünkbe, hogy az egyenlőségjel jobbról balra ad értéket, tehát a fenti parancstól a `stars` értéke megváltozik, a `customers` értéke nem.  

Ha nem értéket adni szeretnénk, hanem összehasonlítani két változót, azt dupla egyenlőségjellel tudjuk megtenni: a `stars == customers` parancs egyik változó értékét sem módosítja, csak megmondja, hogy megegyeznek-e.  

#### 3. Változó mint függvényargumentum
Azok a függvények, amik argumentumot várnak, konkrét érték helyett elfogadnak változót is: pl. a `nyan(5)` parancs pontosan 5 macskát hoz létre, a `nyan(stars)` parancs viszont pontosan annyit, ahány csillagunk épp van (tehát ami épp a `stars` változó értéke). Ha pedig a kávézó nevét akarjuk felugró ablakban megjeleníteni: `alert(company)`  
Figyelem: fontos az idézőjelek pontos használata. Ha azt mondjuk, hogy `alert("company")`, akkor az argumentum a "company" string, a felugró üzenet tehát azt fogja taralmazni, hogy "company". Ezzel szemben az idézőjelek nélküli `alert(company)` parancsban a a `company` nem egy string, nem fog szó szerint kiíródni, hanem a program megkeresi a `company` nevű változót, és annak a tartalmát fogja kiírni (például azt, hogy "Starbucks").  

#### 4. Objektumok függvényei
Az objektumok önálló, lezárt egységek. A mi programunkban például bob egy objektum. Bobnak vannak saját függvényei, amiket úgy tudunk meghívni, hogy a függvény neve elé `bob.`-ot írunk:  
`bob.left()`  
`bob.right()`  
`bob.jump()`  
`bob.blink(num)`  
`bob.say(str)`  

Figyelem: mivel például a `jump()` függvény csakis bobhoz tartozik, a sima `jump()` parancs nem fog működni, csak a `bob.jump()` - a programnak ugyanis nincs `jump()` függvénye, csak bobnak.

#### 5. Objektumok változói
Ahogy nagy általánosságban a programban lehetnek változók, hasonlóképpen bobnak is lehetnek saját változói: `bob.color` és `bob.wheels`. Ezeknek is egyenlőségjellel tudunk értéket adni:  
`bob.color = "coral"`  
`bob.wheels = 10`  
És itt is igaz, hogy a változó értéke egy másik változóból is érkezhet, pl. legyen bobnak annyi kereke, ahány vásárló volt ma:  
`bob.wheels = customers`  

#### 6. Változó mint függvényargumentum: objektumok
Azok a függvények, amik argumentumot várnak, nyugodtan megkaphajták bob változóit is:  
`alert(bob.color)`  
`nyan(bob.wheels)`  

Illetve bobnak azok a függvényei, amik argumentumot várnak, szintén kaphatnak változó bemenetül:  
`bob.blink(stars)`  
`bob.say(company)`  
`balls(bob.color, bob.wheels)`  

És persze bob függvényei bob saját változóit is megkaphatják argumentumként:
`bob.blink(bob.wheels)`  
`bob.say(bob.color)`  

#### 7. Függvények visszatérési értékkel
Vannak olyan függvények, amik nem csinálnak semmi láthatót, viszont _visszaadnak_ valamilyen értéket, mondhatni "válaszolnak". Ha a konzolon meghívunk egy ilyen függvényt, a következő sorban megkapjuk a választ, például a `day()` meghívásakor a konzol kiírja, hányadika van ma. (Megjegyzés: az eddigi függvényeink egyik sem adott vissza semmit, ezért láttuk mindig a konzolon az "undefined" választ.) A `dayName()` a mai nap nevét adja meg stringként. Az `uppercase(str)` egy string argumentumot vár, és visszaadja ugyanazt a stringet csupa nagybetűvel írva; a `random(num, num)` pedig egy véletlenszámot ad vissza az általunk argumentumként megadott alsó és felső határ között.  

#### 8. A visszatérési érték változóba menthető
Ezeket a visszatérési értékeket is el tudjuk menteni változóba. Például ha a `dayName()` függvény épp azt adja vissza, hogy "Monday", akkor nem csak azt mondhatjuk, hogy `today = "Monday"`, de azt is, hogy `today = dayName()`.  
További példák:  
`customers = day()`  
`mood = random(1, 5)`  
`company = uppercase("Cafe on the Corner")`  

#### 9. A visszatérési érték lehet függvényargumentum
Sőt, a visszatérési értéket nem csak változóba tudjuk elmenteni, hanem bemenő adatként is oda tudjuk adni egy olyan függvénynek, ami vár argumentumot, például:  
`bob.say(dayName())` (az eredeti `bob.say("Monday")` helyett)   
`bob.blink(random(1, 5))`  
`nyan(day())`  

Általánosságban véve tehát elmondhatjuk, hogy mindenhova, ahova értéket írhatunk, írhatunk helyette változót, vagy visszatérési értékkel rendelkező függvényt is.  
