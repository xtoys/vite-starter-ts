<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
</script>

<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="flex justify-center space-x-8 items-center">
      <a target="_blank" href="https://v3.vuejs.org/"><SvgIcon name="vue" class="h-10 w-10" /></a>
      <a target="_blank" href="https://vitejs.dev/"><SvgIcon name="vite" class="h-10 w-10" /></a>
      <a target="_blank" href="https://windicss.org/"><SvgIcon name="windicss" class="h-10 w-10" /></a>
    </div>
  </div>
  <router-link to="/about">
    <!-- <p class="text-center pt-5 text-indigo-600 underline"> -->
    <p ui:text="indigo-600 center underline" ui:p="t-5">
      Test Vue Router
    </p>
  </router-link>
</template>
