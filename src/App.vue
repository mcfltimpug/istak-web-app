<template>
  <SideBar v-if="$route.meta.requiresAuth"/>
  <div :style="{ 'margin-left': sidebarWidth}">
    <router-view class="" />
  </div>
</template>

<style>

</style>

<script>
// @ is an alias to /src
import SideBar from '@/components/sidebar/SideBar.vue'
import { sidebarWidth } from '@/components/sidebar/state'
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { onMounted, ref } from "vue";

const isLoggedIn = ref();

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
})

export default {
  name: 'HomeView',
  // data: () => {
  //   seen:true
  // },
  components: { SideBar },
  setup() {
    return { sidebarWidth }
  }
}
</script>
