const express = require('express')

const router = express.Router()

const Bungalow = require('../models/bungalow')

const tepe = new Bungalow('Tepe', 'Sapanca, Sakarya', 8, 950, 'Numan')
const jojo = new Bungalow('Jojo', 'Sapanca, Sakarya', 6, 1150, 'Numan')
const lion = new Bungalow('Lion', 'Kumbag, Tekirdag', 4, 1250, 'Numan')
const oxygen = new Bungalow('Oxygen', 'Geyve, Sakarya', 8, 950, 'Numan')

const bungalows = [tepe, jojo, lion, oxygen]

/* GET bungalows listing. */
router.get('/', (req, res) => {
	if (req.query.name) {
		return res.send(bungalows.filter(bungalow => bungalow.name.toLowerCase() === req.query.name.toLowerCase()))
	}
	return res.send(bungalows)
})

router.get('/:bungalowId', (req, res) => {
	const bungalow = bungalows[req.params.bungalowId]

	if (bungalow) res.send(bungalow)
	else res.sendStatus(404)
})

module.exports = router
