//34. pizzas:
//think of at least three kinds of your favourut pizza names in an array, and use a for loop to print the name of each pizza.\
//. Modify your loop to print a sentebnse using the name of the pizza instead of printing just the name of the pizza you shuould have one line output containing a sipmle like pepperoni pizza.
//Add a line at the end of your program, outside the for loop , that states how muuch you like pizza . the output should consist of three or more lines about the kinds of pizza, you like and then an additional sentence, such as I really love pizza!
// solution=>
console.log("my favourite pizzas");
var favouritePizzas = [" Peppernoi", " Margherita", "BBQ chiken"];
for (var _i = 0, favouritePizzas_1 = favouritePizzas; _i < favouritePizzas_1.length; _i++) {
    var i = favouritePizzas_1[_i];
    console.log(i);
}
//print a sentence using the name of each pizza!
for (var _a = 0, favouritePizzas_2 = favouritePizzas; _a < favouritePizzas_2.length; _a++) {
    var i = favouritePizzas_2[_a];
    console.log("I like ${i}pizza!");
}
