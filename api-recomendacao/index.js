import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

import router from '../api-recomendacao/routes/router.js'

dotenv.config({path: '../.env'})
const port = process.env.API_RECOMENDACAO_PORT || 8080
const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(router)

app.listen(port, function(){

	console.log(`Ouvindo requisições em http://localhost:${port} ...`)

})