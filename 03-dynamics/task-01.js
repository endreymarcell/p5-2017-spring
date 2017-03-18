function setup() {
    createCanvas(windowWidth, windowHeight)

	bob = createSprite(100, 100)
	bob.setSpeed(1, 0)

	alice = createSprite(500, 500)
	alice.setSpeed(1, 180)

	charlie = createSprite(width / 2, height / 2, 400, 10)
}

function draw() {
    background("white")
	drawSprites()
}
