radio.onReceivedString(function (receivedString) {
    let recivedstring = ""
    if (recivedstring == "Avslå") {
        radio.sendNumber(MAX)
    } else if (recivedstring == "Nullstill") {
        MAX = 0
    }
})
let MAX = 0
let set_MAX_til = 0
radio.setGroup(27)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > MAX) {
        MAX = input.acceleration(Dimension.X)
    }
})
