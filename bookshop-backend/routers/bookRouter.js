import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import books from '../booksinfo.js';
import Book from '../models/bookModel.js';
import mongoose from 'mongoose';

const bookRouter=express.Router();

bookRouter.get('/seed', expressAsyncHandler(async(req,res)=>{
    const createdBooks=await Book.insertMany(books.booksInfo)
    res.send({createdBooks});
}))

bookRouter.get('/', expressAsyncHandler(async(req,res)=>{
    const books=await Book.find({});
    res.send(books)
}))

bookRouter.get('/:id', expressAsyncHandler(async (req,res)=>{
    if( !mongoose.Types.ObjectId.isValid(req.params.id) ){
        return false;
    }else{
        const book=await Book.findById(req.params.id);
        if(book){
            res.send(book)
        }else{
            res.status(404).send({message:'Book Not Found'})
        }
    }
    
}))
export default bookRouter;