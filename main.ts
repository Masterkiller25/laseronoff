let nbrA = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.pause(2000)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (255 == nbrA) {
            nbrA = 0
            basic.pause(1000)
            led.toggle(2, 2)
        } else if (0 == nbrA) {
            nbrA += 255
            basic.pause(1000)
            led.toggle(2, 2)
        } else {
        	
        }
    }
    robotbit.MotorRun(robotbit.Motors.M2B, nbrA)
})
