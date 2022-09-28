<template>
    <div class="vax flex flex-col justify-center m-3">
        <!-- crud modals -->
        <AddModal @close="toggleModalAdd" :modalActiveAdd="modalActiveAdd"/>   

        <!-- remove top nav if available -->
        <div class="top-nav flex justify-between flex-row bg-neutrals-1 rounded-2xl py-2 px-3 overflow-x-auto">
            <div class="left-nav flex justify-center gap-4 ">
                <div class="site-loc mt-2">
                    Inventories > <span class="text-brand-6 font-bold text-brand-6">Vaccines</span>
                </div>
                <div class="site-search relative">
                    <i class="fa-solid fa-magnifying-glass absolute z-2 top-3 left-3 "></i>
                    <input type="text" name="input" class="pr-3 pl-10" placeholder="Search">
                </div>
            </div>
            <div class="right-nav flex justify-center gap-4 align-middle mt-1.5 ">
                <div class="site-icon">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="site-u">
                    Juan
                </div>
            </div>
        </div>

        <!-- vaccines inventory -->
        <div class="vaccines-ivt bg-neutrals-1 mt-4 rounded-lg shadow-sm pt-4 px-5 h-screen overflow-x-auto">
            <div class="topbar flex justify-between p-2">
                <div class="bar-left flex justify-center align-middle gap-4">
                    <div class="ivt-filter">
                        <a href="" class="assumpta-btn-secondary"><span class=" assumpta-btn-span"><i
                                    class="fa-solid fa-filter mr-3"></i>Filter</span></a>
                    </div>
                    <div class="ivt-search relative">
                        <i class="fa-solid fa-magnifying-glass absolute z-2 top-3.5 left-3 text-brand-6 "></i>
                        <input type="text" name="input" class="pr-3 pl-10 h-8 mt-1.5" placeholder="Search Item">
                    </div>
                </div>
                <div class="bar-right flex flex-row gap-2">
                    <div @click="toggleModalAdd" class="ivt-add-item ">
                        <a href="javascript:void(0)" class="assumpta-btn-secondary cursor-pointer">
                            <span class=" assumpta-btn-span px-12">Add Item</span>
                        </a>
                        
                    </div>
                    <div class="ivt-barcode-scan">
                        <a href="javascript:void(0)" class="assumpta-gradient px-8">Barcode Scan</a>
                    </div>
                    <div class="ivt-pdf">
                        <a href="javascript:void(0)" class="assumpta-round-btn-gradient"><span class="assumpta-round-btn-span">
                                <i class="fa-solid fa-file-pdf text-brand-6 h-4"></i>
                            </span></a>
                    </div>
                    <div class="ivt-edit-item">
                        <a href="javascript:void(0)" class="assumpta-round-btn-edit"><span class="assumpta-round-btn-span"><i
                                    class="fa-solid fa-pen-to-square text-brand-6 h-4"></i></span></a>
                    </div>
                    <div class="ivt-delete-item">
                        <a href="javascript:void(0)" class="assumpta-round-btn-delete"><span class="assumpta-round-btn-span"><i
                                    class="fa-solid fa-trash text-error-6 h-4"></i></span></a>
                    </div>
                </div>
            </div>
            <hr class="">

            <!-- table -->
            <div class="ivt-list py-2">
                <table class="table-auto w-full rounded-lg">
                    <thead class="bg-neutrals-4">
                        <tr class="uppercase text-secondary-6 text-sm">
                            <th class="font-medium p-3">Select</th>
                            <th class="font-medium p-3">Barcode</th>
                            <th class="font-medium p-3">Item Name</th>
                            <th class="font-medium p-3">Image</th>
                            <th class="font-medium p-3">Storebox</th>
                            <th class="font-medium p-3">Total Stocks</th>
                            <th class="font-medium p-3">On Display</th>
                            <th class="font-medium p-3">Item Status</th>
                            <th class="font-medium p-3">Actions</th>
                        </tr>
                    </thead>
                    
                    <!-- <tbody>
                     
                         <tr class="text-center text-sm uppercase shadow-sm">
                            <td><input type="checkbox" name="" id="" class="w-5 h-5 border border-neutrals-6"></td>
                            <td>0123456789</td>
                            <td>NOBIVAC DHPPI L4 (CANINE)</td>
                            <td class="inline-flex justify-center"><img src="../assets/vax-image.png" alt="" srcset=""
                                    class="w-14"></td>
                            <td>A-123</td>
                            <td><span class="bg-neutrals-3 rounded-full p-2 text-brand-6">&#9679; 475</span></td>
                            <td><span class="bg-neutrals-3 rounded-full p-2 text-secondary-6">&#9679; 30</span></td>
                            <td class="flex flex-col justify-center align-middle">
                                <div class="days-left text-sm">45 days till expiry</div>
                            </td>
                            <td class="">
                                <div class="actions flex gap-2 justify-center">
                                    <div @click="toggleModal" class="ivt-edit-item">
                                        <a href="javascript:void(0)" class="assumpta-round-btn-edit cursor-pointer">
                                            <span class="assumpta-round-btn-span"><i
                                                    class="fa-solid fa-pen-to-square text-brand-6 h-4"></i></span>
                                                    
                                        </a>
                                    </div>
                                    <div @click="toggleModal3" class="ivt-delete-item">
                                        <a href="javascript:void(0)" class="assumpta-round-btn-delete cursor-pointer">
                                            <span class="assumpta-round-btn-span"><i class="fa-solid fa-trash text-error-6 h-4"></i></span>
                                        </a>
                                    </div>
                                    <div v-on:click="isOpen = !isOpen" class="ivt-more-info">
                                        <a href="javascript:void(0)" class="assumpta-more-info-btn mt-1 cursor-pointer">
                                            <i class="fa-solid fa-ellipsis-vertical h-5 assumpta-more-info-span"></i>
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr> 
                      
                        <tr class="" :class="isOpen ? 'd-block' : 'hidden'">
                            <td class="text-center bg-neutrals-4 p-5" colspan="9">
                                <div class="flex flex-wrap justify-center gap-20">
                                    <div class="img-info flex justify-center">
                                        <img src="../assets/vax-image.png" class="w-24" alt="" srcset="">
                                    </div>
                                    <div class="info-one flex justify-center flex-col gap-3">
                                        <div class="inventory text-left flex flex-col">
                                            <span class="text-xs uppercase">Inventory</span>
                                            <input type="text" name="input" class="h-8 w-48" placeholder="Vaccines"
                                                disabled>
                                        </div>
                                        <div class="expiry text-left flex flex-col">
                                            <span class="text-xs uppercase">Expiry Date</span>
                                            <input type="text" name="input" class="h-8 w-48" placeholder="12/26/2022"
                                                disabled>
                                        </div>
                                    </div>
                                    <div class="info-two flex justify-center flex-col gap-3">
                                        <div class="price text-left flex flex-col">
                                            <span class="text-xs uppercase">Price per piece</span>
                                            <input type="text" name="input" class="h-8 w-48" placeholder="578" disabled>
                                        </div>
                                        <div class="item-level text-left flex flex-col">
                                            <span class="text-xs uppercase">Item Level</span>
                                            <input type="text" name="input" class="h-8 w-48" placeholder="Normal"
                                                disabled>
                                        </div>
                                    </div>
                                    <div class="info-three flex justify-center flex-col gap-3">
                                        <div class="brand text-left flex flex-col">
                                            <span class="text-xs uppercase">Brand</span>
                                            <input type="text" name="input" class="h-8 w-48" placeholder="Nobivac"
                                                disabled>
                                        </div>
                                        <div class="supplier text-left flex flex-col">
                                            <span class="text-xs uppercase">Supplier</span>
                                            <input type="text" name="input" class="h-8 w-48" placeholder="ABC Supplier"
                                                disabled>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr> 
                    </tbody>  -->
                    <InventoryItemList />
                    <InventoryItemList />
                    <InventoryItemList />
                    <InventoryItemList />
                    <InventoryItemList />
                    <InventoryItemList />
                    <InventoryItemList />
                    <InventoryItemList />
                </table>
            </div>
            
        </div>

    </div>

</template>

<script>
    // @ is an alias to /src
    import AddModal from '@/components/inventory/AddModal.vue'
    import InventoryItemList from '@/components/inventory/InventoryItemList.vue'

     import {
         ref
     } from 'vue'


    export default {
        name: 'VaccinesView',
        components: {
            AddModal,
            InventoryItemList
        },
         setup() {
             const modalActiveAdd = ref(false);
             const toggleModalAdd = () => {
                 modalActiveAdd.value = !modalActiveAdd.value;
             }

         return {
                 modalActiveAdd,
                toggleModalAdd,
             };
        }

    }
</script>

<style>

</style>