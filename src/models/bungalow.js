const { v4: uuidv4 } = require('uuid')
const getDays = require('./get-booking-days')
const { imagesOfOxygen } = require('./image')

class Bungalow {
	constructor(name, location, capacity, price, owner) {
		this.id = uuidv4()
		this.name = name
		this.location = location
		this.bookings = []
		this.bookedDates = []
		this.city = ''
		this.capacity = capacity
		this.price = price
		this.reviews = [] // user's reviews
		this.rates = [] // average of stars are given by users
		this.images = [] //
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

const tepe = new Bungalow('Tepe', 'Sapanca, Sakarya', 8, 950, 'Faruk')
const lion = new Bungalow('Lion', 'Kumbag, Tekirdag', 4, 1250, 'Faruk')
const dogancay = new Bungalow('Dogancay', 'Geyve, Sakarya, Turkey', 5, 1150, 'Faruk')
const oxygen = new Bungalow('Oxygen', 'Geyve, Sakarya', 8, 950, 'Numan')
oxygen.images.push(...imagesOfOxygen)
const bungalows = [tepe, lion, dogancay, oxygen]

module.exports = { Bungalow, bungalows }
