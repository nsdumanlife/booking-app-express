const { v4: uuidv4 } = require('uuid')
const getDays = require('./get-booking-days')

class Bungalow {
	constructor(name, location, capacity, price, owner) {
		this.id = uuidv4()
		this.name = name
		this.location = location
		this.bookings = []
		this.bookedDates = []
		this.capacity = capacity
		this.price = price
		this.reviews = [] // user's reviews
		this.rates = []
		this.images = []
		this.services = [] // internet, barbecue,hot tub, pool, hot water, kitchen etc.

		this.owner = owner
	}

	get rating() {
		return this.rates.reduce((sum, rate) => sum + rate, 0) / this.rates.length
	}

	checkAvailability(checkInDate, checkOutDate) {
		const newBookingDays = getDays(checkInDate, checkOutDate)

		return newBookingDays.every(date => !this.bookedDates.includes(date))
	}
}

module.exports = Bungalow
