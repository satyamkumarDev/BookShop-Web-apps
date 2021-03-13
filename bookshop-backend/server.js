import express from 'express';
import dotenv from 'dotenv';
import  mongoose from 'mongoose';
import bookRouter from '../bookshop-backend/routers/bookRouter.js'
dotenv.config()
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/bookshop', {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
})

app.use('/api/books', bookRouter);

app.get('/', (req, res)=>{
    res.send('Server is ready')
})

app.listen(process.env.PORT || 8000,()=>{
   console.log('server at http://localhost:'+ (process.env.PORT || 8000))
})



app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})