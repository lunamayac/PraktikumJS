// persegi
 
class persegi {
    constructor(sisi){
        this.sisi = sisi
        // class induk menggunakan 'super'
        // mengambil nilai sendiri menggunakan 'this'
    }

    luas = () => {
        return this.sisi * this.sisi
    }

    keliling = () => {
        return 4 * this.sisi
    }
}


let kotak = new persegi(7)
console.log ("Luas persegi adalah: " + kotak.luas())
console.log ("Kelliling persegi adalah: " + kotak.keliling())