//13 question
let transportMode:string[]= ["car" ,"bus" ,"train","bike" ,]
for (let i = 0; i < transportMode.length; i++){
    console.log(`i would like to own${transportMode[i]}`);                  
}
//for each
transportMode.forEach(mode =>{
    console.log(`i would like own${mode}`);
});
