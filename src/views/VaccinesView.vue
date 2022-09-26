<template>
    <div class="vax flex flex-col justify-center m-3">
        <!-- remove top nav if available -->
        <div class="top-nav flex justify-between flex-row bg-neutrals-1 rounded-2xl py-2 px-3">
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

        <div class="vaccines-ivt bg-neutrals-1 mt-4 rounded-lg">
            <div class="topbar flex justify-between p-2">
                <div class="bar-left flex justify-center align-middle gap-4">
                    <div class="ivt-filter">
                        <a href="" class="assumpta-btn-secondary"><span class=" assumpta-btn-span"><i
                                    class="fa-solid fa-filter mr-3"></i>Filter</span></a>
                    </div>
                    <div class="ivt-search relative">
                      <i class="fa-solid fa-magnifying-glass absolute z-2 top-3.5 left-3 text-brand-6 "></i>
                      <input type="text" name="input" class="pr-3 pl-10 h-8 mt-1.5" placeholder="Search">
                    </div>
                </div>
                <div class="bar-right flex flex-row gap-2">
                    <div class="ivt-add-item">
                        <a href="" class="assumpta-btn-secondary"><span class=" assumpta-btn-span px-12">Add Item</span></a>
                    </div>
                    <div class="ivt-barcode-scan">
                        <a href="" class="assumpta-gradient px-8">Barcode Scan</a>
                    </div>
                    <div class="ivt-pdf">
                        <a href="" class="assumpta-round-btn-gradient"><span class="assumpta-round-btn-span">
                            <i class="fa-solid fa-file-pdf text-brand-6 h-4"></i>
                        </span></a>
                    </div>
                    <div class="ivt-edit-item">
                        <a href="" class="assumpta-round-btn-edit"><span class="assumpta-round-btn-span"><i class="fa-solid fa-pen-to-square text-brand-6 h-4"></i></span></a>
                    </div>
                    <div class="ivt-delete-item">
                        <a href="" class="assumpta-round-btn-delete"><span class="assumpta-round-btn-span"><i class="fa-solid fa-trash text-error-6 h-4"></i></span></a>
                    </div>
                </div>
            </div>
            <div class="ivt-list">

            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'VaccinesView',

    }
</script>