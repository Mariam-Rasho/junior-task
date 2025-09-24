<script setup>
  import { blue, deepPurple, grey } from 'vuetify/util/colors'

  const series = [
    {
      name: 'Sales',
      data: [32, 27, 27, 30, 25, 25],
    },
    {
      name: 'Visits',
      data: [25, 35, 20, 20, 20, 20],
    },
  ]

  const chartOptions = computed(() => {
    const legendColor = grey.darken4
    const borderColor = grey.lighten3
    const labelColor = grey.lighten1

    return {
      chart: {
        type: 'radar',
        toolbar: { show: false },
        dropShadow: {
          enabled: true,
          blur: 1,
          top: 1,
        },
      },
      plotOptions: {
        radar: {
          size: 100,
          polygons: {
            strokeColors: borderColor,
            connectorColors: borderColor,
            fill: {
              colors: ['transparent'],
            },
          },
        },
      },
      stroke: {
        width: 1,
        show: true,
      },
      legend: {
        show: true,
        height: 30,
        fontSize: '13px',
        position: 'bottom',
        offsetY: 4,
        labels: {
          colors: legendColor,
          useSeriesColors: false,
        },
        markers: {
          offsetX: -8,
        },
        itemMargin: { horizontal: 10 },
        onItemHover: { highlightDataSeries: false },
      },
      colors: [deepPurple.accent1, blue.accent1],
      fill: {
        opacity: [0.4, 0.7],
      },
      markers: {
        size: 2,
        hover: {
          size: 6,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: {
          show: true,
          style: {
            colors: Array.from({ length: 6 }).fill(labelColor),
            fontSize: '13px',
            fontFamily: 'Public Sans',
          },
        },
      },
      yaxis: {
        show: false,
        min: 0,
        max: 40,
        tickAmount: 4,
      },
      responsive: [{
        breakpoint: 769,
        options: { chart: { height: 372 } },
      }],
    }
  })
</script>

<template>
  <apexchart
    height="400"
    :options="chartOptions"
    :series="series"
  />
</template>
