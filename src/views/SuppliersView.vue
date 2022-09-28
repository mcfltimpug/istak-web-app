<template>
    <div class="suppliers flex flex-col justify-center m-3">
        <!-- CRUD modals -->
        <AddModal @close="toggleModalAdd" :modalActiveAdd="modalActiveAdd"/>
        <EditSelectedModal @close="toggleModalEditSelect" :modalActiveEditSelect="modalActiveEditSelect"  />
        <DeleteSelectedModal @close="toggleModalDeleteSelect" :modalActiveDeleteSelect="modalActiveDeleteSelect"/>

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

        <!-- supplier -->
        <div class="supplier bg-neutrals-1 mt-4 rounded-lg shadow-sm pt-4 px-5 h-screen overflow-x-auto">
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
                    <div @click="toggleModalAdd" class="add-supplier">
                        <a href="javascript:void(0)" class="assumpta-gradient px-8">
                            Add New Supplier
                        </a>
                    </div>
                    <div class="supplier-pdf">
                        <a href="javascript:void(0)" class="assumpta-round-btn-gradient"><span class="assumpta-round-btn-span">
                                <i class="fa-solid fa-file-pdf text-brand-6 h-4"></i>
                            </span></a>
                    </div>
                    <div @click="toggleModalEditSelect" class="ivt-edit-item">
                        <a href="javascript:void(0)" class="assumpta-round-btn-edit cursor-pointer">
                            <span class="assumpta-round-btn-span"><i
                            class="fa-solid fa-pen-to-square text-brand-6 h-4"></i></span>
                                                    
                        </a>
                    </div>
                    <div @click="toggleModalDeleteSelect" class="ivt-delete-item">
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
                            <th class="font-medium p-3">Supplier Name</th>
                            <th class="font-medium p-3">Email</th>
                            <th class="font-medium p-3">Contact Number</th>
                            <th class="font-medium p-3">Contact Person</th>
                            <th class="font-medium p-3">Actions</th>
                        </tr>
                    </thead>
                    
                    <SupplierRow /> 
                    <SupplierRow />
                    <SupplierRow />
                    <SupplierRow />
                    <SupplierRow />

                </table>
            </div>
            
        </div>
    </div>
</template>

<script>
import SupplierRow from "../components/supplier/SupplierRow.vue";
import AddModal from "@/components/supplier/AddModal.vue";
import { ref } from 'vue'
import EditSelectedModal from '../components/supplier/EditSelectedModal.vue'
import DeleteSelectedModal from '../components/supplier/DeleteSelectedModal.vue'

export default {
    name: "SuppliersView",
    components: { SupplierRow, AddModal, EditSelectedModal, DeleteSelectedModal },
    setup() {
             const modalActiveAdd = ref(false);
             const modalActiveEditSelect = ref(false);
             const modalActiveDeleteSelect = ref(false);

             const toggleModalAdd = () => {
                 modalActiveAdd.value = !modalActiveAdd.value;
             }
  
             const toggleModalEditSelect = () => {
                modalActiveEditSelect.value = !modalActiveEditSelect.value;
             }

             const toggleModalDeleteSelect = () => {
                modalActiveDeleteSelect.value = !modalActiveDeleteSelect.value;
             }

         return {
                modalActiveAdd,
                toggleModalAdd,
                modalActiveEditSelect,
                toggleModalEditSelect,
                modalActiveDeleteSelect,
                toggleModalDeleteSelect,
             };
        }
}
</script>

<style>

</style>
