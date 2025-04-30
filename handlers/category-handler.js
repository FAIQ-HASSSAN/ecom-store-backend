import Category from "../database/category.js";

async function addCategory(model){
   //  console.log('I am in add category handler !'); 
       let category = new Category({
          name : model.name
       })
       // save it in db
       await category.save();
      //  console.log('add category is : ',category);
       return category.toObject();
}

async function updateCategory(received_id,model){
       try {
          const updatedCategory = await Category.findOneAndUpdate({_id : received_id},model);
         //  console.log('updated cateogry is : ',updatedCategory);
          return updatedCategory.toObject();
       } catch (error) {
          return error;
       }  
}

async function deleteCategory(id){
   try {
      const deletedCategory = await Category.findByIdAndDelete(id);
      return deletedCategory.toObject();
   } catch (error) {
      return error;
   }
}

async function getAllCategories(){
    try {
        const allCategories = await Category.find();
        return allCategories.map((category)=>category.toObject());
        
    } catch (error) {
         return error;
    }
}

async function getSingleCategory(id) {
     try {
        let result = await Category.findById(id)
        return result.toObject();
     } catch (error) {
        return error;
     }
}

export { addCategory , updateCategory , deleteCategory , getAllCategories, getSingleCategory};