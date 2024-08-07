// Definisi variabel
let panjang = 20.5; // panjang tanah (meter)
let lebar = 30; // lebar tanah (meter)
let hargaPerMeter = 1500000; // harga per meter persegi
let ppn = 0.15; // PPN 15%

let luasTanah = panjang * lebar;

// Hitung harga tanah
let hargaTanah = luasTanah * hargaPerMeter;

// Hitung PPN
let ppnAmount = hargaTanah * ppn;

// Hitung harga tanah setelah PPN
let hargaTanahTotal = hargaTanah + ppnAmount;


console.log(`Luas tanah: ${luasTanah} m2`);
console.log(`Harga tanah sebelum PPN: Rp ${hargaTanah.toLocaleString()}`);
console.log(`PPN: Rp ${ppnAmount.toLocaleString()}`);
console.log(`Harga tanah setelah PPN: Rp ${hargaTanahTotal.toLocaleString()}`);