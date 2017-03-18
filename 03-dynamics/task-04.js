function setup() {
    createCanvas(windowWidth, windowHeight)

	bob = createSprite(random(0, width / 2), random(0, height), random(10, 100), random(10, 100))
	bob.setSpeed(random(1, 5), random(-90, 90))
	bob.rotationSpeed = random(1, 5)

	alice = createSprite(random(width / 2, width), random(0, height), random(10, 100), random(10, 100))
	alice.setSpeed(random(1, 5), random(90, 270))
	alice.rotationSpeed = random(-1, -5)
}

function draw() {
    background("white")
	drawSprites()
}
