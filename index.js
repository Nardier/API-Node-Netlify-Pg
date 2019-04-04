const restify = require('restify');
const server = restify.createServer();
const port = process.env.PORT || 3000;

server.get('/', () => {
    res.send('Server is on.')
})

server.listen(port, () => {
    console.log(`Server is on in http://localhost:${port}`)
    console.log('Press ctrl + c to shutdown server')
})