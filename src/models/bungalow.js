const mongoose = require('mongoose')
const getDays = require('../helper/get-booking-days')

const bungalowSchema = new mongoose.Schema({
	id: Number,
	name: String,
	location: String,
	capacity: Number,
	price: Number,
	bookings: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Booking',
		},
	],
	bookedDates: [],
	reviews: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Review',
		},
	],
	images: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Image',
		},
	],
	services: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Service',
		},
	],
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
})
class Bungalow {
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
bungalowSchema.loadClass(Bungalow)

module.exports = mongoose.model('Bungalow', bungalowSchema)
