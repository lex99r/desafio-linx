import mongoose from 'mongoose'

const productSchema = mongoose.Schema({

    imagesSsl: {},
    skus: [mongoose.Schema({
		sku: {
			type: String,
			index: true
		},
		specs: Object,
		properties: Object,
		customBusiness: Object
	})],
    apiKey: String,
    description: String,
    type: String,
    auditInfo: Object,
    specs: Object,
    eanCode: String,
    price: Number,
    details: Object,
    remoteUrl: String,
    categories: [mongoose.Schema({
		id: {
			type: String,
			index: true
		},
		name: String,
		parents: [String]
	})],
    id: {
        type: String,
        index: true
    },
    stock: String,
    brand: String,
    customBusiness: Object,
    basePrice: String,
    images: Object,
    kitProducts: [],
    created: Date,
    oldPrice: Number,
    published: String,
    version: String,
    url: String,
    tags: [],
    unit: String,
    installment: {
        count: Number,
        price: Number
    },
    name: String,
    clientLastUpdated: Date,
    extraInfo: Object,
    status: String,
	ungroupedId: String
	
})

export default mongoose.model('Product', productSchema)