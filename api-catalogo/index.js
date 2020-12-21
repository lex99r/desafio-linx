import fs from 'fs'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import dotenv from 'dotenv'

import dbConnection from './db/dbConnection.js'
import Product from './models/Product.js'
import router from './routes/router.js'

dotenv.config({path: '../.env'})
const port = process.env.API_CATALOGO_PORT || 3000
const filepath = './data/catalog.json'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(router)

dbConnection.on('error', function(){
	console.log('Erro ao conectar com o banco :(')
})

dbConnection.once('open', function(){

	console.log("Carregando dados...")

	loadData().then(function(){

		console.log('Dados carregados para o banco!')

		app.listen(port, function(){

			console.log(`Ouvindo requisições em http://localhost:${port} ...`)

		})

	}).catch(function(error){

		console.log(error)

		console.log('Erro ao carregar dados para o banco :(')

	})

})

async function loadData(){

	fs.readFile(filepath, 'utf-8', function(err, data){

		try{

			if(err) throw err

			data.split('\n').forEach(function(line){

				if(line.trim() != ''){

					var json = JSON.parse(line)

					var product = new Product(json)

					product.save(function(err){

						if(err) throw err

					})

				}

			})

		}catch(err){

			console.log(err)

		}

	})

}