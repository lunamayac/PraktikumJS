class Tabung {
    constructor(tinggi, lebar) {
      this.tinggi = tinggi;
      this.lebar = lebar;
    }
  
    getRadius() {
      return this.lebar / 2;
    }
  
    getVolume() {
      let r = this.getRadius();
      return Math.PI * Math.pow(r, 2) * this.tinggi;
    }
  
    getLuasPermukaan() {
      let r = this.getRadius();
      return 2 * Math.PI * r * (r + this.tinggi);
    }
  
    getLuasSelimut() {
      let r = this.getRadius();
      return 2 * Math.PI * r * this.tinggi;
    }
  }
  

  let tabung = new Tabung(50, 15);
  
  console.log(`Volume of the tabung: ${tabung.getVolume()} cubic cm`);
  console.log(`Luas permukaan of the tabung: ${tabung.getLuasPermukaan()} square cm`);
  console.log(`Luas selimut of the tabung: ${tabung.getLuasSelimut()} square cm`);