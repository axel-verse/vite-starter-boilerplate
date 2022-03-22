<script setup>
import { useMeta } from 'vue-meta'

useMeta({
  title: '',
  htmlAttrs: { lang: 'ru' },
})
</script>

<template>
  <metainfo>
    <template #title="{ content }">
      {{
        content ? `${content} | Vue3 Vite Boilerplate` : 'Vue3 Vite Boilerplate'
      }}
    </template>
  </metainfo>
  <router-view></router-view>
</template>
