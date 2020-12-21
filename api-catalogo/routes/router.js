import express from 'express'
import controller from '../controllers/controller.js'

const router = express.Router()

router.get('/product/:id', controller)

export default router