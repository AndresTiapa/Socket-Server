import Server from './clases/server';
import { SERVER_PORT } from './global/enviroment';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';
//import { router } from './routes/router';
/* const nombre = 'Andres';
console.log(`Mi nombre es ${nombre}`); */
const server = new Server();
 //body-parser
 server.app.use( bodyParser.urlencoded({ extended:true}));
 server.app.use(bodyParser.json());
//Cors
server.app.use( cors({origin: true, credentials: true}));

server.app.use('/', router);

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${ SERVER_PORT}`);
});