<script setup>
  import bootstrapLogo from '@/assets/images/icons/brands/bootstrap-logo.png'
  import figmaLogo from '@/assets/images/icons/brands/figma-logo.png'
  import laravelLogo from '@/assets/images/icons/brands/laravel-logo.png'
  import reactLogo from '@/assets/images/icons/brands/react-logo.png'
  import sketchLogo from '@/assets/images/icons/brands/sketch-logo.png'
  import vuejsLogo from '@/assets/images/icons/brands/vuejs-logo.png'
  import auFlag from '@/assets/images/icons/countries/au.png'
  import brFlag from '@/assets/images/icons/countries/br.png'
  import cnFlag from '@/assets/images/icons/countries/cn.png'
  import frFlag from '@/assets/images/icons/countries/fr.png'
  import inFlag from '@/assets/images/icons/countries/in.png'
  import usFlag from '@/assets/images/icons/countries/us.png'

  const items = [
    { title: 'View More' },
    { title: 'Delete' },
  ]

  const salesByCountries = [
    {
      avatarImg: usFlag,
      stats: '$8,567k',
      subtitle: 'United states',
      profitLoss: 25.8,
    },
    {
      avatarImg: brFlag,
      stats: '$2,415k',
      subtitle: 'Brazil',
      profitLoss: -6.2,
    },
    {
      avatarImg: inFlag,
      stats: '$865k',
      subtitle: 'India',
      profitLoss: 12.4,
    },
    {
      avatarImg: auFlag,
      stats: '$745k',
      subtitle: 'Australia',
      profitLoss: -11.9,
    },
    {
      avatarImg: frFlag,
      stats: '$45',
      subtitle: 'France',
      profitLoss: 16.2,
    },
    {
      avatarImg: cnFlag,
      stats: '$12k',
      subtitle: 'China',
      profitLoss: 14.8,
    },
  ]

  const activeProjects = [
    {
      avatarImg: laravelLogo,
      title: 'Laravel',
      subtitle: 'Ecommerce',
      stats: '65',
      progressColor: 'error',
    },
    {
      avatarImg: figmaLogo,
      title: 'Figma',
      subtitle: 'App UI Kit',
      stats: '86',
      progressColor: 'primary',
    },
    {
      avatarImg: vuejsLogo,
      title: 'VueJs',
      subtitle: 'Calendar App',
      stats: '90',
      progressColor: 'success',
    },
    {
      avatarImg: reactLogo,
      title: 'React',
      subtitle: 'Dashboard',
      stats: '37',
      progressColor: 'info',
    },
    {
      avatarImg: bootstrapLogo,
      title: 'Bootstrap',
      subtitle: 'Website',
      stats: '22',
      progressColor: 'primary',
    },
    {
      avatarImg: sketchLogo,
      title: 'Sketch',
      subtitle: 'Website Design',
      stats: '29',
      progressColor: 'warning',
    },
  ]

  const projectStatus = [
    {
      title: 'Donates',
      amount: '$756.26',
      lossProfit: -139.34,
    },
    {
      title: 'Podcasts',
      amount: '$2,207.03',
      lossProfit: +576.24,
    },
  ]
</script>

