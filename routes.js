import { routePath } from './route-path.js';  // Importa função para construir caminhos de rota dinâmica

export const routes = [
  {
    method: 'GET',
    path: routePath('/pet'),  // Define o caminho da rota para listar tarefas
    execute: (req, res) => {
      return res.end('Rota GET funcionando perfeitamente!!'); 
    }
  },
  {
    method: 'POST',
    path: routePath('/pet'),  // Define o caminho da rota para criar uma nova tarefa
    execute: (req, res) => {
      const { nome } = req.body;
      console.log(nome)

      return res.writeHead(203).end('Rota POST funcionando perfeitamente!!');  // Retorna código 201 (Created) para indicar sucesso na criação
    }
  }

];
