import mongoose, { Schema } from "mongoose";
const orderSchema = new mongoose.Schema({
    date : Date,
    items : Array(any),
    status : Number
});

// use for database interation
const  Order = mongoose.model('orders',orderSchema)
module.exports = Order;