<template>
    <transition name="modal-animation">
        <div v-show="modalActiveEditSelect"
            class="modal bg-black shadow-md p-7 z-20 flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-opacity-20">
            <transition name="modal-animation-inner">
                <div v-show="modalActiveEditSelect"
                    class="modal-inner relative max-w-4xl w-4/5 shadow-md bg-neutrals-1 p-9 rounded-lg">
                    <div @click="close" class="close-icon">
                        <i
                            class="fa-solid fa-xmark cursor-pointer text-neutrals-5 absolute right-5 hover:text-neutrals-7"></i>
                    </div>
                    <!-- Modal Content -->
                    <div class="modal-content flex flex-col justify-center align-middle gap-6">
                        <div class="headerz text-center text-brand-6">
                            <h1>Edit Selected Items</h1>
                        </div>

                        <div class="selected-items overflow-x-auto">
                            <table class="table-auto w-full rounded-lg">
                                <thead class="bg-neutrals-3">
                                    <tr class="uppercase text-sm">
                                        <th class="font-medium p-3">Barcode</th>
                                        <th class="font-medium p-3">Image</th>
                                        <th class="font-medium p-3">Item Name</th>
                                        <th class="font-medium p-3">Inventory</th>
                                        <th class="font-medium p-3">Total Stocks</th>
                                        <th class="font-medium p-3">Stocks on Display</th>
                                        <th class="font-medium p-3">Price</th>
                                        <th class="font-medium p-3">Storebox</th>
                                        <th class="font-medium p-3">Expiry Date</th>
                                        <th class="font-medium p-3">Low Stock Indicator</th>
                                        <th class="font-medium p-3">Brand</th>
                                        <th class="font-medium p-3">Supplier</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="">
                                        <td class="p-2"><input type="text" placeholder="0123456789" value="0123456789"
                                                class="w-44"></td>
                                        <td class="flex justify-center relative p-2">
                                            <input type="file" class="hidden" id="upload" accept="image/*" />
                                            <i
                                                class="fa-solid fa-cloud-arrow-up absolute top-5 text-2xl text-neutrals-7 hover:text-neutrals-8 "></i>
                                            <label for="upload" class=""><img src="../../assets/vax-image.png" alt=""
                                                    class="w-16 bg-black opacity-70 cursor-pointer border border-neutrals-7 hover:border-neutrals-8"></label>
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44"
                                                placeholder="NOBIVAC DHPPI L4 (CANINE)"
                                                value="NOBIVAC DHPPI L4 (CANINE)"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="Vaccines"
                                                value="Vaccines"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="475" value="475">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="30" value="30">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="578" value="578">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="A-123"
                                                value="A-123"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="11/26/22"
                                                value="11/26/22"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="15" value="15">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="Nobivac"
                                                value="Nobivac"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="ABC Supplier"
                                                value="ABC Supplier"></td>
                                    </tr>
                                    <tr class="">
                                        <td class="p-2"><input type="text" placeholder="0123456789" value="0123456789"
                                                class="w-44"></td>
                                        <td class="flex justify-center relative p-2">
                                            <input type="file" class="hidden" id="upload" accept="image/*" />
                                            <i
                                                class="fa-solid fa-cloud-arrow-up absolute top-5 text-2xl text-neutrals-7 hover:text-neutrals-8 "></i>
                                            <label for="upload" class=""><img src="../../assets/vax-image.png" alt=""
                                                    class="w-16 bg-black opacity-70 cursor-pointer border border-neutrals-7 hover:border-neutrals-8"></label>
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44"
                                                placeholder="NOBIVAC DHPPI L4 (CANINE)"
                                                value="NOBIVAC DHPPI L4 (CANINE)"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="Vaccines"
                                                value="Vaccines"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="475" value="475">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="30" value="30">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="578" value="578">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="A-123"
                                                value="A-123"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="11/26/22"
                                                value="11/26/22"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="15" value="15">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="Nobivac"
                                                value="Nobivac"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="ABC Supplier"
                                                value="ABC Supplier"></td>
                                    </tr>
                                    <tr class="">
                                        <td class="p-2"><input type="text" placeholder="0123456789" value="0123456789"
                                                class="w-44"></td>
                                        <td class="flex justify-center relative p-2">
                                            <input type="file" class="hidden" id="upload" accept="image/*" />
                                            <i
                                                class="fa-solid fa-cloud-arrow-up absolute top-5 text-2xl text-neutrals-7 hover:text-neutrals-8 "></i>
                                            <label for="upload" class=""><img src="../../assets/vax-image.png" alt=""
                                                    class="w-16 bg-black opacity-70 cursor-pointer border border-neutrals-7 hover:border-neutrals-8"></label>
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44"
                                                placeholder="NOBIVAC DHPPI L4 (CANINE)"
                                                value="NOBIVAC DHPPI L4 (CANINE)"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="Vaccines"
                                                value="Vaccines"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="475" value="475">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="30" value="30">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="578" value="578">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="A-123"
                                                value="A-123"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="11/26/22"
                                                value="11/26/22"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="15" value="15">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="Nobivac"
                                                value="Nobivac"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="ABC Supplier"
                                                value="ABC Supplier"></td>
                                    </tr>
                                    <tr class="">
                                        <td class="p-2"><input type="text" placeholder="0123456789" value="0123456789"
                                                class="w-44"></td>
                                        <td class="flex justify-center relative p-2">
                                            <input type="file" class="hidden" id="upload" accept="image/*" />
                                            <i
                                                class="fa-solid fa-cloud-arrow-up absolute top-5 text-2xl text-neutrals-7 hover:text-neutrals-8 "></i>
                                            <label for="upload" class=""><img src="../../assets/vax-image.png" alt=""
                                                    class="w-16 bg-black opacity-70 cursor-pointer border border-neutrals-7 hover:border-neutrals-8"></label>
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44"
                                                placeholder="NOBIVAC DHPPI L4 (CANINE)"
                                                value="NOBIVAC DHPPI L4 (CANINE)"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="Vaccines"
                                                value="Vaccines"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="475" value="475">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="30" value="30">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="578" value="578">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="A-123"
                                                value="A-123"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="11/26/22"
                                                value="11/26/22"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="15" value="15">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="Nobivac"
                                                value="Nobivac"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="ABC Supplier"
                                                value="ABC Supplier"></td>
                                    </tr>
                                    <tr class="">
                                        <td class="p-2"><input type="text" placeholder="0123456789" value="0123456789"
                                                class="w-44"></td>
                                        <td class="flex justify-center relative p-2">
                                            <input type="file" class="hidden" id="upload" accept="image/*" />
                                            <i
                                                class="fa-solid fa-cloud-arrow-up absolute top-5 text-2xl text-neutrals-7 hover:text-neutrals-8 "></i>
                                            <label for="upload" class=""><img src="../../assets/vax-image.png" alt=""
                                                    class="w-16 bg-black opacity-70 cursor-pointer border border-neutrals-7 hover:border-neutrals-8"></label>
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44"
                                                placeholder="NOBIVAC DHPPI L4 (CANINE)"
                                                value="NOBIVAC DHPPI L4 (CANINE)"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="Vaccines"
                                                value="Vaccines"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="475" value="475">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="30" value="30">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="578" value="578">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="A-123"
                                                value="A-123"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="11/26/22"
                                                value="11/26/22"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="15" value="15">
                                        </td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="Nobivac"
                                                value="Nobivac"></td>
                                        <td class="p-2"><input type="text" class="w-44" placeholder="ABC Supplier"
                                                value="ABC Supplier"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="edit-btns flex flex-row justify-center gap-2">
                            <a href="" class="assumpta-gradient">Edit Items</a>
                            <a href="" @click="close" class="assumpta-btn-secondary"><span
                                    class="assumpta-btn-span">Cancel</span></a>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['modalActiveEditSelect'],
        setup(props, {
            emit
        }) {
            const close = () => {
                emit("close");
            }

            return {
                close
            }
        }
    }
</script>

<style>
    .modal-animation-enter-active,
    .modal-animation-leave-active {
        transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
    }

    .modal-animation-enter-from,
    .modal-animation-leave-to {
        opacity: 0;
    }

    .modal-animation-inner-enter-active {
        transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
    }

    .modal-animation-inner-leave-active {
        transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
    }

    .modal-animation-inner-enter-from {
        opacity: 0;
        transform: scale(0.8);
    }

    .modal-animation-inner-leave-to {
        transform: scale(0.8);
    }
</style>