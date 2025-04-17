import mongoose, { Schema } from "mongoose";
const cartSchema = new mongoose.Schema({
     userId : {type : Schema.Types.ObjectId , ref : 'users'},
     productsId : Array(String)
});

// use for database interation
const  Cart = mongoose.model('cart',cartSchema)
module.exports = Cart;