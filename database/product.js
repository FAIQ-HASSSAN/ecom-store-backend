import mongoose, { Schema } from "mongoose";
const productSchema = new mongoose.Schema({
    name : String,
    description : String,
    shortDescription : String,
    Price : Number,
    discount : Number,
    images : Array(String),
    // foreign key
    categoryId : {type : Schema.Types.ObjectId, ref: 'categories'}
});

// use for database interation
const  Product = mongoose.model('products',productSchema)
export default Product