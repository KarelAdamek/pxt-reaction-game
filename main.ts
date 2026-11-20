let actualLight: number = 0;
let referenceLight: number = 0;
let thresholdLight: number = 35;

basic.pause(1000)
for (let i: number = 1; i < 6; i += 1) {
    referenceLight += input.lightLevel()
}
referenceLight /= 5;

basic.forever(function () {
    actualLight = input.lightLevel()
    if (referenceLight < actualLight + thresholdLight) {
        console.logValue("pressed", 0)
    } else {
        console.logValue("pressed", 1)
    }
    basic.pause(100)
})
