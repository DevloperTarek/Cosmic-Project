<script setup>
    import { UserIcon, HeartIcon, ShoppingBagIcon, Bars3BottomLeftIcon, MagnifyingGlassIcon, FaceSmileIcon, HandThumbUpIcon, TrophyIcon, ChevronLeftIcon, StarIcon } from "@heroicons/vue/24/solid";
   
</script>

<template>
            <header class="sticky top-0 left-0 py-4 shadow-sm bg-white z-40">
                       <!-- header is started -->
                       <div class="container flex items-center justify-between">
                           <!-- logo -->
                            <a href="#"><img src="./images/logo.svg" alt="logo img"></a>
                            <!-- searchbar -->
                            <div class=" flex w-full max-w-xl relative">
                                <span class="absolute ml-4 top-3 text-lg text-gray-400">
                                    <!-- <MagnifyingGlassIcon class="text-gray-400 h-8 w-8"/> -->
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
            <!-- back to home rights -->
            <div class="container py-4 flex items-center gap-3">
                <router-link to="/"><HomeIcon class="w-8 h-8 text-primary hover:text-gray-800 transition"/></router-link>
                <span class="text-sm text-gray-400">
                <router-link to="/Shop/:id">
                    <ChevronLeftIcon class="w-6 h-7 text-gray-800"/>
                </router-link>
                </span>
                <router-link to="/Shop/:id">
                    <p class="text-gray-800 font-bold capitalize hover:text-primary transition">All Products</p>
                </router-link>
            </div>
            <!-- add section  -->
            <div class="container pb-6">
                <img src="./images/offer.jpg" alt="Offer img" class="w-full">
            </div>
            <!-- product view page -->
            
            <div class="container pt-16 pb-12 grid grid-cols-2 gap-8">
                <!-- product image -->
                <div> 
                    <img src="./images/products/product9.jpg" class="w-full shadow-md" id="ParentImg"/>
                    <!-- small img -->
                    <div class="grid grid-cols-5 gap-4 mt-4" id="AllImage">
                        <img src="./images/products/product9.jpg" class="w-full hover:ring-1 ring-primary cursor-pointer"/>
                        <img src="./images/products/product1.jpg" class="w-full hover:ring-1 ring-primary cursor-pointer"/>
                        <img src="./images/products/product2.jpg" class="w-full hover:ring-1 ring-primary cursor-pointer"/>
                        <img src="./images/products/product3.jpg" class="w-full hover:ring-1 ring-primary cursor-pointer"/>
                        <img src="./images/products/product4.jpg" class="w-full hover:ring-1 ring-primary cursor-pointer"/>
                    </div>
                </div>
                <!-- products content  -->
                <div>
                    <h3 class="text-3xl text-primary font-Roboto font-medium hover:text-black uppercase mb-3">Italiyan Sofa.</h3>
                    <div class="flex space-x-5">
                        <div class="flex items-center space-x-1">
                            <StarIcon class="w-4 h-4 text-orange-500 hover:text-primary transition"/>
                            <StarIcon class="w-4 h-4 text-orange-500 hover:text-primary transition"/>
                            <StarIcon class="w-4 h-4 text-orange-500 hover:text-primary transition"/>
                            <StarIcon class="w-4 h-4 text-orange-500 hover:text-primary transition"/>
                            <StarIcon class="w-4 h-4 text-orange-500 hover:text-primary transition"/>
                        </div>
                        <p class="text-gray-400 hover:text-primary font-xs">(150 Review)</p>
                    </div>
                    <p class="flex gap-2 pt-2 items-center">
                        <span class="text-gray-800 font-medium">Avalability:</span>
                        <span class="text-red-300 text-sm">
                            Out of Stock.
                        </span>
                    </p>
                     <p class="flex gap-2 pt-2 items-center">
                            <span class="text-gray-800 font-medium">Brand:</span>
                            <span class="text-red-300 text-sm">
                               Apex.
                            </span>
                        </p>
                         <p class="flex gap-2 pt-2 items-center">
                            <span class="text-gray-800 font-medium">Cetagrory:</span>
                            <span class="text-red-500 text-sm">
                              Sofa
                            </span>
                        </p>
                        <p class="flex gap-2 pt-2 items-center">
                                <span class="text-gray-800 font-medium">SKU:</span>
                                <span class="text-red-500 text-sm">
                                  BE45VGRT.
                                </span>
                            </p>
                    <p class="flex gap-2 pt-2 items-center mt-4">
                        <span class="text-gray-800 font-medium font-Roboto">$450.00</span>
                        <span class="text-gray-500 text-sm line-through">
                            $500.00
                        </span>
                    </p>
                    <p class="text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, magnam!</p>
                        <div class="pt-3">
                            <h3 class="text-lg text-gray-800 pb-3 uppercase font-medium">Save filter</h3>
                            <div class="flex items-center gap-2 mt-2">
                            <!-- single size -->
                            <div class="size-selector">
                                <input type="radio" name="size" class="w-3 h-3 text-primary hidden" id="xs"/>
                                <label for="xs" class="text-xl border border-primary rounded-sm shadow-sm cursor-pointer w-3 h-3 flex items-center justify-center p-3">XS</label>
                            </div>
                                <!-- single size -->
                            <div class="size-selector">
                                <input type="radio" name="size" class="w-4 h-4 text-primary hidden" id="s"/>
                                <label for="s" class="text-xl border border-primary rounded-sm shadow-sm cursor-pointer  w-3 h-3 flex items-center justify-center p-3">S</label>
                            </div>
                                <!-- single size -->
                            <div class="size-selector">
                                <input type="radio" name="size" class="w-4 h-4 text-primary hidden" id="m"/>
                                <label for="m" class="text-xl border border-primary rounded-sm shadow-sm cursor-pointer  w-3 h-3 flex items-center justify-center p-3">M</label>
                            </div>
                            <div class="size-selector">
                                <input type="radio" name="size" class="w-4 h-4 text-primary hidden" id="lg"/>
                                <label for="lg" class="text-lg border border-primary rounded-sm shadow-sm cursor-pointer  w-3 h-3 flex items-center justify-center p-3">LG</label>
                            </div>
                            <div class="size-selector">
                                <input type="radio" name="size" class="w-4 h-4 text-primary hidden" id="xl"/>
                                <label for="xl" class="text-lg border border-primary rounded-sm shadow-sm cursor-pointer  w-3 h-3 flex items-center justify-center p-3">XL</label>
                            </div>
                        </div>
                        <!-- color -->
                        <div class="pt-3">
                            <h3 class="text-md text-gray-800 pb-3 uppercase font-medium">Color</h3>
                            <div class="flex items-center mt-3 gap-2">
                                    <div class="select-color">
                                    <input type="radio" name="red" class="hidden" id="red"/>
                                    <label for="red" class="text-xl p-1 border border-primary rounded-sm shadow-sm cursor-pointer flex items-center w-6 h-6 justify-center" style="background-color:red"></label>
                                </div>
                                    <div class="select-color">
                                    <input type="radio" name="red" class="hidden" id="white"/>
                                    <label for="white" class="text-xl p-1 border border-primary rounded-sm shadow-sm cursor-pointer flex items-center  w-6 h-6 justify-center" style="background-color:white"></label>
                                </div>
                                <div class="select-color">
                                    <input type="radio" name="red" class="hidden" id="black"/>
                                    <label for="black" class="text-xl p-1 border border-primary rounded-sm shadow-sm cursor-pointer flex items-center w-6 h-6 justify-center" style="background-color: black;"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- quantity plate  -->
                    <div class="mt-4">
                        <h3 class="text-sm text-gray-800 uppercase mb-1">Size</h3>
                        <div class="flex border border-gray-400 divide-x divide-gray-200 w-max">
                            <div class="h-8 w-8 text-gray-500 flex items-center justify-center cursor-pointer select-none">-</div>
                            <div class="h-8 w-8 text-base text-gray-500 flex items-center justify-center">2</div>
                            <div class="h-8 w-8 text-gray-500 flex items-center justify-center cursor-pointer select-none">+</div>
                        </div>
                    </div>
                    <!-- cart item -->
                    <div class="flex gap-4 border-b border-gray-200 pb-4 mt-5">
                        <a href="#" class="bg-primary text-white hover:text-primary hover:bg-transparent px-6 py-2 border border-primary rounded transition flex gap-2 justify-start"><ShoppingBagIcon class="w-6 h-6 text-gray-600"/>Add To Cart</a>
                         <a href="#" class="bg-transparent text-gray-800 hover:text-white hover:bg-primary px-6 py-2 border border-primary rounded transition flex gap-2 justify-start"><HeartIcon class="w-6 h-6 text-gray-600"/>WishList</a>
                    </div>
                    <!-- footer products -->
                    <div class="flex space-x-6 mt-4">
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
            </div>
            <!-- product view details -->
            <div class="container pb-16">
                <h2 class="border-b border-gray-200 font-Roboto text-gray-800 pb-3 font-medium">Product Details</h2>
                <div class="w-3/5 pt-6">
                    <div class="text-gray-600 space-y-5">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti tenetur quasi voluptatibus aliquid laudantium architecto, corrupti consequatur ducimus? Qui, mollitia.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam facere alias obcaecati corrupti nemo ipsa repellat quia, unde perspiciatis officia suscipit autem ab libero.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint placeat officia, eveniet voluptatibus laboriosam, optio voluptatum qui ea facilis doloribus illo.</p>
                    </div>
                    <!-- table -->
                    <table class="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                        <tr>
                            <th class="py-2 px-5 border border-gray-2">Color</th>
                            <th class="py-2 px-5 border border-gray-2">Black,Brown,Red</th>
                        </tr>
                        <tr>
                            <th class="py-2 px-5 border border-gray-2">Meterial</th>
                            <th class="py-2 px-5 border border-gray-2">Artifical Leader</th>
                        </tr>
                        <tr>
                            <th class="py-2 px-5 border border-gray-2">Weight</th>
                            <th class="py-2 px-5 border border-gray-2">55KG</th>
                        </tr>
                    </table>
                </div>
                <!-- product wrapper -->
                <div class="container py-16 z-0">
                    <h2 class="text-gray-800 text-3xl font-medium mb-6 font-Roboto">Top New Arrival</h2>
                    <div class="grid grid-cols-4 gap-6">
                        <!-- single product page -->
                        <router-link to="/ProductPage/:id">  <div class="bg-white shadow rounded overflow-hidden group">
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
                                        <span class="flex gap-1 pb-3">
                                            <StarIcon class="w-4 h-4 hover:text-primary"/>
                                            <StarIcon class="w-4 h-4 hover:text-primary"/>
                                            <StarIcon class="w-4 h-4 hover:text-primary"/>
                                            <StarIcon class="w-4 h-4 hover:text-primary"/>
                                            <StarIcon class="w-4 h-4 hover:text-primary"/>
                                        </span>
                                    </div>
                                </div>
                                <a href="#" class="block  py-1 text-white bg-primary font-semibold font-Roboto hover:bg-transparent hover:text-primary shadow-lg rounded-b text-center border border-primary transition">Add To Cart</a>
                            </div>
                        </div>  
                        </router-link>

                        <router-link to="/ProductPage/:id">  <div class="bg-white shadow rounded overflow-hidden group">
                                <!-- product img -->
                                <div class="relative">
                                    <img src="./images/products/product6.jpg" class="w-full"/>
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
                                           <span class="flex gap-1 pb-3">
                                                <StarIcon class="w-4 h-4 hover:text-primary"/>
                                                <StarIcon class="w-4 h-4 hover:text-primary"/>
                                                <StarIcon class="w-4 h-4 hover:text-primary"/>
                                                <StarIcon class="w-4 h-4 hover:text-primary"/>
                                                <StarIcon class="w-4 h-4 hover:text-primary"/>
                                            </span>
                                        </div>
                                    </div>
                                    <a href="#" class="block  py-1 text-white bg-primary font-semibold font-Roboto hover:bg-transparent hover:text-primary shadow-lg rounded-b text-center border border-primary transition">Add To Cart</a>
                                </div>
                        </div>  
                        </router-link>
                        <!-- single product page -->
                        <router-link to="/ProductPage/:id">  <div class="bg-white shadow rounded overflow-hidden group">
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
                                        <span class="flex gap-1 pb-3">
                                            <StarIcon class="w-4 h-4 hover:text-primary"/>
                                            <StarIcon class="w-4 h-4 hover:text-primary"/>
                                            <StarIcon class="w-4 h-4 hover:text-primary"/>
                                            <StarIcon class="w-4 h-4 hover:text-primary"/>
                                            <StarIcon class="w-4 h-4 hover:text-primary"/>
                                        </span>
                                    </div>
                                </div>
                                <a href="#" class="block  py-1 text-white bg-primary font-semibold font-Roboto hover:bg-transparent hover:text-primary shadow-lg rounded-b text-center border border-primary transition">Add To Cart</a>
                            </div>
                        </div>  
                        </router-link>

                        <router-link to="/ProductPage/:id">  <div class="bg-white shadow rounded overflow-hidden group">
                                <!-- product img -->
                                <div class="relative">
                                    <img src="./images/products/product8.jpg" class="w-full"/>
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
                                            <span class="flex gap-1 pb-3">
                                                <StarIcon class="w-4 h-4 hover:text-primary"/>
                                                <StarIcon class="w-4 h-4 hover:text-primary"/>
                                                <StarIcon class="w-4 h-4 hover:text-primary"/>
                                                <StarIcon class="w-4 h-4 hover:text-primary"/>
                                                <StarIcon class="w-4 h-4 hover:text-primary"/>
                                            </span>
                                        </div>
                                    </div>
                                    <a href="#" class="block  py-1 text-white bg-primary font-semibold font-Roboto hover:bg-transparent hover:text-primary shadow-lg rounded-b text-center border border-primary transition">Add To Cart</a>
                                </div>
                        </div>  
                        </router-link>
                        

                    </div>
                </div>
                
            </div>

            <!-- footer section -->
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
</template>

<style scoped></style>