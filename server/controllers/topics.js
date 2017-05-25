var mongoose = require('mongoose');

var Topic = mongoose.model('Topic');
var Message = mongoose.model("Message");
var User = mongoose.model('User');
var Comment = mongoose.model('Comment');

module.exports = {
	index: function(req, res){
		Topic.find({}).populate('user messages').exec(function(err, topics){
			if(err){
				return res.json(err);
			}
			return res.json(topics);
		})
	},
	create: function(req, res){
		Topic.create(req.body, function(err, topic){
			if(err){
				return res.json(err);
			}
			return res.json(topic)
		})
	},
	show: function(req, res){
		Topic.findById(req.params.id).populate('user').populate({
			path: 'messages',
			model: 'Message',
			populate: {
				path: 'user',
				model: 'User'
			}
			
		}).populate({
			path: 'messages',
			model: 'Message',
			populate: {
				path: 'comments',
				model: 'Comment',
				populate: {
					path: 'user',
					model: 'User'
				}
			}
		}).exec(function(err, topic){
			if(err){
				return res.json(err);
			}
			return res.json(topic);
		})
	}
}




