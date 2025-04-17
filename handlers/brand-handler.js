import Brand from "../database/brand.js";

async function getAllBrands() {
    try {
        const allBrands = await Brand.find();
        return (allBrands.map((brand) => brand.toObject()));
    } catch (error) {
        return error;
    }
}

async function getBrandById(id) {
    try {
        let singleBrand = await Brand.findById(id);
        return singleBrand.toObject();
    } catch (error) {
        return error;  
    }
}

async function addNewBrand(model){
    try {
        const newBrand = new Brand({
            name : model.name
        })
        await newBrand.save();
        return newBrand.toObject();
    } catch (error) {
        return error;
    }
}

async function updateBrand(id,model) {
    try {
        let updatedBrand = await Brand.findByIdAndUpdate(id,model);
        return updatedBrand.toObject();
    } catch (error) {
        return error;
    }
}

async function deleteBrand(id) {
   try {
    const deletedBrand = await Brand.findByIdAndDelete(id);
    return deletedBrand.toObject();
   } catch (error) {
    return error;
   }  
}

export {deleteBrand , updateBrand , addNewBrand , getBrandById , getAllBrands};