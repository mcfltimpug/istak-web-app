<template>
    <h1>The sidebar is {{ collapsed ? 'closed' : 'open' }}</h1>
    <button @click="toggleSidebar">Toggle Sidebar</button>
  </template>
  
  <script>
  import { collapsed, toggleSidebar } from '@/components/sidebar/state'
  export default {
    setup() {
      return { collapsed, toggleSidebar }
    }
  }
  </script>

  <style>
    body{background-color: rgb(246, 246, 246);}
  </style>