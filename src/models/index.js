const signUp = require('./sign-up')
const Bungalow = require('./bungalow')
const { imagesOfOxygen } = require('./image')

const numan = signUp('Numan', 'Duman', 'nsduman@gmail.com', 29)
const users = [numan]

const tepe = new Bungalow('Tepe', 'Sapanca, Sakarya', 8, 950, 'Faruk')
const lion = new Bungalow('Lion', 'Kumbag, Tekirdag', 4, 1250, 'Faruk')
const dogancay = new Bungalow('Dogancay', 'Geyve, Sakarya, Turkey', 5, 1150, 'Faruk')
const oxygen = new Bungalow('Oxygen', 'Geyve, Sakarya', 8, 950, 'Faruk')
oxygen.images.push(...imagesOfOxygen)
oxygen.services.push('internet', 'barbecue', 'hot tub')
const bungalows = [tepe, lion, dogancay, oxygen]

const checkInDate = new Date('09/22/2022')
const checkOutDate = new Date('09/29/2022')
const checkInDate1 = new Date('11/29/2022')
const checkOutDate1 = new Date('12/02/2022')
const checkInDate2 = new Date('01/29/2023')
const checkOutDate2 = new Date('02/02/2023')
const checkInDateFaruk = new Date('09/29/2022')
const checkOutDateFaruk = new Date('10/02/2022')

numan.book(bungalows[0], checkInDate, checkOutDate)
numan.book(bungalows[1], checkInDate1, checkOutDate1)
numan.book(bungalows[2], checkInDate2, checkOutDate2)
// numan.cancelBooking(numan.bookings[0])

// faruk.book(dogancay, checkInDateFaruk, checkOutDateFaruk)

module.exports = { bungalows, users, numan }
