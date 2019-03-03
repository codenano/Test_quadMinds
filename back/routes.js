const request = require('request');
const config = require('./config');

module.exports = server => {
	
	server.get('/api/v2/notes', (req, res, next) => {
		request
		.get(config.RESTURL+'/notes', 
		  	(error, response, body) => {
		     let jsonObject = JSON.parse(body);
		     res.send(jsonObject.data);
		});
		
		next();
	});

	server.get('/api/v2/notes/:id', (req, res, next) => {
		request
		.get(config.RESTURL+'/notes/'+req.params.id, 
		  	(error, response, body) => {
		     let jsonObject = JSON.parse(body);
		     res.send({msg: jsonObject.data});
		});
		
		next();
	});


	server.post('/api/v2/notes', (req, res, next) => {
		let title = req.body.title, content = req.body.content;
		request
		.post(config.RESTURL+'/notes', 
			{json: {title: title , content: content}}, (error, resp, body) => {
		  	res.send({msg: body});
		});

		next();
	});


	server.put('/api/v2/notes/:id', (req, res, next) => {
		let id = req.params.id, title = req.body.title, content = req.body.content;
		request
		.put(config.RESTURL+'/notes/'+id, 
			{json: {id: id, title: title , content: content}}, (error, resp, body) => {
		  	res.send({msg: body});
		});

		next();
	});


	server.del('/api/v2/notes/:id', (req, res, next) => {
		let id = req.params.id;
		request
		.del(config.RESTURL+'/notes/'+id, (error, resp, body) => {
			let jsonObject = JSON.parse(body);
		  	res.send({msg: jsonObject.data});
		});

		next();
	});


}