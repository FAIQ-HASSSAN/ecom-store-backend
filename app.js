import express, { urlencoded } from 'express'
import mongoose from 'mongoose';
const app = express();
import multer from 'multer';
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3000;
import categoryRoutes from './routes/category.js'
import brandRoutes from "./routes/brand.js";
import productRoutes from './routes/product.js';
import customerRoutes from './routes/customer.js';
import authRoutes from './routes/auth.js';
import { verifyToken , isAdmin } from './middleware/auth-middleware.js';

app.use(cors({
    origin : 'http://localhost:4200',
    // methods : ['POST'],
}));
// send data in form of json on server
app.use(express.json());
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
// app.use(express.urlencoded({ extended: true }));

// multer setup
const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename : (req,file,cb)=>{
        cb(null,Date.now() + '-' + file.originalname)
    }
})

const upload = multer({storage})

app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded');
    const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;
    res.json({ imageUrl });
  });

app.get("/",(req,res)=>{
    res.send('server running')
})

// ju bhi /category se ae ga hum isko categoryRoutes pr bheje ge
// verfiytoken true return kre ga tu cateogory routes pr jae ga
app.use('/category', verifyToken , isAdmin ,categoryRoutes);
app.use('/brand', verifyToken ,brandRoutes);
app.use('/product', verifyToken,productRoutes);
app.use('/customer', verifyToken ,customerRoutes);
app.use('/auth',authRoutes);

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

