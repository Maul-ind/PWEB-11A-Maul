// Array Destructuring => Untuk Melihat isi dari Array

const arrayDestruc = new Array(
  "Satu",
  "Dua",
  "Tiga",
  false,
  true,
  10,
  {
    nama: "Maulana",
    kelas: 11,
    gender: "Pria",
    isActive: true,
  },
  ["Botol", "Spidol", "Papan Tulis"],
  //   Array.from("ABCD"),
);

console.log(arrayDestruc);

// BAGAIMANA => Mengguanakn kurung siku yag di dalamnya adalah nama variable yang kita assign
const indexPertama = arrayDestruc[0];
const [satu, dua, tiga, isAvailable, isDead, number, dataSiswa, dataKelas] =
  arrayDestruc;
// dalam tanda [] itu di ambil berdasarkan urutan index di dalam array nya, kalau element mulai dari 1

// Contoh Akses variable objek datakelas menggunakan destructuring

const { nama, gender } = dataSiswa;
// Kalau object itu nama key nya
console.log(indexPertama);
console.log(nama, gender);

// Ini hanya dapat di lakukan jika array nya tidak bernilai null atau undifined
// Ketika di lakukan pada array bernilai null / undifined
// akan menyebabkan error

const arrayNull = [1, 2];

const [error, errorDua, errorTiga] = arrayNull;
console.log(errorTiga);
// BOHONG
