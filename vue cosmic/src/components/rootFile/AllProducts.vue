<script setup>
import { onMounted } from 'vue';
import useProduct from '../../composible/productData'
const { productData,error, getAllStudent, DeleteProduct, addProduct } = useProduct();
onMounted(getAllStudent);
// delete data function
const DeleteData = async (id)=>{
    if(!window.confirm("Are you sure ?")){
        return;
    }
    console.log("Deleted", id)
    await DeleteProduct(id);
    await getAllStudent();
}
</script>

<template>
    <div>
        <div class="container">
            <h2 class="text-center text-lg font-Roboto text-primary">All products</h2> 
               <RouterLink to="/Add/:id"> <button class="bg-green-400 px-8 py-4 border hover:bg-transparent hover:text-primary hover:border-primary shadow text-white" type="submit">Add</button></RouterLink>
            <table class="table-auto  border border-collapse  caption-top w-full m-auto">
               <thead class="bg-primary text-white">
                     <tr class="border border-collapse">
                        <th>id</th>
                        <th>title</th>
                        <th>details</th>
                        <th>email</th>
                        <th colspan="3">action</th>
                    </tr>
               </thead>
               <tbody class="w-full text-center space-y-2">
                    <tr v-for="({id,title,details,email},i) in productData" :key="id" class="border border-collapse">
                        <td>{{++i}}</td>
                        <td>{{title }}</td>
                        <td>{{details }}</td>
                        <td>{{email }}</td>
                        <td><RouterLink :to="{name:'Show',params:{id:id}}"><button class="bg-blue-500 text-white cursor-pointer shadow rounded transition px-6 py-3 hover:bg-blue-600">show</button></RouterLink></td>
                        <td><button class="bg-blue-500 text-white shadow rounded transition px-6 py-3 hover:bg-blue-600">edit</button></td>
                        <td><button class="bg-primary text-white shadow rounded transition px-6 py-3 hover:bg-primary" @click="DeleteData(id)">delete</button></td>
                    </tr>
               </tbody>
            </table>    
        </div>
    </div>
</template>

<style scoped></style>