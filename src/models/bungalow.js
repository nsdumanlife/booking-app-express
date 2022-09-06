const { v4: uuidv4 } = require('uuid')
const getDays = require('../helper/get-booking-days')

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
		this.images = []
		this.services = [] // internet, barbecue,hot tub, pool, hot water, kitchen etc.

		this.owner = owner
	}

	get rating() {
		const sumOfReviewsRates = this.reviews.reduce((sum, review) => sum + Number(review.rate), 0)

		return Math.ceil(sumOfReviewsRates / this.reviews.length)
	}

	checkAvailability(checkInDate, checkOutDate) {
		const newBookingDays = getDays(checkInDate, checkOutDate)

		return newBookingDays.every(date => !this.bookedDates.includes(date))
	}
}

module.exports = Bungalow
