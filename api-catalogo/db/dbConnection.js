import mongoose from 'mongoose'

const url = 'mongodb://localhost/catalog'

mongoose.connect(url, {
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
})

export default mongoose.connection