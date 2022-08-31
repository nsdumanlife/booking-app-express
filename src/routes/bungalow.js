const getDays = require('./get-booking-days')

class Bungalow {
	constructor(location, capacity, price, owner) {
		this.location = location
		this.bookings = []
		this.bookedDates = []
		this.city = ''
		this.capacity = capacity
		this.price = price
		this.reviews = [] // user's reviews
		this.rates = [] // average of stars are given by users
		this.photos = [] //
		this.services = [] // internet, barbecue,hot tub, pool, hot water, kitchen etc.

		this.owner = owner
	}

	get rating() {
		return this.rates.reduce((sum, rate) => sum + rate, 0) / this.rates.length
	}

	// get bookedDates() {
	//   return this.#bookedDates.slice()
	// }

	// set bookedDates(newDates) {
	//   this.#bookedDates.concat(newDates)
	// }

	checkAvailability(checkInDate, checkOutDate) {
		const newBookingDays = getDays(checkInDate, checkOutDate)

		return newBookingDays.every(date => !this.bookedDates.includes(date))
	}
}

module.exports = Bungalow
