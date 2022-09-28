<template>
    <transition name="modal-animation">
        <div v-show="modalActiveEdit"
            class="modal bg-black shadow-md p-7 z-20 flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-opacity-20">
            <transition name="modal-animation-inner">
                <div v-show="modalActiveEdit"
                    class="modal-inner relative md:w-2/5 shadow-md bg-neutrals-1 p-9 rounded-lg">
                    <div @click="close" class="close-icon">
                        <i class="fa-solid fa-xmark cursor-pointer text-neutrals-5 absolute right-5 hover:text-neutrals-7" ></i>
                    </div>
                    
                    <!-- Modal Content -->
                    <div class="modal-content flex flex-col justify-center align-middle gap-6">
                        <div class="headerz text-center text-brand-6">
                            <h1>Edit Supplier Information</h1>
                        </div>
                        <div class="supplier-content flex justify-center">
                            <div class="grid grid-cols-2 gap-8">
                                <div class="supplier-name flex flex-col justify-center">
                                    <span class="text-xs uppercase text-left">Supplier Name</span>
                                    <input type="text" name="input" class="h-8 w-48" placeholder="ABC Supplier" value="ABC Supplier">
                                </div>
                                <div class="supplier-email flex flex-col justify-center">
                                    <span class="text-xs uppercase text-left">Email</span>
                                    <input type="text" name="input" class="h-8 w-48" placeholder="abcsupplier@gmail.com" value="abcsupplier@gmail.com">
                                </div>
                                <div class="supplier-num flex flex-col justify-center">
                                    <span class="text-xs uppercase text-left">Contact Number</span>
                                    <input type="text" name="input" class="h-8 w-48" placeholder="09123456789" value="09123456789">
                                </div>
                                <div class="supplier-person flex flex-col justify-center">
                                    <span class="text-xs uppercase text-left">Contact Person</span>
                                    <input type="text" name="input" class="h-8 w-48" placeholder="Luizinho" value="Luizinho">
                                </div>
                            </div>
                        </div>
                        <div class="edit-btns flex flex-row justify-center gap-2">
                            <a href="" class="assumpta-gradient">Edit Supplier</a>
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