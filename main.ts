loops.everyInterval(500, function () {
    if (input.temperature() > 24) {
        basic.showString("Hot")
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (input.temperature() < 19) {
        basic.showString("Cold")
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else {
    	
    }
})
