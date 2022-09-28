<template>
<tbody>
    <!-- CRUD modals -->
    <EditModal @close="toggleModalEdit" :modalActiveEdit="modalActiveEdit" />
    <DeleteModal @close="toggleModalDelete" :modalActiveDelete="modalActiveDelete"/>
    <EmailModal @close="toggleModalEmail" :modalActiveEmail="modalActiveEmail" />

    <tr class="text-center text-sm shadow-sm">
        <!-- supplier -->
        <td class="p-2"><input type="checkbox" name="" id="" class="w-5 h-5 border border-neutrals-6"></td>
        <td class="p-2">ABC Supplier</td>
        <td class="p-2">abcsupplier@gmail.com</td>
        <td class="p-2">09123456789</td>
        <td class="p-2">Luizinho</td>
        <td class="p-2">
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
                <div @click="toggleModalEmail" class="supplier-send-email">
                    <a href="javascript:void(0)" class="assumpta-btn-secondary"><span class="assumpta-btn-span">Send Email</span></a>
                </div>
            </div>
        </td>
    </tr>
</tbody>
    
</template>

<script>
import EditModal from "./EditModal.vue";
import DeleteModal from "./DeleteModal.vue"
import EmailModal from "./EmailModal.vue"
import { ref } from 'vue'

    export default {
    components: { EditModal, DeleteModal, EmailModal },
    setup() {
            const modalActiveEdit = ref(false);
            const modalActiveDelete = ref(false);
            const modalActiveEmail = ref(false);

            const toggleModalEdit = () => {
                modalActiveEdit.value = !modalActiveEdit.value;
            }
            const toggleModalDelete = () => {
                modalActiveDelete.value = !modalActiveDelete.value;
            }
            const toggleModalEmail = () => {
                modalActiveEmail.value = !modalActiveEmail.value;
            }

            return {
                modalActiveEdit,
                toggleModalEdit,
                modalActiveDelete,
                toggleModalDelete,
                modalActiveEmail,
                toggleModalEmail
            };
        }    
}
</script>

<style>

</style>