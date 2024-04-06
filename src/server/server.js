const express = require('express');
const path = require('path');

const startServer = (options) => {
    const {port, public_path = 'public'} = options 
    const app = express() //aqui asignamos express() a la constante app que nos servira para usar las funciones de express

    //middleware que nos ayuda a poner contenido estatico en el servidor
    //para usar el middleware se usa la palabra use
    app.use(express.static(public_path)) 
    //tenemos que recibir la peticion
    //este SEGMENTO ES MUY IMPORTANTE GRACIAS A QUE EN EL PRIMER PARAMETRO TENEMOS EL * ANTES
    //DEL REQ Y RES, ES QUE SIEMPRE BUSCA EL INDEX.HTML Y PERMITE MOSTRAR UNA APLICACION HECHA EN REACT
    app.get('*',(req, res)=>{
        //la siguiente linea nos permite entrar en la carpeta public que contiene la pagina que 
        //vamos a mostrar
        //usando backticks podemos utilizar el public path definido en las variables de entorno
        const indexpath = path.join(__dirname + `../../../${public_path}/index.html`)
        //el sendfilie envia la direccion de nuestra pagina
        res.sendFile(indexpath)
    })
    //es para escuchar el puerto que permitira mostrar la pagina
    //en las variables de entorno .env se definio puerto 3000
    app.listen(port,()=>{
        console.log(`Escuchando en el puerto ${port}`)
    })

}

module.exports = {
    startServer
}
