<script setup>
import {HomeIcon, UserIcon, HeartIcon, ShoppingBagIcon, Bars3BottomLeftIcon, ChevronRightIcon, ListBulletIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
</script>

<template>
    <div>
        <header class="sticky top-0 left-0 py-4 shadow-sm bg-white z-40">
               <!-- header is started -->
               <div class="container flex items-center justify-between">
                   <!-- logo -->
                    <a href="#"><img src="./images/logo.svg" alt="logo img"></a>
                    <!-- searchbar -->
                    <div class="flex w-full max-w-xl relative">
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
                                <router-link to="/"><li><a href="#" class="hover:text-white">Home</a></li></router-link>
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
        <!-- Header end hear -->
        <main>
             <!-- breadcrums -->
                <div class="container py-4 flex items-center gap-3">
                     <router-link to="/"><HomeIcon class="w-8 h-8 text-primary hover:text-gray-800 transition"/></router-link>
                     <span class="text-sm text-gray-400">
                        <ChevronRightIcon class="w-6 h-7 text-gray-800"/>
                     </span>
                     <p class="text-gray-800 font-bold capitalize hover:text-primary transition">Shop</p>
                </div>
                <!-- Show Wrapper -->
                <div class="container grid grid-cols-4 gap-6 pt-4 pb-3 items-start">
                    <!-- sidebar -->
                    <div class="col-span-1 bg-white shadow-md rounded px-3 pb-4 overflow-hidden">
                        <div class="divide-y text-gray-800 space-y-5">
                            <!-- categrory filter -->
                            <div>
                                <h3 class="text-xl text-gray-800 pb-3 uppercase font-medium">Cetagories</h3>
                                <div class="space-y-2">
                                    <div class="flex items-center">
                                        <input type="checkbox" class="text-primary rounded-md cursor-pointer focus:ring-0 " id="bedrom"/>
                                        <label for="bedrom" class="text-primary text-lg font-medium ml-2 cursor-pointer">Bedrom</label>
                                        <div class="text-gray-600 ml-auto text-xs">(15)</div>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="text-primary rounded-md cursor-pointer focus:ring-0 " id="Sofa_1"/>
                                        <label for="Sofa_1" class="text-primary text-lg font-medium ml-2 cursor-pointer">Sofa</label>
                                        <div class="text-gray-600 ml-auto text-xs">(05)</div>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="text-primary rounded-md cursor-pointer focus:ring-0 " id="Office_2"/>
                                        <label for="Office_2" class="text-primary text-lg font-medium ml-2 cursor-pointer">Office</label>
                                        <div class="text-gray-600 ml-auto text-xs">(09)</div>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="text-primary rounded-md cursor-pointer focus:ring-0 " id="Outdoor1"/>
                                        <label for="Outdoor1" class="text-primary text-lg font-medium ml-2 cursor-pointer">Outdoor</label>
                                        <div class="text-gray-600 ml-auto text-xs">(19)</div>
                                    </div>
                                </div>
                            </div>
                            <!-- brands hear -->
                            <div class="pt-3">
                                <h3 class="text-xl text-gray-800 pb-3 uppercase font-medium">Brands</h3>
                                <div class="space-y-3">
                                    <div class="flex items-center">
                                        <input type="checkbox" class="text-primary rounded-md cursor-pointer focus:ring-0 " id="Dominik"/>
                                        <label for="Dominik" class="text-primary text-lg font-medium ml-2 cursor-pointer">Dominik</label>
                                        <div class="text-gray-600 ml-auto text-xs">(15)</div>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="text-primary rounded-md cursor-pointer focus:ring-0 " id="Karl"/>
                                        <label for="Karl" class="text-primary text-lg font-medium ml-2 cursor-pointer">Karl</label>
                                        <div class="text-gray-600 ml-auto text-xs">(18)</div>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="text-primary rounded-md cursor-pointer focus:ring-0 " id="Maxin"/>
                                        <label for="Maxin" class="text-primary text-lg font-medium ml-2 cursor-pointer">Maxin</label>
                                        <div class="text-gray-600 ml-auto text-xs">(09)</div>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="text-primary rounded-md cursor-pointer focus:ring-0 " id="Ernest"/>
                                        <label for="Ernest" class="text-primary text-lg font-medium ml-2 cursor-pointer">Ernest</label>
                                        <div class="text-gray-600 ml-auto text-xs">(12)</div>
                                    </div>
                                </div>
                            </div>
                            <!-- pricing  -->
                            <div class="pt-3">
                                <h3 class="text-xl text-gray-800 pb-3 uppercase font-medium">Pricing</h3>
                                <div class="flex items-center mt-2 gap-2">
                                    <input type="text" class="w-full focus:border-primary focus:ring-0 rounded-md px-3 text-sm py-1 text-primary shadow-sm" placeholder="Min"/>
                                    <span class="mx-3 text-gray-800 text-medium">-</span>
                                    <input type="text" class="w-full focus:border-primary focus:ring-0 rounded-md px-3 text-sm py-1 text-primary shadow-sm" placeholder="Max"/>
                                </div>
                            </div>
                            <!-- size -->
                            <div class="pt-3">
                                    <h3 class="text-xl text-gray-800 pb-3 uppercase font-medium">Save filter</h3>
                                    <div class="flex items-center gap-2 mt-2">
                                    <!-- single size -->
                                    <div class="size-selector">
                                        <input type="radio" name="size" class="w-6 h-6 text-primary hidden" id="xs"/>
                                        <label for="xs" class="text-xl border border-primary rounded-sm shadow-sm cursor-pointer w-8 h-8 flex items-center justify-center p-3">XS</label>
                                    </div>
                                        <!-- single size -->
                                    <div class="size-selector">
                                        <input type="radio" name="size" class="w-6 h-6 text-primary hidden" id="s"/>
                                        <label for="s" class="text-xl border border-primary rounded-sm shadow-sm cursor-pointer  w-8 h-8  flex items-center justify-center p-3">S</label>
                                    </div>
                                        <!-- single size -->
                                    <div class="size-selector">
                                        <input type="radio" name="size" class="w-6 h-6 text-primary hidden" id="m"/>
                                        <label for="m" class="text-xl border border-primary rounded-sm shadow-sm cursor-pointer w-8 h-8  flex items-center justify-center p-3">M</label>
                                    </div>
                                    <div class="size-selector">
                                        <input type="radio" name="size" class="w-6 h-6 text-primary hidden" id="lg"/>
                                        <label for="lg" class="text-xl border border-primary rounded-sm shadow-sm cursor-pointer w-8 h-8  flex items-center justify-center p-3">LG</label>
                                    </div>
                                    <div class="size-selector">
                                        <input type="radio" name="size" class="w-6 h-6 text-primary hidden" id="xl"/>
                                        <label for="xl" class="text-xl border border-primary rounded-sm shadow-sm cursor-pointer w-8 h-8 flex items-center justify-center p-3">XL</label>
                                    </div>
                                    <div class="size-selector">
                                        <input type="radio" name="size" class="w-6 h-6 text-primary hidden" id="xxl"/>
                                        <label for="xxl" class="text-xl border border-primary rounded-sm shadow-sm cursor-pointer w-8 h-8 flex items-center justify-center p-3">XXL</label>
                                    </div>
                                </div>
                                <!-- color -->
                                <div class="pt-3">
                                    <h3 class="text-xl text-gray-800 pb-3 uppercase font-medium">Color</h3>
                                    <div class="flex items-center mt-3 gap-2">
                                         <div class="select-color">
                                            <input type="radio" name="red" class="hidden" id="red"/>
                                            <label for="red" class="text-xl p-1 border border-primary rounded-sm shadow-sm cursor-pointer flex items-center w-8 h-8 justify-center" style="background-color:red"></label>
                                        </div>
                                         <div class="select-color">
                                            <input type="radio" name="red" class="hidden" id="white"/>
                                            <label for="white" class="text-xl p-1 border border-primary rounded-sm shadow-sm cursor-pointer flex items-center w-8 h-8 justify-center" style="background-color:white"></label>
                                        </div>
                                        <div class="select-color">
                                            <input type="radio" name="red" class="hidden" id="black"/>
                                            <label for="black" class="text-xl p-4 border border-primary rounded-sm shadow-sm cursor-pointer flex items-center w-8 h-8 justify-center" style="background-color: black;"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- product -->
                   <div class="col-span-3">
                        <!-- sorting -->
                        <div class="flex items-center">
                            <select class="w-44 text-sm text-gray-600 px-4 py-3 border-gray-600 focus:ring-primary focus:border-primary transition rounded-sm shadow-sm">
                                <option>Default Sorting</option>
                                <option>Price low-heigh</option>
                                <option>Price heigh-log</option>
                                <option>Latest Products</option>
                            </select>
                            <div class="flex gap-2 ml-auto">
                                <div class="border border-primary w-10 h-9 flex items-center justify-center text-primary bg-white hover:text-white hover:bg-primary transition shadow-sm rounded cursor-pointer">
                                    <AdjustmentsHorizontalIcon class="w-8 h-8 text-gray-800 hover:text-white"/>                               
                                </div>
                                <div class="border border-primary w-10 h-9 flex items-center justify-center text-primary bg-white hover:text-white hover:bg-primary transition shadow-sm rounded cursor-pointer">
                                        <ListBulletIcon class="w-8 h-8 text-gray-800 hover:text-white"/>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-4 gap-6 pt-4 z-0">
                            <!-- single product page -->
                            <div class="bg-white shadow rounded overflow-hidden group">
                                <!-- product img -->
                                <div class="relative">
                                    <img src="./images/products/product12.jpg" class="w-full"/>
                                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition gap-3 opacity-0 group-hover:opacity-50">
                                        <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"><MagnifyingGlassIcon class="w-8 h-8 p-1"/></a>
                                        <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800"><HeartIcon class="w-8 h-8 p-1 text-white"/></a>
                                    </div>
                                </div>
                                <!-- product content -->
                                <div class="pt-4 pb-3 px-4">
                                    <a href="#">
                                        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary">Guyar Chair</h4>
                                    </a>
                                    <div class="flex items-baseline mb-1 space-x-2">
                                        <p class="text-xl text-primary font-semibold font-Roboto">$45.00</p>
                                        <p class="text-sm text-gray-400 line-through">$55.00</p>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="flex gap-1 text-sm text-yellow-400">
                                            <span>
                                                <StarIcon class="w-6 h-7 bg-gray-700 hover:bg-primary"/>
                                            </span>
                                        </div>
                                    </div>
                                    <a href="#" class="block  py-1 text-white bg-primary font-semibold font-Roboto hover:bg-transparent hover:text-primary shadow-lg rounded-b text-center border border-primary transition">Add To Cart</a>
                                </div>
                            </div>    

                            <div class="bg-white shadow rounded overflow-hidden group">
                                <!-- product img -->
                                <div class="relative">
                                    <img src="./images/products/product10.jpg" class="w-full"/>
                                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition gap-3 opacity-0 group-hover:opacity-50">
                                        <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"><MagnifyingGlassIcon class="w-8 h-8 p-1"/></a>
                                        <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800"><HeartIcon class="w-8 h-8 p-1 text-white"/></a>
                                    </div>
                                </div>
                                <!-- product content -->
                                <div class="pt-4 pb-3 px-4">
                                    <a href="#">
                                        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary">Guyar Chair</h4>
                                    </a>
                                    <div class="flex items-baseline mb-1 space-x-2">
                                        <p class="text-xl text-primary font-semibold font-Roboto">$45.00</p>
                                        <p class="text-sm text-gray-400 line-through">$55.00</p>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="flex gap-1 text-sm text-yellow-400">
                                            <span>
                                                <StarIcon class="w-6 h-7 bg-gray-700 hover:bg-primary"/>
                                            </span>
                                        </div>
                                    </div>
                                    <a href="#" class="block  py-1 text-white bg-primary font-semibold font-Roboto hover:bg-transparent hover:text-primary shadow-lg rounded-b text-center border border-primary transition">Add To Cart</a>
                                </div>
                            </div>  
                            <div class="bg-white shadow rounded overflow-hidden group">
                                <!-- product img -->
                                <div class="relative">
                                    <img src="./images/products/product5.jpg" class="w-full"/>
                                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition gap-3 opacity-0 group-hover:opacity-50">
                                        <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"><MagnifyingGlassIcon class="w-8 h-8 p-1"/></a>
                                        <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800"><HeartIcon class="w-8 h-8 p-1 text-white"/></a>
                                    </div>
                                </div>
                                <!-- product content -->
                                <div class="pt-4 pb-3 px-4">
                                    <a href="#">
                                        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary">Guyar Chair</h4>
                                    </a>
                                    <div class="flex items-baseline mb-1 space-x-2">
                                        <p class="text-xl text-primary font-semibold font-Roboto">$45.00</p>
                                        <p class="text-sm text-gray-400 line-through">$55.00</p>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="flex gap-1 text-sm text-yellow-400">
                                            <span>
                                                <StarIcon class="w-6 h-7 bg-gray-700 hover:bg-primary"/>
                                            </span>
                                        </div>
                                    </div>
                                    <a href="#" class="block  py-1 text-white bg-primary font-semibold font-Roboto hover:bg-transparent hover:text-primary shadow-lg rounded-b text-center border border-primary transition">Add To Cart</a>
                                </div>
                            </div>  

                            <div class="bg-white shadow rounded overflow-hidden group">
                                <!-- product img -->
                                <div class="relative">
                                    <img src="./images/products/product1.jpg" class="w-full"/>
                                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition gap-3 opacity-0 group-hover:opacity-50">
                                        <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"><MagnifyingGlassIcon class="w-8 h-8 p-1"/></a>
                                        <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800"><HeartIcon class="w-8 h-8 p-1 text-white"/></a>
                                    </div>
                                </div>
                                <!-- product content -->
                                <div class="pt-4 pb-3 px-4">
                                    <a href="#">
                                        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary">Guyar Chair</h4>
                                    </a>
                                    <div class="flex items-baseline mb-1 space-x-2">
                                        <p class="text-xl text-primary font-semibold font-Roboto">$45.00</p>
                                        <p class="text-sm text-gray-400 line-through">$55.00</p>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="flex gap-1 text-sm text-yellow-400">
                                            <span>
                                                <StarIcon class="w-6 h-7 bg-gray-700 hover:bg-primary"/>
                                            </span>
                                        </div>
                                    </div>
                                    <a href="#" class="block  py-1 text-white bg-primary font-semibold font-Roboto hover:bg-transparent hover:text-primary shadow-lg rounded-b text-center border border-primary transition">Add To Cart</a>
                                </div>
                            </div>
                        </div>
                         <div class="grid grid-cols-4 gap-6 pt-6 z-0">
                                <!-- single product page -->
                                    <div class="bg-white shadow rounded overflow-hidden group">
                                        <!-- product img -->
                                        <div class="relative">
                                            <img src="./images/products/product9.jpg" class="w-full"/>
                                            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition gap-3 opacity-0 group-hover:opacity-50">
                                                <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"><MagnifyingGlassIcon class="w-8 h-8 p-1"/></a>
                                                <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800"><HeartIcon class="w-8 h-8 p-1 text-white"/></a>
                                            </div>
                                        </div>
                                        <!-- product content -->
                                        <div class="pt-4 pb-3 px-4">
                                            <a href="#">
                                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary">Guyar Chair</h4>
                                            </a>
                                            <div class="flex items-baseline mb-1 space-x-2">
                                                <p class="text-xl text-primary font-semibold font-Roboto">$45.00</p>
                                                <p class="text-sm text-gray-400 line-through">$55.00</p>
                                            </div>
                                            <div class="flex items-center">
                                                <div class="flex gap-1 text-sm text-yellow-400">
                                                    <span>
                                                        <StarIcon class="w-6 h-7 bg-gray-700 hover:bg-primary"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <a href="#" class="block  py-1 text-white bg-primary font-semibold font-Roboto hover:bg-transparent hover:text-primary shadow-lg rounded-b text-center border border-primary transition">Add To Cart</a>
                                        </div>
                                    </div>   

                                <div class="bg-white shadow rounded overflow-hidden group">
                                    <!-- product img -->
                                    <div class="relative">
                                        <img src="./images/products/product7.jpg" class="w-full"/>
                                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition gap-3 opacity-0 group-hover:opacity-50">
                                            <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"><MagnifyingGlassIcon class="w-8 h-8 p-1"/></a>
                                            <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800"><HeartIcon class="w-8 h-8 p-1 text-white"/></a>
                                        </div>
                                    </div>
                                    <!-- product content -->
                                    <div class="pt-4 pb-3 px-4">
                                        <a href="#">
                                            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary">Guyar Chair</h4>
                                        </a>
                                        <div class="flex items-baseline mb-1 space-x-2">
                                            <p class="text-xl text-primary font-semibold font-Roboto">$45.00</p>
                                            <p class="text-sm text-gray-400 line-through">$55.00</p>
                                        </div>
                                        <div class="flex items-center">
                                            <div class="flex gap-1 text-sm text-yellow-400">
                                                <span>
                                                    <StarIcon class="w-6 h-7 bg-gray-700 hover:bg-primary"/>
                                                </span>
                                            </div>
                                        </div>
                                        <a href="#" class="block  py-1 text-white bg-primary font-semibold font-Roboto hover:bg-transparent hover:text-primary shadow-lg rounded-b text-center border border-primary transition">Add To Cart</a>
                                    </div>
                                </div>  
                                <div class="bg-white shadow rounded overflow-hidden group">
                                    <!-- product img -->
                                    <div class="relative">
                                        <img src="./images/products/product10.jpg" class="w-full"/>
                                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition gap-3 opacity-0 group-hover:opacity-50">
                                            <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"><MagnifyingGlassIcon class="w-8 h-8 p-1"/></a>
                                            <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800"><HeartIcon class="w-8 h-8 p-1 text-white"/></a>
                                        </div>
                                    </div>
                                    <!-- product content -->
                                    <div class="pt-4 pb-3 px-4">
                                        <a href="#">
                                            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary">Guyar Chair</h4>
                                        </a>
                                        <div class="flex items-baseline mb-1 space-x-2">
                                            <p class="text-xl text-primary font-semibold font-Roboto">$45.00</p>
                                            <p class="text-sm text-gray-400 line-through">$55.00</p>
                                        </div>
                                        <div class="flex items-center">
                                            <div class="flex gap-1 text-sm text-yellow-400">
                                                <span>
                                                    <StarIcon class="w-6 h-7 bg-gray-700 hover:bg-primary"/>
                                                </span>
                                            </div>
                                        </div>
                                        <a href="#" class="block  py-1 text-white bg-primary font-semibold font-Roboto hover:bg-transparent hover:text-primary shadow-lg rounded-b text-center border border-primary transition">Add To Cart</a>
                                    </div>
                                </div>  

                                <div class="bg-white shadow rounded overflow-hidden group">
                                    <!-- product img -->
                                    <div class="relative">
                                        <img src="./images/products/product12.jpg" class="w-full"/>
                                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition gap-3 opacity-0 group-hover:opacity-50">
                                            <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"><MagnifyingGlassIcon class="w-8 h-8 p-1"/></a>
                                            <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800"><HeartIcon class="w-8 h-8 p-1 text-white"/></a>
                                        </div>
                                    </div>
                                    <!-- product content -->
                                    <div class="pt-4 pb-3 px-4">
                                        <a href="#">
                                            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary">Guyar Chair</h4>
                                        </a>
                                        <div class="flex items-baseline mb-1 space-x-2">
                                            <p class="text-xl text-primary font-semibold font-Roboto">$45.00</p>
                                            <p class="text-sm text-gray-400 line-through">$55.00</p>
                                        </div>
                                        <div class="flex items-center">
                                            <div class="flex gap-1 text-sm text-yellow-400">
                                                <span>
                                                    <StarIcon class="w-6 h-7 bg-gray-700 hover:bg-primary"/>
                                                </span>
                                            </div>
                                        </div>
                                        <a href="#" class="block  py-1 text-white bg-primary font-semibold font-Roboto hover:bg-transparent hover:text-primary shadow-lg rounded-b text-center border border-primary transition">Add To Cart</a>
                                    </div>
                                </div>
                        </div>
                   </div> 
                </div>   
                 <!-- footer section -->
            <footer class="bg-white pt-20 pb-12 border-t border-gray-200">
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
        </main>
    </div>
</template>

<style scoped></style>