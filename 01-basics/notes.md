# Első óra: a programozás alapfogalmai

Játszótér: http://jsbin.com/zobexeb/edit?console,output

## Függvények, változók, objektumok 9 lépésben

### 1. Függvények
`greet()`  
`expect()`  

#### Függvények argumentumokkal
`alert(str)`  
`nyan(num)`  
`balls(str, num)`  

#### 2. Változók
`customers`  
`customers = 6`  
`customers += 1`  
`customers -= 2`  
`customers == 5`  
`stars = 5`  
`stars == customers`  
`stars = customers`  
`company = "Carlos Cafe"`  

#### 3. Változó mint függvényargumentum
(Avagy: a függvény megeszi a változót)  
`alert(company)`  
`nyan(stars)`  
`balls("coral", customers)`  

#### 4. Objektumok függvényei
`bob.left()`  
`bob.right()`  
`bob.jump()`  
`bob.blink(num)`  
`bob.say(str)`  

#### 5. Objektumok változói
`bob.color`  
`bob.wheels`  

#### 6. Változó mint függvényargumentum: objektumok
(Avagy: az objektum függvénye is ehet változót, és az objektum változóját is meg lehet enni)  
`alert(bob.color)`  
`nyan(bob.wheels)`  
`bob.blink(stars)`  
`bob.say(company)`  
`balls(bob.color, bob.wheels)`  

#### 7. Függvények visszatérési értékkel
`day()`  
`dayName()`  
`uppercase(str)`  
`random(num, num)`  

#### 8. A visszatérési érték változóba menthető
`today = dayName()`  
`customers = day()`  
`mood = random(1, 5)`  
`company = uppercase("Cafe on the Corner")`  

#### 9. A visszatérési érték lehet függvényargumentum
`bob.say(dayName())`  
`bob.blink(random(1, 5))`  
`nyan(day())`  
