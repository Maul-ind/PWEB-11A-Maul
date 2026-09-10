// first calss citizen => function yang dapat di tulis layaknya variable
// Function dalam parameter / membuat function yang parameter nya function, kalau sudah didefinisikan
// FUnction dapat mereturn function
const umurMultiply = function (umur) {
  return umur * 2;
}; // FUnction Expression

function multiply(numA, numB) {
  return numA * numB;
}

function calculateMultiply(callback, numA, numB) {
  return callback(numA, numB);
}

// Contoh Lain
function sapa() {
  return "Hello world ";
}
// FUnction dijadikan parameter
function sapaMaul(fungsi, nama) {
  return fungsi() + nama;
}
console.log(sapaMaul(sapa, "Maul"));

const hasilPerkalian = calculateMultiply(multiply, 10, 10);
console.log(hasilPerkalian);

function calculate(operation, num) {
  return operation(num) / 2; // return adalah eksekusi sebuah fungsi
}
const result = calculate(umurMultiply, 10);
console.log(result);

// console.log(calculate(umurMultiply(21), 2)); //eror karena argumen operasi diisi dengan function expression
// console.log(calculate());

function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

const double = multiplier(2); //buat exprssion function dlu lalu isi argumen pertama
const triple = multiplier(3);
const resultDouble = double(10); // simpan di variable untuk isi parameter ke dua
const resultTripel = triple(10);

// apkah bisa function yang mereturn function dengan param yang berbeda di dalam satu function expression

console.info("FUNCTION DALAM FUNCTION");
console.log(double(100));
console.log(triple(100));
console.log(resultDouble);
console.log(resultTripel);

// FUnction bisa di dalam array atau object atau array object / object array
