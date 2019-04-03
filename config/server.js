const restify = require('restify');
const port = 3000;
const server = restify.createServer();

server.use(restify.plugins.bodyParser({
 mapParams:true,
 mapFiles:false,
 overrideParams: false
}));

server.get('/get', (request, response, next) => {
 const retorno = {retorno:'restify ok'};
 response.send(200, retorno);
 next();
});


server.get('/contatos', (request, response, next) => {
  const Contatos = [{
    id:1,
    Nome: 'Nardier Barbosa',
    Contatos:[{
        tipo:1,
        contato:'nardierbarbosa@gmail.com' },
        {
        tipo:2,
        contato: '996630503'
        }
      ]
    }];
    response.send(200, Contatos);
    next();
});

server.listen(port, () => {
  console.log(`restify executando na porta:${port}`);
});

module.exports = server;