export async function json(req, res) {
    const buffers = [];
  
    for await (const chunk of req) {
      buffers.push(chunk);  // Lê os chunks da requisição e adiciona ao array de buffers
    }
  
    try {
      req.body = JSON.parse(Buffer.concat(buffers).toString());  // Converte os buffers para JSON e define como corpo da requisição
    } catch {
      req.body = null;  // Define como nulo se ocorrer erro na conversão
    }
  
    res.setHeader('Content-Type', 'application/json');  // Define o cabeçalho Content-Type como application/json
}
  