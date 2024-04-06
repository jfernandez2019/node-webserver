const { envs } = require('./config/env')
const {startServer} = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//lo siguiente es una funcion agnostica (no tiene nombre ) y autoconvocada
// por que la ejecutamos con los parentesis finales
//se coloca al final del codigo para que se pueda ejecutar el main
(async () => {
    main()
})()

