<script setup>
  import { deepPurple, grey } from 'vuetify/util/colors'

  const currentTab = ref(0)
  const refVueApexChart = ref()

  const chartConfigs = computed(() => {
    const labelPrimaryColor = deepPurple.lighten5
    const legendColor = grey.darken4
    const borderColor = grey.lighten3
    const labelColor = grey.lighten1

    return [
      {
        title: 'Orders',
        icon: 'mdi-light:cart',
        chartOptions: {
          chart: {
            parentHeightOffset: 0,
            type: 'bar',
            toolbar: { show: false },
          },
          plotOptions: {
            bar: {
              columnWidth: '32%',
              borderRadiusApplication: 'end',
              borderRadius: 4,
              distributed: true,
              dataLabels: { position: 'top' },
            },
          },
          grid: {
            show: false,
            padding: {
              top: 0,
              bottom: 0,
              left: -10,
              right: -10,
            },
          },
          colors: [
            labelPrimaryColor,
            labelPrimaryColor,
            deepPurple.accent2,
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
          ],
          dataLabels: {
            enabled: true,
            formatter (val) {
              return `${val}k`
            },
            offsetY: -25,
            style: {
              fontSize: '15px',
              colors: [legendColor],
              fontWeight: '600',
              fontFamily: 'Public Sans',
            },
          },
          legend: { show: false },
          tooltip: { enabled: false },
          xaxis: {
            categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
            ],
            axisBorder: {
              show: true,
              color: borderColor,
            },
            axisTicks: { show: false },
            labels: {
              style: {
                colors: labelColor,
                fontSize: '13px',
                fontFamily: 'Public Sans',
              },
            },
          },
          yaxis: {
            labels: {
              offsetX: -15,
              formatter (val) {
                return `${val / 1}k`
              },
              style: {
                fontSize: '13px',
                colors: labelColor,
                fontFamily: 'Public Sans',
              },
              min: 0,
              max: 60_000,
              tickAmount: 6,
            },
          },
          responsive: [
            {
              breakpoint: 1441,
              options: { plotOptions: { bar: { columnWidth: '41%' } } },
            },
            {
              breakpoint: 590,
              options: {
                plotOptions: { bar: { columnWidth: '61%' } },
                yaxis: { labels: { show: false } },
                grid: {
                  padding: {
                    right: 0,
                    left: -20,
                  },
                },
                dataLabels: {
                  style: {
                    fontSize: '12px',
                    fontWeight: '400',
                  },
                },
              },
            },
          ],
        },
        series: [{
          data: [
            28,
            10,
            45,
            38,
            15,
            30,
            35,
            30,
            8,
          ],
        }],
      },
      {
        title: 'Sales',
        icon: 'tabler-chart-bar',
        chartOptions: {
          chart: {
            parentHeightOffset: 0,
            type: 'bar',
            toolbar: { show: false },
          },
          plotOptions: {
            bar: {
              columnWidth: '32%',
              borderRadiusApplication: 'end',
              borderRadius: 4,
              distributed: true,
              dataLabels: { position: 'top' },
            },
          },
          grid: {
            show: false,
            padding: {
              top: 0,
              bottom: 0,
              left: -10,
              right: -10,
            },
          },
          colors: [
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            deepPurple.accent1,
            labelPrimaryColor,
            labelPrimaryColor,
          ],
          dataLabels: {
            enabled: true,
            formatter (val) {
              return `${val}k`
            },
            offsetY: -25,
            style: {
              fontSize: '15px',
              colors: [legendColor],
              fontWeight: '600',
              fontFamily: 'Public Sans',
            },
          },
          legend: { show: false },
          tooltip: { enabled: false },
          xaxis: {
            categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
            ],
            axisBorder: {
              show: true,
              color: borderColor,
            },
            axisTicks: { show: false },
            labels: {
              style: {
                colors: labelColor,
                fontSize: '13px',
                fontFamily: 'Public Sans',
              },
            },
          },
          yaxis: {
            labels: {
              offsetX: -15,
              formatter (val) {
                return `${val / 1}k`
              },
              style: {
                fontSize: '13px',
                colors: labelColor,
                fontFamily: 'Public Sans',
              },
              min: 0,
              max: 60_000,
              tickAmount: 6,
            },
          },
          responsive: [
            {
              breakpoint: 1441,
              options: { plotOptions: { bar: { columnWidth: '41%' } } },
            },
            {
              breakpoint: 590,
              options: {
                plotOptions: { bar: { columnWidth: '61%' } },
                grid: { padding: { right: 0 } },
                dataLabels: {
                  style: {
                    fontSize: '12px',
                    fontWeight: '400',
                  },
                },
                yaxis: { labels: { show: false } },
              },
            },
          ],
        },
        series: [{
          data: [
            35,
            25,
            15,
            40,
            42,
            25,
            48,
            8,
            30,
          ],
        }],
      },
      {
        title: 'Profit',
        icon: 'tabler-currency-dollar',
        chartOptions: {
          chart: {
            parentHeightOffset: 0,
            type: 'bar',
            toolbar: { show: false },
          },
          plotOptions: {
            bar: {
              columnWidth: '32%',
              borderRadiusApplication: 'end',
              borderRadius: 4,
              distributed: true,
              dataLabels: { position: 'top' },
            },
          },
          grid: {
            show: false,
            padding: {
              top: 0,
              bottom: 0,
              left: -10,
              right: -10,
            },
          },
          colors: [
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            deepPurple.lighten3,
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
          ],
          dataLabels: {
            enabled: true,
            formatter (val) {
              return `${val}k`
            },
            offsetY: -25,
            style: {
              fontSize: '15px',
              colors: [legendColor],
              fontWeight: '600',
              fontFamily: 'Public Sans',
            },
          },
          legend: { show: false },
          tooltip: { enabled: false },
          xaxis: {
            categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
            ],
            axisBorder: {
              show: true,
              color: borderColor,
            },
            axisTicks: { show: false },
            labels: {
              style: {
                colors: labelColor,
                fontSize: '13px',
                fontFamily: 'Public Sans',
              },
            },
          },
          yaxis: {
            labels: {
              offsetX: -15,
              formatter (val) {
                return `${val / 1}k`
              },
              style: {
                fontSize: '13px',
                colors: labelColor,
                fontFamily: 'Public Sans',
              },
              min: 0,
              max: 60_000,
              tickAmount: 6,
            },
          },
          responsive: [
            {
              breakpoint: 1441,
              options: { plotOptions: { bar: { columnWidth: '41%' } } },
            },
            {
              breakpoint: 590,
              options: {
                plotOptions: { bar: { columnWidth: '61%' } },
                grid: { padding: { right: 0 } },
                dataLabels: {
                  style: {
                    fontSize: '12px',
                    fontWeight: '400',
                  },
                },
                yaxis: { labels: { show: false } },
              },
            },
          ],
        },
        series: [{
          data: [
            10,
            22,
            27,
            33,
            42,
            32,
            27,
            22,
            8,
          ],
        }],
      },
      {
        title: 'Income',
        icon: 'tabler-chart-pie-2',
        chartOptions: {
          chart: {
            parentHeightOffset: 0,
            type: 'bar',
            toolbar: { show: false },
          },
          plotOptions: {
            bar: {
              columnWidth: '32%',
              borderRadius: 6,
              distributed: true,
              borderRadiusApplication: 'end',
              dataLabels: { position: 'top' },
            },
          },
          grid: {
            show: false,
            padding: {
              top: 0,
              bottom: 0,
              left: -10,
              right: -10,
            },
          },
          colors: [
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            labelPrimaryColor,
            deepPurple.lighten4,
          ],
          dataLabels: {
            enabled: true,
            formatter (val) {
              return `${val}k`
            },
            offsetY: -25,
            style: {
              fontSize: '15px',
              colors: [legendColor],
              fontWeight: '600',
              fontFamily: 'Public Sans',
            },
          },
          legend: { show: false },
          tooltip: { enabled: false },
          xaxis: {
            categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
            ],
            axisBorder: {
              show: true,
              color: borderColor,
            },
            axisTicks: { show: false },
            labels: {
              style: {
                colors: labelColor,
                fontSize: '13px',
                fontFamily: 'Public Sans',
              },
            },
          },
          yaxis: {
            labels: {
              offsetX: -15,
              formatter (val) {
                return `${val / 1}k`
              },
              style: {
                fontSize: '13px',
                colors: labelColor,
                fontFamily: 'Public Sans',
              },
              min: 0,
              max: 60_000,
              tickAmount: 6,
            },
          },
          responsive: [
            {
              breakpoint: 1441,
              options: { plotOptions: { bar: { columnWidth: '41%' } } },
            },
            {
              breakpoint: 590,
              options: {
                plotOptions: { bar: { columnWidth: '50%' } },
                dataLabels: {
                  style: {
                    fontSize: '12px',
                    fontWeight: '400',
                  },
                },
                grid: { padding: { right: 0 } },
                yaxis: { labels: { show: false } },
              },
            },
          ],
        },
        series: [{
          data: [
            5,
            9,
            12,
            18,
            20,
            25,
            30,
            36,
            48,
          ],
        }],
      },
    ]
  })

