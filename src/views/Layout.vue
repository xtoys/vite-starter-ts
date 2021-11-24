<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
</script>

<template>
  <main>
    <!-- <div class="px-4 py-6 sm:px-0"> -->
    <div ui:p="x-4 y-6 sm:x-0">
      <div class="text-center">
        <SvgIcon name="windicss" class="text-indigo-600 mx-auto h-60 w-auto"></SvgIcon>
        <h2 class="p-6 text-base text-indigo-600 font-semibold tracking-wide uppercase">
          congratulations
        </h2>
        <p
          class="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900"
        >
          You've successfully created a project !
        </p>
      </div>
      <router-view></router-view>
    </div>
  </main>
</template>
