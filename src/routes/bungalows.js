const express = require('express')
// const flatted = require('flatted')
const { bungalows } = require('../models')
const { loggedInUser } = require('../models')
const { getDays } = require('../models')

const router = express.Router()

/* GET bungalows listing. */
router.get('/', (req, res) => {
	if (req.query.name) {
		return res.send(bungalows.filter(bungalow => bungalow.name.toLowerCase() === req.query.name.toLowerCase()))
	}

	if (req.body.checkInDate && req.body.checkOutDate) {
		const dates = getDays(new Date(req.body.checkInDate), new Date(req.body.checkOutDate))

		const filteredBungalows = bungalows.filter(b => b.bookedDates.some(date => !dates.includes(date)))

		return res.render('bungalows', {
			title: `Rent a Bungalow for Your Next Escape`,
			filteredBungalows,
			user: loggedInUser,
		})
	}
	return res.render('bungalows', { title: `Rent a Bungalow for Your Next Escape`, bungalows, user: loggedInUser })
})

// router.post('/', (req, res) => {
// 	const dates = getDays(new Date(req.body.checkInDate), new Date(req.body.checkOutDate))
// 	const filteredBungalows = bungalows.filter(b => b.bookedDates.some(dates))
// 	if (!filteredBungalows)
// 		return res.render('error', {
// 			error: { status: 404 },
// 			message: `No bungalow found`,
// 		})
// 	return res.redirect('/bungalows')
// })

router.get('/:bungalowId', (req, res) => {
	const selectedBungalow = bungalows.find(bungalow => bungalow.id === req.params.bungalowId)

	// if (bungalow) res.send(flatted.toJSON(bungalow))
	if (selectedBungalow)
		res.render('bungalow', { title: `Bungalow ${selectedBungalow.name}`, bungalow: selectedBungalow })
	else res.sendStatus(404)
})

router.post('/:bungalowId', (req, res) => {
	const bungalow = bungalows.find(bung => bung.id === req.params.bungalowId)

	// if (bungalow) res.send(flatted.toJSON(bungalow))
	if (!bungalow)
		return res.render('error', {
			error: { status: 404 },
			message: `No bungalow found`,
		})
	loggedInUser.book(bungalow, new Date(req.body.checkInDate), new Date(req.body.checkOutDate))

	return res.redirect('/bookings')
})

router.post('/:bungalowId/reviews', (req, res) => {
	const bungalow = bungalows.find(bung => bung.id === req.params.bungalowId)

	if (!bungalow)
		return res.render('error', {
			error: { status: 404 },
			message: `No bungalow found`,
		})

	loggedInUser.review(bungalow, req.body.text, req.body.rate)

	return res.redirect(`/bungalows/${bungalow.id}`)
})

module.exports = router
