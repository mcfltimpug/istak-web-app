<script>
    import {
        computed
    } from 'vue'
    import {
        useRoute
    } from 'vue-router'
    import {
        collapsed
    } from './state'

    export default {
        props: {
            to: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: true
            }

        },
        setup(props) {
            const route = useRoute()
            const isActive = computed(() => route.path === props.to)
            return {
                isActive,
                collapsed
            }
        }
    }
</script>

<template>
    <router-link :to="to" class="link text-secondary-6 py-5 pl-3 hover:text-brand-6 hover:border-l-4 hover:border-brand-6 active:border-l-4 active:border-brand-6" :class="{ active: isActive }">
        <font-awesome-icon class="icon" :class="icon" />
        <transition name="fade">
            <span v-if="!collapsed">
                <slot />
            </span>
        </transition>
    </router-link>
</template>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.1s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .link {
        display: flex;
        align-items: center;

        cursor: pointer;
        position: relative;
        font-weight: 400;
        user-select: none;

        margin: 0.1em 0;
        padding: 0.4 em;
        height: 1.5em;
        text-decoration: none;
    }



    .link .icon {
        flex-shrink: 0;
        width: 25px;
        margin-right: 10px;
    }
</style>