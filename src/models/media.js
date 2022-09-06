class Media {
	constructor(source, kind) {
		this.source = source
		this.kind = kind
	}
}

const MediaType = {
	PHOTO: 'photo',
	VIDEO: 'video',
}

module.exports = { Media, MediaType }
