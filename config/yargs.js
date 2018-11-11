const descripcion ={
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const optsCrear = {
    descripcion
};

const optsActualizar = {
    descripcion,
    completado: {
        alias: 'c',
        default: true,
        desc: 'Indica si la tarea ya fue completada o esta pendiente'
    }
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optsCrear)
    .command('actualizar', 'Actualizar el estado completado de unaa tarea', optsActualizar)
    .command('borrar', 'Borrar un elemento por hacer', optsCrear)
    .help()
    .argv;

module.exports = {
    argv
};