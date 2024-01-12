const fs = require('fs');

console.clear();

// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15

let salida = '';

for (let i = 1; i <= 10; i++) {
    salida += `5 x ${i} = ${5 * i}\n`;
} 

fs.writeFile('tabla-5.txt', salida, (err) => {
    if (err) throw err;
    console.log('tabla-5.txt creado!!!');
}); 