import express from 'express';
const router = express.Router();
import { addNewBrand , updateBrand , getAllBrands , getBrandById , deleteBrand } from '../handlers/brand-handler.js';

router.post("",async(req,res)=>{
    let data = req.body;
    const result = await addNewBrand(data);
    if(result){
        res.send({message : 'brand added successfully', result});
    }else{
        res.status(500).send({message : 'server error'});
    }
})

router.put("/:id",async(req,res)=>{
    let data = req.body;
    let id = req.params.id;
    const result = await updateBrand(id,data);
    if(result){
        res.status(210).send({message : 'brand updated successfully', result});
    }else{
        res.status(500).send({message : 'server error'});
    }
})

router.delete("/:id",async(req,res)=>{
    const id = req.params['id'];
    const result = await deleteBrand(id);
    if(result){
        res.status(299).send({message : 'brand deleted successfully', result});
    }else{
        res.status(500).send({message : 'server error'});
    }
})

router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    const result = await getBrandById(id);
    if(result){
        res.status(255).send({message : 'Get Single Brand ', result});
    }else{
        res.status(500).send({message : 'server error'});
    }
})

router.get("",async(req,res)=>{
    const result = await getAllBrands();
    if(result){
        res.status(281).send({message : 'Get All Brands', result});
    }else{
        res.status(500).send({message : 'server error'});
    }
})

export default router;