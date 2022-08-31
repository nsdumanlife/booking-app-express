const express = require('express')

const router = express.Router()

const signUp = require('../models/sign-up')
const Bungalow = require('../models/bungalow')

const dogancay = new Bungalow('Dogancay', 'Geyve, Sakarya, Turkey', 5, 1250)
const numan = signUp('Numan', 'Duman', 'nsduman@gmail.com', 29)

const checkInDate = new Date('09/22/2022')
const checkOutDate = new Date('09/29/2022')
const checkInDate1 = new Date('11/29/2022')
const checkOutDate1 = new Date('12/02/2022')
const checkInDate2 = new Date('01/29/2023')
const checkOutDate2 = new Date('02/02/2023')

numan.book(dogancay, checkInDate, checkOutDate)
numan.book(dogancay, checkInDate1, checkOutDate1)
numan.book(dogancay, checkInDate2, checkOutDate2)

/* GET bookings listing. */
router.get('/', (req, res) => {
	res.send(numan.bookings)
})

module.exports = router
