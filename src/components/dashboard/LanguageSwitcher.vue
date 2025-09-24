<script setup>
  import { useI18n } from 'vue-i18n'

  const { locale } = useI18n()

  const languages = [
    { code: 'en', label: 'US' },
    { code: 'ar', label: 'SY' },
  ]

  function switchLanguage (lang) {
    console.log("lang", lang);

    locale.value = lang
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
  }
</script>

<template>
  <div class="d-flex justify-end ">
    <v-menu>
      <template #activator="{ props }">
        <v-btn variant="tonal" v-bind="props" color="primary" size="small">{{ locale }} </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="item in languages"
          :key="item.code"
          :value="item.label"
        >
          <v-list-item-title @click="switchLanguage(item.code)">{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
