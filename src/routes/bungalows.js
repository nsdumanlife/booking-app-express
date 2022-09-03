const express = require('express')
// const flatted = require('flatted')
const { bungalows } = require('../models/bungalow')
const { numan } = require('../models/sign-up')

const router = express.Router()

/* GET bungalows listing. */
router.get('/', (req, res) => {
	if (req.query.name) {
		return res.send(bungalows.filter(bungalow => bungalow.name.toLowerCase() === req.query.name.toLowerCase()))
	}
	return res.render('bungalows', { title: `Rent a Bungalow for Your Next Escape`, bungalows, user: numan })
})

router.get('/:bungalowId', (req, res) => {
	const selectedBungalow = bungalows.find(bungalow => bungalow.id === req.params.bungalowId)

	// if (bungalow) res.send(flatted.toJSON(bungalow))
	if (selectedBungalow) res.render('bungalow', { title: `${selectedBungalow.name}`, bungalow: selectedBungalow })
	else res.sendStatus(404)
})

module.exports = router
