const express = require('express')
const Bungalow = require('../models/bungalow')
const loggedInUser = require('../models/index')
// const User = require('../models/user')

const router = express.Router()

/* GET bungalows listing. */
router.get('/', async (req, res, next) => {
	try {
		const bungalows = await Bungalow.find({})

		// const user = await User.findById('631a3c3477b43133a0d1db5c')

		// if (req.query.name) {
		// 	return res.send(bungalows.filter(bungalow => bungalow.name.toLowerCase() === req.query.name.toLowerCase()))
		// }

		// res.send(bungalows)
		return res.render('bungalows', { title: `Rent a Bungalow for Your Next Escape`, bungalows, user: loggedInUser })
	} catch (e) {
		return next(e)
	}
})
/* GET bungalow detail page. */
router.get('/:bungalowId', async (req, res, next) => {
	try {
		const bungalow = await Bungalow.findById(req.params.bungalowId)

		// if (bungalow) res.send(bungalow)
		if (bungalow) res.render('bungalow', { title: `Bungalow ${bungalow.name}`, bungalow })
		else res.sendStatus(404)
	} catch (e) {
		next(e)
	}
})
/* POST/create new booking. */
router.post('/:bungalowId', async (req, res) => {
	const bungalow = await Bungalow.findById(req.params.bungalowId)
	// const user = await User.findById('631a3c3477b43133a0d1db5c')

	// if (bungalow) res.send(flatted.toJSON(bungalow))
	if (!bungalow)
		return res.render('error', {
			error: { status: 404 },
			message: `No bungalow found`,
		})

	await loggedInUser.book(bungalow, new Date(req.body.checkInDate), new Date(req.body.checkOutDate))

	return res.redirect('/bookings')
})
/* POST/create new review. */
router.post('/:bungalowId/reviews', async (req, res) => {
	const bungalow = await Bungalow.findById(req.params.bungalowId)
	// const user = await User.findById('631a3c3477b43133a0d1db5c')
	console.log(loggedInUser)
	if (!bungalow)
		return res.render('error', {
			error: { status: 404 },
			message: `No bungalow found`,
		})

	// const review = await Review.create({ text: req.body.text, rate: req.body.rate, author: user })
	// bungalow.reviews.push(review)
	// await bungalow.save()
	loggedInUser.review(bungalow, req.body.text, req.body.rate)
	return res.redirect(`/bungalows/${bungalow.id}`)
})

module.exports = router
