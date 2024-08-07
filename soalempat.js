let a = 4;
let r= 3;
let n= 10;
let sum= 0;

for (let i=0; i<n;i++ ) {
    let term = a * Math.pow(r, i);
    sum+= term;
}

console.log(`Jumlah yang pertama-${n} term adalah ${sum}`);