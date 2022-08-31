const User = require('./user')

module.exports = function signUp(firstName, lastName, email, age) {
	// TODO: check that email address is available or not
	return new User(firstName, lastName, email, age)
}
