<script setup>
     import { UserIcon, HeartIcon, ShoppingBagIcon, Bars3BottomLeftIcon, MagnifyingGlassIcon, FaceSmileIcon, HandThumbUpIcon, TrophyIcon, StarIcon } from "@heroicons/vue/24/solid";
</script>

<template>
    <div>
        <header class="sticky top-0 left-0 py-4 shadow-sm bg-white z-40">
               <!-- header is started -->
               <div class="container flex items-center justify-between">
                   <!-- logo -->
                    <a href="#"><img src="./images/logo.svg" alt="logo img"></a>
                    <!-- searchbar -->
                    <div class=" flex w-full max-w-xl relative">
                        <span class="absolute ml-4 top-3 text-lg text-gray-400">
                            <MagnifyingGlassIcon class="text-gray-400 h-8 w-8"/>
                        </span>
                    
                        <input type="search" name="search" placeholder="search your products......." class="w-full border border-r-0 border-primary py-3 pr-4 rounded-l-md pl-14 focus:outline-none "/>
                        <button class="bg-primary border border-green-400 text-white px-8 rounded-r-md border-l-0 py-3 hover:bg-green-400 hover:text-white transition">Search</button>
                    </div>

                    <div class="flex items-center gap-x-5"> 
                         <UserIcon class="text-black-400 h-8 w-8 p-1 rounded-2xl cursor-pointer bg-red-400 hover:bg-green-400 hover:text-white transition outline-none"/>
                        <a href="#" class="relative"> 
                            <HeartIcon class="text-black-400 h-8 w-8 p-1 rounded-2xl cursor-pointer bg-red-400 hover:bg-green-400 hover:text-white transition outline-none"/>
                            <span class="absolute -right-2 -top-5 w-5 h-5 bg-red-400 hover:bg-green-400 hover:text-white rounded-full flex items-center justify-center text-2xs">0</span>
                        </a>
                        <a href="#" class="relative">
                            <ShoppingBagIcon class="text-black-400 h-8 w-8 p-1 rounded-2xl cursor-pointer bg-red-400 hover:bg-green-400 hover:text-white  transition outline-none"/>
                            <span class="absolute -right-2 -top-5 w-5 h-5 bg-red-400 hover:bg-green-400 hover:text-white rounded-full flex items-center justify-center text-2xs">0</span>
                        </a>
                    
                    
                    </div>
               </div>
               <!-- navbar -->
               <div class="bg-gray-900 mt-3 shadow-md shadow-blue-300">
                    <div class="container flex">
                        <div class="px-8 py-4 bg-primary flex itmes-center cursor-pointer relative group">
                            <Bars3BottomLeftIcon class="w-5 h-6 text-white"/>
                            <span class="text-1xs text-white">All Ceragrory!</span>
                            <div class="absolute w-full left-0 top-full bg-white shadow-sm shadow-gray-400 py-3 opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                                <a href="#" class="flex items-center justify-center gap-x-3  py-2 border-b hover:bg-gray-400 transition ">
                                    <img src="./images/category/category-1.jpg" class="w-6 h-5 object-contain" alt="category img"/>
                                    <span class="1xs text-primary">Total Home</span>
                                </a>
                                <a href="#" class="flex items-center  justify-center gap-x-3 py-2 border-b hover:bg-gray-400 transition">
                                    <img src="./images/category/category-2.jpg" class="w-6 h-5 object-contain" alt="category img"/>
                                    <span class="1xs text-primary">Total Home</span>
                                </a>
                                <a href="#" class="flex items-start  justify-center gap-x-2 py-2 border-b hover:bg-gray-400 transition">
                                    <img src="./images/category/category-3.jpg" class="w-6 h-5 object-contain" alt="category img"/>
                                    <span class="1xs text-primary">Total Sofa</span>
                                </a>
                                <a href="#" class="flex items-start justify-center gap-x-2  py-2 border-b hover:bg-gray-400 transition">
                                    <img src="./images/category/category-4.jpg" class="w-6 h-5 object-contain" alt="category img"/>
                                    <span class="1xs text-primary">Total Balcuni</span>
                                </a>

                            </div>
                        </div>
                        <div class="flex items-center justify-between flex-grow pl-20">
                            <div class="flex list-none gap-x-12 text-[16px] font-medium text-primary">
                                <router-link to="/"><li><a href="#index.html" class="hover:text-white">Home</a></li></router-link>
                                <router-link to="/Shop/:id"><li><a href="#" class="hover:text-white">Shop</a></li></router-link>
                                <router-link to="/About/:id"> <li><a href="#" class="hover:text-white">About</a></li></router-link>
                                <router-link to="/Contact/:id"><li><a href="#" class="hover:text-white">Contact</a></li></router-link>
                                <!-- <router-link to="/Contact/:id"><li><a href="#" class="hover:text-white">Magazine</a></li></router-link> -->
                            
                            </div>
                            <div class="flex list-none gap-x-12 ml-64 text-[16px] font-medium text-primary">
                                <router-link to="/Login/:id"><li><a href="#" class="hover:text-white">Login</a></li></router-link>
                                <router-link to="/Registar/:id"><li><a href="#" class="hover:text-white">Registar</a></li></router-link>
                            </div>
                        </div>
                    
                    </div>
               </div>
        </header>
         <!-- add section  -->
        <div class="container pt-5 pb-5">
            <img src="./images/offer.jpg" alt="Offer img" class="w-full">
        </div>
        <!-- about section -->
        <div class="container pt-6 pb-12">
            <h3 class="text-2xl text-gray-800 font-medium tracking-2 font-Roboto underline underline-offset-1 uppercase text-center">About Us</h3>
            <div class="grid grid-cols-2 gap-8">
                <img src="./images/category/category-5.jpg" alt="" class="w-full pt-12"/>
                <div class="pt-20">
                    <h3 class="text-primary text-2xl font-medium tracking-1 underline-offset-0">Personal Information</h3>
                    <p class="text-gray-500 text-sm font-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias id, inventore dolore odit sunt, nesciunt quam, voluptas aliquam earum ratione deleniti ea. Sit eius veritatis distinctio voluptates quasi sunt et, voluptatibus nihil neque ratione dolore impedit officiis ducimus consequatur officia provident harum. Rerum vero error nulla odit itaque corporis nesciunt!</p>
                    <p class="text-gray-600 text-sm font-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptas libero vitae tempora magnam obcaecati, illum iusto fuga nisi ab quasi in perspiciatis dolorum possimus commodi doloribus culpa delectus quo!</p>
                    <button class="px-16 py-4 rounded bg-primary hover:bg-transparent border hover:border-primary mt-8 text-white hover:text-primary transition shadow-lgx">Read More</button>
                </div>
            </div>
        </div>
        
          <footer class="bg-white pt-16 pb-12 border-t border-gray-200">
                <div class="container grid grid-cols-3">
                    <!-- footer text -->
                    <div class="col-span-1 space-y-8">
                        <img src="./images/logo.svg" alt="logo img" class=  "w-30"/>
                        <p class="text-gray-400 font-Roboto text-medium tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quidem.</p>
                        <!-- link icons -->
                        <div class="flex space-x-6">
                            <a href="#" class="text-gray-300 hover:text-gray-500">
                               <FaceSmileIcon class="w-8 h-8 text-gray-400 hover:text-gray-500 transition"/>
                            </a>
                             <a href="#" class="text-gray-300 hover:text-gray-500">
                                <HandThumbUpIcon class="w-8 h-8 text-gray-400 hover:text-gray-500 transition"/>
                            </a>
                             <a href="#" class="text-gray-300 hover:text-gray-500">
                                <TrophyIcon class="w-8 h-8 text-gray-400 hover:text-gray-500 transition"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-span-2 grid grid-cols-2 gap-8">
                        <div class="grid grid-cols-2 gap-8">
                           <div>
                                 <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solution</h3>
                                <div class="mt-4 space-y-4">
                                    <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                                     <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                                     <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                                     <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                             
                                </div>
                           </div>
                           <div>
                                     <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solution</h3>
                                    <div class="mt-4 space-y-4">
                                        <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                                         <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                                         <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                                         <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                             
                                    </div>
                               </div>
                        </div>
                   
                        <div class="grid grid-cols-2 gap-8">                        
                           <div>
                                 <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solution</h3>
                                <div class="mt-4 space-y-4">
                                    <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                                    <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                                    <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                                    <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                                </div>
                           </div>
                        
                             <div>
                                     <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solution</h3>
                                    <div class="mt-4 space-y-4">
                                        <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                                        <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                                        <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                                        <a href="#" class="text-sm text-gray-400 uppercase tracking-wider hover:text-primary transition font-Roboto block">Marketting</a>
                                    </div>
                               </div>
                        
                        </div>
                    </div>
                </div>
            </footer>
    </div>
</template>

<style scoped></style>