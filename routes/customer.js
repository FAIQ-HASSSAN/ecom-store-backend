import express from "express";
const router = express.Router();
import { getFeatureProducts , getNewProducts } from "../handlers/product-handler.js";

router.get('/new-products',async(req,res)=>{
      try {
         const newProducts = await getNewProducts();
         res.status(200).send(newProducts);
      } catch (error) {
         res.status(500).send(error);
      }
})

router.get('/feature-products',async (req,res) => {
    try {
        const featureProducts = await getFeatureProducts();
        res.status(200).send(featureProducts);
     } catch (error) {
        res.status(500).send(error);
     }
})

export default router;