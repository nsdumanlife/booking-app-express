const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
	text: String,
	rate: Number,
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
})
class Review {
	// Add methods here
}

reviewSchema.loadClass(Review)

module.exports = mongoose.model('Review', reviewSchema)
