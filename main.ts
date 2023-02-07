input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . # .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 2410, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
    }
})
music.playMelody("C5 D A F B C - G ", 400)
basic.pause(100)
music.playMelody("C B E G D C5 - F ", 400)
