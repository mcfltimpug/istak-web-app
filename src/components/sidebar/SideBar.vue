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
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    }

};
</script>

<template>
    <div class="sidebar app shadow-lg flex flex-col bg-neutrals-1" id="sidebar" :style="{ width: sidebarWidth }">
        <div class="nav-toggle w-full">
            <span class="collapse-icon cursor-pointer" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
                <font-awesome-icon class="fa-solid fa-angles-left" />
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
                    {{ userDisplayName }}
                </p>

                <!-- <p class="text-xs text-neutrals-2">Cainta</p> -->
            </div>
        </div>
        <div class="nav-links flex flex-col justify-between h-full">
            <div class="nav-top-links">
                <SidebarLink to="/dashboard" icon="fas fa-house-chimney">Dashboard</SidebarLink>
                <SidebarLink to="/" icon="fa-solid fa-warehouse">Inventories</SidebarLink>
                <SidebarLink to="/barcodes" icon="fa-solid fa-barcode">Barcodes</SidebarLink>
                <SidebarLink to="/suppliers" icon="fa-solid fa-truck-field">Suppliers</SidebarLink>
                <SidebarLink to="/" icon="fa-solid fa-users-gear">User Roles</SidebarLink>
            </div>
            <div class="bottom-link">
                <SidebarLink to="/" icon="fa-solid fa-user-gear">Account</SidebarLink>
                <!-- <SidebarLink to="/" icon="fa-solid fa-right-from-bracket">Logout
                </SidebarLink> -->
                <button @click="handleSignOut" v-if="isLoggedIn"
                    class="link text-secondary-6 py-5 my-2 pl-3 hover:text-brand-6 hover:border-l-4 hover:border-brand-6 focus:border-l-4 focus:border-brand-6 focus:text-brand-6"
                    :class="{ active: isActive }">
                    <font-awesome-icon class="fa-solid  fa-right-from-bracket mr-3" />
                    Logout
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from "@/router";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { onMounted, ref } from "vue";

const isLoggedIn = ref(false);
const userDisplayName = ref();

let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            userDisplayName.value = user.displayName;
            isLoggedIn.value = true;

        } else {
            isLoggedIn.value = false;
        }
    });
})

const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push("/")
    });
}

</script>

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
