import http from 'node:http'
import { json } from './res-json.js';
import { routes } from './routes.js';

const server = http.createServer(async(req,res) => {
    const { method, url } = req // Pegando o method e a url enviada
    await json(req, res); 

    // Cria routes.js
    const route = routes.find(route => {
        return route.method === method && route.path.test(url);
      });
    
      if (route) {
        return route.execute(req, res);  // Chama o handler da rota correspondente
      }
})
const port = 3000

server.listen(3000, () => {
    console.log("Server running!")
})
