function setup() {
    createCanvas(windowWidth, windowHeight)

	bob = createSprite(width / 2, height / 2)
	bob.setSpeed(3, 0)

	left = createSprite(30, height / 2, 10, 300)
	left.immovable = true

	right = createSprite(width - 30, height / 2, 10, 300)
	right.immovable = true
}

function draw() {
	bob.bounce(left)
	bob.bounce(right)
    background("white")
	drawSprites()
}
