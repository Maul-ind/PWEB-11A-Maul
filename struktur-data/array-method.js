// METHOD YANG ADA DI ARRAY JAVASCRIPT

// Reverse => Method yang digunakan untuk mengembalikan nilai array
const zubair = Array.from("ZUBAIR");
console.info("Sebelum di reverse");
console.log(zubair);

const zubairReverse = zubair.reverse();
console.info("Setelah di reverse");
console.log(zubairReverse);

// Sort => Method yang digunakan untuk mengurutkan nilai array, defaultnya ascending (A ke Z)
const dataSiswa = ["Cesar", "Ahmad", "Baihaqi"];
console.info("Sebelum Diurutkan");
console.log(dataSiswa);

const dataSiswaSort = dataSiswa.sort();
console.info("Setelah Diurutkan");
console.log(dataSiswaSort);

// apakah bisa function disimpan didalam element array?
const arrayFunct = [
  (nama) => "Hello " + nama,
  () => "Miaw 2",
  function halo() {
    return "Miaw 3";
  },
];

const [functSatu, functDua, functTiga] = arrayFunct;
console.log(functSatu("Miaw"), functDua(), functTiga());
