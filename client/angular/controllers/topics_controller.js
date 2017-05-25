app.controller('TopicsController', function(TopicFactory, UserFactory, $routeParams){
	console.log('initializing TopicsController...');
	var self = this;
	self.topic = {};

	self.index = function(){
		TopicFactory.index(function(res){
			self.topics = res.data;
		})
	}
	self.create = function(newTopic){
		UserFactory.session(function(user){
			newTopic.user = user._id;
			TopicFactory.create(newTopic, self.index);
		})
	}

	self.createMessage = function(){
		
	}

	self.show = function(){
		TopicFactory.show($routeParams.id, function(res){
			self.topic = res.data;
		})
	}
})