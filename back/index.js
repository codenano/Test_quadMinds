const restify = require('restify');
const config = require('./config');
const routes = require('./routes');
const crosmid = require('restify-cors-middleware');

const server = restify.createServer();

const cros = crosmid({
	origin: ['http://localhost:8080/'],
	allowHeaders: ['X-App-Version']
});

server.use(restify.plugins.bodyParser());

server.pre(cros.preflight);
server.use(cros.actual);

require('./routes')(server);	

server.listen(config.PORT, () => {
	console.log(`Server started on port ${config.PORT}`);
});
