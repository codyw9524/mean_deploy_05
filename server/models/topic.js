var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	topic: {
		type: String,
		required: [true, 'Topic must not be blank']
	},
	description: {
		type: String,
		required: [true, 'Description must not be blank']
	},
	messages: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Message'
	}]
} ,{ timestamps: true })

mongoose.model('Topic', TopicSchema);
