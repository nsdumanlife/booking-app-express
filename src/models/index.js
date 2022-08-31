const signUp = require('./sign-up')
const Bungalow = require('./bungalow')

const dogancay = new Bungalow('Geyve, Sakarya, Turkey', 5, 1250)
// const numan = new User("Numan", "Duman", "nsduman@gmail.com", 29);
const numan = signUp('Numan', 'Duman', 'nsduman@gmail.com', 29)
const faruk = signUp('Faruk', 'Duman', 'faruk@gmail.com', 26)

const checkInDate = new Date('09/22/2022')
const checkOutDate = new Date('09/29/2022')
const checkInDateFaruk = new Date('09/29/2022')
const checkOutDateFaruk = new Date('10/02/2022')

numan.book(dogancay, checkInDate, checkOutDate)
numan.review(dogancay, 'It was a wonderful place, the view and the atmosphere were perfect!')

faruk.book(dogancay, checkInDateFaruk, checkOutDateFaruk)

// console.log(dogancay);
// console.log(numan)

// console.log(numan.profile)
