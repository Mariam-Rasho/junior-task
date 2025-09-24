<template>
  <v-container fluid>
    <v-row
      v-if="loading"
      align-content="center"
      class="px-4 ga-3"
      dense
      justify="space-around"
    >
      <v-col
        v-for="i in 4"
        :key="i"
        cols="12"
        md="4"
        sm="6"
      ><v-skeleton-loader type="card-avatar" />
      </v-col>
    </v-row>
    <div v-if="!success" class="error-message">
      Failed to load health data
    </div>
    <v-row align-content="center" class="ga-3" dense justify="space-around">
      <v-col
        v-for="item in metricsData"
        :key="item.title"
        cols="12"
        md="4"
        sm="6"
      >
        <v-card
          class="pa-6 rounded-lg card-animated"
          :class="`border-${item.color}`"
        >
          <v-row align="center" class="ma-0" justify="space-between">
            <v-chip class="icon-wrapper" :color="item.color">
              <icon :class="['icon', item.icon]" :icon="item.icon" />
            </v-chip>
            <v-chip :color="item.color" label text-color="white">
              {{ item.currentValue }} {{ item.unit }}
            </v-chip>
          </v-row>

          <v-card-title class="text-h6 font-weight-bold ps-0">
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle class="text-caption ps-0">
            Change: <span :class="item.differenceValue >= 0 ? 'text-success' : 'text-error'">
              {{ item.differenceValue }} {{ item.unit }}
            </span>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { onMounted, ref } from 'vue'

  const success = ref(true)
  const metricsData = ref([])
  const loading = ref(true)

  async function fetchHealthData () {
    try {
      loading.value = true

      const response = await fetch('https://api.fitcode.life/api/v1/test/data-1')
      const data = await response.json()

      metricsData.value = data.data
      loading.value = false
      success.value = data.success
    } catch (error) {
      console.error('Error fetching data:', error)
      success.value = false
    }
  }

  onMounted(() => {
    fetchHealthData()
  })
</script>

<style scoped>
.text-success {
  color: #4caf50;
}
.text-error {
  color: #f44336;
}

.icon-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 25%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.icon {
  font-size: 20px;
}

.border-success {
  border-bottom: 2px solid #4caf50;
}
.border-warning {
  border-bottom: 2px solid #ff9800;
}
.border-secondary {
  border-bottom: 4px solid #9e9e9e;
}

.v-card:hover {
  transform: scale(1px);
}

.card-animated {
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.card-animated:hover {
  transform: scale(1);
  box-shadow: 0 8px 20px rgba(137, 137, 137, 0.15);
}

.error-message {
  background-color: #fee;
  color: #c33;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}
</style>
