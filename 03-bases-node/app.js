const { crearArchivoTabla } = require('./helpers/multiplicar');

console.clear();

const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5] = arg3.split('=');

console.log(base);

// let base = 7;

crearArchivoTabla(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
