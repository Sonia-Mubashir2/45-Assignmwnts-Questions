//12 question
var names = ["sonia", "yesha", "rani", "ali", "sana"];
for (var i = 0; i < names.length; i++) {
    console.log("hello,".concat(names[i], "! how  are you today?"));
}
//for each
names.forEach(function (friend) {
    console.log("hi,".concat(friend, "!how are you today?"));
});
//for  of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log("Dear,".concat(friendName, "! how are you?"));
}
