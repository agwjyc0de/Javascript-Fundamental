//Pendeklarasian
    var Nama = "Anggi Wijaya";
    let NPanggilan = "Wijaya";
    const NamaIstri = "***Tetot***";

    //Output Ke Console
    console.log(Nama);
    //disini kita coba ubah value dari variable Nama
    Nama = "Anggi Ganteng";
    console.log(Nama);
    // Jika var dia akan berubah, tapi
    var Nama = "Mi Indomie";
    console.log(Nama);
    //jika var jika kita deklarasikan Nama lg, dengan kata lain, kita mempunya 2 Variable Var, dia tidak error. nah coba let?
    console.log(NPanggilan);
    //Reassign Nilai NPanggilan
    NPanggilan = "Anggi";
    console.log(NPanggilan);
    //berhasil,selanjutnya coba kita deklarasikan variable NPanggilan lg.
    // let NPanggilan = 'CrystalGuy';
    // console.log(NPanggilan);
    //Identifier 'NPanggilan' has already been declared , error tersebut muncul karena let sudah mendeteksi ada variable NPanggilan Sebelumnya, sudah tau kan perbedaan nya antara let dan var.
    //selanjutnya const
    console.log(NamaIstri);
    //Reassign nilai NamaIstri
    // NamaIstri = 'Millo';
    // console.log(NamaIstri);
    //error : Assignment to constant variable.,ini terjadi karena const bersifat Fix/Tepat,tidak bisa diubah, keadaan seperti apa yang sebaiknya menggunakan const? seperti membuat rumus , seperti v = 3,7;