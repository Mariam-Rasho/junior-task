<template>
  <v-app>
    <v-card
      class="px-0 d-none d-sm-flex d-md-flex d-lg-flex align-center px-4 py-2 justify-space-between ma-4 elevation-2"
      height="70"
      rounded="lg"
    >
      <v-card-title class="text-deep-purple-lighten-2 text-h5 font-weight-bold">{{ activeItem }}</v-card-title>
      <div class="d-flex ga-6 pe-5">
        <router-link
          v-for="item in navItems"
          :key="item.title"
          class="d-flex align-center justify-center ga-1"
          :class="['nav-item', 'text-decoration-none', { 'active': activeItem === item.title }]"
          :to="item.route"
          @click="setActive(item.title)"
        >
          <div class="icon-container">
            <v-icon :color="activeItem === item.title ? 'deep-purple-lighten-2' : 'black'" :icon="item.icon" size="26" />
          </div>
          <span class="text-caption white--text title font-weight-bold" :class="activeItem === item.title ? 'text-deep-purple-darken-4' : 'text-black'">{{ item.title }}</span>
        </router-link>
      </div>
    </v-card>

    <router-view />
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import router from '@/router'

  const activeItem = ref('Home')

  const navItems = [
    { title: 'Home', icon: 'mdi-home', route: '/' },
    { title: 'Report', icon: 'mdi-chart-arc', route: '/report' },
  ]

  function setActive (item) {
    console.log('item', item)

    activeItem.value = item
  }

  onMounted(() => {
    activeItem.value = ''

    setTimeout(() => {
      const path = router.currentRoute.value.fullPath

      if (path === '/report') setActive('Report')
      else setActive('Home')
    }, 500)
  })
</script>

<style scoped>
.nav-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
}

.title {
  font-size: 1rem !important;
  line-height: 150%;
}
</style>
