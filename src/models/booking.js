const { v4: uuidv4 } = require('uuid')
const getDays = require('./get-booking-days')

class Booking {
	constructor(guest, bungalow, checkInDate, checkOutDate) {
		this.id = uuidv4()
		this.guest = guest
		this.bungalow = bungalow
		this.checkInDate = checkInDate
		this.checkOutDate = checkOutDate
		this.isReviewed = false
	}

	get bookingDays() {
		return getDays(this.checkInDate, this.checkOutDate)
	}

	get totalPrice() {
		return this.bungalow.price * this.bookingDays.length
	}

	// completed, cancelled, upcoming
	get status() {
		if (Date.now() - this.checkOutDate > 0) return 'Completed'
		return 'Upcoming'
	}
}

module.exports = Booking
