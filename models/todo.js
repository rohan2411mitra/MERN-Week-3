const mongoose = require('mongoose')

const nestedObj= new mongoose.Schema({
	field1: String
})

const TodoSchema = new mongoose.Schema({
	record: { type: String, required: true },
	date: {
		type: Number,
		default: Date.now
	},
	obj: nestedObj
	},
	{collection: 'my-todo'}
)

const model = mongoose.model('TodoModel', TodoSchema)

module.exports = model