</script>

<template>
  <VCardText class="pt-3 pb-4">
    <VSlideGroup
      v-model="currentTab"
      class="mb-10"
      mandatory
      show-arrows
    >
      <VSlideGroupItem
        v-for="(report, index) in chartConfigs"
        :key="report.title"
        v-slot="{ isSelected, toggle }"
        :value="index"
      >
        <div
          class="d-flex flex-column justify-center align-center cursor-pointer rounded py-4 px-5 me-4"
          :class="isSelected ? 'border' : 'border border-dashed'"
          style="block-size: 100px; inline-size: 110px;"
          :style="isSelected ? 'border-color:deep-purple-darken-1 !important' : ''"
          @click="toggle"
        >
          <VAvatar
            class="mb-2"
            :color="isSelected ? 'deep-purple-lighten-1' : 'grey-lighten-1'"
            rounded
            size="38"
            variant="tonal"
          >
            <icon
              :icon="report.icon"
              width="22"
            />
          </VAvatar>
          <p class="text-base font-weight-medium mb-0">
            {{ report.title }}
          </p>
        </div>
      </VSlideGroupItem>

      <!-- 👉 slider more -->
      <VSlideGroupItem>
        <div
          class="d-flex flex-column justify-center align-center rounded border border-dashed py-4 px-5"
          style="block-size: 100px; inline-size: 110px;"
        >
          <VAvatar
            rounded
            size="38"
            variant="tonal"
          >
            <icon
              color="grey"
              icon="tabler-plus"
              width="22"
            />
          </VAvatar>
        </div>
      </VSlideGroupItem>
    </VSlideGroup>

    <apexchart
      :key="currentTab"
      ref="refVueApexChart"
      class="mt-3"
      height="230"
      :options="chartConfigs[Number(currentTab)].chartOptions"
      :series="chartConfigs[Number(currentTab)].series"
    />
  </VCardText>
</template>

<style scoped>
/* Custom hover styles for the chart */
:deep(.apexcharts-bar-area) {
  transition: all 0.3ms ease;
}

:deep(.apexcharts-bar-area:hover) {
  filter: brightness(0.99);
}
</style>
