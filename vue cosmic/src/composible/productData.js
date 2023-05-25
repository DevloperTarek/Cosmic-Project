import {ref} from 'vue'
import axios from 'axios'
export default function useProduct(){
    const url = 'http://localhost:3333/AllProducts/'
    const productData = ref([]);
    const error = ref(null)

    // get all student
    const getAllStudent = async ()=>{
        productData.value = [];
        error.value = null;
        try{
            const res = await axios(url)
            productData.value = res.data
        }catch(err){
            error.value = err;
        }
    }
    // get single products
    const getSingleProduct = async (id)=>{
        productData.value = [];
        error.value = null;
        try{
            const res = await axios(url + id);
            productData.value = res.data;
        }catch(err){
            error.value = err;
        }

    }
    // add or post data
    const addProduct = async (formData)=>{
         productData.value = [];
        error.value = null;
        try{
            const Config = {
                method:'POST',
                url : url,
                headers:{
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(formData)
            }
            const res = await axios(Config)
            productData.value = res.data;
        }catch(err){
            error.value = err;
        }
    }
    // delete product
     const DeleteProduct = async (id)=>{
        productData.value = [];
        error.value = null;
        try{
           const config = {
                method:'Delete',
                url:url + id
           }
           const res = await axios(config)
           productData.value = res.data
        }catch(err){
            error.value = err;
        }
    }
   return {
        productData,
        error,
        getAllStudent,
        getSingleProduct,
        DeleteProduct,
        addProduct
    }
}
 