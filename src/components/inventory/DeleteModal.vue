<template>
    <transition name="modal-animation">
        <div v-show="modalActiveDelete"
            class="modal bg-black shadow-md p-7 z-20 flex- justify-center align-middle h-screen w-screen fixed top-0 left-0 bg-opacity-20">
            <transition name="modal-animation-inner">
                <div v-show="modalActiveDelete"
                    class="modal-inner relative max-w-2xl w-4/5 shadow-md bg-neutrals-1 p-9 top-20 left-96 rounded-lg">
                    <div @click="close" class="close-icon">
                        <i class="fa-solid fa-xmark cursor-pointer text-neutrals-5 absolute right-5 hover:text-neutrals-7" ></i>
                    </div>
                    
                    <!-- Modal Content -->
                    <!-- <slot /> -->
                    <div class="modal-content flex flex-col justify-center align-middle gap-6">
                        <div class="headerz text-center text-brand-6">
                            <h1>Delete Item</h1>
                        </div>
                        <div class="bodyz flex justify-center text-center">
                            <h1>Are you sure you want to DELETE 'NOBIVAC DHPPI L4 (CANINE)' Item?</h1>
                        </div>
                        <div class="edit-btns flex flex-row justify-center gap-2">
                            <a href="" class="assumpta-gradient">Delete Item</a>
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
        props: ['modalActiveDelete'],
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