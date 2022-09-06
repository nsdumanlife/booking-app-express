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

	addBooking(booking) {
		this.bookings.push(booking)
		this.bookedDates.push(...booking.bookingDays)
	}

	removeBooking(booking) {
		// remove the booked dates from bungalow's calendar
		const checkInDateStr = getDays(booking.checkInDate, booking.checkOutDate)

		const indexOfCheckInDate = this.bookedDates.indexOf(checkInDateStr)

		this.bookedDates.splice(indexOfCheckInDate, booking.bookingDays.length)

		// remove booking from bungalow bookings
		const indexOfBungalowBooking = this.bookings.indexOf(booking)

		this.bookings.splice(indexOfBungalowBooking, 1)
	}

	addService(service, owner) {
		if (this.owner === owner) this.services.push(service)
	}
}

module.exports = Bungalow
