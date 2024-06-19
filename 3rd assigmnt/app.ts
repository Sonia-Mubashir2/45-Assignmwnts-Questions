let personName: string ="sonia";
//in lowercase
console.log("lowercase:" ,personName.toLowerCase());
//in uppercase
console.log( "uppercase" ,personName.toUpperCase());
//tittlecase
console.log( "tittlecase",personName.replace( /\b\w/g,c=> c.toUpperCase()));
