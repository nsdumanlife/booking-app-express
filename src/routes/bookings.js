const express = require('express')
const { users, loggedInUser } = require('../models')

const router = express.Router()

/* GET bookings listing. */
router.get('/', (req, res) => {
	const user = users.find(u => u.name === loggedInUser.name)
	// res.send(flatted.toJSON(numan.bookings))
	res.render('bookings', { title: 'Bookings', user: loggedInUser, loggedIn: user === loggedInUser })
})

module.exports = router
