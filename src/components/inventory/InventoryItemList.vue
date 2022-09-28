<template>
<tbody>
     <!-- crud modals -->
        <EditModal @close="toggleModalEdit" :modalActiveEdit="modalActiveEdit"/> 
        <DeleteModal @close="toggleModalDelete" :modalActiveDelete="modalActiveDelete"/> 
      <!-- table row -->
                         <tr class="text-center text-sm uppercase shadow-sm">
                            <td><input type="checkbox" name="" id="" class="w-5 h-5 border border-neutrals-6"></td>
                            <td>0123456789</td>
                            <td>NOBIVAC DHPPI L4 (CANINE)</td>
                            <td class="inline-flex justify-center"><img src="../../assets/vax-image.png" alt="" srcset=""
                                    class="w-14"></td>
                            <td>A-123</td>
                            <td><span class="bg-neutrals-3 rounded-full p-2 text-brand-6">&#9679; 475</span></td>
                            <td><span class="bg-neutrals-3 rounded-full p-2 text-secondary-6">&#9679; 30</span></td>
                            <td class="flex flex-col justify-center align-middle">
                                <div class="days-left text-sm">45 days till expiry</div>
                            </td>
                            <td class="">
                                <div class="actions flex gap-2 justify-center">
                                    <div @click="toggleModalEdit" class="ivt-edit-item">
                                        <a href="javascript:void(0)" class="assumpta-round-btn-edit cursor-pointer">
                                            <span class="assumpta-round-btn-span"><i
                                                    class="fa-solid fa-pen-to-square text-brand-6 h-4"></i></span>
                                                    
                                        </a>
                                    </div>
                                    <div @click="toggleModalDelete" class="ivt-delete-item">
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
                        <!-- subrow / more info -->
                        <tr class="" :class="isOpen ? 'd-block' : 'hidden'">
                            <td class="text-center bg-neutrals-4 p-5" colspan="9">
                                <div class="flex flex-wrap justify-center gap-20">
                                    <div class="img-info flex justify-center">
                                        <img src="../../assets/vax-image.png" class="w-24" alt="" srcset="">
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
</tbody>
</template>

<script>
    import EditModal from '@/components/inventory/EditModal.vue'
    import DeleteModal from '@/components/inventory/DeleteModal.vue'
    import {
        ref
    } from 'vue'

export default{
    
    data: () => {
            return {
                isOpen: false
            }
        },
        components: {
            EditModal,
            DeleteModal,
        },
        setup() {
            const modalActiveEdit = ref(false);
            const modalActiveDelete = ref(false);

            const toggleModalEdit = () => {
                modalActiveEdit.value = !modalActiveEdit.value;
            }
            const toggleModalDelete = () => {
                modalActiveDelete.value = !modalActiveDelete.value;
            }

            return {
                modalActiveEdit,
                toggleModalEdit,
                modalActiveDelete,
                toggleModalDelete
            };
        }    
}    
</script>
