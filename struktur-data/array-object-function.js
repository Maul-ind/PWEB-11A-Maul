// COntoh Function dalam array
const arrayFunct = [
  (nama) => "Hello " + nama,
  () => "FUnction Kedua",
  function halo() {
    return "Halo Lagi";
  },
];

// Buat array pakai array constractor
const functionsArray = new Array(
  function doubleThree(num) {
    return num * 3;
  },
  (num) => {
    return num * 4;
  },
  (num) => num * 5,
  "FUNCTION KEEMPAT",
  true,
);
// INTINYA FUNCTION BISA DI TARO DALAM ARRAY

// array destructuring
// simpan function dengan nama baru menggunakan array destructuring
const [doubleThree, doubleFour, doubleFive, string, boolean] = functionsArray;
// array destructuring itu terurut sesuai index array nya
console.log(doubleFour(6), doubleFive(2), boolean, string, doubleFour(4));

// console.log(doubleFive(2));
console.log(functionsArray);

const kelas11A = [
  "Fadel",
  "Rayyan",
  function absen(nama) {
    return "Hallo " + nama;
  },
  (tivi = (dimana) => {
    return "tv ada di " + dimana;
  }),
  (keadaan) => "Keadaan ini lagi " + keadaan, // singkat karena gak butuh return/return nya satu doang
];
console.log(kelas11A[2](kelas11A[0])); // ambil parameter function dari array yang sama
// panggil langsung function nya pake tanda siku []

// Chalengges
console.info("CHALENGGES");
// Buat satu variable baru, dengan nama dataSuhu, elemen 1 sampai 2 adalah number
// kemudian elemen ke 3 dan 4 adalah function
// elemen 3 adalah function yang konversi elemen 1 dari celcius ke fahrenheit
//  elemen ke 4 adalah function yang konversi elemen 2 dari fahrenheit ke celcius
const dataSuhu = [
  30, //anka normal celcius kata google
  70, // angka normal fahrenheit kata google
  (num) => {
    return (9 / 5) * num + 32; // rumus celcius to fahrenheit kata google
  },

  function fahrenheitToCelcius(num) {
    return 5 / 9 + (num - 32); // rumus fahrenheit to celcius kata google
  },
];

console.info("Menampilkan dengan menggunakan Square Bracket []");
console.log(dataSuhu[2](dataSuhu[0])); // panggil pakai square bracket
console.log(dataSuhu[3](dataSuhu[1]));

console.info("Menampilkan dengan menggunakan Array Destructuring ");
const [
  angkaCelcius,
  angkaFharenheit,
  rumusCelciusToFahrenheit,
  rumusFahrenheitToCelcius,
] = dataSuhu;

console.log(rumusCelciusToFahrenheit(angkaCelcius));
console.log(rumusFahrenheitToCelcius(angkaFharenheit));
// #no AI
