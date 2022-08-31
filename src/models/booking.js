const { v4: uuidv4 } = require('uuid')
const getDuration = require('./get-duration')
const getDays = require('./get-booking-days')

class Booking {
	constructor(guest, bungalow, checkInDate, checkOutDate) {
		this.id = uuidv4()
		this.guest = guest.mail
		this.bungalow = bungalow.name
		this.checkInDate = checkInDate
		this.checkOutDate = checkOutDate
		this.status = 'confirmed' // confirmed, cancelled
		this.isReviewed = false
	}

	get duration() {
		return getDuration(this.checkInDate, this.checkOutDate)
	}

	get bookingDays() {
		return getDays(this.checkInDate, this.checkOutDate)
	}
}

module.exports = Booking
