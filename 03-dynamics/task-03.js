function setup() {
    createCanvas(windowWidth, windowHeight)

	bob = createSprite(random(0, width), random(0, height), random(10, 100), random(10, 100))
	bob.setSpeed(random(1, 5), random(0, 360))
	bob.rotationSpeed = random(-5, 5)

	alice = createSprite(random(0, width), random(0, height), random(10, 100), random(10, 100))
	alice.setSpeed(random(1, 5), random(0, 360))
	alice.rotationSpeed = random(-5, 5)
}

function draw() {
    background("white")
	drawSprites()
}
