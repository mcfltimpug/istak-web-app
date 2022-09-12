<template>
  <div class="home flex flex-col justify-center items-center pt-24 pb-16 ">
    <div class="text-white uppercase text-sm font-bold px-4 py-1 rounded-full bg-gradient-to-r from-brand-6 to-secondary-6">(On-going)</div>
    <HelloWorld msg="ISTAK Development"/>
    
  </div>
</template>

<style>
  .home > * {
    z-index: 100;
  }
  .home {
    background-image: url("https://assumptaclinic.com/wp-content/uploads/2022/08/bg_left.png");
    background-repeat: repeat;
    background-attachment: fixed;
    background-position: center;
    z-index: 2;
  }

  .home::after {
    content: '';
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.207);
    z-index: 1;
  }
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
