<script>
    import SidebarLink from './SidebarLink.vue'
    import { collapsed, toggleSidebar, sidebarWidth } from './state'

    export default{
        props: {},
        components: { SidebarLink},
        setup() {
            return { collapsed, toggleSidebar, sidebarWidth }
        }
    }
</script>

<template>
    
    <div class="sidebar"
    :style="{ width: sidebarWidth }">
        <h1>
            <span v-if="collapsed">
                <div>V</div>
                <div>S</div>
            </span>
            <span v-else>Vue Sidebar</span>
        </h1>

        <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <span
        class="collapse-icon"
        :class="{ 'rotate-180' : collapsed }"
        @click="toggleSidebar"><img src="../../assets/gmail_icon.svg" alt=""></span>
       
    </div>
</template>

<style>
    .sidebar{
        color:black;
        background-color: brown;
        float: left;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 0.5em;
        display: flex;
        flex-direction: column;
    }

    .collapse-icon{
        position: absolute;
        bottom: 0;
        padding:0.75em;
        color: white;
        transition: 0.2s linear;
    }

    .rotate-180{
        transform: rotate(180deg);
        transition: 0.2s linear;
    }
</style>