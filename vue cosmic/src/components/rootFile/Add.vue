<script setup>
    import { reactive } from "vue";
    import useProduct from '../../composible/productData'
const { error, getAllStudent, addProduct } = useProduct();
// onMounted(getAllStudent);
    const formData = reactive({
        title:"",
        details:"",
        email:"",
    });
    
    const handleProductForm = async ()=>{
        // console.log("form Submitted",formData)
        console.log(handleProductForm());
        await addProduct(formData);
    };
</script>

<template>
    <div>
        <form @Submit.prevent="handleProductForm()" class="w-full" id="addProductForm">
           <div class="flex items-center m-6">
                <div class="w-1/5">
                     <label for="title" class="font-medium">title</label>
                </div>
                <div class="w-4/5">
                    <input type="text" id="title" v-model.trim="formData.title" class="border-2 border-gray-200 w-full px-4 py-2" placeholder="white your product title.." required>
                </div>    
           </div>
           <div class="flex items-center m-6">
                <div class="w-1/5">
                        <label for="details" class="font-medium">Details:</label>
                </div>
                <div class="w-4/5">
                    <input type="text" id="details" v-model.trim="formData.details" class="border-2 border-gray-200 w-full px-4 py-2" placeholder="white your product title.." required>
                </div>    
            </div>
             <div class="flex items-center m-6">
                <div class="w-1/5">
                        <label for="email" class="font-medium">Email:</label>
                </div>
                <div class="w-4/5">
                    <input type="email" id="email" v-model.trim="formData.email" class="border-2 border-gray-200 w-full px-4 py-2" placeholder="white your product title.." required>
                </div>    
            </div>
            <router-link to="/allProducts/:id"><button class="px-5 py-4 bg-primary text-white hover:text-primary hover:bg-transparent shadow transition border hover:border-primary" type="Submit">Add</button></router-link>
            <RouterLink to="/"><button class="px-5 py-4 bg-primary text-white hover:text-primary hover:bg-transparent shadow transition border hover:border-primary" type="button">Back to Home</button></RouterLink>
        </form>
    </div>
</template>

<style scoped></style>