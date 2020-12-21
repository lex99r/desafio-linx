import axios from 'axios'

async function getProductById(id){

	const url = `http://localhost:${process.env.API_CATALOGO_PORT}/product/${id}`

	return (await axios.get(url, {
		data: {
			format: 'compact'
		}
	})).data

}

async function getRecomendationList(type){

	const url = `https://wishlist.neemu.com/onsite/impulse-core/ranking/${type}.json`

	return (await axios.get(url)).data;

}

async function getRecomendedProducts(type, max){

	var products = []

	const recomendations = await getRecomendationList(type)

	for(var i = 0; products.length < max && i < recomendations.length; i++){

		var product = await getProductById(recomendations[i].recommendedProduct.id)

		if(product != null && product.status === 'AVAILABLE') products.push(product)

	}

	return products

}

export default async function(req, res){

	const max = (req.query.maxProducts == undefined || req.query.maxProducts < 10) ? 10 : req.query.maxProducts

	try {

		const mostPopularProducts = await getRecomendedProducts('mostpopular', max)
		const priceReductionProducts = await getRecomendedProducts('pricereduction', max)

		res.json({mostPopularProducts, priceReductionProducts})

	} catch (error) {
		
		console.log(error)
		res.json({message: error.message})

	}

}