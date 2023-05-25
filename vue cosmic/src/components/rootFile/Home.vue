<script setup>
    import { UserIcon , HeartIcon , ShoppingBagIcon, MagnifyingGlassIcon, Bars3BottomLeftIcon } from "@heroicons/vue/24/solid";
</script>

<template>
    <div>
        <header class="sticky top-0 left-0 py-4 shadow-sm bg-white z-40 ">
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
                     <UserIcon class="text-black-400 h-8 w-8 p-1 rounded-2xl cursor-pointer bg-red-400 hover:bg-green-400 hover:text-white transition outline-none "/>
                    <a href="#" class="relative"> 
                        <HeartIcon class="text-black-400 h-8 w-8 p-1 rounded-2xl cursor-pointer bg-red-400 hover:bg-green-400 hover:text-white transition outline-none "/>
                        <span class="absolute -right-2 -top-5 w-5 h-5 bg-red-400 hover:bg-green-400 hover:text-white rounded-full flex items-center justify-center text-2xs">0</span>
                    </a>
                    <a href="#" class="relative">
                        <ShoppingBagIcon class="text-black-400 h-8 w-8 p-1 rounded-2xl cursor-pointer bg-red-400 hover:bg-green-400 hover:text-white  transition outline-none "/>
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
                        <div class="absolute w-full left-0 top-full bg-white shadow-sm shadow-gray-400 py-3 opacity-0 group-hover:opacity-100 transition duration-300">
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
                    <div class="flex items-center justify-between flex-grow pl-20 sm:">
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
                     <Bars3BottomLeftIcon class="w-8 h-8 text-white cursor-pointer lg:hidden sm:block sm:w-7 sm:h-7 sm:ml-auto sm:my-auto "></Bars3BottomLeftIcon>
                </div>
           </div>
        </header>
        <main>
             <!-- banner hear -->
            <div class="bg-cover bg-no-repeat bg-center py-36 bannerImg sm:grid sm:grid-cols-1 sm:w-full sm:px-3 sm:bg-cover">
               <div class="container py-5">
                     <h2 class="text-5xl text-gray-800 leading-32 capitalize tracking-wide font-Poppins pb-12">Italian Ecommerce Shop Market</h2>
                     <p class="text-xs text-black-200 leading-4 tracking-wider font-Roboto ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere velit ipsa debitis   <br />rem voluptatum quibusdam repellat asperiores quam iste. Unde ipsum consequuntur rem aut possimus!Quo,</p>
                     <p class="text-xs text-black-200 leading-4 tracking-wide font-roboto pb-6"> <br /> sit quasi. Cupiditate vero neque minus earum, est minima ducimus sunt molestiae  <br/>iure facere deleniti fugit similique veritatis assumenda vitae? Molestias, amet fugiat!</p>
                     <button class="px-20 py-4 text-black bg-transparent  shadow-2xl shadow-gray-900 hover:text-black hover:shadow-xl hover:bg-primary capitalize cursor-pointer transition outline-none rounded-lg sm:justify-center">Show Now</button>
               </div>
            </div>
            <div class="container pt-6 z-0">
                <!-- all products -->
                <div class="grid grid-cols-4 gap-6 pt-4 z-0 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:px-4">
                                    <!-- single product page -->
                                    <div class="bg-white shadow rounded overflow-hidden group">
                                        <!-- product img -->
                                        <div class="relative hover:transform hover:-translate-y-full">
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
                <div class="grid grid-cols-4 gap-6 pt-6 z-0 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 overflow-x-hidden sm:px-4">
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
        </main>
    </div>
    
</template>

<style scoped>
    .bannerImg {
        background-image: url('./images/banner-bg.jpg');

    }
</style>