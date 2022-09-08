const mongoose = require('mongoose')
// const { v4: uuidv4 } = require('uuid')
const getDays = require('../helper/get-booking-days')

const bookingSchema = new mongoose.Schema({
	id: Number,
	guest: String, // change to user obj
	bungalow: Number, // change to bungalow obj
	checkInDate: Date,
	checkOutDate: Date,
	isReviewed: Boolean,
	cancelled: Boolean,
})

class Booking {
	get bookingDays() {
		return getDays(this.checkInDate, this.checkOutDate)
	}

	get totalPrice() {
		return this.bungalow.price * this.bookingDays.length
	}

	// completed, cancelled, upcoming
	get status() {
		if (Date.now() > this.checkOutDate) return 'Completed'
		return 'Upcoming'
	}

	cancel() {
		if (this.cancelled) throw new Error('This booking is already cancelled.')

		this.cancelled = true
		// remove booking from bungalow's booking list
		this.bungalow.removeBooking(this)
	}
}

bookingSchema.loadClass(Booking)

module.exports = mongoose.model('Booking', bookingSchema)
