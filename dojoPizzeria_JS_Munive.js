function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza(){
    var crustArr = ["deep dish", "hand tossed", "stuffed crust", "thin", "flat bread"];
    var sauceArr = ["marinara", "traditional", "alfredo", "pesto", "BBQ sauce"];
    var cheeseArr = ["mozzarella", "feta", "provolone", "cheddar", "parmesan" ];
    var toppingArr = ["pepperoni", "onions", "sausage", "black olives", "mushrooms"]

    //generate random whole number between 1 and array length
    var crustChoice = Math.floor((Math.random()*crustArr.length) + 1); 
    crustChoice -=1; // to match index numbers of array
    var sauceChoice = Math.floor((Math.random()*sauceArr.length) + 1); 
    sauceChoice -=1; // to match index numbers of array
    var cheeseChoice = Math.floor((Math.random()*cheeseArr.length) + 1); 
    cheeseChoice -=1; // to match index numbers of array
    let toppingChoice = Math.floor((Math.random()*toppingArr.length) + 1); 
    toppingChoice -=1; // to match index numbers of array

    /* this is limited to one choice per topping type. In future, generate another random number which chooses the number of cheeses and toppings to include*/ 
  
  var pizza = pizzaOven(crustArr[crustChoice],  sauceArr[[sauceChoice]], cheeseArr[cheeseChoice], toppingArr[toppingChoice]);
  return pizza;

}

console.log("-------------------------------------------------------------");

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni"]);
console.log(pizza1);

console.log("-------------------------------------------------------------");
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

console.log("-------------------------------------------------------------");

console.log("*****Random Pizza*****");

console.log(randomPizza());



