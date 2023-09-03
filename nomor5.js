// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let input = 10;
for (let q = 1; q <= input; q++) {
  let bintang = "";
  for (let k = 1; k <= q; k++) {
    bintang += "*";
  }
  console.log(bintang);
}
