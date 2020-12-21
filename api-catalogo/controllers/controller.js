import Product from '../models/Product.js'

export default async function(req, res){

	var id = req.params.id
	const format = req.body.format

	try {

		if(id == undefined) throw new Error('ID do produto não foi informado!')

		var product = await Product.findOne({id: id})

		if(product == null) throw new Error(`Produto com o ID ${id} não foi encontrado!`)

		if(format == 'compact'){

			const {
				name,
				price,
				status,
				categories
			} = product

			product = {
				name,
				price,
				status,
				categories
			}

		}

		res.json(product)

	} catch (error) {

		res.json({message: error.message})

	}

}