import express from 'express'
const router = express.Router();
import {addCategory , updateCategory , deleteCategory , getAllCategories, getSingleCategory} from '../handlers/category-handler.js'

router.post("",async(req,res)=>{
   let model = req.body;
   let result = await addCategory(model);
   // console.log('result from add category is : ',result);
   if(result){
      res.send(result);
   }
})

// put use for update 
router.put("/:id",async(req,res)=>{
   let data = req.body;
   let id = req.params.id;
   let result = await updateCategory(id,data);
   // console.log('put result is : ',result);
   if(result){
      res.send(result);
   }else{
      console.error(result);
      return res.status(500).send("error updating category !");
   }
})

router.delete("/:id",async(req,res)=>{
   const deletedResult = await deleteCategory(req.params.id);
   // console.log('deleted result is : ',deletedResult);
   if(deletedResult){
      res.status(201).send({message : 'Deleted Successfully', deletedResult})
   }else{
      res.send(deletedResult)
   }
})

router.get("",async(req,res)=>{
   let result = await getAllCategories();
   // console.log('get category is : ',result);
   if(result){
      res.send(result);
   }
})

router.get("/:id",async(req,res)=>{
   let id = req.params.id;
   let result = await getSingleCategory(id);
   if(result){
      res.send(result);
   }
})

export default router;