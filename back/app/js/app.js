
/* ----------------------------------------------------------- */

var consumeRest = {
	
	url: 'https://localhost:3000',

	successCallBack: function(data, callback){
		callback(data);
	},

	getRequest: function(request, callback) {
		console.log(this.url+request);
		
		$.ajax({
		  	method: "GET",
		  	url:  this.url+request,
		  	async: false,
		})
		.fail(function(fail){ return fail; })
		.done(function(done) { consumeRest.successCallBack(done, callback) });
	
	},


	postRequest: function(request, data, callback) {
		
		$.ajax({
		  	method: "POST",
		  	url:  this.url+request,
		  	data: JSON.stringify(data),
		  	async: false,
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
		    success: function(data){console.log(data);},
		    failure: function(errMsg) {
		        console.log(errMsg);
		    }		
		})
		
	},


	getAjaxResponse: function(data) {
		console.log(data);
	},
};


//var content =  consumeRest.postRequest('/notes', {title: "tesstt", content: "test1"},  consumeRest.getAjaxResponse);
var content =  consumeRest.getRequest('/api/v2/notes', consumeRest.getAjaxResponse);


