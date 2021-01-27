input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(2)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showNumber(2)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(1000)
    basic.showNumber(7)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("O, Atradai sia funkcija!")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
})
basic.showLeds(`
    # . . . #
    # . . . #
    # # # # #
    # . . . #
    # . . . #
    `)
basic.pause(1000)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . . .
    . . . . #
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . # #
    . . . . .
    . . . # #
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . # # .
    . . . . .
    . . # # .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . #
    . # # . .
    . . . . .
    . # # . .
    . . . . #
    `)
basic.pause(100)
basic.showLeds(`
    . . . # .
    # # . . #
    . . . . #
    # # . . #
    . . . # .
    `)
basic.pause(100)
console.log('k')
