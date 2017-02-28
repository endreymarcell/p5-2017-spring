# Második óra: p5.play alapok

## Vonalzó, szögmérő

Segédszkeccs: http://output.jsbin.com/faginuv  

### p5 változók

`width`, `height`  
`width / 2`, `height / 2`  
`mouseX`, `mouseY`  

### Torpedó

Link: http://output.jsbin.com/vimorol (órai, rövidített verzió)  


## Sprite-ok (szereplők)

Játszótér: http://jsbin.com/kadugev/edit?console,output  

`bob = createSprite()`  

### Speed

`bob.setSpeed(1, 0)`

`bob.friction = 0.95`  
(NB. tizedespont)  

`bob.addSpeed(1, 0)`
`bob.addSpeed(-1, 0)`

### Rotation

`bob.rotation`  
`bob.rotation = 1`  
`bob.rotation = 10`  

`bob.rotationSpeed`  
`bob.rotationSpeed = 1`  
`bob.rotationSpeed = -1`  

### Random

`bob.setSpeed(2, random(0, 360))`  

### Position

`bob.position.x`  
`bob.position.y`  
`bob.position.x = 100`  
`bob.position.x += 100`  

### Sprite létrehozása konkrét helyen, konkrét méretben

`createSprite(x, y)`  
`createSprite(x, y, w, h)`  

## Házi feladat

http://output.jsbin.com/qiferir  
