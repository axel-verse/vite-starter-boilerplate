<script setup>
import Readme from '/README.md'
import { useMeta } from 'vue-meta'

useMeta({
  title: 'Vite + Vue3 + VueX + VueRouter + TailwindCSS + a lot of things',
})
</script>

<template>
  <Readme class="prose mx-auto px-4 md:px-0 py-16" />
</template>
