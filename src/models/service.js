class Service {
	constructor(kind) {
		this.kind = kind
	}
}

const ServiceType = {
	HOT_TUB: 'hot tub',
	AIR_CONDITIONING: 'air conditionng',
	HEATING: 'heating',
	FIREPLACE: 'fireplace',
	FIRE_PIT: 'fire pit',
	BBQ_GRILL: 'BBQ grill',
	WIFI: 'wifi',
	REFRIGERATOR: 'refrigerator',
	MOUNTAIN_VIEW: 'mountain view',
	LAKE_ACCESS: 'lake access',
	POOL: 'pool',
}

module.exports = { Service, ServiceType }
