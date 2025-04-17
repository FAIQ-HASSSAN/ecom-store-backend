import express from 'express';
const router = express.Router();
import { addProduct , getAllProducts , getSingleProduct , updateProduct , deleteProduct } from '../handlers/product-handler.js';

router.post("",async(req,res)=>{
    let productData = req.body;
    const addedProductData = await addProduct(productData);
    if(addedProductData){
      res.status(201).send({message : 'Product Added Successfully', addedProductData})
    }else{
        console.error(result);
        return res.status(500).send("error updating category !");
     }
})

// update
router.put('/:id',async(req,res)=>{
    try {
       const id = req.params.id;
       const updatedProductData = req.body;
       const updatedProduct = await updateProduct(id,updatedProductData);
       if(updatedProduct){
         res.send({message : 'product updated successfully',updatedProduct})
       }
    } catch (error) {
       res.status(500).send('error updated category');
    }
})


//delete 
router.delete("/:id",async(req,res)=>{
    try {
       const id = req.params.id;
       const deletedproduct = await  deleteProduct(id);
       if(deletedproduct){
         res.send({message : 'product deleted successfully',deletedproduct});
       }
    } catch (error) {
        res.status(500).send({message : 'error deleting category ',error})
    }
})
export default router;

// get
router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    const SingleProduct = await getSingleProduct(id);
    if(SingleProduct){
      res.send(SingleProduct)
    }
})

// get all
router.get("",async(req,res)=>{
    const allProducts = await getAllProducts();
    res.send({message : 'all products are ',allProducts});
})