const mongoose = require('mongoose')
const Booking = require('./booking')
const Review = require('./review')
const Bungalow = require('./bungalow')

const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	age: Number,
	bookings: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Booking',
		},
	],
	ownedBungalows: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Bungalow',
		},
	],
})

class User {
	get profile() {
		return `${this.firstName} ${this.lastName} has ${this.bookings.length} ${
			this.bookings.length <= 1 ? 'booking' : 'bookings'
		}`
	}

	book(bungalow, checkInDate, checkOutDate) {
		if (checkInDate - Date.now() < 0) throw new Error('Enter a valid date for check-in date')

		if (bungalow.checkAvailability(checkInDate, checkOutDate)) {
			const newBooking = new Booking({ guest: this, bungalow, checkInDate, checkOutDate })

			bungalow.addBooking(newBooking)
			this.bookings.push(newBooking)

			// TODO:
			// do payment
			// create invoice
			// send confirmation email attached with invoice to user
		} else {
			throw new Error('Please select different date')
		}
	}

	review(bungalow, message, rate) {
		const review = new Review({ message, rate, author: this })

		bungalow.reviews.push(review)
	}

	cancelBooking(booking) {
		// set booking status to cancelled
		booking.cancel()

		// remove from user's bookings
		const indexOfUserBooking = this.bookings.indexOf(booking)

		this.bookings.splice(indexOfUserBooking, 1)

		// refund money to user
		// send email to user
	}

	createBungalow(name, location, capacity, price) {
		const bungalow = new Bungalow({ name, location, capacity, price, owner: this })

		this.ownedBungalows.push(bungalow)

		return bungalow
	}
}

userSchema.loadClass(User)

module.exports = mongoose.model('User', userSchema)
