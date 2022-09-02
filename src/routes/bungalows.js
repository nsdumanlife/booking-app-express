const express = require('express')
const flatted = require('flatted')
const { bungalows } = require('../models/bungalow')

const router = express.Router()

/* GET bungalows listing. */
router.get('/', (req, res) => {
	if (req.query.name) {
		return res.send(bungalows.filter(bungalow => bungalow.name.toLowerCase() === req.query.name.toLowerCase()))
	}
	return res.render('bungalows', { title: `Rent a Bungalow for Your Next Escape`, bungalows })
})

router.get('/:bungalowId', (req, res) => {
	const bungalow = bungalows[req.params.bungalowId]

	if (bungalow) res.send(flatted.toJSON(bungalow))
	else res.sendStatus(404)
})

module.exports = router
