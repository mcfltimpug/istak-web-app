<template>
    <transition name="modal-animation">
        <div v-show="modalActiveDeleteSelect"
            class="modal bg-black shadow-md p-7 z-20 flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-opacity-20">
            <transition name="modal-animation-inner">
                <div v-show="modalActiveDeleteSelect"
                    class="modal-inner relative max-w-4xl w-4/5 shadow-md bg-neutrals-1 p-9 rounded-lg">
                    <div @click="close" class="close-icon">
                        <i
                            class="fa-solid fa-xmark cursor-pointer text-neutrals-5 absolute right-5 hover:text-neutrals-7"></i>
                    </div>
                    <!-- Modal Content -->
                    <div class="modal-content flex flex-col justify-center align-middle gap-6">
                        <div class="headerz text-center text-brand-6">
                            <h1>Delete Supplier Items</h1>
                        </div>

                        <div class="selected-items overflow-x-auto">
                            <table class="table-auto w-full rounded-lg">
                                <thead class="bg-neutrals-3">
                                    <tr class="uppercase text-sm">
                                        <th class="font-medium p-3">Supplier Name</th>
                                        <th class="font-medium p-3">Email</th>
                                        <th class="font-medium p-3">Contact Number</th>
                                        <th class="font-medium p-3">Contact Person</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center">
                                        <td class="p-2">ABC Supplier</td>
                                        <td class="p-2">abcsupplier@gmail.com</td>
                                        <td class="p-2">09123456789</td>
                                        <td class="p-2">Luizy</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td class="p-2">ABC Supplier</td>
                                        <td class="p-2">abcsupplier@gmail.com</td>
                                        <td class="p-2">09123456789</td>
                                        <td class="p-2">Luizy</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td class="p-2">ABC Supplier</td>
                                        <td class="p-2">abcsupplier@gmail.com</td>
                                        <td class="p-2">09123456789</td>
                                        <td class="p-2">Luizy</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td class="p-2">ABC Supplier</td>
                                        <td class="p-2">abcsupplier@gmail.com</td>
                                        <td class="p-2">09123456789</td>
                                        <td class="p-2">Luizy</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td class="p-2">ABC Supplier</td>
                                        <td class="p-2">abcsupplier@gmail.com</td>
                                        <td class="p-2">09123456789</td>
                                        <td class="p-2">Luizy</td>
                                    </tr>
                              
                                </tbody>
                            </table>
                        </div>

                        <div class="edit-btns flex flex-col justify-center gap-2">
                            <div class="mes text-center">
                                <h1 class="text-error-6">Are you sure you want to DELETE all selected suppliers?</h1>
                            </div>
                            <div class="btns flex flex-row justify-center gap-2">
                                <a href="" class="assumpta-gradient">Delete Suppliers</a>
                                <a href="" @click="close" class="assumpta-btn-secondary"><span
                                        class="assumpta-btn-span">Cancel</span></a>
                            </div>


                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['modalActiveDeleteSelect'],
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