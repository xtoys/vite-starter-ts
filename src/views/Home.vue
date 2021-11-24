<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
</script>

<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="flex justify-center space-x-8">
      <a target="_blank" href="https://vitejs.dev/"><SvgIcon name="vite" class="h-10 w-10" /></a>
      <a target="_blank" href="https://www.tailwindcss.cn/docs"><SvgIcon name="tailwind" class="h-12 w-12" /></a>
      <a target="_blank" href="https://v3.vuejs.org/"><SvgIcon name="vue" class="h-11 w-11" /></a>
    </div>
  </div>
  <router-link to="/about">
    <p class="text-center pt-5 text-indigo-600 underline">
      Switch to About
    </p>
  </router-link>
</template>
