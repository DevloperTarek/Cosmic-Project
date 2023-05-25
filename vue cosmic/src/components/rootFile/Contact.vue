<script setup>
     import { UserIcon, HeartIcon, ShoppingBagIcon, Bars3BottomLeftIcon, MagnifyingGlassIcon, FaceSmileIcon, HandThumbUpIcon, TrophyIcon, StarIcon, PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";
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
        <!-- contact section -->
        <div class="total-content">
            <div class="container mt-16">
                <h2 class="text-primary text-3xl capitalize tracking-2 text-center">Contact Us</h2>
                <p class="text-center text-sm font-medium tracking-wide leading-5 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Asperiores a nemo autem aperiam laudantium praesentium cumque dolores iste error iure!</p>
                <div class="grid grid-cols-2 gap-8 mt-12 px-6">
                   <div class="block space-y-12">
                         <!-- .all icons and descripition -->
                        <div class="flex items-center gap-3">
                             <PhoneIcon class="w-12 h-12 bg-white rounded-full shadow-sm shadow-primary flex items-center justify-center p-3 text-gray-400 hover:bg-gray-500"/>
                             <div>
                                <h4 class="text-primary text-md">Phone</h4>
                                <p class="text-white text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, voluptate?</p>
                             </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <MapPinIcon class="w-12 h-12 bg--white rounded-full shadow-sm shadow-primary flex items-center justify-center p-3 text-gray-400 hover:bg-gray-500"/>
                            <div>
                            <h4 class="text-primary text-md">Address</h4>
                            <p class="text-white text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, voluptate?</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <EnvelopeIcon class="w-12 h-12 bg-white rounded-full shadow-sm shadow-primary flex items-center text-gray-400 justify-center p-3 hover:bg-gray-500"/>
                            <div>
                            <h4 class="text-primary text-md">Email</h4>
                            <p class="text-white text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, voluptate?</p>
                            </div>
                        </div>
                   </div>
                   <div class="max-w-xl bg-white shadow-sm px-6 py-8">
                        <h2 class="text-xl text-primary tracking-wide capitalize">Send Message</h2>
                        <form method="Submit" class="mt-3">
                           <div>
                                <label for="Name">Full Name <span class="text-primary text-sm">*</span></label>
                                <input type="text" class="w-full border-0 border-b border-gray-200 hover:border-gray-300 focus:ring-0 focus:outline-none px-2 pb-0"/>
                           </div>
                          <div>
                                <label for="Name">Email<span class="text-primary text-sm">*</span></label>
                                <input type="Email" class="w-full border-0 border-b border-gray-200 hover:border-gray-300 focus:ring-0 focus:outline-none px-2 pb-0"/>
                          </div>
                          <div>
                            <label for="Name">Type your Message<span class="text-primary text-sm">*</span></label>
                            <input type="textarea" class="w-full border-0 border-b border-gray-200 hover:border-gray-300 focus:ring-0 focus:outline-none px-2 pb-0"/>
                          </div>
                          <button type="submit" class="px-12 py-4 rounded shadow shadow-primary text-white bg-primary mt-6">Send</button>
                        </form>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .total-content{
        background-image: url('./images/category/category-1.jpg');
        background-size: cover;
        padding: 20px 0;
    }
</style>