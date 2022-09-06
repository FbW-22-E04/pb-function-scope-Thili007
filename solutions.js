// Exercise - 01

function multiplyNum(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    for (let i = 1; i <= num2; i++) {
      console.log(num1 ** i);
    }
  }
}

multiplyNum(3, 5);

// Exercise - 02

var fruit = "orange";

const printFavoriteFruit = () => console.log("My favorite is: ", fruit);

printFavoriteFruit();

// Exercise - 03

// let result = "";
let exponent = (a, b) => {
  console.log(a * b);
};

exponent(2, 4);

// It's not possible to access the variable 'result'. It gives an error, called 'ReferenceError: result is not defined'. Because the variable 'result' is not defined in the scope of the exponent function.
