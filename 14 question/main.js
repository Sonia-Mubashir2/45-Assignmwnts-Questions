var guestlist = ["maheen", "rani", "ali",];
//invite each guest for dinner
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you are codialyinvited to dinner"));
});
//map()
//invit guest
var invitation = guestlist.map(function (guest) { return "Dear".concat(guest, "your are codialyinvited to dinner"); });
console.log(invitation);
//for each 
invitation.forEach(function (invitation) {
    console.log(invitation);
});
