const Booking = require('./booking')

class User {
	constructor(firstName, lastName, email, age) {
		this.firstName = firstName
		this.lastName = lastName
		this.email = email
		this.age = age
		this.bookings = []
		this.reviews = []
		// user id
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

			bungalow.bookings.push(newBooking)
			bungalow.bookedDates.push(...newBooking.bookingDays)
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
		// if (bungalow.guests.includes(this)) {
		//   bungalow.reviews.push(message)
		//   bungalow.rates.push(rate)
		//   this.reviews.push(message)
		// }
	}

	pay() {}

	cancelBooking() {
		// take booking as a parameter
		// remove the booked dates from bungalow's calendar
		// update the booking status to cancelled
		// refund money to user
		// send email to user
	}
}

module.exports = User
