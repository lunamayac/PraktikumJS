// Data Rhodey
const tinggiCm = 170;
const beratKg = 90;

// Konversi tinggi dari cm ke meter
const tinggiM = tinggiCm / 100;

// Hitung BMI
const bmi = beratKg / (tinggiM * tinggiM);

// Tentukan status berat badan
let status;
if (bmi < 18.5) {
    status = "Berat badan kurang";
} else if (bmi >= 18.5 && bmi < 24.9) {
    status = "Berat badan normal";
} else if (bmi >= 25 && bmi < 29.9) {
    status = "Berat badan berlebih";
} else {
    status = "Obesitas";
}

// Output hasil
console.log(`BMI Rhodey: ${bmi.toFixed(2)}`);
console.log(`Status berat badan: ${status}`);