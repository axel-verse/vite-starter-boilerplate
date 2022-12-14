<script setup>
import { useHead } from '@vueuse/head'

useHead({
  titleTemplate: (t) => `${t} | Vite Starter Boilerplate`,
})
</script>

<template>
  <router-view></router-view>
</template>
