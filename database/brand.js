import mongoose from "mongoose";
const brandSchema = new mongoose.Schema({
    name : String,
});

// use for database interation
const  Brand = mongoose.model('brand',brandSchema);
export default Brand;