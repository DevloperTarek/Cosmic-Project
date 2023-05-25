<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useProduct from '../../composible/productData'
const { productData, error, getSingleProduct } = useProduct();
const route = useRoute();
onMounted(()=>{
    getSingleProduct(route.params.id);
});
</script>

<template>
    <div class="container pt-6 pb-5">
           <div>
            <table class="w-full table-auto text-center border border-collapse">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>details</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ productData.id }}</td>
                        <td>{{ productData.title }}</td>
                        <td>{{ productData.details }}</td>
                        <td>{{ productData.Email }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="mx-auto mt-16">
                <RouterLink to="/"><button class="px-16 py-4 bg-primary hover:text-primary text-white font-medium rounded shadow-md  hover:border-primary hover:bg-transparent border transition">Back to Home</button></RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped></style>