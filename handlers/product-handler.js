import Product from "../database/product.js";

async function addProduct(model) {
    try {
        // first method
        // const addedProduct = new Product({
        //     name : model.name,
        //     description : model.description,
        //     shortDescription : model.shortDescription,
        //     Price : model.Price,
        //     discount : model.Price,
        //     images : model.images,
        // })

        // second method
        const addedProduct = new Product({
            ...model
        })
        await addedProduct.save();
        return addedProduct.toObject();
    } catch (error) {
        console.error('error is : ',error);
        throw new Error('failed to add product')
    }
}


async function updateProduct(id,model) {
    try {
        // jis product se id match hu gi is se model object replace hu jae ga
        const updatedProduct = await Product.findByIdAndUpdate(id,model);
        return updatedProduct.toObject();
    } catch (error) {
        console.error('error is : ',error);
        throw new Error('failed to update product')
    }
}

async function deleteProduct(id) {
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        return deletedProduct.toObject();
    } catch (error) {
        console.error('error is : ',error);
        throw new Error('failed to delete product')
    }
}

async function getAllProducts() {
   try {
    const allProduct = await Product.find();
    return allProduct.map((product)=>product.toObject());
   } catch (error) {
        console.error('error is : ',error);
        throw new Error('failed to fetch products')
   }
}

async function getSingleProduct(id) {
    try {
        const singleProduct = await Product.findById(id);
        return singleProduct.toObject();
    } catch (error) {
        console.error('error is : ',error);
        throw new Error('failed to get singe product')
    }
}

export {getAllProducts , getSingleProduct , deleteProduct , updateProduct , addProduct}