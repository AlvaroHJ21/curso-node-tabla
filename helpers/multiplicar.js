const fs = require('fs')
const colors = require('colors');

const crearArchivo = async (base = 5, listar, hasta = 10) => {

    try {
        let salida = "", consola = ""
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
            consola += `${base}` + ' x '.magenta + `${i}` + ' = '.magenta + `${base * i}\n`
        }
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida)

        if (listar) {
            console.log("=========================".blue);
            console.log("   Tabla del:", base);
            console.log("=========================".blue);
            console.log(consola)
        }

        return `Tabla-${base}.txt`
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo: crearArchivo
}