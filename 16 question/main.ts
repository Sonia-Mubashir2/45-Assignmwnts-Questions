let guestlist:string[]=["ali","rani","raja","aslam" ];
console.log("great news!we found a biggar table");
//unsift
guestlist.unshift("ali");
//splice
guestlist.splice(Math.floor (guestlist.length/2),0,"rani" );