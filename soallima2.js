class Kerucut {
    constructor(tinggi, lebar){
        this.tinggi=tinggi;
        this.lebar=lebar;
    }

    getRadius() {
        return this.lebar / 2;
    }
    
      getSlantHeight() {
        let r = this.getRadius();
        return Math.sqrt(Math.pow(r, 2) + Math.pow(this.tinggi, 2));
    }

    getVolume (){
        let r = this.lebar/2;
        let l = Math.sqrt(Math.pow(r,2) + Math.pow (this.tinggi, 2));
        return (1/3) * Math.PI * Math.pow(r, 2) * this.tinggi;
    }

    getLuasPermukaan() {
        let r = this.getRadius();
        let l = this.getSlantHeight();
        return Math.PI * r * (r + l);
      }
    
      getLuasSelimut() {
        let r = this.getRadius();
        let l = this.getSlantHeight();
        return Math.PI * r * l;
      }
}

let kerucut = new Kerucut (40, 20);

console.log(`Volume dari kerucut tersebut adalah : ${kerucut.getVolume()} cubic cm`);
console.log(`Luas permukaan of the kerucut: ${kerucut.getLuasPermukaan()} square cm`);
console.log(`Luas selimut of the kerucut: ${kerucut.getLuasSelimut()} square cm`);