const { v4: uuidv4 } = require('uuid')
const getDays = require('./get-booking-days')

class Booking {
	constructor(guest, bungalow, checkInDate, checkOutDate) {
		this.id = uuidv4()
		this.guest = guest
		this.bungalow = bungalow
		this.checkInDate = checkInDate
		this.checkOutDate = checkOutDate
		this.status = 'confirmed' // confirmed, cancelled
		this.isReviewed = false
	}

	get bookingDays() {
		return getDays(this.checkInDate, this.checkOutDate)
	}

	get totalPrice() {
		return this.bungalow.price * this.bookingDays.length
	}
}

module.exports = Booking
