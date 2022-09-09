const express = require('express')
// const User = require('../models/user')
const loggedInUser = require('../models/index')
// const User = require('../models/user')

const router = express.Router()

/* GET bookings listing. */
router.get('/', async (req, res, next) => {
	try {
		// const loggedInUser = await User.findById('631a3c3477b43133a0d1db5c')
		console.log('LOGGED IN USER: ', loggedInUser)
		// res.send(flatted.toJSON(numan.bookings))
		return res.render('bookings', { title: 'Bookings', user: loggedInUser, loggedIn: true })
	} catch (e) {
		return next(e)
	}
})

module.exports = router
