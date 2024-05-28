// var totalSampah = 512; // contoh banyak sampah (kg)
// var jumlahSampahUser = 30; // kg
// let totalSampahPercent = parseInt(map(totalSampah, 0, totalSampah, 0, 100));
// let jumlahSampahPercent = parseInt(
//   map(jumlahSampahUser, 0, totalSampah, 0, 100)
// );
// function map(value, x1, y1, x2, y2) {
//   return ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
// }

// console.log("total sampah di indonesia : " + totalSampahPercent + "% ");
// console.log("Jumlah Sampah  User : " + jumlahSampahPercent + "% ");

// var botolPlastik = 5;
// var tasBelanja = 3;
// var sedotan = 15;
// var kantongMakanan = 10;
// var botolProdukMandi = 2;

// function amountYear(trash) {
//   var value = trash * 360;
//   return value;
// }

// function map(value, x1, y1, x2, y2) {
//   return ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
// }

// var trash = [
//   botolPlastik,
//   tasBelanja,
//   sedotan,
//   kantongMakanan,
//   botolProdukMandi,
// ];

// var objectPredict = [];
// var percentConvert = [];
// var sigma = 0;

// //jumlah prediksi per tahun
// for (var i = 0; i < trash.length; i++) {
//   var value = amountYear(trash[i]);
//   objectPredict.push(value);
//   sigma += objectPredict[i];
// }
// console.log(sigma);

// //konversi ke persen
// for (var i = 0; i < trash.length; i++) {
//   var value = map(objectPredict[i], 0, sigma, 0, 100);
//   percentConvert.push(value.toFixed(2));
//   //   console.log(percentConvert[i] + "%");
// }

// percentConvert.sort(function (a, b) {
//   return a - b;
// });
// console.log(percentConvert);

// var aYear = amountYear(botolPlastik);
// var bYear = amountYear(tasBelanja);
// var cYear = amountYear(sedotan);
// var dYear = amountYear(kantongMakanan);
// var eYear = amountYear(botolProdukMandi);
// var sigma = aYear + bYear + cYear + dYear + eYear;

// var sigmaPercent = parseInt(map(sigma, 0, sigma, 0, 100));
// var aPercent = parseFloat(map(aYear, 0, sigma, 0, 100)).toFixed(2);
// var bPercent = parseFloat(map(bYear, 0, sigma, 0, 100)).toFixed(2);
// var cPercent = parseFloat(map(cYear, 0, sigma, 0, 100)).toFixed(2);
// var dPercent = parseFloat(map(dYear, 0, sigma, 0, 100)).toFixed(2);
// var ePercent = parseFloat(map(eYear, 0, sigma, 0, 100)).toFixed(2);

// console.log("botol Plastik -> " + aYear + " : " + aPercent);
// console.log("Tas Belanja -> " + bYear + " : " + bPercent);
// console.log("Sedotan -> " + cYear + " : " + cPercent);
// console.log("Kantong Makanan -> " + dYear + " : " + dPercent);
// console.log("Botol Produk Mandi -> " + eYear + " : " + ePercent);
// console.log(" ");
// console.log("total -> " + sigma + " : " + sigmaPercent);
// console.log();

var botolPlastik = 5;
var tasBelanja = 3;
var sedotan = 15;
var kantongMakanan = 10;
var botolProdukMandi = 2;
var kemasanMakanan = 2;

var sigma = 0;

sigma =
  botolPlastik +
  tasBelanja +
  sedotan +
  kantongMakanan +
  botolProdukMandi +
  kemasanMakanan;

console.log(sigma);

var trash = [
  botolPlastik,
  tasBelanja,
  sedotan,
  kantongMakanan,
  botolProdukMandi,
  kemasanMakanan, // Tambahkan kemasanMakanan ke array trash
];

var object = [
  "Botol",
  "Tas Belanja",
  "Sedotan",
  "Kantong",
  "Produk Mandi",
  "Kemasan",
];

// Buat array objek baru yang berisi pasangan nilai dan nama objek
var sortedTrash = trash.map((value, index) => {
  return { value: value, object: object[index] };
});

// Urutkan array berdasarkan nilai
sortedTrash.sort((a, b) => {
  return b.value - a.value;
});

// Pisahkan nilai dan nama objek yang sudah diurutkan
var sortedValues = sortedTrash.map((item) => item.value);
var sortedObjects = sortedTrash.map((item) => item.object);

console.log(sortedValues); // Output nilai yang sudah diurutkan
console.log(sortedObjects); // Output nama objek yang sudah diurutkan
