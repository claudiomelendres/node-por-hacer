const colors = require('colors/safe');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch ( comando ) {
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        console.log('Crear por hacer', tarea);

        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log(colors.green('==========Por Hacer============'));
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            if (tarea.completado)
                console.log('Estado: ', colors.bgGreen(tarea.completado));
            else
                console.log('Estado: ', colors.red(tarea.completado));
            console.log(colors.green('==============================='));
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');
        break;

}