// Object Adalah Kumpulan Pasangan Key Value dan bukan merupakan/bukan tipe data yang primitif
// Object dapat menyimpan berbagai tipe data, termasuk tipe data primitif dan tipe data non-primitif

// Tipe data primitif adalah tipe data yang memiliki nilai tungal
// dan tidak dapat di ubah setelah di buat
// seperti string, number, boolean, null, undifined, dan symbol

// Contoh Object literal => {}
const objectLiteral = {}; // di dalam kurung kurawal ({}) di sebut dengan property, dan property terdiri dari key dan value
const produk = {
  name: "Laptop", // name adalah key dan laptop adalah value, property ke-1
  price: 4500000, // price adalah key dan 4500000 adalah value, property ke-2
  category: "Electronics", // property ke-3
  "stok": 10, //  key stok bisa pakai string
  "IsAvaible": true, // hitungan nya semua key tertulis pakai string
  true: true,
};

// # Cara Mengakses Value property pada Object
//   Atau mengambil isi/key nya objek
// 1. Menggunakan dot Notaion(.)
console.info("MENGAKSES PROPERTY PADA OBJECT DENGAN DOT NOTAION (.)");
console.log(produk.name);
console.log(produk.price);
console.log(produk.category);
console.log(produk.stok);
console.log(produk.IsAvaible);

// Kekurangan dari dot notaion adalah, nama key yang ingin di akses harus valid:
// Tidak Boleh Mengandung spasi
// Tidak Boleh Diawali dengan Angka
// Dan tidak Boleh Mengandung spesial karakter

// 2. Menggunakan Square Bracket
console.info("MENGAKSES PROPERTY PADA OBJECT MENGGUNAKAN SQUARE BRACKET ([])");

const isProdukAvailable = produk["IsAvaible"]; // Menyimpan Property di dalam variable lain
const priceProduk = produk["price"];

console.log(produk["name"]); //langsung panggil di log
console.log(priceProduk);
console.log(isProdukAvailable);

// 3. Menggunakan Object Destructuring
// Destructuring dalma js merupakan sintaksis mengeluarkan nilai dari properti object ke dalam satuan yang lebih kecil (Variable)
// MENGUBAH(BUKAN MENDEKLARASIKAN VARIABLE TAPI AKSES KEY) KEY YANG ADA DI DALAM OBJECT MENJADI VARIABLE PAKAI {}
const kelas = {
  "totalMeja": 21,
  totalSiswa: 20,
  isClean: false,
};

const { isClean, totalSiswa } = kelas; //ambil atau keluarkan isclean dan total siswa dari object kelas

console.info(
  "MENGAKSES PROPERTY PADA OBJECT MENGGUNAKAN SQUARE BRACKET ({}) / Object Destructuring",
);
console.log(isClean);
console.log(totalSiswa);

// Destructuring object yang key-nya tidak ada akan mengembalikan nilai undifined.
// Oleh Karena itu, kita bisa memanfaatkan default value ketika destructuring object
// seperti berikut ini agar tidak undifined.
const { isTvMerdeka } = kelas; // return undifined karena tidak ada key nya di object
console.log(isTvMerdeka);

const { totalSiswaHasLaptop = 18 } = kelas; // kita kasih default value pada key yang tidak ada di dalam property object
console.log(totalSiswaHasLaptop);

// // Contoh Lain
const user = {
  id: 24,
  email: "maul@gmail.com",
  name: "Maul",
  nickname: "TerangBUlan",
  username: "Terbul",
  password: "secret",
  tempatLahir: "Makassar",
  umur: 90,
};

const { name, password, umur } = user;

console.log(umur);
console.log(password);

// Mengubah Value Property Pada Object
// menggunakan assignment operator
const account = {
  username: "Maul",
  password: "kukukukukuku~~",
  isActive: true,
  isBanned: false,
};

account.isBanned = true; //Mengubah Value Property isBanned Menjadi True
console.info("MENGUBAH VALUE PROPERTY PADA OBJECT");
console.log(account.isBanned); //true

// Menghapus property pada object pakai keyword delete
console.info("MENGHAPUS VALUE PROPERTY PADA OBJECT DENGAN KEYWORD delete");
console.log(account);
delete account.username;
console.log(account);

// Menabah property pada object
account.category = "Education";
console.info("MENAMBAH VALUE PROPERTY PADA OBJEct DENGAN DOT NOTATION(.)");
console.log(account);

console.info(
  "MENAMBAH DAN MENGHAPUS VALUE PROPERTY PADA OBJEct DENGAN SQUARE BRACKET ([])",
);
account["role"] = "admin";
console.log(account);
delete account["role"];
console.log(account);

console.info(
  "MENAMBAH VALUE PROPERTY PADA OBJEct DENGAN DISTRUCTURING OBJECT  ({})",
);
const { masaBerlaku = 10 } = account;
console.log(masaBerlaku);
console.log(account);

// apakah Bisa function menyimpan properti
