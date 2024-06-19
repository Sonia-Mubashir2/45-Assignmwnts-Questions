//Deffine an array of names
var names = ["sonia", "ali", "rani", "muzamil", "mohsin",];
//loop
//for loop
//fot loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each 
names.forEach(function (name) {
    console.log(name);
});
//for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var frindName = names_1[_i];
    console.log(frindName);
}
