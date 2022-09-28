<template>
    <transition name="modal-animation">
        <div v-show="modalActiveEmail"
            class="modal bg-black shadow-md p-7 z-20 flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-opacity-20">
            <transition name="modal-animation-inner">
                <div v-show="modalActiveEmail"
                    class="modal-inner relative md:w-3/5 shadow-md bg-neutrals-1 p-9 h-fit rounded-lg">
                    <div @click="close" class="close-icon">
                        <i class="fa-solid fa-xmark cursor-pointer text-neutrals-5 absolute right-5 hover:text-neutrals-7" ></i>
                    </div>
                    
                    <!-- Modal Content -->
                    <!-- <slot /> -->
                    <div class="modal-content flex flex-col justify-center align-middle gap-6">
                        <div class="headerz text-center text-brand-6">
                            <h1>Send Email</h1>
                        </div>
                        <div class="bodyz form flex flex-col justify-center text-center gap-4">
                            <div class="to-from flex flex-wrap justify-between w-full gap-2">
                                <div class=" flex flex-col">
                                    <span class="text-xs uppercase text-left">To</span>
                                    <input type="text" name="input" class="h-8 w-96" placeholder="Supplier Name" value="ABC Supplier" disabled>
                                </div>
                                <div class=" flex flex-col">
                                    <span class="text-xs uppercase text-left">From</span>
                                    <input type="text" name="input" class="h-8 w-96" placeholder="Clinic Branch" value="Assumpta Dog & Cat Clinic" disabled>
                                </div>
                            </div>
                            <div class="subject-email">
                                <div class=" flex flex-col">
                                    <span class="text-xs uppercase text-left">Subject</span>
                                    <input type="text" name="input" class="h-8 w-full" placeholder="Subject/Topic" value="">
                                </div>
                            </div>
                            <div class="message-email">
                                <div class=" flex flex-col">
                                    <span class="text-xs uppercase text-left">Message</span>
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Type message..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="send-btns flex flex-row justify-center gap-2">
                            <a href="" class="assumpta-gradient">Send</a>
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
        props: ['modalActiveEmail'],
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