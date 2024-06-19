let guestlist:string[]=["maheen","rani","ali" ,];
 //invite each guest for dinner
 guestlist.forEach(guest=>{
    console.log(`Dear ${guest},you are codialyinvited to dinner`);
 });
 //map()
 //invit guest
 let invitation: string[] =guestlist.map(guest =>`Dear${guest}your are codialyinvited to dinner`);
 console.log(invitation);
 //for each 
 invitation.forEach(invitation =>{
   console.log(invitation);
 });
 