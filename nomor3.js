// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for (let c = 0; c <= 100; c++) {
  if (c % 2 === 0) {
    console.log("GENAP");
    continue;
  } else if (c % 3 === 0) {
    console.log("GANJIL");
    continue;
  }
  console.log(c);
}