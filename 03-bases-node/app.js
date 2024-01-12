const fs = require('fs');

console.clear();

// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15

let base = 3;
let salida = '';

for (let i = 1; i <= 10; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
} 

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;
    console.log(`tabla-${base}.txt creado!!!`);
}); 