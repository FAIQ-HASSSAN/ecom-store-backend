import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    name : String,
});

// use for database interation
const  Category = mongoose.model('categories',categorySchema);
export default Category