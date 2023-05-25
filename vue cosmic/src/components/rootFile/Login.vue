<script setup>
    import { HomeIcon, UserIcon, HeartIcon, ShoppingBagIcon, Bars3BottomLeftIcon, ChevronRightIcon, ListBulletIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
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
        <!-- login form -->
        <div class="container py-16">
            <div class=" max-w-lg mx-auto px-4 py-4 rounded shadow shadow-primary overflow-hidden">
                <h2 class="text-2xl text-gray-400 font-medium uppercase mb-1">Login</h2>
                <p class="text-gray-400 text-sm mb-4">Login If You are a returing Customar</p>
                <form action="">
                    <div>
                        <label for="Email" class="text-gray-600 mb-2 block">Email Address:</label>
                        <input type="email" class="block w-full border border-gray-200 px-4 py-3 shadow text-primary text-sm rounded focus:ring-0 focus:border-primary transition" placeholder="Enter Your Valid Email..."/>
                    </div>
                    <div>
                        <label for="password" class="text-gray-600 mb-2 block">Password:</label>
                        <input type="password" class="block w-full border border-gray-200 px-4 py-3 shadow text-primary text-sm rounded focus:ring-0 focus:border-primary transition" placeholder="Enter Your Valid Password..."/>
                    </div>
                    <div class="flex items-center justify-between pt-3">
                        <div class="flex items-center space-x-2">
                            <input type="checkbox" id="argument" class="text-primary w-4 h-4 rounded focus:ring-0 focus:border-primary cursor-pointer"/>
                            <label for="argument" class="text-gray-600 font-medium capitalize">Recomended Me</label>
                        </div>
                        <a href="#" class="text-primary text-lg font-medium hover:underline transition">Reset Password</a>
                    </div>
                    <div class="mt-4">
                        <router-link to="/"><button type="submit" class="block w-full py-4 rounded shadow text-white font-medium text-md bg-primary hover:ring-0 hover:border-primary hover:bg-transparent hover:text-primary transition">Log in</button></router-link>
                    </div>
                    <div class="mt-2">
                        <button type="submit" class="bg-gradient-to-r from-green-400 to-blue-500 px-5 py-4 w-full text-lg font-Roboto rounded shadow-lg">save</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped></style>