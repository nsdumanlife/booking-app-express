const Booking = require('./booking')
const Review = require('./review')
const Bungalow = require('./bungalow')
const getDays = require('../helper/get-booking-days')

class User {
	constructor(firstName, lastName, email, age) {
		this.firstName = firstName
		this.lastName = lastName
		this.email = email
		this.age = age
		this.bookings = []

		this.ownedBungalows = []
	}

	get profile() {
		return `${this.firstName} ${this.lastName} has ${this.bookings.length} ${
			this.bookings.length <= 1 ? 'booking' : 'bookings'
		}`
	}

	book(bungalow, checkInDate, checkOutDate) {
		if (checkInDate - Date.now() < 0) throw new Error('Enter a valid date for check-in date')

		if (bungalow.checkAvailability(checkInDate, checkOutDate)) {
			const newBooking = new Booking(this, bungalow, checkInDate, checkOutDate)

			bungalow.addBooking(newBooking)
			// bungalow.bookings.push(newBooking)
			// bungalow.bookedDates.push(...newBooking.bookingDays)
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
		const review = new Review(message, rate, this)

		bungalow.reviews.push(review)
	}

	cancelBooking(booking) {
		// remove the booked dates from bungalow's calendar
		const checkInDateStr = getDays(booking.checkInDate, booking.checkOutDate)

		const indexOfCheckInDate = booking.bungalow.bookedDates.indexOf(checkInDateStr)

		booking.bungalow.bookedDates.splice(indexOfCheckInDate, booking.bookingDays.length)

		// set booking status to cancelled
		booking.cancel()

		// remove booking from bungalow bookings
		const indexOfBungalowBooking = booking.bungalow.bookings.indexOf(booking)

		booking.bungalow.bookings.splice(indexOfBungalowBooking, 1)

		// remove from user's bookings
		const indexOfUserBooking = this.bookings.indexOf(booking)

		this.bookings.splice(indexOfUserBooking, 1)

		// refund money to user
		// send email to user
	}

	createBungalow(name, location, capacity, price) {
		const bungalow = new Bungalow(name, location, capacity, price, this)

		this.ownedBungalows.push(bungalow)

		return bungalow
	}
}

module.exports = User
