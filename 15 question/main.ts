//question 15
let guestlist:string[] =[ "sonia","sahzia" ,"sawera","zahida","jawed","ali","naveed"];
//print the name who cant make dinner
let unableAttend:string  = guestlist.splice(1,1)[0];
console.log(`${unableAttend} can make dinner`);
//push
guestlist.push("hina");
//print a message
guestlist.forEach(guest =>{
    console.log(`Dear${guest}you are cordially invited`);
});
