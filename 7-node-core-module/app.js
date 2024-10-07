// core module
// file system

const fs = require('fs');

// menuliskan string ke system secara sync
try {
    fs.writeFileSync('data/test.txt', 'Hello World secara synchronous')
} catch(e) {
    console.log(e);
};