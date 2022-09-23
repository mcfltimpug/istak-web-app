<template>
  <SideBar v-if="!$route.meta.hideSidebar" />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

<style>

</style>

<script>
// @ is an alias to /src
import SideBar from '@/components/sidebar/SideBar.vue'
import { sidebarWidth } from '@/components/sidebar/state'

export default {
  name: 'HomeView',
  components: { SideBar },
  setup() {
    return { sidebarWidth }
  }
}
</script>
