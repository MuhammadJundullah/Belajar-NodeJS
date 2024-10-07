// console.log('Hello World!');

function cetakNama(nama) {
    return `Hello nama saya ${nama}`;
}

const phi = 3.14

const Mahasiswa = {
    nama : 'sayid',
    jurusan : 'teknik informatika',
    nim : 220170045,
    cetakMahasiswa() {
        return `halo nama saya ${this.nama} mahasiswa jurusan ${this.jurusan} dengan nim ${this.nim}`
    }
};

class Orang {
    constructor() {
        console.log('Objek orang telah dibuat!')
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.phi = phi;
// module.exports.mahasiswa = Mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama : cetakNama,
//     phi : phi,
//     mahasiswa : Mahasiswa,
//     Orang : Orang,
// }

module.exports = { cetakNama, phi, Mahasiswa, Orang  };