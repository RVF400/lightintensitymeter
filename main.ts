let brightness = 0
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
})
basic.forever(function () {
    serial.writeValue("level", input.lightLevel())
    basic.pause(500)
    while (input.logoIsPressed()) {
        brightness = input.lightLevel()
        music.ringTone(262 + brightness * 2)
        serial.writeValue("brightness", input.lightLevel())
    }
})
