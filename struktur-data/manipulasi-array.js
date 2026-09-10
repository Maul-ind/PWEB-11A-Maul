// MANIPULASI ARRAY DI DALAM JS

// 1. Menggunakan indexing
console.info("1. MANIPULASI ARRAY MENGGUNAKAN INDEXING [index array]");
let array = ["satu", 2, "tiga", 4, "lima", false];
console.log(array); // sebelum idi ubah
array[1] = "dua"; // manipulasi menggunakan index nya
array[3] = "empat";
array[5] = "enam";
console.log(array); // setelah di ubah

// 2. Mengguanakn Push => Menambahkan nilai ke array pada elemen terakhir
console.info("2. MENAMBAH DATA KE ARRAY MENGGUNAKAN METHOD / FUNCTION push()");
const arrayPush = new Array("1", "Dua", "3", "empat"); // yang di ubah adalah elemn nya bukan tipe/datanya
console.log(arrayPush); // Sebelum Di push()
arrayPush.push("5", "enam"); // parameter nya bisa di isi dengan berbagai value / nilai
// Masukkan nilai dengan.push()
console.log(arrayPush); // setelah di push()

// 3. Menghapus Data di dalam Array
// -  Pakai Keyword delte, namun hanya menghapus data nya saja tidak menghapus element nya
console.info("3. A. MENGHAPUS DATA ARRAY MENGGUNAKAN KEYWORD delete");
const arrayDelete = new Array("Irsyad", "Ghazali", "Dhimas", "Rizky");
console.log(arrayDelete); // sebelum di ubah
delete arrayDelete[3]; // hapus data ke 3, bukan element nya
console.log(arrayDelete);

// -  Menggunakan Splice() (Paling Flexibel kayaknya),
// param pertama => index array yang mau dihapus
// param kedua => Jumlah Element yang mau di hapus
console.info("3. B. MENGHAPUS ELEMENT ARRAY MENGGUNAKAN Splice()");
const arraySplice = ["Apel", "Mangga", "Nanas", "Pisang"];
arraySplice.splice(2, 1);
// 2 => mulai dari index keberapa hapus nya,
// 1 => jumlah element yang mau di hapus
console.log(arraySplice);
arraySplice.splice(0, 2); // pisang
console.log(arraySplice);

// -  Menggunakan pop => menghapus elemen terakhir
console.info("3. C. MENGHAPUS ELEMENT TERAKHIR ARRAY MENGGUNAKAN pop()");
const arrayPop = ["Satu", "Dua", "Tiga", "Empat"];
arrayPop.pop();
console.log(arrayPop);

// -  Menggunakan Shift => menghapus elemen Pertama
console.info("3. D. MENGHAPUS ELEMENT PERTAMA ARRAY MENGGUNAKAN shift()");
const arrayShift = ["Satu", "Dua", "Tiga", "Empat"];
arrayShift.shift();
console.log(arrayShift);
