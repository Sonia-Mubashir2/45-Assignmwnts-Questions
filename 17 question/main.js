//7 qu3stion
var guestlist = ["ayesha", "sonia", "ali"];
//print message
console.log("unforunately !the new dinner table table wont arrive so we can only invited 2 guest");
guestlist.unshift("rani", "arham");
//print messge update list
console.log(" update list of guest:", guestlist);
//remove from the guest list
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    if (removeguest !== undefined) {
        console.log("sorry,".concat(removeguest, ",we cant invite you"));
    }
}
//print message to each of the two people still on you list,leting them
guestlist.forEach(function (guest) {
    console.log("Dear,".concat(guest, ",your both are invited for the diner "));
});
//remove 2 names from the list
guestlist.splice(0, guestlist.length);
//print updtedempty list
console.log("update guestof list:", guestlist);
