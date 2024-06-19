//13 question
var transportMode = ["car", "bus", "train", "bike",];
for (var i = 0; i < transportMode.length; i++) {
    console.log("i would like to own".concat(transportMode[i]));
}
//for each
transportMode.forEach(function (mode) {
    console.log("i would like own".concat(mode));
});
