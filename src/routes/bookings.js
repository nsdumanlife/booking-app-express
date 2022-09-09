const express = require('express')
// const User = require('../models/user')
const user = require('../models/index')

const router = express.Router()

/* GET bookings listing. */
router.get('/', async (req, res, next) => {
	try {
		// const user = await User.findById('631a3c3477b43133a0d1db5c')

		// res.send(flatted.toJSON(numan.bookings))
		return res.render('bookings', { title: 'Bookings', user, loggedIn: true })
	} catch (e) {
		return next(e)
	}
})

module.exports = router

// const express = require('express')
// const { users, loggedInUser } = require('../models')

// const router = express.Router()

// /* GET bookings listing. */
// router.get('/', (req, res) => {
// 	const user = users.find(u => u.name === loggedInUser.name)
// 	// res.send(flatted.toJSON(numan.bookings))
// 	res.render('bookings', { title: 'Bookings', user: loggedInUser, loggedIn: user === loggedInUser })
// })

// module.exports = router
