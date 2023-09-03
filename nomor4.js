//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5,
// dan kelipatan 10 dengan pertambahan 9,
// tuliskan:
// "3 kelipatan 3"dan seterusnya.

for (let d = 3; d <= 100; d += 2) {
  if (d % 3 === 0) {
    console.log(d, "3 kelipatan 3");
  } else {
    console.log(d);
  }
}

console.log("");

for (let e = 6; e <= 100; e += 5) {
  if (e % 6 === 0) {
    console.log(e, "6 kelipatan 6");
  } else {
    console.log(e);
  }
}

console.log("");

for (let f = 10; f <= 100; f += 9) {
  if (f % 10 === 0) {
    console.log(f, "10 kelipatan 10");
  } else {
    console.log(f);
  }
}
