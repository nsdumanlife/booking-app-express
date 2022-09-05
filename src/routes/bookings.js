const express = require('express')
const { numan } = require('../models')

const router = express.Router()

/* GET bookings listing. */
router.get('/', (req, res) => {
	// res.send(flatted.toJSON(numan.bookings))
	res.render('bookings', { title: 'Bookings', user: numan })
})

module.exports = router
