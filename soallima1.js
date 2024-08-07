class Bola {
    constructor (radius){
        this.radius = radius;
    }

    getVolume() {
        return (4/3) * Math.PI * Math.pow(this.radius, 3);
      }

    getLuas() {
        return 4 * Math.PI * Math.pow(this.radius, 2);
      }
}

let bola = new Bola (30);

console.log(`Volume dari bola tersebut: ${bola.getVolume()} cubic cm`);
console.log(`Luas dari bola tersebut: ${bola.getLuas()} square cm`);