let barang = [
    {nama: "Beras", harga: 10000, jumlah: 5},
    {nama: "Gula", harga: 14000, jumlah: 5},
    {nama: "Telur", harga: 20000, jumlah: 2},
    {nama: "Minyak Gorengg", harga: 9000, jumlah: 10},
]

let=totalBelanja = 0;

for (let i=0; i<barang.length; i++) {
    let subtotal=barang[i].harga * barang[i].jumlah;
    totalBelanja=+ subtotal;
}

console.log(`Total Belanja Rp ${totalBelanja}`);