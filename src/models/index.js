const Bungalow = require('./bungalow')
const User = require('./user')
const Image = require('./image')

const users = []
const bungalows = []
let numan
let faruk

async function main() {
	// Users
	numan = await User.create({ firstName: 'Numan', lastName: 'Duman', email: 'nsduman@gmail.com', age: 29 })
	faruk = await User.create({ firstName: 'Faruk', lastName: 'Duman', email: 'f@gmail.com', age: 26 })

	// Bungalows
	const tepe = await Bungalow.create({
		name: 'Tepe',
		location: 'Sapanca, Sakarya',
		capacity: 8,
		price: 950,
		owner: faruk,
	})
	const lion = await Bungalow.create({
		name: 'Lion',
		location: 'Kumbag, Tekirdag',
		capacity: 4,
		price: 1250,
		owner: faruk,
	})
	const dogancay = await Bungalow.create({
		name: 'Dogancay',
		location: 'Geyve, Sakarya, Turkey',
		capacity: 5,
		price: 1150,
		owner: faruk,
	})
	const oxygen = await Bungalow.create({
		name: 'Oxygen',
		location: 'Geyve, Sakarya',
		capacity: 8,
		price: 950,
		owner: faruk,
	})

	// Images
	const imageOxygenOutside = await Image.create({
		src: 'https://sapancaotelleri.com.tr/plugin/thumb/phpThumb.php?src=https://skttur.travelus.pro/assets/travelus/upload/files/Sapanca-oksijen-bungalov_8kEsDe0.jpg&h=768&w=1167&iar=1&q=95&f=webp&hash=6d430ca401ea0418f2e2e0ba5efd0022&zc=1',
		alt: 'Detailed photos of bungalow Oxygen',
	})

	const imageOxygenFrontside = await Image.create({
		src: 'https://img.otelz.com/s3/turkiye/sakarya/sapanca/whatsappimage20211205at15.50.1624298f7c7559245cfabbd1a81c66dc930.jpg',
		alt: 'Detailed photos of bungalow Oxygen',
	})

	const imageOxygenInside = await Image.create({
		src: 'https://oxygenbungalov.com/tema/genel/uploads/odalar/kapak/oksijen_bungalov.jpeg',
		alt: 'Detailed photos of bungalow Oxygen',
	})

	oxygen.images.push(imageOxygenOutside, imageOxygenFrontside, imageOxygenInside)
	// oxygen.services.push('internet', 'barbecue', 'hot tub')
	// bungalows.push(tepe, lion, dogancay, oxygen)

	const checkInDate = new Date('10/22/2022')
	const checkOutDate = new Date('10/29/2022')
	const checkInDate1 = new Date('12/01/2023')
	const checkOutDate1 = new Date('12/05/2023')
	const checkInDate2 = new Date('02/01/2023')
	const checkOutDate2 = new Date('02/03/2023')
	const checkInDateFaruk = new Date('10/17/2023')
	const checkOutDateFaruk = new Date('10/21/2023')

	await numan.book(lion, checkInDate, checkOutDate)
	await numan.book(dogancay, checkInDate1, checkOutDate1)
	await numan.book(tepe, checkInDate2, checkOutDate2)
	// numan.cancelBooking(lion)
	const turtle = numan.createBungalow('turtle', 'Akbuk, Mugla', 2, 1750)
	await faruk.book(turtle, checkInDateFaruk, checkOutDateFaruk)
	// await faruk.review(turtle, 'That was an amazing vacation!', 5)

	// console.log(numan)
}

main()

module.exports = { bungalows, users, numan, loggedInUser: numan }
