import express from 'express'
import mongoose from 'mongoose';
const app = express();
import cors from 'cors'
const port = 3000;
import categoryRoutes from './routes/category.js'
import brandRoutes from "./routes/brand.js";
import productRoutes from './routes/product.js';

app.use(cors({
    origin : 'http://localhost:4200',
    // methods : ['POST'],
}));
// send data in form of json on server
app.use(express.json());

app.get("/",(req,res)=>{
    res.send('server running')
})

// ju bhi /category se ae ga hum isko categoryRoutes pr bheje ge
app.use('/category',categoryRoutes);
app.use('/brand',brandRoutes);
app.use('/product',productRoutes);

async function connectDb(){
    await mongoose.connect('mongodb://localhost:27017',{
        dbName : "ecom-store"
    })
    console.log('mongodb connected !');
}

connectDb().catch((err)=>{
    console.log(err);
})

app.listen(port,()=>{
    console.log('server running on port',port);
})

