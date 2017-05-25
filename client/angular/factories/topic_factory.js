app.factory('TopicFactory', function($http){
	var factory = {};

	factory.index = function(callback){
		$http.get('/topics').then(callback);
	}
	factory.create = function(newTopic, callback){
		$http.post('/topics', newTopic).then(callback);
	}
	factory.show = function(id, callback){
		$http.get('/topics/' + id).then(callback);
	}

	return factory;
})