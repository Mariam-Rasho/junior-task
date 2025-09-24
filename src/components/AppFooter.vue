<template>
  <v-footer app class="px-0 d-flex d-sm-none d-md-none d-lg-none" height="80">
    <v-card class="d-flex justify-space-around w-100 rounded-t-xl pt-2 bg-deep-purple-lighten-5" elevation="2" flat>
      <router-link
        v-for="item in navItems"
        :key="item.title"
        :class="['nav-item', 'text-decoration-none', { 'active': activeItem === item.title }]"
        :to="item.route"
        @click="setActive(item.title)"
      >
        <div class="icon-container">
          <v-icon :color="activeItem === item.title ? 'white' : 'black'" :icon="item.icon" size="26" />
        </div>
        <span class="text-caption white--text mb-7 title" :class="activeItem === item.title ? 'text-white' : 'text-black'">{{ item.title }}</span>
      </router-link>
    </v-card>
  </v-footer>
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
    activeItem.value = item
  }

  onMounted(() => {
    const path = router.currentRoute.value.path
    if (path === '/report') setActive('Report')
    else setActive('Home')
  })
</script>

<style scoped>
.nav-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
}

.v-icon {
  transition: all 0.3s ease-in-out;
}

.nav-item.active::before {
  content: '';
  position: absolute;
  top: 5px;
  width: 70px;
  height: 65px;
  background: #7C4DFF;
  border-radius: 50% 50% 0 0;
  z-index: -1;
  transition: all 0.3s ease-in-out;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  top: 60px;
  width: 130px;
  height: 100px;
  background: #7C4DFF;
  border-radius: 4px 4px 0 0;
  z-index: -2;
  transition: all 0.3s ease-in-out;
}

.icon-container {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.title {
  transition: all 0.3s ease-in-out;
}

.title::after {
  content: "";
  position: absolute;
  background-color: #EDE7F6;
  width: 69%;
  height: 53%;
  border-radius: 94%;
  bottom: 14px;
  right: -68%;
}

.title::before {
  content: "";
  position: absolute;
  background-color: #EDE7F6;
  width: 69%;
  height: 53%;
  border-radius: 94%;
  bottom: 14px;
  right: 71px;
}
</style>
