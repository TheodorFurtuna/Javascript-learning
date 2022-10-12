// creez un obiect:
const persoana = {
    nume: "Theo",
    prenume: "Furtuna",
    id: 4,
    numeComplet : function() {
      return this.nume + " " + this.prenume;
    }
  };
// Afisez obiectul
document.getElementById("demo1").innerHTML = persoana.numeComplet();

function func1() 
{
    var x = 5;
    if(1) 
    {
        var y = 10; 
        console.log(x); //Afiseaza 5 in consola
        console.log(y); //Afiseaza 10 in consola
    }
     
}
func1();
//console.log(x); //undefined. Nu este disponibil inafara functiei
//console.log(y); //undefined. Nu este disponibil inafara functiei

function func2() 
{
    let x = 10; 
    if(x === 10) 
    {
        let y = 20; 
        console.log(x); //Afiseaza 10 in consola
        console.log(y); //Afiseaza 20 in consola
    }
     
    console.log(x); // Afiseaza 10 in consola
//  console.log(y); // ’undefined'
}
func2();

const myVar = 1000;
//myVar = 2.5; // Uncaught TypeError: Assignment to constant variable.

function func3(){
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

document.write(numbersCombined);
}
func3();

function func4(){
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
document.write("<p>" + one + "</p>");
document.write("<p>" + two + "</p>");
document.write("<p>" + rest + "</p>");
}
func4();

function func5(){
  const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  //Spread operator
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

  console.log(myUpdatedVehicle);
}
func5();

function func6(){
// Obirct iterabil
function numere() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}

// Creez iterarea
const n = numere();
n.next(); // 10
n.next(); // 20
n.next(); // 30

document.getElementById("demo2").innerHTML = n.next().value;
}
func6();

function func7(){
  let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];
  let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));
  
  // Change the value of the 'list' property in ingredients_list_deepcopy.
  ingredients_list_deepcopy[1].list = ["rice flour", "water"];
  // The 'list' property does not change in ingredients_list.
  console.log(ingredients_list[1].list);
  // Array(3) [ "eggs", "flour", "water" ]
}
func7();

function func8(){
  //Array accesor
  const cars = ["Dacia", "BMW", "Audi"];
  document.getElementById("demo3").innerHTML = cars[0];
  //Array itteration
  const numbers = [45, 4, 9, 16, 25];
  let txt = "";
  numbers.forEach(myFunction);
  document.getElementById("demo4").innerHTML = txt;
  
  function myFunction(value, index, array) {
  txt += value + "<br>"; 
  }
  //Array mutator method
  const reverse = numbers.reverse();
  console.log(reverse);
}
func8();

function func9(){
  new Promise((resolveOuter) => {
    resolveOuter(
      new Promise((resolveInner) => {
        setTimeout(resolveInner, 1000);
      })
    );
  });
  /*
  This promise is already resolved at the time when it's created (because the resolveOuter is called synchronously),
  but it is resolved with another promise, and therefore won't be fulfilled until 1 second later, when the inner promise fulfills.
  In practice, the "resolution" is often done behind the scenes and not observable, and only its fulfillment or rejection are.
  */
}
func9();

function func10(){
  //callback - Do a calculation and then display the result.
  function myDisplayer(something) {
    document.getElementById("demo5").innerHTML = something;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);
}
func10();

function func11(){
  function myDisplayer(some) {
    document.getElementById("demo6").innerHTML = some;
  }
  
  async function myFunction() {return "Hello";}
  
  myFunction().then(
    function(value) {myDisplayer(value);},//Async
    function(error) {myDisplayer(error);} //Await
  );
}
func11();

//Global variables can be made local (private) with closures.
const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter;}
})();

function myFunction(){
  document.getElementById("demo7").innerHTML = add();
}