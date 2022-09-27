<template>
    <transition name="modal-animation">
        <div v-show="modalActiveEdit"
            class="modal bg-black shadow-md p-7 z-20 flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-opacity-20">
            <transition name="modal-animation-inner">
                <div v-show="modalActiveEdit"
                    class="modal-inner relative max-w-2xl w-4/5 shadow-md bg-neutrals-1 p-9 rounded-lg">
                    <div @click="close" class="close-icon">
                        <i class="fa-solid fa-xmark cursor-pointer text-neutrals-5 absolute right-5 hover:text-neutrals-7" ></i>
                    </div>
                    
                    <!-- Modal Content -->
                    <!-- <slot /> -->
                    <div class="modal-content flex flex-col justify-center align-middle gap-6">
                        <div class="headerz text-center text-brand-6">
                            <h1>Edit Item Information</h1>
                        </div>

                        <div class="first-edit flex flex-wrap justify-center gap-6">
                            <div class="upload-img flex flex-col justify-center gap-6 px-10">
                                <img src="../../assets/vax-image.png" class="w-32 border-4 border-brand-6 rounded-md bg-neutrals-9"
                                    alt="">
                                <input type="file" class="hidden" id="file" accept="image/*" />
                                <label for="file" class="file-design">Upload Photo</label>
                            </div>
                            <div class="bii flex gap-6 flex-col">
                                <div class="barcode flex flex-col justify-center">
                                    <span class="text-xs uppercase">Barcode</span>
                                    <input type="text" name="input" class="h-8 w-48" placeholder="0123456789">
                                </div>
                                <div class="item-name flex flex-col justify-center">
                                    <span class="text-xs uppercase">Item Name</span>
                                    <input type="text" name="input" class="h-8 w-48"
                                        placeholder="NOBIVAC DHPPI L4 (CANINE)">
                                </div>
                                <div class="item-name flex flex-col justify-center">
                                    <span class="text-xs uppercase">Inventory</span>
                                    <input type="text" name="input" class="h-8 w-48" placeholder="Vaccines">
                                </div>
                            </div>
                        </div>
                        <div class="second-edit">
                            <div class="grid grid-cols-3 gap-6">
                                <div class="total-stocks flex flex-col justify-center">
                                    <div class="ts-title">
                                        <span class="text-xs uppercase">Total Stocks</span>
                                    </div>
                                    <div class="ts-form flex flex-row justify-center gap-1">
                                        <input type="text" name="input" class="h-8 " placeholder="475">
                                        <a href="" class="file-design">Add</a>
                                    </div>
                                </div>
                                <div class="price flex flex-col justify-center">
                                    <span class="text-xs uppercase">Price</span>
                                    <input type="text" name="input" class="h-8 w-48" placeholder="P548.59">
                                </div>
                                <div class="low-stock flex flex-col justify-center">
                                    <span class="text-xs uppercase">Low Stock Indicator</span>
                                    <input type="text" name="input" class="h-8 w-48" placeholder="15">
                                </div>
                                <div class="receipts flex flex-col justify-center">
                                    <a href="" class="assumpta-btn-secondary"><span
                                            class="assumpta-btn-span flex w-full">See
                                            Receipts</span></a>
                                </div>
                                <div class="storebox flex flex-col justify-center">
                                    <span class="text-xs uppercase">Storebox</span>
                                    <input type="text" name="input" class="h-8 w-48" placeholder="A-123">
                                </div>
                                <div class="brand flex flex-col justify-center">
                                    <span class="text-xs uppercase">Brand</span>
                                    <input type="text" name="input" class="h-8 w-48" placeholder="Nobivac">
                                </div>
                                <div class="display-stocks flex flex-col justify-center">
                                    <span class="text-xs uppercase">Stocks on Display</span>
                                    <input type="text" name="input" class="h-8 w-48" placeholder="30">
                                </div>
                                <div class="expiry flex flex-col justify-center">
                                    <span class="text-xs uppercase">Expiry Date</span>
                                    <input type="date" name="input" class="h-8 w-48" placeholder="11/26/2022">
                                </div>
                                <div class="supplier flex flex-col justify-center">
                                    <span class="text-xs uppercase">Supplier</span>
                                    <input type="text" name="input" class="h-8 w-48" placeholder="ABC Supplier">
                                </div>
                            </div>
                        </div>
                        <div class="edit-btns flex flex-row justify-center gap-2">
                            <a href="" class="assumpta-gradient">Edit Item</a>
                            <a href="" @click="close" class="assumpta-btn-secondary"><span class="assumpta-btn-span">Cancel</span></a>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['modalActiveEdit'],
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