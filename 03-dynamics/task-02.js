function setup() {
    createCanvas(windowWidth, windowHeight)

	bob = createSprite(100, height / 2, 150, 150)
	bob.shapeColor = "darkred"
	bob.rotationSpeed = 1

	alice = createSprite(330, height / 2, 80, 80)
	alice.shapeColor = "red"
	alice.rotationSpeed = 2

	charlie = createSprite(500, height / 2, 30, 30)
	charlie.shapeColor = "pink"
	charlie.rotationSpeed = 5
}

function draw() {
    background("white")
	drawSprites()
}
