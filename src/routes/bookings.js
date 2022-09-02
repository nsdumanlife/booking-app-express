const express = require('express')
const signUp = require('../models/sign-up')
const { bungalows } = require('../models/bungalow')

const router = express.Router()

const numan = signUp('Numan', 'Duman', 'nsduman@gmail.com', 29)

const checkInDate = new Date('09/22/2022')
const checkOutDate = new Date('09/29/2022')
const checkInDate1 = new Date('11/29/2022')
const checkOutDate1 = new Date('12/02/2022')
const checkInDate2 = new Date('01/29/2023')
const checkOutDate2 = new Date('02/02/2023')

numan.book(bungalows[0], checkInDate, checkOutDate)
numan.book(bungalows[1], checkInDate1, checkOutDate1)
numan.book(bungalows[2], checkInDate2, checkOutDate2)

/* GET bookings listing. */
router.get('/', (req, res) => {
	// res.send(flatted.toJSON(numan.bookings))
	res.render('bookings', { title: 'Bookings', user: numan })
})

module.exports = router
