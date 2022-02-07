const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');

console.clear()

// 5 x 1 = 5
// 5 x 1 = 5
//..
// 5 x 1 = 5
//const base = 3

//option ('l')
//listar
//boolean
//default: false

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'ha sido creado'.green))
    .catch(err => console.log(err))
