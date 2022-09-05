class Image {
	constructor(src, alt) {
		this.src = src
		this.alt = alt
	}
}

const imageOxygenOutside = new Image(
	'https://sapancaotelleri.com.tr/plugin/thumb/phpThumb.php?src=https://skttur.travelus.pro/assets/travelus/upload/files/Sapanca-oksijen-bungalov_8kEsDe0.jpg&h=768&w=1167&iar=1&q=95&f=webp&hash=6d430ca401ea0418f2e2e0ba5efd0022&zc=1',
	'Detailed photos of bungalow Oxygen'
)

const imageOxygenFrontside = new Image(
	'https://img.otelz.com/s3/turkiye/sakarya/sapanca/whatsappimage20211205at15.50.1624298f7c7559245cfabbd1a81c66dc930.jpg',
	'Detailed photos of bungalow Oxygen'
)

const imageOxygenInside = new Image(
	'https://oxygenbungalov.com/tema/genel/uploads/odalar/kapak/oksijen_bungalov.jpeg',
	'Detailed photos of bungalow Oxygen'
)

const imagesOfOxygen = [imageOxygenOutside, imageOxygenFrontside, imageOxygenInside]

module.exports = { Image, imagesOfOxygen }
