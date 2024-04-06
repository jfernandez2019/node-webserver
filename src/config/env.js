require('dotenv').config();
const { get } = require('env-var');
//Armaremos las variables de entorno para ejecutarlas
// en la variable env traeremos el puerto y el path donde se encuentra la web
const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

module.exports = {
    envs
}