<template>
  <v-container class="pa-4 ma-0" fluid>
    <div class="mx-auto">
      <v-row class="mb-12 ma-0 pa-0" dense>
        <v-col
          class="px-3"
          cols="12"
          lg="2"
          md="4"
          sm="6"
        >
          <v-card
            class="pa-6"
            rounded="lg"
          >
            <v-card-item class="pa-0">
              <v-card-title class="pa-0">
                {{ $t('orders') }}
              </v-card-title>
              <v-card-subtitle class="pa-0">
                {{ $t('last-week') }}
              </v-card-subtitle>
            </v-card-item>

            <v-card-text class="pa-0">
              <div class="chart pt-4">
                <order-chart />
              </div>

              <div class="d-flex align-center justify-space-between pa-0 pt-2">
                <div class="text-h5 mr-2">
                  124k
                </div>
                <div class="d-flex align-center text-success">
                  <span class="text-subtitle-2 font-weight-medium ml-1">
                    +12.6%
                  </span>
                </div>

              </div>
            </v-card-text>

          </v-card>
        </v-col>

        <v-col
          class="px-3"
          cols="12"
          lg="2"
          md="4"
          sm="6"
        >
          <v-card
            class="pa-0"
            rounded="lg"
          >
            <v-card-item class="pa-6 pb-0">
              <v-card-title class="pa-0">
                {{ $t('sales') }}
              </v-card-title>
              <v-card-subtitle class="pa-0">
                {{ $t('last-year') }}
              </v-card-subtitle>
            </v-card-item>

            <v-card-text class="pa-0 pb-2">
              <div class="chart pt-3">
                <sales-year />
              </div>

              <div class="d-flex align-center justify-space-between pt-3 pa-4">
                <div class="text-h5 mr-2">
                  175k
                </div>
                <div class="d-flex align-center text-red">
                  <span class="text-subtitle-2 font-weight-medium ml-1">
                    -16.2%
                  </span>
                </div>

              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col
          class="px-3"
          cols="12"
          lg="2"
          md="4"
          sm="6"
        >
          <v-card
            class="pa-6"
            rounded="lg"
          >
            <v-avatar
              color="red"
              rounded
              size="44"
              variant="tonal"
            >
              <icon
                icon="tabler:credit-card"
                width="28"
              />
            </v-avatar>

            <v-card-title class="pa-0 mt-3 text-h6">
              {{ $t('total-profit') }}
            </v-card-title>
            <v-card-subtitle class="pa-0 my-1" style="font-size: 0.875rem;">
              {{ $t('last-week') }}
            </v-card-subtitle>
            <p class="mb-3 text-high-emphasis" style="font-size: 0.875rem;">
              1.28k
            </p>
            <v-chip
              class="ma-0"
              color="red"
              label
              size="small"
            >-12.2%</v-chip>
          </v-card>
        </v-col>

        <v-col
          class="px-3"
          cols="12"
          lg="2"
          md="4"
          sm="6"
        >
          <v-card
            class="pa-6"
            rounded="lg"
          >
            <v-avatar
              color="success"
              rounded
              size="44"
              variant="tonal"
            >
              <icon
                icon="tabler-currency-dollar"
                width="28"
              />
            </v-avatar>

            <v-card-title class="pa-0 mt-3 text-h6">
              {{ $t('total-sales') }}
            </v-card-title>
            <v-card-subtitle class="pa-0 my-1" style="font-size: 0.875rem;">
              {{ $t('last-week') }}
            </v-card-subtitle>
            <p class="mb-3 text-high-emphasis" style="font-size: 0.875rem;">
              $4.673
            </p>
            <v-chip
              class="ma-0"
              color="success"
              label
              size="small"
            >+25.2%
            </v-chip>
          </v-card>
        </v-col>

        <v-col class="px-3" cols="12" lg="4" md="8">
          <v-card
            class="pa-6 d-flex justify-space-between align-center"
            rounded="lg"
          >
            <v-row>
              <v-col class="d-flex flex-column pe-0" cols="6">
                <div class="mb-auto">
                  <v-card-title class="pa-0" style="font-size: 1.25rem;">{{ $t('revenue-growth') }}</v-card-title>
                  <v-card-subtitle class="text-body-2 pa-0">{{ $t('weekly-report') }}</v-card-subtitle>
                </div>
                <div>
                  <p class="pb-2" style="font-size: 1.75rem;">
                    $4.673
                  </p>
                  <v-chip
                    class="ma-0"
                    color="success"
                    label
                    size="small"
                  >+15.2%
                  </v-chip>
                </div>
              </v-col>
              <v-col class="chart px-0" cols="6">
                <revenue-chart />
              </v-col>
            </v-row>
          </v-card>

        </v-col>

        <v-col class="pa-3" cols="12" md="8">
          <v-card
            class="pa-6"
            rounded="lg"
          >
            <v-card-item class="pa-0 d-flex justify-space-between align-center">
              <div>
                <v-card-title class="pa-0">
                  {{ $t('earning-reports') }}
                </v-card-title>
                <v-card-subtitle class="pa-0">
                  {{ $t('yearly-earnings-overview') }}
                </v-card-subtitle>
              </div>
              <template #append>
                <v-menu>
                  <template #activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props" />
                  </template>

                  <v-list>
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      class="mx-2 px-2"
                      rounded="lg"
                      :value="i"
                    >
                      <v-list-item-title class="pa-0 text-body-3">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-card-item>

            <v-card-text class="pa-0 pt-4 chart">
              <earning-chart />
            </v-card-text>
          </v-card>

        </v-col>

        <v-col class="pa-3" cols="12" md="4">
          <v-card
            class="pa-6"
            rounded="lg"
          >
            <v-card-item class="pa-0 d-flex justify-space-between align-center">
              <div>
                <v-card-title class="pa-0">
                  {{ $t('sales') }}
                </v-card-title>
                <v-card-subtitle class="pa-0">
                  {{ $t('last-months') }}
                </v-card-subtitle>
              </div>
              <template #append>
                <v-menu>
                  <template #activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props" />
                  </template>

                  <v-list>
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      class="mx-2 px-2"
                      rounded="lg"
                      :value="i"
                    >
                      <v-list-item-title class="pa-0 text-body-3">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-card-item>

            <v-card-text class="pa-0 chart">
              <sales-month />
            </v-card-text>
          </v-card>
        </v-col>

        <v-col class="px-3" cols="12" md="4">
          <v-card
            class="pa-6"
            rounded="lg"
          >
            <v-card-item class="pa-0 d-flex justify-space-between align-center">
              <div>
                <v-card-title class="pa-0">
                  Sales by Countries
                </v-card-title>
                <v-card-subtitle class="pa-0">
                  Monthly Sales Overview
                </v-card-subtitle>
              </div>
              <template #append>
                <v-menu>
                  <template #activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props" />
                  </template>

                  <v-list>
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      class="mx-2 px-2"
                      rounded="lg"
                      :value="i"
                    >
                      <v-list-item-title class="pa-0 text-body-3">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-card-item>

            <v-card-text class="pa-0">
              <v-list lines="two">

                <v-list-item
                  v-for="country in salesByCountries"
                  :key="country.stats"
                  class="pa-0"
                  :subtitle="country.subtitle"
                  :title="country.stats"
                >
                  <!-- <template #prepend>
            <VAvatar
              size="34"
              color="secondary"
              variant="tonal"
              class="me-1"
              :image="country.avatarImg"
            />
          </template> -->
                  <template #prepend>
                    <v-avatar
                      class="me-1"
                      color="secondary"
                      size="34"
                      variant="tonal"
                    >
                      <v-img :src="country.avatarImg" />
                    </v-avatar>
                  </template>

                  <template #append>
                    <div :class="`d-flex align-center ${country.profitLoss > 0 ? 'text-success' : 'text-error'}`">
                      <VIcon
                        class="me-1"
                        :icon="country.profitLoss > 0 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                        size="20"
                      />
                      <div class="font-weight-medium">
                        {{ Math.abs(country.profitLoss) }}%
                      </div>
                    </div>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col class="px-3" cols="12" md="4">
          <v-card
            class="pa-6"
            rounded="lg"
          >
            <v-card-item class="pa-0 d-flex justify-space-between align-center">
              <div>
                <v-card-title class="pa-0">
                  Project Status
                </v-card-title>
              </div>
              <template #append>
                <v-menu>
                  <template #activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props" />
                  </template>

                  <v-list>
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      class="mx-2 px-2"
                      rounded="lg"
                      :value="i"
                    >
                      <v-list-item-title class="pa-0 text-body-3">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-card-item>

            <v-card-text class="pa-0 chart">
              <v-list class="pa-0 ma-0">
                <v-list-item
                  class="mx-0 px-0"
                >
                  <v-list-item-title class="pa-0 text-body-3">$4,3742</v-list-item-title>
                  <v-list-item-subtitle class="pa-0 text-body-3">Your Earnings</v-list-item-subtitle>
                  <template #prepend>
                    <v-avatar
                      color="warning"
                      rounded
                      variant="tonal"
                    >
                      <icon
                        icon="tabler-currency-dollar"
                        width="28"
                      />
                    </v-avatar>
                  </template>
                  <template #append>
                    <span class="text-success font-weight-medium">+10.2%</span>
                  </template>
                </v-list-item>
              </v-list>

              <div class="chart pt-4">
                <status-chart />
              </div>

              <v-list class="pt-4">
                <v-list-item
                  v-for="status in projectStatus"
                  :key="status.title"
                  class="px-0"
                >
                  <v-list-item-title class="font-weight-medium">
                    {{ status.title }}
                  </v-list-item-title>
                  <template #append>
                    <span class="me-4 text-medium-emphasis">{{ status.amount }}</span>
                    <span v-if="status.lossProfit > 0" class="text-success"> +</span>
                    <span :class="status.lossProfit > 0 ? 'text-success' : 'text-error'">{{ (status.lossProfit) }}</span>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col class="px-3" cols="12" md="4">
          <v-card
            class="pa-6"
            rounded="lg"
          >
            <v-card-item class="pa-0 d-flex justify-space-between align-center">
              <div>
                <v-card-title class="pa-0">
                  Active Projects
                </v-card-title>
                <v-card-subtitle class="pa-0">
                  Average 72% completed
                </v-card-subtitle>
              </div>
              <template #append>
                <v-menu>
                  <template #activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props" />
                  </template>

                  <v-list>
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      class="mx-2 px-2"
                      rounded="lg"
                      :value="i"
                    >
                      <v-list-item-title class="pa-0 text-body-3">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-card-item>

            <v-card-text class="pa-0 pt-1">
              <v-list lines="two">

                <v-list-item
                  v-for="project in activeProjects"
                  :key="project.stats"
                  class="pa-0"
                  :subtitle="project.subtitle"
                  :title="project.title"
                >
                  <template #prepend>
                    <v-avatar
                      class="me-1"
                      color="secondary"
                      size="34"
                      variant="tonal"
                    >
                      <v-img :src="project.avatarImg" />
                    </v-avatar>
                  </template>

                  <template #append>
                    <div class="d-flex align-center ga-2">
                      <div style="inline-size: 4.875rem;">
                        <v-progress-linear
                          :background-color="'grey lighten-2'"
                          :color="project.progressColor"
                          height="8"
                          :model-value="project.stats"
                          rounded
                          rounded-bar
                        />
                      </div>
                      <span class="text-disabled">{{ project.stats }}%</span>
                    </div>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>

          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
