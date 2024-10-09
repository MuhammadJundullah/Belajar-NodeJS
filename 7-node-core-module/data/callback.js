function processData(data, callback) {
  // Proses data di sini
  const result = data * 2; // Contoh pemrosesan
  callback(result); // Memanggil callback dengan hasil
}

// Callback yang berbeda
function logResult(result) {
  console.log("Hasil:", result);
}

function doubleResult(result) {
  console.log("Doubled:", result * 2);
}

// Menggunakan fungsi dengan callback yang berbeda
processData(5, logResult); // Output: Hasil: 10
processData(5, doubleResult); // Output: Doubled: 20
