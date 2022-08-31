module.exports = function getDuration(startDate, endDate) {
	const timeInMilisecs = endDate - startDate
	// convert miliseconds to days
	const timeInDays = Math.ceil(timeInMilisecs / (1000 * 60 * 60 * 24))

	return timeInDays
}
