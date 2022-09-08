const signUp = require('../helper/sign-up')
const Bungalow = require('./bungalow')
const { imagesOfOxygen } = require('./image')

const users = []
const bungalows = []
let numan

async function main() {
	numan = signUp('Numan', 'Duman', 'nsduman@gmail.com', 29)
	const faruk = signUp('Faruk', 'Duman', 'f@gmail.com', 26)
	// users.push(numan, faruk)
	// ;[numan, faruk].forEach(user => user.save())

	const tepe = new Bungalow({ name: 'Tepe', location: 'Sapanca, Sakarya', capacity: 8, price: 950, owner: 'Faruk' })
	const lion = new Bungalow({ name: 'Lion', location: 'Kumbag, Tekirdag', capacity: 4, price: 1250, owner: 'Faruk' })
	const dogancay = new Bungalow({
		name: 'Dogancay',
		location: 'Geyve, Sakarya, Turkey',
		capacity: 5,
		price: 1150,
		owner: 'Faruk',
	})
	const oxygen = new Bungalow({ name: 'Oxygen', location: 'Geyve, Sakarya', capacity: 8, price: 950, owner: 'Faruk' })
	oxygen.images.push(...imagesOfOxygen)
	oxygen.services.push('internet', 'barbecue', 'hot tub')
	bungalows.push(tepe, lion, dogancay, oxygen)

	const checkInDate = new Date('10/22/2022')
	const checkOutDate = new Date('10/29/2022')
	const checkInDate1 = new Date('12/01/2023')
	const checkOutDate1 = new Date('12/05/2023')
	const checkInDate2 = new Date('02/01/2023')
	const checkOutDate2 = new Date('02/03/2023')
	const checkInDateFaruk = new Date('10/17/2023')
	const checkOutDateFaruk = new Date('10/21/2023')

	numan.book(bungalows[0], checkInDate, checkOutDate)
	numan.book(bungalows[1], checkInDate1, checkOutDate1)
	numan.book(bungalows[2], checkInDate2, checkOutDate2)
	// numan.cancelBooking(numan.bookings[0])
	numan.createBungalow({ name: 'turtle', location: 'Akbuk, Mugla', capacity: 2, price: 1750 })
	faruk.book(bungalows[3], checkInDateFaruk, checkOutDateFaruk)
	faruk.review(bungalows[3], 'That was an amazing vacation!', 5)

	// console.log(numan)
}

main()

module.exports = { bungalows, users, numan, loggedInUser: numan }
