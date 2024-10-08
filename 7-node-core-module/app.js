// core module
// file system

const fs = require('fs');

// menuliskan string ke system secara sync
// fs.writeFileSync("data/test.txt", "Hello World ini di tulis dengan Async", (e) => {
//     console.log(e);
// });

// membaca isi file secara synchronous
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data.toString());

// membaca isi file secara Asynchronous
// const data = fs.readFile('dataa/test.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

// readline
const readline = require("node:readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout, 
});

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan nomor hp anda : ', (noHP) => {
        console.log(`Terimakasih ${nama} sudah menginputkan ${noHP}`);
        rl.close();
    }) 
})

