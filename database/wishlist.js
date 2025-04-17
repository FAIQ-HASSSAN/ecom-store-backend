import mongoose, { Schema } from "mongoose";
const wishListSchema = new mongoose.Schema({
     userId : {type : Schema.Types.ObjectId , ref : 'users'},
     productsId : Array(String)
});

// use for database interation
const  wishlists = mongoose.model('wishlists',wishListSchema)
module.exports = wishlists;