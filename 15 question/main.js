//question 15
var guestlist = ["sonia", "sahzia", "sawera", "zahida", "jawed", "ali", "naveed"];
//print the name who cant make dinner
var unableAttend = guestlist.splice(1, 1)[0];
console.log("".concat(unableAttend, " can make dinner"));
//push
guestlist.push("hina");
//print a message
guestlist.forEach(function (guest) {
    console.log("Dear".concat(guest, "you are cordially invited"));
});
