<script>
import SidebarLink from "./SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";

export default {
    props: {},
    components: {
        SidebarLink,
    },
    setup() {
        return {
            collapsed,
            toggleSidebar,
            sidebarWidth,
        };
    },
};
</script>

<template>
    <div class="sidebar app shadow-lg flex flex-col" :style="{ width: sidebarWidth }">
        <div class="nav-toggle w-full">
            <span class="collapse-icon cursor-pointer" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
                <i class="fa-solid fa-angles-left" />
            </span>
        </div>
        <div class="nav-logo flex justify-center my-5">
            <h1>
                <span v-if="collapsed">
                    <!-- <div>V</div>
                    <div>S</div> -->
                </span>
                <span v-else><img src="../../assets/assumpta-logo.png" alt="" class="w-24" /></span>
            </h1>
        </div>

        <div class="nav-user rounded-r-md assumpta-gradient flex flex-row gap-2 mb-5">
            <div class="user-pic">
                <font-awesome-icon class="fa-solid fa-user" />
            </div>
            <div class="user-info text-left" v-if="!collapsed">
                <p class="text-xs text-neutrals-1">
                    Juan Dela Cruz
                </p>

                <!-- <p class="text-xs text-neutrals-2">Cainta</p> -->
            </div>
        </div>
        <div class="nav-links flex flex-col justify-between h-full">
            <div class="nav-top-links">
                <SidebarLink to="/dashboard" icon="fas fa-house-chimney">Dashboard</SidebarLink>
                <SidebarLink to="/" icon="fa-solid fa-warehouse">Inventories</SidebarLink>
                <SidebarLink to="/" icon="fa-solid fa-barcode">Barcodes</SidebarLink>
                <SidebarLink to="/" icon="fa-solid fa-truck-field">Suppliers</SidebarLink>
                <SidebarLink to="/" icon="fa-solid fa-users-gear">User Roles</SidebarLink>
            </div>
            <div class="bottom-link">
                <SidebarLink to="/" icon="fa-solid fa-user-gear">Account</SidebarLink>
                <SidebarLink to="/" icon="fa-solid fa-right-from-bracket">Logout</SidebarLink>
            </div>
        </div>
    </div>
</template>

<style>
.sidebar {
    color: black;
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

.collapse-icon {
    padding: 0.75em;
    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}

.hide {
    display: hidden;
}
</style>
