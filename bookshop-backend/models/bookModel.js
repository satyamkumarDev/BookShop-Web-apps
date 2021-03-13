import mongoose from 'mongoose';
const bookSchema= new mongoose.Schema({
    name:{type: String, required: true},
    author:{type: String, required: true},
    price:{type:Number, required:true},
    class:{type: String, required: true},
    image:{type: String, required: true},
    brand:{type: String, required: true},
    InStock:{type:Number, required:true},
    rating:{type:Number, required:true},
    reviews:{type:Number, required:true},
    description:{type: String, required: true}
},{
    timestamps:true,
});

const Book=mongoose.model('Book', bookSchema);
export default Book;