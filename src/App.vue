<script>
  import ValorantAPI from './components/ValorantAPI.vue'
  import NavigationBar from './components/NavigationBar.vue'

  export default {
    components: {
      ValorantAPI,
      NavigationBar
    }
  }
</script>

<template>
  <NavigationBar />
  <main>
    <ValorantAPI />
    <router-view />
  </main>
</template>
