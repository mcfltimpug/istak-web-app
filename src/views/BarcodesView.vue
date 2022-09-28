<template>
    <div class="barcodes-ui flex flex-col justify-center m-3">
        <!-- remove top nav if available -->
        <div class="top-nav flex justify-between flex-row bg-neutrals-1 rounded-2xl py-2 px-3 overflow-x-auto">
            <div class="left-nav flex justify-center gap-4 ">
                <div class="site-loc mt-2">
                    Barcodes
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

        <div class="flex justify-center flex-wrap gap-4 pt-8">
            <div class="scan-item">
                <a href="javascript:void(0)" class="assumpta-btn-secondary cursor-pointer shadow-sm">
                            <span class="assumpta-btn-span w-56 h-60 flex flex-col gap-2">
                                <i class="fa-solid fa-barcode text-3xl"></i>
                                <h1 class="text-base">Scan Item</h1>
                            </span>
                </a>
            </div>
            <div class="gen-barcodes">
                <a href="javascript:void(0)" class="assumpta-btn-secondary cursor-pointer shadow-sm">
                            <span class="assumpta-btn-span w-56 h-60 flex flex-col gap-2">
                                <i class="fa-solid fa-barcode text-3xl"></i>
                                <h1 class="text-base">Generate Barcode</h1>
                            </span>
                </a>
            </div>
            <div class="analytics-text flex flex-col gap-5">
                <div class="total-scans istak-card grid grid-cols-2 gap-1 w-56 h-28">
                    <div class="icon-here flex justify-center items-center ">
                        <i class="fa-solid fa-barcode text-3xl p-3 bg-gradient-to-br from-brand-6 to-secondary-6 text-neutrals-1 rounded-lg"></i>
                    </div>
                    <div class="text-here flex flex-col justify-center">
                        <div class="text-xs">
                            Total Transactions
                        </div> 
                        <div class="text-lg">
                            45 scans
                        </div> 
                    </div>
                </div>
                <div class="total-scans istak-card grid grid-cols-2 gap-1 w-56 h-28">
                    <div class="icon-here flex justify-center items-center ">
                        <i class="fa-solid fa-barcode text-3xl p-3 bg-gradient-to-br from-brand-6 to-secondary-6 text-neutrals-1 rounded-lg"></i>
                    </div>
                    <div class="text-here flex flex-col justify-center">
                        <div class="text-xs">
                            Total Barcodes
                        </div> 
                        <div class="text-lg">
                            124 codes
                        </div> 
                    </div>
                </div>
            </div>
            <div class="analytics-chart istak-card md:w-2/6 flex flex-col gap-2 p-6 relative">
                <div class="chart-title-legends grid grid-cols-6">
                    <div class="chart-title flex items-start col-span-5 text-sm">
                    <h1>Barcode Transactions Per Day</h1>
                    </div>
                    <div class="chart-legends flex items-start flex-col col-span-1">
                        <p><i class="fa-solid fa-circle mr-1 text-secondary-6"></i>Sales</p>
                        <p><i class="fa-solid fa-circle mr-1 text-brand-6"></i>Views</p>
                        <p><i class="fa-solid fa-circle mr-1 text-brandDark-6"></i>Updates</p>
                        <p><i class="fa-solid fa-circle mr-1 text-secondaryLight-6"></i>Deletes</p>
                    </div>
                </div>
                <div class="horizontal-barchart">
                    <img src="../assets/sample-horizontal-bar-chart.png" alt="" class="md:absolute bottom-6 h-36">
                </div>
                
            </div>
        </div>

        <div class="vaccines-ivt bg-neutrals-1 mt-4 rounded-lg shadow-sm pt-4 px-5  overflow-x-auto">
            <div class="topbar flex justify-between p-2">
                <div class="bar-left flex justify-center align-middle gap-4">
                    <div class="ivt-filter">
                        <a href="" class="assumpta-btn-secondary"><span class=" assumpta-btn-span"><i
                                    class="fa-solid fa-filter mr-3"></i>Filter</span></a>
                    </div>
                    <div class="ivt-search relative">
                        <i class="fa-solid fa-magnifying-glass absolute z-2 top-3.5 left-3 text-brand-6 "></i>
                        <input type="text" name="input" class="pr-3 pl-10 h-8 mt-1.5" placeholder="Search Transaction">
                    </div>
                </div>
                <div class="bar-right flex flex-row gap-2">
                    <div class="ivt-pdf">
                        <a href="javascript:void(0)" class="assumpta-round-btn-gradient"><span class="assumpta-round-btn-span">
                                <i class="fa-solid fa-file-pdf text-brand-6 h-4"></i>
                            </span></a>
                    </div>
                    <!-- <div @click="toggleModalEditSelect" class="ivt-edit-item">
                        <a href="javascript:void(0)" class="assumpta-round-btn-edit cursor-pointer">
                            <span class="assumpta-round-btn-span"><i
                            class="fa-solid fa-pen-to-square text-brand-6 h-4"></i></span>
                                                    
                        </a>
                    </div> -->
                    <!-- <div @click="toggleModalDeleteSelect" class="ivt-delete-item">
                        <a href="javascript:void(0)" class="assumpta-round-btn-delete"><span class="assumpta-round-btn-span"><i
                                    class="fa-solid fa-trash text-error-6 h-4"></i></span></a>
                    </div> -->
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
                            <th class="font-medium p-3">Inventory</th>
                            <th class="font-medium p-3">Scan Action</th>
                            <th class="font-medium p-3">Date/Time</th>
                            <!-- <th class="font-medium p-3">Actions</th> -->
                        </tr>
                    </thead>   
                    <tbody>
                     <tr class="text-center text-sm uppercase shadow-sm ">
                        <td class="p-2"><input type="checkbox" name="" id="" class="w-5 h-5 border border-neutrals-6"></td>
                        <td class="p-2">0123456789</td>
                        <td class="p-2">NOBIVAC DHPPI L4 (CANINE)</td>
                        <td class="p-2">Vaccines</td>
                        <td class="p-2">Updated Image</td>
                        <td class="p-2">09/28/2022 8:24 AM</td>
                        <!-- <td class="p-2">
                            <div class="actions flex gap-2 justify-center">
                                <div @click="toggleModalDelete" class="ivt-delete-item">
                                    <a href="javascript:void(0)" class="assumpta-round-btn-delete cursor-pointer">
                                    <span class="assumpta-round-btn-span"><i class="fa-solid fa-trash text-error-6 h-4"></i></span>
                                    </a>
                                </div>
                            </div>
                        </td> -->
                     </tr>
                     <tr class="text-center text-sm uppercase shadow-sm ">
                        <td class="p-2"><input type="checkbox" name="" id="" class="w-5 h-5 border border-neutrals-6"></td>
                        <td class="p-2">0123456789</td>
                        <td class="p-2">NOBIVAC DHPPI L4 (CANINE)</td>
                        <td class="p-2">Vaccines</td>
                        <td class="p-2">Updated Image</td>
                        <td class="p-2">09/28/2022 8:24 AM</td>
                        <!-- <td class="p-2">
                            <div class="actions flex gap-2 justify-center">
                                <div @click="toggleModalDelete" class="ivt-delete-item">
                                    <a href="javascript:void(0)" class="assumpta-round-btn-delete cursor-pointer">
                                    <span class="assumpta-round-btn-span"><i class="fa-solid fa-trash text-error-6 h-4"></i></span>
                                    </a>
                                </div>
                            </div>
                        </td> -->
                     </tr>
                     <tr class="text-center text-sm uppercase shadow-sm ">
                        <td class="p-2"><input type="checkbox" name="" id="" class="w-5 h-5 border border-neutrals-6"></td>
                        <td class="p-2">0123456789</td>
                        <td class="p-2">NOBIVAC DHPPI L4 (CANINE)</td>
                        <td class="p-2">Vaccines</td>
                        <td class="p-2">Updated Image</td>
                        <td class="p-2">09/28/2022 8:24 AM</td>
                        <!-- <td class="p-2">
                            <div class="actions flex gap-2 justify-center">
                                <div @click="toggleModalDelete" class="ivt-delete-item">
                                    <a href="javascript:void(0)" class="assumpta-round-btn-delete cursor-pointer">
                                    <span class="assumpta-round-btn-span"><i class="fa-solid fa-trash text-error-6 h-4"></i></span>
                                    </a>
                                </div>
                            </div>
                        </td> -->
                     </tr>
                     <tr class="text-center text-sm uppercase shadow-sm ">
                        <td class="p-2"><input type="checkbox" name="" id="" class="w-5 h-5 border border-neutrals-6"></td>
                        <td class="p-2">0123456789</td>
                        <td class="p-2">NOBIVAC DHPPI L4 (CANINE)</td>
                        <td class="p-2">Vaccines</td>
                        <td class="p-2">Updated Image</td>
                        <td class="p-2">09/28/2022 8:24 AM</td>
                        <!-- <td class="p-2">
                            <div class="actions flex gap-2 justify-center">
                                <div @click="toggleModalDelete" class="ivt-delete-item">
                                    <a href="javascript:void(0)" class="assumpta-round-btn-delete cursor-pointer">
                                    <span class="assumpta-round-btn-span"><i class="fa-solid fa-trash text-error-6 h-4"></i></span>
                                    </a>
                                </div>
                            </div>
                        </td> -->
                     </tr>
                     <tr class="text-center text-sm uppercase shadow-sm ">
                        <td class="p-2"><input type="checkbox" name="" id="" class="w-5 h-5 border border-neutrals-6"></td>
                        <td class="p-2">0123456789</td>
                        <td class="p-2">NOBIVAC DHPPI L4 (CANINE)</td>
                        <td class="p-2">Vaccines</td>
                        <td class="p-2">Updated Image</td>
                        <td class="p-2">09/28/2022 8:24 AM</td>
                        <!-- <td class="p-2">
                            <div class="actions flex gap-2 justify-center">
                                <div @click="toggleModalDelete" class="ivt-delete-item">
                                    <a href="javascript:void(0)" class="assumpta-round-btn-delete cursor-pointer">
                                    <span class="assumpta-round-btn-span"><i class="fa-solid fa-trash text-error-6 h-4"></i></span>
                                    </a>
                                </div>
                            </div>
                        </td> -->
                     </tr>
                     <tr class="text-center text-sm uppercase shadow-sm ">
                        <td class="p-2"><input type="checkbox" name="" id="" class="w-5 h-5 border border-neutrals-6"></td>
                        <td class="p-2">0123456789</td>
                        <td class="p-2">NOBIVAC DHPPI L4 (CANINE)</td>
                        <td class="p-2">Vaccines</td>
                        <td class="p-2">Updated Image</td>
                        <td class="p-2">09/28/2022 8:24 AM</td>
                        <!-- <td class="p-2">
                            <div class="actions flex gap-2 justify-center">
                                <div @click="toggleModalDelete" class="ivt-delete-item">
                                    <a href="javascript:void(0)" class="assumpta-round-btn-delete cursor-pointer">
                                    <span class="assumpta-round-btn-span"><i class="fa-solid fa-trash text-error-6 h-4"></i></span>
                                    </a>
                                </div>
                            </div>
                        </td> -->
                     </tr>
                     
                     
                    </tbody> 
               
                </table>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'BarcodesView',

}
</script>

<style>

</style>
