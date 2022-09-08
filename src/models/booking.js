const { v4: uuidv4 } = require('uuid')
const getDays = require('../helper/get-booking-days')

class Booking {
	constructor(guest, bungalow, checkInDate, checkOutDate) {
		this.id = uuidv4()
		this.guest = guest.firstName
		this.bungalow = bungalow.id
		this.checkInDate = checkInDate
		this.checkOutDate = checkOutDate
		this.isReviewed = false
		this.cancelled = false
	}

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

module.exports = Booking
