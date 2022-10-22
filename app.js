/* IMPORTAR LOS MODULOS REQUERIDOS */

    const express = require('express');

        /* Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona 
        un conjunto sólido de características para las aplicaciones web y móviles */

    var cors = require('cors');

            /* (CORS) es un mecanismo que utiliza cabeceras HTTP 
        adicionales para permitir que un user agent (en-US) obtenga 
        permiso para acceder a recursos seleccionados desde un servidor,
        en un origen distinto (dominio) al que pertenece. 
        Un agente crea una petición HTTP de origen cruzado cuando solicita un recurso desde un dominio distinto, 
        un protocolo o un puerto diferente al del documento que lo generó. */

    const bodyParser = require('body-parser')
          /*  body-parser es lo que permite a Express leer el cuerpo
        y luego analizarlo en un objeto Json que podamos entender. */

    const morgan = require('morgan');

        /*   Morgan es un Middleware de nivel de solicitud HTTP. Es una herramienta que registra
          las requests junto con alguna otra información dependiendo de su configuración 
          y el valor predeterminado utilizado. Demuestra ser muy útil durante la depuración 
          y también si desea crear archivos de registro */

/* CONFIGURACIÓN INICIAL */


const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
