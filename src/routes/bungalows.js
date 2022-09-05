const express = require('express')
// const flatted = require('flatted')
const { bungalows } = require('../models')
const { loggedInUser } = require('../models')

const router = express.Router()

/* GET bungalows listing. */
router.get('/', (req, res) => {
	if (req.query.name) {
		return res.send(bungalows.filter(bungalow => bungalow.name.toLowerCase() === req.query.name.toLowerCase()))
	}
	return res.render('bungalows', { title: `Rent a Bungalow for Your Next Escape`, bungalows, user: loggedInUser })
})

router.get('/:bungalowId', (req, res) => {
	const selectedBungalow = bungalows.find(bungalow => bungalow.id === req.params.bungalowId)

	// if (bungalow) res.send(flatted.toJSON(bungalow))
	if (selectedBungalow)
		res.render('bungalow', { title: `Bungalow ${selectedBungalow.name}`, bungalow: selectedBungalow })
	else res.sendStatus(404)
})

router.post('/:bungalowId/bookings', (req, res) => {
	const bungalow = bungalows.find(bung => bung.id === req.params.bungalowId)

	// if (bungalow) res.send(flatted.toJSON(bungalow))
	if (!bungalow)
		return res.render('error', {
			error: { status: 404 },
			message: `No bungalow found`,
		})

	loggedInUser.book(bungalow, req.body.checkInDate, req.body.checkOutDate)

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
