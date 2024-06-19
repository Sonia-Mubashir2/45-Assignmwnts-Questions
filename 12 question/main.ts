//12 question
let names: string[]=["sonia","yesha","rani","ali","sana" ]
for(let i = 0; i < names.length; i++){
    console.log(`hello,${names[i]}! how  are you today?`                              )
}
//for each
names.forEach(friend =>{
    console.log(`hi,${friend}!how are you today?`);
});
//for  of loop
for(let friendName of names){
    console.log(`Dear,${friendName}! how are you?`);
}
